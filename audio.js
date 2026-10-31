// audio.js - Advanced Multi-Track Procedural Sound Engine for Destiny of Hearts
// Features 6 unique, scene-adaptive orchestral/synth themes via Web Audio API.

class AudioManager {
  constructor() {
    this.ctx = null;
    this.bgmEnabled = false;
    this.sfxEnabled = true;
    this.currentTheme = 'title';
    this.bgmInterval = null;
    this.stepIndex = 0;
    this.barIndex = 0;
    this.masterBgmGain = null;
    this.isCrossfading = false;
    this.onThemeChange = null;

    // Theme metadata & definitions
    this.themes = {
      title: {
        id: 'title',
        nameTh: 'โชคชะตาแห่งแสงดาว (Title / Lobby)',
        nameEn: 'Starlight Destiny',
        tempo: 680,
        bars: [
          // Dmaj7
          { bass: 146.83, chord: [293.66, 369.99, 440.00, 554.37], melody: [554.37, 739.99, 880.00, 1108.73] },
          // Bm7
          { bass: 123.47, chord: [246.94, 293.66, 369.99, 440.00], melody: [440.00, 587.33, 739.99, 880.00] },
          // Gmaj7
          { bass: 98.00,  chord: [196.00, 246.94, 293.66, 369.99], melody: [369.99, 493.88, 587.33, 739.99] },
          // Asus4 -> A
          { bass: 110.00, chord: [220.00, 293.66, 329.63, 440.00], melody: [440.00, 554.37, 659.25, 880.00] }
        ]
      },
      daily: {
        id: 'daily',
        nameTh: 'แสงอรุณแห่งราชวิทยาลัย (Academy Life)',
        nameEn: 'Academy Sunlight',
        tempo: 420,
        bars: [
          // Cmaj7
          { bass: 130.81, chord: [261.63, 329.63, 392.00, 493.88], melody: [523.25, 659.25, 783.99, 659.25] },
          // G/B
          { bass: 123.47, chord: [246.94, 293.66, 392.00, 587.33], melody: [587.33, 493.88, 392.00, 493.88] },
          // Am7
          { bass: 110.00, chord: [220.00, 261.63, 329.63, 392.00], melody: [440.00, 523.25, 659.25, 523.25] },
          // Fmaj7
          { bass: 87.31,  chord: [174.61, 261.63, 329.63, 440.00], melody: [349.23, 440.00, 523.25, 659.25] }
        ]
      },
      teatime: {
        id: 'teatime',
        nameTh: 'น้ำชายามบ่ายอันแสนหวาน (Tea Time Salon)',
        nameEn: 'Royal Tea Salon',
        tempo: 360,
        bars: [
          // Fmaj7 (playful swing)
          { bass: 174.61, chord: [261.63, 329.63, 440.00], melody: [698.46, 880.00, 698.46, 523.25] },
          // G7
          { bass: 196.00, chord: [246.94, 293.66, 392.00], melody: [783.99, 987.77, 783.99, 587.33] },
          // Em7
          { bass: 164.81, chord: [246.94, 329.63, 392.00], melody: [659.25, 783.99, 659.25, 493.88] },
          // Am7
          { bass: 220.00, chord: [261.63, 329.63, 440.00], melody: [880.00, 1046.50, 880.00, 659.25] }
        ]
      },
      romance: {
        id: 'romance',
        nameTh: 'จันทราคู่ระบำ (Twin Moons Romantic Waltz)',
        nameEn: 'Twin Moons Waltz',
        tempo: 520, // 3/4 waltz feel
        bars: [
          // Am9
          { bass: 110.00, chord: [261.63, 329.63, 493.88], melody: [523.25, 659.25, 493.88] },
          // Fmaj7
          { bass: 87.31,  chord: [261.63, 329.63, 440.00], melody: [440.00, 523.25, 659.25] },
          // Dm7
          { bass: 146.83, chord: [293.66, 349.23, 440.00], melody: [587.33, 698.46, 587.33] },
          // E7
          { bass: 82.41,  chord: [246.94, 329.63, 415.30], melody: [415.30, 493.88, 659.25] }
        ]
      },
      battle: {
        id: 'battle',
        nameTh: 'จันทราสีเลือด (Blood Moon Battle & Crisis)',
        nameEn: 'Blood Moon Requiem',
        tempo: 260, // fast dramatic 16th feel
        bars: [
          // Dm
          { bass: 73.42, chord: [146.83, 220.00, 293.66], melody: [587.33, 698.46, 880.00, 1174.66] },
          // Bb
          { bass: 58.27, chord: [116.54, 174.61, 233.08], melody: [466.16, 587.33, 698.46, 932.33] },
          // Gm
          { bass: 49.00, chord: [98.00, 146.83, 196.00],  melody: [392.00, 466.16, 587.33, 783.99] },
          // A7
          { bass: 55.00, chord: [110.00, 138.59, 220.00], melody: [440.00, 554.37, 659.25, 880.00] }
        ]
      },
      sad: {
        id: 'sad',
        nameTh: 'หยาดน้ำตากับความทรงจำ (Melancholy & Tears)',
        nameEn: 'Tears in the Rain',
        tempo: 860, // slow contemplative
        bars: [
          // Em
          { bass: 82.41, chord: [164.81, 196.00, 246.94], melody: [659.25, 587.33, 493.88, 392.00] },
          // Cmaj7
          { bass: 65.41, chord: [130.81, 196.00, 246.94], melody: [523.25, 493.88, 392.00, 329.63] },
          // G
          { bass: 98.00, chord: [196.00, 246.94, 293.66], melody: [392.00, 493.88, 587.33, 493.88] },
          // Bm7
          { bass: 61.74, chord: [123.47, 185.00, 220.00], melody: [493.88, 440.00, 369.99, 293.66] }
        ]
      }
    };
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master BGM Gain node with filter for warm, elegant acoustic sound
      this.masterBgmGain = this.ctx.createGain();
      this.masterBgmGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterBgmGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleBgm() {
    this.init();
    this.bgmEnabled = !this.bgmEnabled;
    const btn = document.getElementById('bgm-toggle-btn');
    if (this.bgmEnabled) {
      if (btn) btn.classList.remove('off');
      this.startBgm();
    } else {
      if (btn) btn.classList.add('off');
      this.stopBgm();
    }
    return this.bgmEnabled;
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    const btn = document.getElementById('sfx-toggle-btn');
    if (btn) {
      btn.textContent = this.sfxEnabled ? '🔊' : '🔇';
    }
    return this.sfxEnabled;
  }

  // Set active BGM theme with smooth cross-fade
  setTheme(themeName) {
    if (!this.themes[themeName]) themeName = 'title';
    if (this.currentTheme === themeName && this.bgmInterval) return;

    this.currentTheme = themeName;
    const info = this.themes[themeName];

    if (this.onThemeChange && typeof this.onThemeChange === 'function') {
      this.onThemeChange(info);
    }

    if (this.bgmEnabled && this.ctx) {
      this.crossfadeToTheme(themeName);
    }
  }

  crossfadeToTheme(themeName) {
    if (!this.ctx || !this.masterBgmGain) return;
    const now = this.ctx.currentTime;
    
    // Smooth fade out
    this.masterBgmGain.gain.setValueAtTime(this.masterBgmGain.gain.value, now);
    this.masterBgmGain.gain.linearRampToValueAtTime(0.01, now + 0.35);

    setTimeout(() => {
      this.stopBgm();
      this.startBgm();
      if (this.ctx && this.masterBgmGain) {
        const after = this.ctx.currentTime;
        this.masterBgmGain.gain.setValueAtTime(0.01, after);
        this.masterBgmGain.gain.linearRampToValueAtTime(0.35, after + 0.4);
      }
    }, 360);
  }

  // Synthesize musical tone with ADSR envelope and optional low-pass warmth
  playTone(freq, duration = 1.0, type = 'sine', volume = 0.08, attack = 0.04, filterFreq = 0) {
    if (!this.ctx || !this.masterBgmGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(volume, now + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      if (filterFreq > 0) {
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(filterFreq, now);
        osc.connect(filter);
        filter.connect(gain);
      } else {
        osc.connect(gain);
      }

      gain.connect(this.masterBgmGain);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn("playTone error:", e);
    }
  }

  // Play romantic ambient chime note (backward compatible)
  playChime(freq, duration = 2.0, volume = 0.08) {
    this.playTone(freq, duration, 'sine', volume, 0.06);
  }

  startBgm() {
    this.init();
    if (this.bgmInterval) clearInterval(this.bgmInterval);

    const theme = this.themes[this.currentTheme] || this.themes.title;
    this.stepIndex = 0;
    this.barIndex = 0;

    this.bgmInterval = setInterval(() => {
      if (!this.bgmEnabled || !this.ctx) return;
      this.tickTheme(theme);
    }, theme.tempo);
  }

  stopBgm() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }

  // Theme Step Sequencer
  tickTheme(theme) {
    const bars = theme.bars;
    const currentBar = bars[this.barIndex % bars.length];

    if (theme.id === 'romance') {
      // 3/4 Waltz Arrangement
      // Step 0: Warm Bass + Singing Lead
      if (this.stepIndex === 0) {
        this.playTone(currentBar.bass, 1.8, 'triangle', 0.14, 0.08, 600);
        const melodyNote = currentBar.melody[this.barIndex % currentBar.melody.length];
        this.playTone(melodyNote, 2.0, 'sine', 0.12, 0.12);
      } else {
        // Steps 1 & 2: Gentle piano accompaniment chords (waltz "oom-pah-pah")
        const chordNote1 = currentBar.chord[0];
        const chordNote2 = currentBar.chord[1];
        this.playTone(chordNote1, 0.9, 'triangle', 0.07, 0.05, 900);
        this.playTone(chordNote2, 0.9, 'sine', 0.06, 0.05);
      }

      this.stepIndex = (this.stepIndex + 1) % 3;
      if (this.stepIndex === 0) {
        this.barIndex = (this.barIndex + 1) % bars.length;
      }
      return;
    }

    if (theme.id === 'battle') {
      // 16th-note feel driving crisis battle
      // Step 0: Powerful low saw bass + dramatic chord hit
      if (this.stepIndex === 0) {
        this.playTone(currentBar.bass, 0.6, 'sawtooth', 0.18, 0.03, 400);
        currentBar.chord.forEach((freq, idx) => {
          this.playTone(freq, 0.5, 'triangle', 0.08, 0.02, 1200);
        });
      } else {
        // Steps 1, 2, 3: Galloping bass pulse
        this.playTone(currentBar.bass * 2, 0.22, 'sawtooth', 0.10, 0.02, 500);
      }

      // Melody arpeggio run
      const mel = currentBar.melody[this.stepIndex % currentBar.melody.length];
      this.playTone(mel, 0.35, 'sawtooth', 0.07, 0.03, 1600);

      this.stepIndex = (this.stepIndex + 1) % 4;
      if (this.stepIndex === 0) {
        this.barIndex = (this.barIndex + 1) % bars.length;
      }
      return;
    }

    if (theme.id === 'teatime') {
      // Playful swing salon
      // Step 0 & 2: Bass note
      if (this.stepIndex === 0 || this.stepIndex === 2) {
        this.playTone(currentBar.bass, 0.45, 'triangle', 0.13, 0.03, 800);
      }
      // Sweet high-register staccato music box plucks
      const plk = currentBar.melody[this.stepIndex % currentBar.melody.length];
      this.playTone(plk, 0.28, 'sine', 0.09, 0.02);

      // Light harmonic support on step 1 & 3
      if (this.stepIndex === 1 || this.stepIndex === 3) {
        const ch = currentBar.chord[this.stepIndex % currentBar.chord.length];
        this.playTone(ch, 0.32, 'triangle', 0.06, 0.04, 1000);
      }

      this.stepIndex = (this.stepIndex + 1) % 4;
      if (this.stepIndex === 0) {
        this.barIndex = (this.barIndex + 1) % bars.length;
      }
      return;
    }

    if (theme.id === 'sad') {
      // Melancholic slow raindrops
      if (this.stepIndex === 0) {
        // Sustained low drone pad
        this.playTone(currentBar.bass, 3.6, 'sine', 0.16, 0.3, 350);
      }
      // Falling teardrop crystal chime
      const note = currentBar.melody[this.stepIndex % currentBar.melody.length];
      this.playTone(note, 3.2, 'sine', 0.09, 0.08);

      // Distant gentle chord harmony
      if (this.stepIndex === 2) {
        const ch = currentBar.chord[1];
        this.playTone(ch, 2.5, 'triangle', 0.05, 0.15, 600);
      }

      this.stepIndex = (this.stepIndex + 1) % 4;
      if (this.stepIndex === 0) {
        this.barIndex = (this.barIndex + 1) % bars.length;
      }
      return;
    }

    // Default: 'title' and 'daily'
    // Step 0: Sustained Bass note
    if (this.stepIndex === 0) {
      const bassWave = (theme.id === 'title') ? 'sine' : 'triangle';
      this.playTone(currentBar.bass, 2.4, bassWave, 0.14, 0.08, 600);
    }

    // Arpeggiated chord tones + expressive melody note
    const chNote = currentBar.chord[this.stepIndex % currentBar.chord.length];
    this.playTone(chNote, 1.8, 'sine', 0.06, 0.05);

    if (this.stepIndex === 1 || this.stepIndex === 3) {
      const melNote = currentBar.melody[this.stepIndex % currentBar.melody.length];
      this.playTone(melNote, 2.0, (theme.id === 'title' ? 'sine' : 'triangle'), 0.09, 0.06);
    }

    this.stepIndex = (this.stepIndex + 1) % 4;
    if (this.stepIndex === 0) {
      this.barIndex = (this.barIndex + 1) % bars.length;
    }
  }

  // SFX: Dialogue next text beep
  playClick() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // SFX: Heart / Affection Up
  playHeartUp() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.35); // C6

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.5);
    } catch (e) {}
  }

  // SFX: Heartbreak / Affection Down (Wrong Choice)
  playHeartDown() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(392.00, now); // G4
      osc.frequency.exponentialRampToValueAtTime(311.13, now + 0.15); // Eb4
      osc.frequency.exponentialRampToValueAtTime(233.08, now + 0.35); // Bb3

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.09, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.45);
    } catch (e) {}
  }

  // SFX: Dramatic Thunder for Battle & Blood Moon
  playThunder() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.6);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.7);
    } catch (e) {}
  }

  // SFX: Magical Spell Cast
  playMagicCast() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      [880, 1108.73, 1318.51, 1760].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.08, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.4);
      });
    } catch (e) {}
  }

  // SFX: Choice Select
  playChoice() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.15);
    } catch (e) {}
  }
}

window.audioManager = new AudioManager();

// Unlock Web Audio API on first touch/click for iPadOS / iOS Safari
['touchstart', 'touchend', 'click'].forEach(evt => {
  window.addEventListener(evt, () => {
    if (window.audioManager) {
      window.audioManager.init();
    }
  }, { once: true, passive: true });
});

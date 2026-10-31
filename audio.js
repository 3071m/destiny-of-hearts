// audio.js - Web Audio API procedural sound engine for Otome Game
class AudioManager {
  constructor() {
    this.ctx = null;
    this.bgmEnabled = false;
    this.sfxEnabled = true;
    this.bgmInterval = null;
    this.currentScale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C major pentatonic
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
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

  // Play romantic ambient chime note
  playChime(freq, duration = 2.0, volume = 0.08) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(volume, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn(e);
    }
  }

  startBgm() {
    if (this.bgmInterval) clearInterval(this.bgmInterval);
    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C
      [220.00, 261.63, 329.63, 440.00], // Am
      [174.61, 220.00, 261.63, 349.23], // F
      [196.00, 246.94, 293.66, 392.00]  // G
    ];
    let chordIdx = 0;
    let step = 0;

    this.bgmInterval = setInterval(() => {
      if (!this.bgmEnabled || !this.ctx) return;
      const currentChord = chords[chordIdx];
      const note = currentChord[step % currentChord.length];

      this.playChime(note, 2.5, 0.05);

      step++;
      if (step >= 4) {
        step = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }
    }, 750);
  }

  stopBgm() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
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

  // SFX: Choice Select
  
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
    } catch(e) {}
  }

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
    } catch(e) {}
  }

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

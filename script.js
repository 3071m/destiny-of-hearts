// script.js - Core Otome Game Engine with Full Lobby & Narrative Hub

class OtomeGame {
  constructor() {
    this.currentSceneId = "prologue_modern_1";
    this.currentRoute = null;
    this.affection = {
      cedric: 0,
      lucian: 0,
      leon: 0,
      kael: 0
    };
    this.historyLog = [];
    this.unlockedEndings = JSON.parse(localStorage.getItem('otome_endings') || '[]');
    this.unlockedChapters = JSON.parse(localStorage.getItem('otome_unlocked_chapters') || '["prologue"]');
    
    this.isTyping = false;
    this.typewriterTimeout = null;
    this.currentFullText = "";
    this.autoPlay = false;
    this.autoTimeout = null;
    this.winningRoute = null;
    this.playerName = localStorage.getItem("otome_player_name") || "เรเนีย";
    this.isSkipping = false;
    this.skipInterval = null;

    // Secret letters data
    this.letters = {
      cedric: {
        title: "จดหมายจาก ดยุกเซดริก",
        content: "ถึงเธอ...\n\nคืนนี้อากาศหนาว อย่าลืมห่มผ้าคลุมที่ฉันเตรียมไว้ให้ล่ะ ไม่ต้องไปกังวลเรื่องคนในวังให้ปวดหัวหรอกนะ ตราบใดที่ฉันยังอยู่ตรงนี้ ไม่มีใครกล้าทำอะไรเธอแน่นอน พักผ่อนเยอะๆ นะ\n\n— เซดริก"
      },
      lucian: {
        title: "จดหมายจาก ลูเชียน",
        content: "ถึงคนเก่งของผม...\n\nคืนนี้บนหอดูดาวบรรยากาศดีมากเลยครับ มองดาวทีไรก็คิดถึงแต่รอยยิ้มของคุณทุกที ว่างเมื่อไหร่แวะมาดื่มชาร้อนๆ ที่ผมชงไว้ให้บนหอคอยด้วยกันนะครับ\n\n— ลูเชียน"
      },
      leon: {
        title: "จดหมายจาก อัศวินลีออน",
        content: "ถึงคนสำคัญของผม...\n\nวันนี้ผมไปซ้อมดาบมา แต่ในหัวเอาแต่คิดถึงเรื่องของคุณตลอดเลยครับ! ดอกกุหลาบในสวนหลังวังบานสวยมากเลย ถ้าคุณอยากออกไปเดินเล่นเมื่อไหร่ เรียกผมได้ตลอดเวลาเลยนะครับ!\n\n— ลีออน"
      },
      kael: {
        title: "โน้ตลับจาก เคล",
        content: "ไง ยัยตัวแสบ...\n\nเมื่อคืนแอบปีนไปดูบนหลังคา เห็นไฟห้องเธอยังเปิดอยู่เลย นอนดึกเหมือนกันนี่นา ถ้าวันไหนเบื่อพวกคนเจ้าระเบียบในวัง ส่งซิกมาบอกฉันได้เลย เดี๋ยวพาหนีเที่ยวเอง!\n\n— เคล"
      }
    };

    // Character profiles data
    this.profiles = [
      {
        id: "cedric",
        name: "เซดริก ฟอน ราเวนครอสต์",
        title: "ดยุกแห่งแดนเหนือ • มาดนิ่งแต่คลั่งรัก",
        img: "assets/char_cedric.png",
        age: "26 ปี",
        height: "188 ซม.",
        birthday: "31 ตุลาคม",
        likes: "ชาเอิร์ลเกรย์, กุหลาบดำ, ความเงียบสงบ",
        hates: "คนโกหก, งานเลี้ยงวุ่นวาย",
        quote: "ถ้าเธอก้าวเข้ามาหาฉันแล้ว... ฉันไม่ปล่อยให้เธอหนีไปไหนอีกแน่"
      },
      {
        id: "lucian",
        name: "ลูเชียน เอล โซลาเรีย",
        title: "มหาปุโรหิตแห่งวิหารดวงดาว • อบอุ่นแฝงความขี้หวง",
        img: "assets/char_lucian.png",
        age: "24 ปี",
        height: "185 ซม.",
        birthday: "21 มีนาคม",
        likes: "ดูดาว, ชาน้ำผึ้งดอกไม้, อ่านหนังสือ",
        hates: "ความเหงา, คนที่มาวุ่นวายกับคุณ",
        quote: "คุณคือคำอธิษฐานเดียวที่ผมเฝ้ารอมาตลอดชีวิตเลยครับ"
      },
      {
        id: "leon",
        name: "ลีออน โกลเดนฮาร์ท",
        title: "หัวหน้าอัศวินองครักษ์ • ซื่อสัตย์และขี้เขิน",
        img: "assets/char_leon.png",
        age: "23 ปี",
        height: "187 ซม.",
        birthday: "7 กรกฎาคม",
        likes: "ซ้อมดาบ, ปลูกกุหลาบ, ขนมอบใหม่",
        hates: "คนผิดคำพูด, การเห็นคุณเป็นอันตราย",
        quote: "ไม่ว่าจะเกิดอะไรขึ้น ผมจะปกป้องรอยยิ้มของคุณด้วยชีวิตครับ!"
      },
      {
        id: "kael",
        name: "เคล 'ไนท์แฟงก์'",
        title: "จอมโจรเงาต้องคำสาป • แบดบอยปากไม่ตรงกับใจ",
        img: "assets/char_kael.png",
        age: "22 ปี",
        height: "184 ซม.",
        birthday: "13 พฤศจิกายน",
        likes: "ทาร์ตเบอร์รี่, เดินเล่นบนดาดฟ้าตอนกลางคืน, อิสรภาพ",
        hates: "กฎระเบียบจุกจิก, คนที่รังแกคุณ",
        quote: "อย่ามามองฉันด้วยสายตาแบบนั้นสิยัยตัวแสบ... เดี๋ยวก็ขโมยตัวหนีซะหรอก!"
      }
    ];

    this.initElements();
    this.bindEvents();
    this.initStageFitting();
    this.initParticles();
    this.renderProfiles();
    this.renderLetter("cedric");
    this.updateGalleryUI();
    this.updateChapterTreeUI();
  }

  initElements() {
    this.screens = {
      title: document.getElementById('screen-title'),
      lobby: document.getElementById('screen-lobby'),
      storyTree: document.getElementById('screen-story-tree'),
      game: document.getElementById('screen-game'),
      gallery: document.getElementById('screen-gallery'),
      ending: document.getElementById('screen-ending')
    };

    // Game HUD
    this.speakerEl = document.getElementById('dialogue-speaker');
    this.textEl = document.getElementById('dialogue-text');
    this.nextIndicatorEl = document.getElementById('dialogue-next-indicator');
    this.choiceContainerEl = document.getElementById('choice-container');
    this.dialogueBoxEl = document.querySelector('.dialogue-box');
    
    this.charStageEl = document.getElementById('character-stage');
    this.charSpriteEl = document.getElementById('active-char-sprite');
    this.charSpriteImg = document.getElementById('char-sprite-img');
    this.secondCharSpriteEl = document.getElementById('second-char-sprite');
    this.secondCharSpriteImg = document.getElementById('second-char-sprite-img');
    this.chapterBadgeEl = document.getElementById('scene-chapter-badge');
    
    this.affBarFillEl = document.getElementById('aff-bar-fill');
    this.affPercentEl = document.getElementById('aff-percent');
    this.bgContainerEl = document.getElementById('bg-container');
    
    // Modals
    this.modalLog = document.getElementById('modal-log');
    this.modalMenu = document.getElementById('modal-menu');
    this.modalLetters = document.getElementById('modal-letters');
    this.modalProfiles = document.getElementById('modal-profiles');
    this.modalRouteEval = document.getElementById('modal-route-eval');
    this.logListEl = document.getElementById('log-list');
    this.toastEl = document.getElementById('toast-notify');

    // Lobby Elements
    this.lobbyPrinceImg = document.getElementById('lobby-featured-img');
    this.lobbyPrinceQuote = document.getElementById('lobby-prince-quote');
  }

  initStageFitting() {
    const refit = () => requestAnimationFrame(() => this.fitStage());
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(refit);
      const container = document.querySelector('.dialogue-container');
      const hud = document.querySelector('.game-hud');
      if (container) ro.observe(container);
      if (hud) ro.observe(hud);
    }
    window.addEventListener('resize', refit);
    window.addEventListener('orientationchange', () => setTimeout(refit, 300));
  }

  bindEvents() {
    // Audio toggles
    document.getElementById('bgm-toggle-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const enabled = window.audioManager.toggleBgm();
      if (enabled && window.audioManager.themes) {
        const theme = window.audioManager.themes[window.audioManager.currentTheme];
        this.showToast(`🎵 กำลังเล่น: ${theme?.nameTh || 'ดนตรีบรรเลง'}`);
      }
    });
    document.getElementById('sfx-toggle-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      window.audioManager.toggleSfx();
    });

        // Direct Visual Novel Title Menu Actions
    const btnNewGame = document.getElementById('btn-title-newgame');
    if (btnNewGame) {
      btnNewGame.addEventListener('click', () => {
        window.audioManager.init();
        window.audioManager.playChoice();
        this.startStory("prologue_modern_1");
      });
    }

    const btnContinue = document.getElementById('btn-title-continue');
    if (btnContinue) {
      btnContinue.addEventListener('click', () => {
        window.audioManager.init();
        window.audioManager.playChoice();
        const loaded = this.loadAutoSave() || this.loadProgress();
        if (!loaded) {
          this.showToast("ยังไม่มีข้อมูลบันทึก เริ่มเรื่องราวใหม่กันเลย!", false);
          this.startStory("prologue_modern_1");
        }
      });
    }

    const btnSelectRoute = document.getElementById('btn-title-select-route');
    if (btnSelectRoute) {
      btnSelectRoute.addEventListener('click', () => {
        window.audioManager.playChoice();
        const modal = document.getElementById('modal-route-picker');
        if (modal) modal.classList.add('active');
      });
    }

    const btnTitleLobby = document.getElementById('btn-title-lobby');
    if (btnTitleLobby) {
      btnTitleLobby.addEventListener('click', () => {
        window.audioManager.playChoice();
        this.switchScreen('lobby');
      });
    }

    const btnTitleGallery = document.getElementById('btn-title-gallery');
    if (btnTitleGallery) {
      btnTitleGallery.addEventListener('click', () => {
        window.audioManager.playChoice();
        this.updateGalleryUI();
        this.switchScreen('gallery');
      });
    }

    // Direct Route Selector Modal Actions
    document.querySelectorAll('.btn-pick-route').forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playHeartUp();
        const route = btn.dataset.route;
        document.getElementById('modal-route-picker')?.classList.remove('active');
        this.startDirectRoute(route);
      });
    });

    const btnPickPrologue = document.getElementById('btn-pick-prologue');
    if (btnPickPrologue) {
      btnPickPrologue.addEventListener('click', () => {
        window.audioManager.playChoice();
        document.getElementById('modal-route-picker')?.classList.remove('active');
        this.startStory("prologue_modern_1");
      });
    }

    // Route Evaluation interactive choices
    document.querySelectorAll('.btn-eval-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playHeartUp();
        const chosenRoute = btn.dataset.route;
        document.getElementById('modal-route-eval')?.classList.remove('active');
        this.currentRoute = chosenRoute;
        this.unlockChapter(chosenRoute);
        this.renderScene(`${chosenRoute}_branch_start`);
      });
    });

    const btnEvalIndependent = document.getElementById('btn-eval-independent');
    if (btnEvalIndependent) {
      btnEvalIndependent.addEventListener('click', () => {
        window.audioManager.playChoice();
        document.getElementById('modal-route-eval')?.classList.remove('active');
        this.renderScene("common_independent_ending");
      });
    }

    // Ending Screen actions
    const btnEndingOther = document.getElementById('btn-ending-other-route');
    if (btnEndingOther) {
      btnEndingOther.addEventListener('click', () => {
        window.audioManager.playChoice();
        document.getElementById('modal-route-picker')?.classList.add('active');
      });
    }

    const btnEndingGallery = document.getElementById('btn-ending-gallery');
    if (btnEndingGallery) {
      btnEndingGallery.addEventListener('click', () => {
        window.audioManager.playChoice();
        this.updateGalleryUI();
        this.switchScreen('gallery');
      });
    }

    const btnEndingTitle = document.getElementById('btn-ending-lobby');
    if (btnEndingTitle) {
      btnEndingTitle.addEventListener('click', () => {
        window.audioManager.playChoice();
        this.updateContinueButtonUI();
        this.switchScreen('title');
      });
    }

    // Lobby Prince Switcher
    document.querySelectorAll('.prince-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        window.audioManager.playClick();
        document.querySelectorAll('.prince-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const princeKey = tab.dataset.prince;
        this.updateLobbyPrince(princeKey);
      });
    });

    // Lobby Hub Navigation Cards
    document.getElementById('btn-hub-story').addEventListener('click', () => {
      window.audioManager.playChoice();
      this.switchScreen('storyTree');
    });

    document.getElementById('btn-hub-letters').addEventListener('click', () => {
      window.audioManager.playChoice();
      this.modalLetters.classList.add('active');
    });

    document.getElementById('btn-hub-profiles').addEventListener('click', () => {
      window.audioManager.playChoice();
      this.modalProfiles.classList.add('active');
    });

    document.getElementById('btn-hub-gallery').addEventListener('click', () => {
      window.audioManager.playChoice();
      this.updateGalleryUI();
      this.switchScreen('gallery');
    });

    const btnHubLoad = document.getElementById('btn-hub-load');
    if (btnHubLoad) {
      btnHubLoad.addEventListener('click', () => {
        window.audioManager.playChoice();
        this.modalMenu.classList.add('active');
      });
    }

    document.getElementById('btn-lobby-to-title').addEventListener('click', () => {
      window.audioManager.playClick();
      this.switchScreen('title');
    });

    // Chapter Timeline Play Buttons
    document.querySelectorAll('.btn-play-chapter').forEach(btn => {
      btn.addEventListener('click', () => {
        const chapKey = btn.dataset.chapter;
        if (chapKey && chapKey !== 'prologue' && !this.unlockedChapters.includes(chapKey)) {
          window.audioManager.playHeartDown();
          this.showToast("🔒 ต้องเล่นเนื้อเรื่องบทก่อนหน้าให้ผ่านเสียก่อน!", true);
          return;
        }
        const startId = btn.dataset.start;
        window.audioManager.init();
        window.audioManager.playChoice();
        this.startStory(startId);
      });
    });

    const resetChapBtn = document.getElementById('btn-reset-chapters');
    if (resetChapBtn) {
      resetChapBtn.addEventListener('click', () => {
        window.audioManager.playClick();
        this.unlockedChapters = ["prologue"];
        localStorage.setItem('otome_unlocked_chapters', JSON.stringify(this.unlockedChapters));
        this.affection = { cedric: 0, lucian: 0, leon: 0, kael: 0 };
        this.updateChapterTreeUI();
        this.showToast("🔄 รีเซ็ตความคืบหน้ากลับสู่บทนำเรียบร้อยแล้ว!");
      });
    }

    // Letters Tabs
    document.querySelectorAll('.letter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        window.audioManager.playClick();
        document.querySelectorAll('.letter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const charKey = tab.dataset.char;
        this.renderLetter(charKey);
      });
    });

    // Back buttons
    document.querySelectorAll('.btn-back').forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        const target = btn.dataset.target.replace('screen-', '');
        this.switchScreen(target);
      });
    });

    // Dialogue box click to advance
    this.dialogueBoxEl.addEventListener('click', () => {
      this.handleDialogueClick();
    });

    // Eye button to hide / show dialogue box
    const eyeBtn = document.getElementById('btn-hud-eye');
    const screenGame = document.getElementById('screen-game');
    const hintEl = document.getElementById('dialogue-hidden-hint');

    const toggleDialogueBox = (forceState) => {
      window.audioManager.playClick();
      const isHidden = forceState !== undefined ? !forceState : !screenGame.classList.contains('dialogue-hidden');
      screenGame.classList.toggle('dialogue-hidden', isHidden);
      if (eyeBtn) {
        eyeBtn.classList.toggle('active', isHidden);
        eyeBtn.textContent = isHidden ? '👁️ แสดงกรอบ' : '👁️ ซ่อนกรอบ';
      }
      if (hintEl) {
        hintEl.style.display = isHidden ? 'block' : 'none';
      }
      this.fitStage();
    };

    if (eyeBtn) {
      eyeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDialogueBox();
      });
    }

    // Tap anywhere on game screen when hidden to restore
    screenGame.addEventListener('click', (e) => {
      if (screenGame.classList.contains('dialogue-hidden')) {
        toggleDialogueBox(true);
      }
    });

    // HUD Buttons
    document.getElementById('btn-hud-menu').addEventListener('click', () => {
      window.audioManager.playClick();
      this.modalMenu.classList.add('active');
    });

    document.getElementById('btn-hud-log').addEventListener('click', () => {
      window.audioManager.playClick();
      this.openLogModal();
    });

    const autoBtn = document.getElementById('btn-hud-auto');
    autoBtn.addEventListener('click', () => {
      this.autoPlay = !this.autoPlay;
      autoBtn.classList.toggle('active', this.autoPlay);
      autoBtn.textContent = this.autoPlay ? '⏩ เล่นอัตโนมัติ (เปิด)' : '⏩ เล่นอัตโนมัติ (Auto)';
      if (this.autoPlay && !this.isTyping) {
        this.scheduleAutoNext();
      }
    });

    document.getElementById('btn-hud-skip').addEventListener('click', () => {
      window.audioManager.playClick();
      this.skipToNextChoice();
    });

    // Modal Close
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        window.audioManager.playClick();
        const modalId = btn.dataset.close;
        const el = document.getElementById(modalId);
        if (el) el.classList.remove('active');
      });
    });

    
    // Edit Player Name Events
    if (this.btnEditPlayerName) {
      this.btnEditPlayerName.addEventListener('click', () => {
        window.audioManager.playClick();
        if (this.inputPlayerName) this.inputPlayerName.value = this.playerName;
        if (this.modalName) this.modalName.classList.add('active');
      });
    }

    if (this.btnSaveName) {
      this.btnSaveName.addEventListener('click', () => {
        window.audioManager.playClick();
        const val = (this.inputPlayerName?.value || '').trim();
        if (val) {
          this.playerName = val;
          localStorage.setItem("otome_player_name", val);
          this.updatePlayerNameDisplay();
          this.showToast(`✨ บันทึกชื่อตัวเอกเป็น "${val}" เรียบร้อยแล้ว!`);
        }
        if (this.modalName) this.modalName.classList.remove('active');
      });
    }

    // Prince Touch / Tap interaction in Lobby
    const princeImg = document.getElementById("lobby-featured-img");
    if (princeImg) {
      princeImg.addEventListener('click', () => {
        const activeTab = document.querySelector('.prince-tab.active');
        const princeKey = activeTab ? activeTab.dataset.prince : 'cedric';
        this.handlePrinceTap(princeKey);
      });
    }

    // Skip Button Handler
    const skipBtn = document.getElementById("btn-hud-skip");
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSkip();
      });
    }

    
    // In-game menu actions
    document.getElementById('btn-save-slot').addEventListener('click', () => {
      this.saveProgress();
      this.modalMenu.classList.remove('active');
      this.showToast("💾 บันทึกความคืบหน้าเรียบร้อยแล้ว!");
    });

    document.getElementById('btn-load-slot').addEventListener('click', () => {
      const loaded = this.loadProgress();
      this.modalMenu.classList.remove('active');
      if (loaded) {
        this.showToast("📂 โหลดความคืบหน้าสำเร็จ!");
      } else {
        this.showToast("⚠️ ไม่พบข้อมูลบันทึก");
      }
    });

    document.getElementById('btn-menu-lobby').addEventListener('click', () => {
      this.modalMenu.classList.remove('active');
      this.switchScreen('lobby');
    });

    document.getElementById('btn-quit-to-title').addEventListener('click', () => {
      this.modalMenu.classList.remove('active');
      this.switchScreen('title');
    });

    // Route evaluation modal button
    const enterRouteBtn = document.getElementById('btn-enter-route');
    if (enterRouteBtn) {
      enterRouteBtn.addEventListener('click', () => {
        window.audioManager.playHeartUp();
        document.getElementById('modal-route-eval').classList.remove('active');
        if (this.winningRoute) {
          this.currentRoute = this.winningRoute;
          this.renderScene(`${this.winningRoute}_branch_start`);
        } else {
          this.renderScene("common_independent_ending");
        }
      });
    }

    // Ending screen actions
    document.getElementById('btn-replay-route').addEventListener('click', () => {
      this.startStory("prologue_modern_1");
    });

    document.getElementById('btn-ending-lobby').addEventListener('click', () => {
      this.switchScreen('lobby');
    });
  }

  updateLobbyPrince(princeKey) {
    const quotes = {
      cedric: '"กลับมาแล้วเหรอ... ฉันกำลังรอเธออยู่พอดีเลย"',
      lucian: '"คืนนี้ดาวสวยมากเลยครับ... มาดูด้วยกันไหม?"',
      leon: '"ผมตรวจดูความเรียบร้อยรอบปราสาทให้คุณแล้วครับ!"',
      kael: '"มาช้าจังนะยัยตัวแสบ... รู้ไหมว่าฉันรอพาเธอไปเที่ยวอยู่?"'
    };
    if (CHARACTERS[princeKey]) {
      this.lobbyPrinceImg.src = CHARACTERS[princeKey].image;
      this.lobbyPrinceQuote.textContent = quotes[princeKey] || quotes.cedric;
    }
  }

  switchScreen(screenName) {
    if (screenName === 'story-tree') screenName = 'storyTree';
    // Stop typing / auto-play when leaving the game screen
    if (screenName !== 'game') {
      if (this.autoTimeout) clearTimeout(this.autoTimeout);
      if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
      this.isTyping = false;
    }
    Object.values(this.screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });
    if (this.screens[screenName]) {
      this.screens[screenName].classList.add('active');
    }
    if (screenName === 'game') {
      requestAnimationFrame(() => this.fitStage());
      this.updateBgmForCurrentScene();
    } else {
      if (window.audioManager) {
        window.audioManager.setTheme('title');
      }
      if (screenName === 'title') {
        this.updateContinueButtonUI();
      }
    }
  }

  // Keep the character stage strictly above the dialogue box (+ choices) so faces are never covered
  fitStage() {
    const container = document.querySelector('.dialogue-container');
    const hud = document.querySelector('.game-hud');
    if (!container || !this.charStageEl) return;
    const screenGame = document.getElementById('screen-game');
    if (!screenGame || !screenGame.classList.contains('active')) return;
    const hidden = screenGame.classList.contains('dialogue-hidden');
    const gameRect = screenGame.getBoundingClientRect();
    const boxRect = container.getBoundingClientRect();
    const hudRect = hud ? hud.getBoundingClientRect() : null;
    const bottom = hidden ? 20 : Math.max(120, gameRect.bottom - boxRect.top + 12);
    const top = hudRect ? Math.max(40, hudRect.bottom - gameRect.top + 4) : 55;
    this.charStageEl.style.bottom = `${bottom}px`;
    this.charStageEl.style.top = `${top}px`;
  }

  startStory(startId = "prologue_modern_1") {
    this.currentSceneId = startId;
    if (startId === "prologue_modern_1") {
      this.affection = { cedric: 0, lucian: 0, leon: 0, kael: 0 };
      this.currentRoute = null;
    }
    this.historyLog = [];
    this.lastChapter = null;
    this.stageHasChars = false;
    this.switchScreen('game');
    this.renderScene(startId);
  }

  unlockChapter(chapterKey) {
    if (!this.unlockedChapters.includes(chapterKey)) {
      this.unlockedChapters.push(chapterKey);
      localStorage.setItem('otome_unlocked_chapters', JSON.stringify(this.unlockedChapters));
      this.updateChapterTreeUI();
      const names = { ch1: 'บทที่ 1: สภาขุนนาง', ch2: 'บทที่ 2: งานเต้นรำหน้ากาก', ch3: 'บทที่ 3: คืนจันทร์สีเลือด', eval: 'จุดเปลี่ยนแห่งโชคชะตา' };
      if (names[chapterKey]) {
        this.showToast(`🔓 ปลดล็อก ${names[chapterKey]} แล้ว!`);
      }
    }
  }

  updateChapterTreeUI() {
    const chapterMeta = {
      prologue: { id: 'node-prologue', badge: 'บทนำ (ปลดล็อกแล้ว)', lockedBadge: 'บทนำ', btnText: '▶ เริ่มบทนี้', lockedBtn: '▶ เริ่มบทนี้' },
      ch1: { id: 'node-ch1', badge: 'บทที่ 1 (ปลดล็อกแล้ว)', lockedBadge: '🔒 บทที่ 1', btnText: '▶ เล่นบทนี้', lockedBtn: '🔒 ต้องผ่านบทนำก่อน' },
      ch2: { id: 'node-ch2', badge: 'บทที่ 2 (ปลดล็อกแล้ว)', lockedBadge: '🔒 บทที่ 2', btnText: '▶ เล่นบทนี้', lockedBtn: '🔒 ต้องผ่านบทที่ 1 ก่อน' },
      ch3: { id: 'node-ch3', badge: 'บทที่ 3 (ปลดล็อกแล้ว)', lockedBadge: '🔒 บทที่ 3', btnText: '▶ เล่นบทนี้', lockedBtn: '🔒 ต้องผ่านบทที่ 2 ก่อน' },
      eval: { id: 'node-eval', badge: 'จุดเปลี่ยนแห่งโชคชะตา (ปลดล็อกแล้ว)', lockedBadge: '🔒 จุดเปลี่ยนแห่งโชคชะตา', btnText: '🔮 ประเมินผล', lockedBtn: '🔒 ต้องผ่านบทที่ 3 ก่อน' }
    };

    Object.entries(chapterMeta).forEach(([key, meta]) => {
      const node = document.getElementById(meta.id);
      if (!node) return;
      const isUnlocked = key === 'prologue' || this.unlockedChapters.includes(key);
      node.classList.toggle('locked', !isUnlocked);
      node.classList.toggle('active', isUnlocked);
      const badgeEl = node.querySelector('.node-badge');
      const btnEl = node.querySelector('.btn-play-chapter');
      if (badgeEl) {
        badgeEl.textContent = isUnlocked ? meta.badge : meta.lockedBadge;
      }
      if (btnEl) {
        btnEl.disabled = !isUnlocked;
        btnEl.textContent = isUnlocked ? meta.btnText : meta.lockedBtn;
      }
    });
  }

  renderScene(sceneId) {
    const scene = STORY_DATA[sceneId];
    if (!scene) {
      console.error("Scene not found:", sceneId);
      return;
    }
    this.currentSceneId = sceneId;
    this.updateBgmForScene(sceneId, scene);
    this.autoSaveProgress(scene);

    // Auto-unlock chapters when reached through gameplay
    if (sceneId === "ch1_start") this.unlockChapter("ch1");
    if (sceneId === "ch2_start") this.unlockChapter("ch2");
    if (sceneId === "ch3_start") this.unlockChapter("ch3");
    if (sceneId === "route_branch_evaluation") this.unlockChapter("eval");

    // Update Chapter Badge
    this.chapterBadgeEl.textContent = scene.chapter || "Destiny of Hearts";

    // Update Background
    if (scene.bg) {
      this.bgContainerEl.className = `bg-scene ${scene.bg}`;
    }

    // Update Speaker
    let speakerName = "???";
    if (scene.speaker === "narrator") {
      speakerName = "บรรยาย";
    } else if (CHARACTERS[scene.speaker]) {
      speakerName = CHARACTERS[scene.speaker].name;
    }
    this.speakerEl.textContent = speakerName;

    // Speaker color theme for the dialogue box
    const speakerKey = (scene.speaker === "narrator" || CHARACTERS[scene.speaker]) ? scene.speaker : "narrator";
    this.dialogueBoxEl.dataset.speaker = speakerKey;

    // Update Character Sprites (Supports 1 or 2 Characters Simultaneously)
    const hasChar1 = Boolean(scene.char && CHARACTERS[scene.char]);
    const hasChar2 = Boolean(scene.char2 && CHARACTERS[scene.char2]);

    // Narration inside the same chapter keeps the characters on stage (no flicker)
    const keepStage = !hasChar1 && !hasChar2 && scene.speaker === "narrator" &&
      this.lastChapter === scene.chapter && this.stageHasChars;
    this.lastChapter = scene.chapter;

    if (keepStage) {
      this.charSpriteEl.classList.remove('speaking', 'listening');
      if (this.secondCharSpriteEl) this.secondCharSpriteEl.classList.remove('speaking', 'listening');
    } else {
    this.stageHasChars = hasChar1 || hasChar2;

    if (this.charStageEl) {
      this.charStageEl.classList.toggle('two-chars', hasChar1 && hasChar2);
    }

    this.charSpriteEl.className = 'char-sprite visible';
    if (this.secondCharSpriteEl) {
      this.secondCharSpriteEl.className = 'char-sprite visible';
    }

    if (hasChar1) {
      const spriteSrc1 = scene.charImg || CHARACTERS[scene.char].image;
      if (spriteSrc1) {
        if (!this.charSpriteImg.src.endsWith(spriteSrc1)) {
          this.charSpriteImg.src = spriteSrc1;
        }
        this.charSpriteEl.style.display = "flex";
        this.charSpriteEl.style.opacity = "1";
      }
      if (scene.emotion) {
        this.charSpriteEl.classList.add(`emotion-${scene.emotion}`);
      }
      if (hasChar2) {
        if (scene.speaker === scene.char) {
          this.charSpriteEl.classList.add('speaking');
        } else if (scene.speaker === scene.char2) {
          this.charSpriteEl.classList.add('listening');
        }
      }
    } else {
      this.charSpriteEl.style.display = "none";
    }

    if (hasChar2 && this.secondCharSpriteEl && this.secondCharSpriteImg) {
      const spriteSrc2 = scene.char2Img || CHARACTERS[scene.char2].image;
      if (spriteSrc2) {
        if (!this.secondCharSpriteImg.src.endsWith(spriteSrc2)) {
          this.secondCharSpriteImg.src = spriteSrc2;
        }
        this.secondCharSpriteEl.style.display = "flex";
        this.secondCharSpriteEl.style.opacity = "1";
      }
      if (scene.speaker === scene.char2) {
        this.secondCharSpriteEl.classList.add('speaking');
      } else if (scene.speaker === scene.char) {
        this.secondCharSpriteEl.classList.add('listening');
      }
    } else if (this.secondCharSpriteEl) {
      this.secondCharSpriteEl.style.display = "none";
    }
    } // end !keepStage

    // Update Affection Gauge
    this.updateAffectionDisplay();

    // Check if this is an ending
    if (scene.ending) {
      this.triggerEnding(scene.ending);
      return;
    }

    // Check if this is Route Branching Evaluation
    if (scene.isBranchEvaluation) {
      this.evaluateAndBranchRoute();
      return;
    }

    // Add to history log
    this.historyLog.push({
      speaker: speakerName,
      speakerKey: speakerKey,
      text: scene.text
    });
    if (this.historyLog.length > 400) this.historyLog.splice(0, this.historyLog.length - 400);

    // Dialogue typing effect
    // Dynamic Player Name replacement in dialogue
    let displayText = scene.text || "";
    if (scene.speaker !== "narrator" && this.playerName) {
      displayText = displayText.replace(/คุณ/g, this.playerName);
    }

    // Screen FX Triggers
    if (displayText && (displayText.includes("ฟ้าร้อง") || displayText.includes("พายุ") || displayText.includes("บุกโจมตี") || displayText.includes("อสูรเงา") || sceneId === "ch3_start")) {
      this.triggerScreenShake();
      if (window.audioManager && window.audioManager.playThunder) window.audioManager.playThunder();
    }
    if (displayText && (displayText.includes("แสงสีทอง") || displayText.includes("เวทมนตร์") || displayText.includes("เปล่งแสง") || displayText.includes("ชำระล้าง"))) {
      this.triggerScreenFlash("gold");
      if (window.audioManager && window.audioManager.playMagicCast) window.audioManager.playMagicCast();
    }

    this.startTypewriter(displayText, () => {
      if (scene.choices && scene.choices.length > 0) {
        this.renderChoices(scene.choices);
        this.nextIndicatorEl.style.display = "none";
      } else {
        this.choiceContainerEl.style.display = "none";
        this.nextIndicatorEl.style.display = "block";
        if (this.autoPlay) {
          this.scheduleAutoNext();
        }
      }
    });
  }

  startTypewriter(text, onComplete) {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
    this.choiceContainerEl.style.display = "none";
    this.nextIndicatorEl.style.display = "none";
    this.isTyping = true;
    this.currentFullText = text;
    this.textEl.textContent = "";

    let i = 0;
    const speed = 22;

    const typeNextChar = () => {
      if (i < text.length) {
        this.textEl.textContent += text.charAt(i);
        i++;
        this.typewriterTimeout = setTimeout(typeNextChar, speed);
      } else {
        this.isTyping = false;
        if (onComplete) onComplete();
      }
    };
    typeNextChar();
  }

  finishTypingImmediately() {
    if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
    this.textEl.textContent = this.currentFullText;
    this.isTyping = false;
    
    const scene = STORY_DATA[this.currentSceneId];
    if (scene && scene.choices && scene.choices.length > 0) {
      this.renderChoices(scene.choices);
      this.nextIndicatorEl.style.display = "none";
    } else {
      this.nextIndicatorEl.style.display = "block";
      if (this.autoPlay) {
        this.scheduleAutoNext();
      }
    }
  }

  handleDialogueClick() {
    if (this.isTyping) {
      this.finishTypingImmediately();
      return;
    }

    const scene = STORY_DATA[this.currentSceneId];
    if (!scene) return;

    if (scene.choices && scene.choices.length > 0) {
      return;
    }

    if (scene.next) {
      window.audioManager.playClick();
      this.renderScene(scene.next);
    }
  }

  scheduleAutoNext() {
    if (this.autoTimeout) clearTimeout(this.autoTimeout);
    this.autoTimeout = setTimeout(() => {
      if (this.autoPlay && !this.isTyping) {
        const scene = STORY_DATA[this.currentSceneId];
        if (scene && !scene.choices && scene.next) {
          this.renderScene(scene.next);
        }
      }
    }, 2400);
  }

  renderChoices(choices) {
    this.choiceContainerEl.innerHTML = "";
    this.choiceContainerEl.style.display = "";

    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = "btn-choice";
      btn.innerHTML = `<span>${choice.text}</span> <span style="color: var(--primary-gold)">✦</span>`;

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Guard against double-taps on iPad (would apply affection twice)
        if (this.choiceLocked) return;
        this.choiceLocked = true;
        this.choiceContainerEl.querySelectorAll('.btn-choice').forEach(b => { b.disabled = true; });
        window.audioManager.playChoice();

        if (choice.charGain && choice.points) {
          this.addAffection(choice.charGain, choice.points);
        }

        this.choiceContainerEl.style.display = "none";
        this.renderScene(choice.next);
      });

      this.choiceContainerEl.appendChild(btn);
    });
    this.choiceLocked = false;
    this.fitStage();
  }

  skipToNextChoice() {
    let curr = STORY_DATA[this.currentSceneId];
    while (curr && (!curr.choices || curr.choices.length === 0) && curr.next && !curr.ending && !curr.isBranchEvaluation) {
      // Log current line before skipping forward
      let speakerName = "???";
      if (curr.speaker === "narrator") {
        speakerName = "บรรยาย";
      } else if (CHARACTERS[curr.speaker]) {
        speakerName = CHARACTERS[curr.speaker].name;
      }
      if (!this.historyLog.length || this.historyLog[this.historyLog.length - 1].text !== curr.text) {
        this.historyLog.push({ speaker: speakerName, speakerKey: curr.speaker, text: curr.text });
      }

      this.currentSceneId = curr.next;
      if (this.currentSceneId === "ch1_start") this.unlockChapter("ch1");
      if (this.currentSceneId === "ch2_start") this.unlockChapter("ch2");
      if (this.currentSceneId === "ch3_start") this.unlockChapter("ch3");
      if (this.currentSceneId === "route_branch_evaluation") this.unlockChapter("eval");
      curr = STORY_DATA[this.currentSceneId];
    }
    this.renderScene(this.currentSceneId);
  }

  addAffection(characterKey, points) {
    if (characterKey === "all") {
      ["cedric", "lucian", "leon", "kael"].forEach(k => {
        this.affection[k] = Math.max(0, Math.min(100, (this.affection[k] || 0) + points));
      });
      if (points < 0) {
        window.audioManager.playHeartDown();
        this.showToast(`💔 คำตอบไม่เหมาะสม! ความผูกพันกับสี่ราชันย์ลดลง ${points}!`, true);
      } else {
        window.audioManager.playHeartUp();
        this.showToast(`❤️ ความผูกพันกับทุกคนเพิ่มขึ้น +${points}!`, false);
      }
      this.updateAffectionDisplay();
      return;
    }

    this.affection[characterKey] = Math.max(0, Math.min(100, (this.affection[characterKey] || 0) + points));
    const charName = CHARACTERS[characterKey] ? CHARACTERS[characterKey].name : characterKey;
    if (points < 0) {
      window.audioManager.playHeartDown();
      this.showToast(`💔 ความผูกพันกับ ${charName} ลดลง ${points}!`, true);
    } else {
      window.audioManager.playHeartUp();
      this.showToast(`❤️ ความผูกพันกับ ${charName} เพิ่มขึ้น +${points}!`, false);
    }
    this.updateAffectionDisplay();
  }

  updateAffectionDisplay() {
    let currentScore = 0;
    if (this.currentRoute && this.affection[this.currentRoute] !== undefined) {
      currentScore = this.affection[this.currentRoute];
    } else {
      currentScore = Math.max(...Object.values(this.affection));
    }
    this.affBarFillEl.style.width = `${currentScore}%`;
    this.affPercentEl.textContent = `${currentScore}%`;
  }

  evaluateAndBranchRoute() {
    window.audioManager.playHeartUp();

    const scores = this.affection;
    let highestKey = null;
    let highestVal = -1;

    for (const [key, val] of Object.entries(scores)) {
      if (val > highestVal) {
        highestVal = val;
        highestKey = key;
      }
    }

    const evalModal = document.getElementById('modal-route-eval');
    const evalTitle = document.getElementById('eval-title');
    const evalImg = document.getElementById('eval-char-img');
    const evalName = document.getElementById('eval-char-name');
    const evalScore = document.getElementById('eval-affinity-score');

    ['cedric', 'lucian', 'leon', 'kael'].forEach(k => {
      const bar = document.getElementById(`eval-bar-${k}`);
      const valEl = document.getElementById(`eval-val-${k}`);
      const score = scores[k] || 0;
      if (bar) bar.style.width = `${score}%`;
      if (valEl) valEl.textContent = score;
    });

    if (highestVal >= 50 && highestKey && CHARACTERS[highestKey]) {
      this.winningRoute = highestKey;
      evalTitle.textContent = "✦ โชคชะตาผูกพันสำเร็จ ✦";
      evalName.textContent = CHARACTERS[highestKey].name;
      evalScore.textContent = `ระดับความผูกพันสูงสุด: ${highestVal} คะแนน`;
      evalImg.src = CHARACTERS[highestKey].image;
    } else {
      this.winningRoute = null;
      evalTitle.textContent = "✦ หัวใจที่ยังเป็นอิสระ ✦";
      evalName.textContent = "ธิดาแห่งมนตราผู้เป็นอิสระ";
      evalScore.textContent = `คะแนนกระจายเท่ากัน (${highestVal} คะแนน) ก้าวสู่เส้นทางอิสระ`;
      evalImg.src = "assets/cover.png";
    }

    evalModal.classList.add('active');
  }

  renderLetter(charKey) {
    const letterDisplay = document.getElementById('letter-content-display');
    const data = this.letters[charKey] || this.letters.cedric;
    if (letterDisplay) {
      letterDisplay.innerHTML = `
        <h4 style="color: var(--primary-gold); margin-bottom: 12px; font-family: var(--font-serif);">${data.title}</h4>
        <p style="white-space: pre-line;">${data.content}</p>
      `;
    }
  }

  renderProfiles() {
    const container = document.getElementById('profiles-display-wrap');
    if (!container) return;
    container.innerHTML = "";

    this.profiles.forEach(p => {
      const card = document.createElement('div');
      card.className = "profile-card";
      card.innerHTML = `
        <div class="profile-avatar">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="profile-details">
          <h4>${p.name}</h4>
          <div class="profile-title">${p.title}</div>
          <div class="profile-stat"><strong>อายุ:</strong> ${p.age} • <strong>สูง:</strong> ${p.height}</div>
          <div class="profile-stat"><strong>วันเกิด:</strong> ${p.birthday}</div>
          <div class="profile-stat"><strong>ชอบ:</strong> ${p.likes}</div>
          <div class="profile-stat" style="font-style: italic; color: #faeed7; margin-top: 6px;">"${p.quote}"</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  showToast(msg, isNegative = false) {
    this.toastEl.textContent = msg;
    this.toastEl.classList.toggle('negative', Boolean(isNegative));
    this.toastEl.classList.add('show');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, 3000);
  }

  openLogModal() {
    this.logListEl.innerHTML = "";
    this.historyLog.forEach(item => {
      const div = document.createElement('div');
      div.className = `log-entry spk-${item.speakerKey || 'narrator'}`;
      div.innerHTML = `
        <div class="log-speaker">${item.speaker}</div>
        <div class="log-msg">${item.text}</div>
      `;
      this.logListEl.appendChild(div);
    });
    this.modalLog.classList.add('active');
    this.logListEl.scrollTop = this.logListEl.scrollHeight;
  }

  triggerEnding(endingData) {
    const key = `${endingData.char || 'common'}_${endingData.type}`;
    if (!this.unlockedEndings.includes(key)) {
      this.unlockedEndings.push(key);
      localStorage.setItem('otome_endings', JSON.stringify(this.unlockedEndings));
    }

    const titleEl = document.getElementById('ending-title');
    const typeEl = document.getElementById('ending-type');
    const descEl = document.getElementById('ending-desc');
    const imgEl = document.getElementById('ending-char-img');
    const scoreEl = document.getElementById('ending-final-score');
    const badgeEl = document.getElementById('ending-badge');
    const honorTitleEl = document.getElementById('ending-title-text');

    if (titleEl) titleEl.textContent = endingData.title;
    if (typeEl) typeEl.textContent = endingData.type;
    if (descEl) descEl.textContent = endingData.desc;

    // Badges & Honorary Titles
    const isTrue = endingData.type.includes('True') || endingData.type.includes('แท้');
    if (badgeEl) {
      if (isTrue) {
        badgeEl.textContent = '👑 TRUE ROMANCE ENDING (บทอวสานแห่งรักแท้)';
        badgeEl.style.background = 'linear-gradient(135deg, #e6c27a, #ff4d6d)';
      } else if (endingData.char === 'common') {
        badgeEl.textContent = '🕊️ INDEPENDENT MAIDEN ENDING (บทอวสานอิสตรีผู้เป็นเอก)';
        badgeEl.style.background = 'linear-gradient(135deg, #64ffda, #1de9b6)';
      } else {
        badgeEl.textContent = '🌸 NORMAL COMPANION ENDING (บทอวสานแห่งมิตรภาพ)';
        badgeEl.style.background = 'linear-gradient(135deg, #ba68c8, #ab47bc)';
      }
    }

    const titles = {
      cedric: isTrue ? 'มกุฎราชินีคู่บัลลังก์สุริยัน (Sun Queen)' : 'สหายคู่ใจแห่งราชันย์สุริยัน',
      lucian: isTrue ? 'มหาปราชญ์หญิงคู่บัลลังก์มนตรา (Archmage Consort)' : 'ปราชญ์ผู้ร่วมค้นคว้าแห่งหอจดหมายเหตุ',
      leon: isTrue ? 'คู่ชีวิตแห่งแม่ทัพอัศวินองครักษ์ (Knight Champion\'s Heart)' : 'สหายศึกผู้ร่วมสาบานแห่งคมดาบ',
      kael: isTrue ? 'แสงสว่างหนึ่งเดียวแห่งเงามืด (Moonlit Shadow Consort)' : 'ผู้กุมความลับหนึ่งเดียวขององค์ชายเงา',
      common: 'อิสตรีผู้กำหนดโชคชะตาด้วยตนเอง (Free-Spirited Heroine)'
    };

    if (honorTitleEl) {
      honorTitleEl.textContent = titles[endingData.char] || 'ยอดดวงใจแห่งเอลีเซียม';
    }

    if (imgEl) {
      if (isTrue && endingData.char && ['cedric', 'lucian', 'leon', 'kael'].includes(endingData.char)) {
        imgEl.src = `assets/cg_${endingData.char}_true.jpg`;
      } else if (endingData.char && CHARACTERS[endingData.char] && CHARACTERS[endingData.char].image) {
        imgEl.src = CHARACTERS[endingData.char].image;
      } else {
        imgEl.src = "assets/cover.png";
      }
      imgEl.style.cursor = 'pointer';
      imgEl.title = 'คลิกเพื่อดูภาพเต็มจอ';
      imgEl.onclick = () => {
        this.openImagePreview(imgEl.src, endingData.title);
      };
    }

    const finalScore = endingData.char && this.affection[endingData.char] !== undefined
      ? this.affection[endingData.char]
      : Math.max(...Object.values(this.affection));
    if (scoreEl) scoreEl.textContent = `${finalScore}%`;

    if (window.audioManager) {
      window.audioManager.playHeartUp();
      window.audioManager.setTheme(isTrue ? 'romance' : 'daily');
    }
    this.switchScreen('ending');
  }

  updateGalleryUI() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    const endingCards = [
      { char: "cedric", title: "ราชินีแห่งราเวนครอสต์ (True End)", type: "True Romance Ending", img: "assets/cg_cedric_true.jpg" },
      { char: "lucian", title: "ปุโรหิตคู่บัลลังก์ดวงดาว (True End)", type: "True Romance Ending", img: "assets/cg_lucian_true.jpg" },
      { char: "leon", title: "ยอดดวงใจแห่งอัศวินสุริยัน (True End)", type: "True Romance Ending", img: "assets/cg_leon_true.jpg" },
      { char: "kael", title: "คู่หูจอมโจรใต้เงาจันทร์ (True End)", type: "True Romance Ending", img: "assets/cg_kael_true.jpg" },
      { char: "cedric", title: "ผู้พิทักษ์ในเงามืด (Normal End)", type: "Normal Ending", img: "assets/char_cedric.png" },
      { char: "lucian", title: "แสงดาวนำทาง (Normal End)", type: "Normal Ending", img: "assets/char_lucian.png" },
      { char: "leon", title: "ผู้พิทักษ์ผู้ภักดี (Normal End)", type: "Normal Ending", img: "assets/char_leon.png" },
      { char: "kael", title: "เงาที่ผ่านเลย (Normal End)", type: "Normal Ending", img: "assets/char_kael.png" },
      { char: "common", title: "สตรีผู้กุมโชคชะตาตนเอง (Common End)", type: "Independent Maiden Ending", img: "assets/cover.png" }
    ];

    endingCards.forEach(card => {
      const key = `${card.char}_${card.type}`;
      const isUnlocked = this.unlockedEndings.includes(key);

      const div = document.createElement('div');
      div.className = "gallery-item";
      div.style.cursor = isUnlocked ? "pointer" : "default";
      div.innerHTML = `
        <img src="${card.img}" alt="${card.title}" style="${isUnlocked ? '' : 'filter: grayscale(100%) brightness(35%);'}">
        <div class="gallery-item-info">
          <div class="gallery-item-title">${isUnlocked ? card.title : '??? (ยังไม่ปลดล็อก)'}</div>
          <div class="gallery-item-status">${isUnlocked ? '✨ ปลดล็อกสมบูรณ์ (คลิกเพื่อดูภาพใหญ่)' : '🔒 ดำเนินเนื้อเรื่องเพื่อปลดล็อก'}</div>
        </div>
      `;
      if (isUnlocked) {
        div.addEventListener('click', () => {
          this.openImagePreview(card.img, card.title);
        });
      }
      galleryGrid.appendChild(div);
    });
  }

  openImagePreview(src, title) {
    let modal = document.getElementById('cg-preview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'cg-preview-modal';
      modal.innerHTML = `
        <div class="cg-modal-backdrop"></div>
        <div class="cg-modal-content">
          <button class="cg-modal-close" aria-label="Close">&times;</button>
          <img id="cg-modal-img" src="" alt="CG Preview">
          <div id="cg-modal-caption" class="cg-modal-caption"></div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.cg-modal-backdrop').addEventListener('click', () => {
        modal.classList.remove('active');
      });
      modal.querySelector('.cg-modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
    const img = modal.querySelector('#cg-modal-img');
    const cap = modal.querySelector('#cg-modal-caption');
    if (img) img.src = src;
    if (cap) cap.textContent = title || '';
    modal.classList.add('active');
  }

  saveProgress() {
    const state = {
      sceneId: this.currentSceneId,
      currentRoute: this.currentRoute,
      affection: this.affection,
      historyLog: this.historyLog.slice(-300),
      unlockedChapters: this.unlockedChapters
    };
    localStorage.setItem('otome_save_state', JSON.stringify(state));
  }

  loadProgress() {
    const raw = localStorage.getItem('otome_save_state');
    if (!raw) return false;
    try {
      const state = JSON.parse(raw);
      // Old saves may point to scenes that no longer exist after the story update
      if (!STORY_DATA[state.sceneId]) {
        const fallback = state.currentRoute && STORY_DATA[`${state.currentRoute}_branch_start`]
          ? `${state.currentRoute}_branch_start` : "prologue_modern_1";
        state.sceneId = fallback;
        this.showToast("⚠️ เนื้อเรื่องอัปเดตแล้ว เริ่มต่อจากจุดเริ่มต้นของบทที่ใกล้ที่สุด", true);
      }
      this.currentSceneId = state.sceneId;
      this.currentRoute = state.currentRoute;
      this.lastChapter = null;
      this.stageHasChars = false;
      this.affection = state.affection || { cedric: 0, lucian: 0, leon: 0, kael: 0 };
      this.historyLog = state.historyLog || [];
      if (Array.isArray(state.unlockedChapters)) {
        this.unlockedChapters = state.unlockedChapters;
        localStorage.setItem('otome_unlocked_chapters', JSON.stringify(this.unlockedChapters));
        this.updateChapterTreeUI();
      }
      this.switchScreen('game');
      this.renderScene(this.currentSceneId);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const num = 24;
    for (let i = 0; i < num; i++) {
      const dot = document.createElement('div');
      dot.className = 'sparkle-dot';
      const size = Math.random() * 5 + 3;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDuration = `${Math.random() * 8 + 6}s`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(dot);
    }
  }


  // Direct Prince Route Launch (for standalone one-sitting playthrough)
  startDirectRoute(princeKey) {
    if (!CHARACTERS[princeKey]) princeKey = 'cedric';
    this.currentRoute = princeKey;
    this.affection = { cedric: 20, lucian: 20, leon: 20, kael: 20 };
    this.affection[princeKey] = 65; // Prime affection for chosen prince route
    this.lastChapter = null;
    this.stageHasChars = false;
    this.historyLog = [];
    this.unlockChapter(princeKey);
    this.switchScreen('game');
    this.renderScene(`${princeKey}_branch_start`);
    this.showToast(`👑 เข้าสู่เส้นทางของ ${CHARACTERS[princeKey].name} แล้ว!`);
  }

  // Real-time Auto-Save during story reading
  autoSaveProgress(scene) {
    if (!this.currentSceneId || this.currentSceneId === 'title') return;
    try {
      const data = {
        sceneId: this.currentSceneId,
        currentRoute: this.currentRoute,
        affection: this.affection,
        historyLog: this.historyLog.slice(-150),
        playerName: this.playerName,
        unlockedChapters: this.unlockedChapters,
        chapter: (scene && scene.chapter) || 'กำลังเดินทาง',
        timestamp: Date.now()
      };
      localStorage.setItem('otome_autosave', JSON.stringify(data));
    } catch (e) {
      console.warn("AutoSave failed:", e);
    }
  }

  loadAutoSave() {
    const raw = localStorage.getItem('otome_autosave');
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      if (!STORY_DATA[data.sceneId]) return false;
      this.currentSceneId = data.sceneId;
      this.currentRoute = data.currentRoute;
      this.affection = data.affection || { cedric: 0, lucian: 0, leon: 0, kael: 0 };
      this.historyLog = data.historyLog || [];
      this.playerName = data.playerName || "เรเนีย";
      if (Array.isArray(data.unlockedChapters)) {
        this.unlockedChapters = data.unlockedChapters;
      }
      this.switchScreen('game');
      this.renderScene(this.currentSceneId);
      this.showToast(`▶️ อ่านต่อ: ${data.chapter || 'จุดล่าสุด'}`);
      return true;
    } catch (e) {
      return false;
    }
  }

  updateContinueButtonUI() {
    const headEl = document.getElementById('title-continue-head');
    const subEl = document.getElementById('title-continue-sub');
    const btnContinue = document.getElementById('btn-title-continue');
    const raw = localStorage.getItem('otome_autosave') || localStorage.getItem('otome_save_state');

    if (!raw) {
      if (headEl) headEl.textContent = 'อ่านต่อจากจุดเดิม (Continue)';
      if (subEl) subEl.textContent = 'ยังไม่มีข้อมูลบันทึก';
      if (btnContinue) {
        btnContinue.style.opacity = '0.75';
      }
      return;
    }

    try {
      const data = JSON.parse(raw);
      if (headEl) headEl.textContent = `อ่านต่อ: ${data.chapter || 'จุดล่าสุด'}`;
      const timeStr = data.timestamp ? new Date(data.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) : 'บันทึกล่าสุด';
      if (subEl) subEl.textContent = `แตะเพื่ออ่านต่อทันที (${timeStr})`;
      if (btnContinue) {
        btnContinue.style.opacity = '1';
        btnContinue.classList.add('has-save');
      }
    } catch (e) {}
  }



  // Update heroine name display in Lobby header
  updatePlayerNameDisplay() {
    const el = document.getElementById('display-player-name');
    if (el) {
      el.textContent = `${this.playerName || "เรเนีย"} (ผู้ถือครองดวงใจ)`;
    }
  }

  // Interactive Prince greeting dialogue & bounce animation in Lobby
  handlePrinceTap(princeKey) {
    if (!CHARACTERS[princeKey]) princeKey = 'cedric';
    if (window.audioManager) window.audioManager.playHeartUp();

    const prince = CHARACTERS[princeKey];
    const quotes = {
      cedric: [
        "เรเนีย... เจ้ากำลังต้องการกำลังใจอยู่ใช่ไหม? ข้าอยู่ตรงนี้เสมอ",
        "ไม่ว่าเส้นทางข้างหน้าจะยากลำบากเพียงใด มือคู่นี้จะไม่ปล่อยจากเจ้าเด็ดขาด",
        "ทุกครั้งที่เห็นรอยยิ้มของเจ้า ความเหนื่อยล้าของข้าก็มลายหายไปสิ้น"
      ],
      lucian: [
        "กำลังคิดอะไรอยู่เหรอ? แววตาของเจ้าในตอนนี้น่าค้นหายิ่งกว่าปริศนาโบราณใดๆ เสียอีก",
        "หนังสือมีมากมายนับหมื่นเล่ม... แต่ไม่มีหน้าไหนงดงามเท่ารอยยิ้มของเจ้า",
        "หากมีสิ่งใดที่เจ้าไม่เข้าใจ มาหาข้าได้ตลอดเวลานะ"
      ],
      leon: [
        "ฮ่าๆ! มาแตะตัวข้าแบบนี้ เจ้ากำลังชวนข้าไปฝึกดาบหรืออยากไปเดินเล่นด้วยกันล่ะ?",
        "ไม่ต้องกลัวอะไรทั้งนั้น ตราบใดที่ข้ายังมีลมหายใจ ข้าจะปกป้องเจ้าสุดชีวิต!",
        "ถ้าเจ้าเหนื่อยเมื่อไหร่ บอกข้าได้เลยนะ ข้าพร้อมแบกเจ้ากลับปราสาทเสมอ!"
      ],
      kael: [
        "หึ... จู่ๆ ก็เดินเข้ามาใกล้แบบนี้ ไม่กลัวเงาแห่งความมืดแล้วหรือ?",
        "ข้าอาจจะไม่ถนัดพูดคำหวาน แต่ถ้าใครกล้าแตะต้องเจ้า... มันผู้นั้นจะไม่มีวันได้เห็นแสงตะวันอีก",
        "อยู่ใกล้ๆ ข้าไว้... อย่าไปไกลสายตา"
      ]
    };

    const list = quotes[princeKey] || quotes.cedric;
    const randomQuote = list[Math.floor(Math.random() * list.length)];

    if (this.lobbyPrinceQuote) {
      this.lobbyPrinceQuote.textContent = `"${randomQuote}"`;
    }

    if (this.lobbyPrinceImg) {
      this.lobbyPrinceImg.style.transform = 'scale(1.05) translateY(-8px)';
      setTimeout(() => {
        if (this.lobbyPrinceImg) this.lobbyPrinceImg.style.transform = '';
      }, 300);
    }

    this.showToast(`✨ ${prince.name}: "${randomQuote}"`);
  }

  // Fast-Forward / Skip button controller
  toggleSkip() {
    this.isSkipping = !this.isSkipping;
    const skipBtn = document.getElementById("btn-hud-skip");
    if (skipBtn) {
      skipBtn.classList.toggle('active', this.isSkipping);
      skipBtn.textContent = this.isSkipping ? "⏩ กำลังข้าม..." : "⏩ ข้าม (Skip)";
    }

    if (this.isSkipping) {
      if (this.skipInterval) clearInterval(this.skipInterval);
      this.skipInterval = setInterval(() => {
        const currentScene = STORY_DATA[this.currentSceneId];
        if (!currentScene || (currentScene.choices && currentScene.choices.length > 0) || currentScene.isBranchEvaluation || currentScene.ending || !currentScene.next) {
          this.toggleSkip();
          return;
        }
        this.renderScene(currentScene.next);
      }, 120);
    } else {
      if (this.skipInterval) {
        clearInterval(this.skipInterval);
        this.skipInterval = null;
      }
    }
  }

  // Cinematic Screen FX: Shake
  triggerScreenShake() {
    const gameScreen = document.getElementById('screen-game');
    if (!gameScreen) return;
    gameScreen.classList.remove('screen-shake');
    void gameScreen.offsetWidth;
    gameScreen.classList.add('screen-shake');
    setTimeout(() => {
      gameScreen.classList.remove('screen-shake');
    }, 600);
  }

  // Cinematic Screen FX: Flash
  triggerScreenFlash(color = 'white') {
    const flashEl = document.getElementById('screen-flash-overlay');
    if (!flashEl) return;
    flashEl.className = 'screen-flash-overlay';
    flashEl.classList.add(`flash-${color}`);
    void flashEl.offsetWidth;
    flashEl.classList.add('active');
    setTimeout(() => {
      flashEl.classList.remove('active', `flash-${color}`);
    }, 500);
  }

  // Dynamic Scene-Based Procedural BGM Controller
  updateBgmForCurrentScene() {
    if (this.currentSceneId && typeof STORY_DATA !== 'undefined' && STORY_DATA[this.currentSceneId]) {
      this.updateBgmForScene(this.currentSceneId, STORY_DATA[this.currentSceneId]);
    } else if (window.audioManager) {
      window.audioManager.setTheme('daily');
    }
  }

  updateBgmForScene(sceneId, scene) {
    if (!window.audioManager) return;
    const bg = (scene && scene.bg) || '';

    // 1. Battle & Crisis Theme (Blood Moon Requiem)
    if (
      bg === 'bg-battle' ||
      sceneId.startsWith('ch3_') ||
      sceneId.includes('_ep5_') ||
      sceneId.includes('crisis') ||
      sceneId.includes('battle')
    ) {
      window.audioManager.setTheme('battle');
      return;
    }

    // 2. Romantic & Waltz Theme (Twin Moons Waltz)
    if (
      bg === 'bg-lake' ||
      bg === 'bg-ballroom' ||
      sceneId.includes('_true_') ||
      sceneId.includes('_ep6_') ||
      sceneId.includes('date') ||
      sceneId.includes('confess') ||
      sceneId.includes('waltz')
    ) {
      window.audioManager.setTheme('romance');
      return;
    }

    // 3. Heartache, Sadness & Secret Confession Theme (Tears in the Rain)
    if (
      bg === 'bg-bedroom' ||
      sceneId.includes('_ep4_') ||
      sceneId.includes('trauma') ||
      sceneId.includes('tears') ||
      sceneId.includes('sorrow')
    ) {
      window.audioManager.setTheme('sad');
      return;
    }

    // 4. Default in Story: Academy Daylight / Daily Routine
    window.audioManager.setTheme('daily');
  }

  // Floating Hearts Animation Trigger
  triggerFloatingHeart(charKey, points) {
    const container = document.getElementById('floating-heart-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.className = 'floating-heart-item';
    const isUp = points > 0;
    heart.textContent = isUp ? `+${points} ❤️` : `${points} 💔`;
    heart.style.left = `${Math.random() * 40 + 30}%`;
    heart.style.top = `${Math.random() * 20 + 40}%`;
    if (CHARACTERS[charKey]) {
      heart.style.color = CHARACTERS[charKey].color;
    }
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 1500);
  }

}

window.addEventListener('DOMContentLoaded', () => {
  window.game = new OtomeGame();
});

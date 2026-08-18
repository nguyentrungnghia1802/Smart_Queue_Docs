/* LINE Smart Queue Assistant — Dynamic Presentation Engine Script */

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('slide-viewport');
  const counterEl = document.getElementById('slide-counter');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const notesBtn = document.getElementById('notes-btn');
  const langBtn = document.getElementById('lang-btn');
  const notesDrawer = document.getElementById('presenter-notes-drawer');
  const notesContent = document.getElementById('presenter-notes-content');
  const notesDrawerTitle = document.getElementById('notes-drawer-title');
  const closeNotesBtn = document.getElementById('close-notes-btn');
  const dashboardBtn = document.getElementById('dashboard-btn');

  let currentLang = 'vi'; // default or detected
  let currentConfig = null;
  let slides = [];
  let totalSlides = 0;
  let currentIndex = 0;
  let presenterWindow = null;

  // Determine initial language from query parameter, local storage, or html tag
  function detectInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && (langParam === 'ja' || langParam === 'vi')) {
      return langParam;
    }
    const storedLang = localStorage.getItem('smart_queue_presentation_lang');
    if (storedLang && (storedLang === 'ja' || storedLang === 'vi')) {
      return storedLang;
    }
    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang && (htmlLang === 'ja' || htmlLang === 'vi')) {
      return htmlLang;
    }
    return 'vi';
  }

  // Get configuration object for specified language
  function getConfig(lang) {
    if (lang === 'ja' && window.PRESENTATION_CONFIG_JA) {
      return window.PRESENTATION_CONFIG_JA;
    }
    if (lang === 'vi' && window.PRESENTATION_CONFIG_VI) {
      return window.PRESENTATION_CONFIG_VI;
    }
    // Fallback
    return window.PRESENTATION_CONFIG_VI || window.PRESENTATION_CONFIG_JA;
  }

  // Render slides dynamically from config
  function renderPresentation(lang) {
    currentLang = lang;
    localStorage.setItem('smart_queue_presentation_lang', lang);
    currentConfig = getConfig(lang);

    if (!currentConfig) {
      console.error('Presentation configuration not loaded for language:', lang);
      return;
    }

    // Update document metadata
    document.documentElement.lang = currentConfig.meta.lang;
    document.title = currentConfig.meta.title;

    // Update control labels & tooltips
    if (dashboardBtn) {
      dashboardBtn.textContent = currentConfig.meta.controls.dashboardBtn;
    }
    if (prevBtn) {
      prevBtn.title = currentConfig.meta.controls.prevBtnTitle;
    }
    if (nextBtn) {
      nextBtn.title = currentConfig.meta.controls.nextBtnTitle;
    }
    if (notesBtn) {
      notesBtn.title = currentConfig.meta.controls.notesBtnTitle;
    }
    if (fullscreenBtn) {
      fullscreenBtn.title = currentConfig.meta.controls.fullscreenBtnTitle;
    }
    if (langBtn) {
      langBtn.textContent = currentConfig.meta.controls.switchLangBtn;
      langBtn.title = currentConfig.meta.controls.switchLangTitle;
    }
    if (notesDrawerTitle) {
      notesDrawerTitle.textContent = currentConfig.meta.notesDrawerTitle;
    }

    // Render slides HTML into viewport
    if (viewport) {
      let slidesHtml = '';
      currentConfig.slides.forEach((slide, idx) => {
        const cleanTag = slide.tag.replace(/^Slide\s*\d+\s*(?:—|–|-)\s*/i, '');
        let bodyClass = 'slide-body layout-split left-wide';
        let bodyExtraStyle = '';

        if (slide.id === 'slide-4') {
          bodyClass = 'slide-body';
          bodyExtraStyle = 'flex-direction: column; align-items: stretch; justify-content: space-between; gap: 12px;';
        } else if (slide.id === 'slide-5') {
          bodyClass = 'slide-body';
          bodyExtraStyle = 'align-items: stretch;';
        } else if (slide.id === 'slide-7') {
          bodyClass = 'slide-body layout-split';
          bodyExtraStyle = 'grid-template-columns: 1.15fr 0.85fr; gap: 24px; align-items: center;';
        }

        slidesHtml += `
          <section class="slide" id="${slide.id}">
            <header class="slide-header">
              <div>
                <span class="slide-tag">${cleanTag}</span>
                <h1 class="slide-title" ${slide.id === 'slide-7' ? 'style="font-size: 32px; letter-spacing: -0.02em; color: var(--brand-ink);"' : ''}>${slide.title}</h1>
                <p class="slide-subtitle">${slide.subtitle}</p>
              </div>
              <div style="font-weight: ${slide.id === 'slide-7' ? '800' : '700'}; color: var(--line-green); font-size: ${slide.id === 'slide-7' ? '20px' : '18px'}; letter-spacing: 0.05em; text-transform: uppercase;">
                ${slide.headerBadge}
              </div>
            </header>
            <div class="${bodyClass}" ${bodyExtraStyle ? `style="${bodyExtraStyle}"` : ''}>
              ${slide.bodyHtml}
            </div>
            <div class="speaker-notes-data" style="display:none;">
              ${slide.notes}
            </div>
          </section>
        `;
      });
      viewport.innerHTML = slidesHtml;
    }

    // Refresh slide element list
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    // Go to current slide
    goToSlide(currentIndex, false);
  }

  // Scaling viewport to fit screen maintaining 16:9 ratio
  function autoScaleViewport() {
    if (!viewport) return;
    const targetWidth = 1280;
    const targetHeight = 720;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    const scale = Math.min(scaleX, scaleY) * 0.95;

    viewport.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', autoScaleViewport);
  autoScaleViewport();

  // Navigate to slide index
  function goToSlide(index, updateHash = true) {
    if (!slides || slides.length === 0) return;
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'previous');
      if (idx === index) {
        slide.classList.add('active');
      } else if (idx < index) {
        slide.classList.add('previous');
      }
    });

    currentIndex = index;

    // Update Counter & Progress Bar
    const slideNumStr = String(currentIndex + 1).padStart(2, '0');
    const totalNumStr = String(totalSlides).padStart(2, '0');
    if (counterEl) counterEl.textContent = `${slideNumStr} / ${totalNumStr}`;
    if (progressBar) progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;

    // Update Presenter Notes
    updatePresenterNotes();

    // Update URL Hash
    if (updateHash) {
      window.location.hash = `slide-${slideNumStr}`;
    }
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  // Hash Navigation Sync
  function parseHash() {
    const hash = window.location.hash;
    const match = hash.match(/#slide-(\d+)/);
    if (match) {
      const slideNum = parseInt(match[1], 10);
      if (slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1, false);
        return;
      }
    }
    goToSlide(0, false);
  }

  window.addEventListener('hashchange', parseHash);

  // Presenter Notes Update
  function updatePresenterNotes() {
    if (!slides || slides.length === 0) return;
    const currentSlide = slides[currentIndex];
    if (!currentSlide) return;

    const notesEl = currentSlide.querySelector('.speaker-notes-data');
    const defaultEmpty = currentConfig?.meta?.notesEmpty || 'このスライドには発表者ノートがありません。';
    const notesText = notesEl ? notesEl.innerHTML.trim() : defaultEmpty;

    if (notesContent) {
      notesContent.innerHTML = notesText;
    }

    if (presenterWindow && !presenterWindow.closed) {
      presenterWindow.postMessage({
        type: 'SLIDE_CHANGE',
        slideIndex: currentIndex + 1,
        totalSlides: totalSlides,
        title: currentSlide.querySelector('.slide-title')?.textContent || '',
        notes: notesText
      }, '*');
    }
  }

  // Keyboard Controls
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 'p':
      case 'P':
        e.preventDefault();
        togglePresenterMode();
        break;

      case 'l':
      case 'L':
        e.preventDefault();
        toggleLanguage();
        break;

      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        if (notesDrawer) {
          notesDrawer.classList.remove('open');
        }
        break;
    }
  });

  // Toggle Fullscreen
  function toggleFullscreen() {
    const elem = document.getElementById('deck-container');
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Toggle Language
  function toggleLanguage() {
    const nextLang = currentLang === 'vi' ? 'ja' : 'vi';
    renderPresentation(nextLang);
  }

  // Toggle Presenter Drawer
  if (notesBtn && notesDrawer) {
    notesBtn.addEventListener('click', () => {
      notesDrawer.classList.toggle('open');
    });
  }

  if (closeNotesBtn && notesDrawer) {
    closeNotesBtn.addEventListener('click', () => {
      notesDrawer.classList.remove('open');
    });
  }

  // Button Listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);

  // Presenter Window popup
  function togglePresenterMode() {
    if (presenterWindow && !presenterWindow.closed) {
      presenterWindow.focus();
      return;
    }
    presenterWindow = window.open('', 'PresenterConsole', 'width=800,height=600');
    if (presenterWindow) {
      presenterWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Presenter Console — LINE Smart Queue Assistant</title>
          <style>
            body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #f8fafc; }
            h2 { color: #06c755; margin-top: 0; }
            .meta { color: #94a3b8; font-size: 14px; margin-bottom: 16px; }
            .notes { background: #1e293b; border-radius: 8px; padding: 16px; font-size: 18px; line-height: 1.6; border-left: 4px solid #06c755; }
          </style>
        </head>
        <body>
          <div class="meta">Slide <span id="p-slide">1</span> / <span id="p-total">--</span></div>
          <h2 id="p-title">--</h2>
          <div class="notes" id="p-notes">--</div>
          <script>
            window.addEventListener('message', (e) => {
              if (e.data && e.data.type === 'SLIDE_CHANGE') {
                document.getElementById('p-slide').textContent = e.data.slideIndex;
                document.getElementById('p-total').textContent = e.data.totalSlides;
                document.getElementById('p-title').textContent = e.data.title;
                document.getElementById('p-notes').innerHTML = e.data.notes;
              }
            });
          </script>
        </body>
        </html>
      `);
      updatePresenterNotes();
    }
  }

  // Initialize
  const initialLang = detectInitialLanguage();
  renderPresentation(initialLang);
  parseHash();
});

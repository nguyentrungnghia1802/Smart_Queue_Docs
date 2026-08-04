/* LINE Smart Queue Assistant — Presentation Engine Script */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const viewport = document.getElementById('slide-viewport');
  const counterEl = document.getElementById('slide-counter');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const notesBtn = document.getElementById('notes-btn');
  const notesDrawer = document.getElementById('presenter-notes-drawer');
  const notesContent = document.getElementById('presenter-notes-content');
  const closeNotesBtn = document.getElementById('close-notes-btn');

  let currentIndex = 0;
  let presenterWindow = null;

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
    if (counterEl) counterEl.textContent = `${slideNumStr} / ${totalSlides}`;
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
    const currentSlide = slides[currentIndex];
    const notesEl = currentSlide.querySelector('.speaker-notes-data');
    const notesText = notesEl ? notesEl.innerHTML : 'このスライドには発表者ノートがありません。';

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

  // Open Separate Presenter Window Mode (P)
  function togglePresenterMode() {
    if (!presenterWindow || presenterWindow.closed) {
      presenterWindow = window.open('', 'PresenterWindow', 'width=800,height=600');
      if (presenterWindow) {
        presenterWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>LINE Smart Queue Assistant — 発表者ノート</title>
            <style>
              body { font-family: sans-serif; padding: 24px; background: #0F172A; color: white; line-height: 1.6; }
              h2 { color: #06C755; border-bottom: 2px solid #334155; padding-bottom: 8px; }
              #notes { font-size: 18px; margin-top: 16px; background: #1E293B; padding: 20px; border-radius: 8px; }
              .header { display: flex; justify-content: space-between; font-size: 14px; color: #94A3B8; }
            </style>
          </head>
          <body>
            <div class="header">
              <span id="slide-num">Slide -- / --</span>
              <span>LINE Smart Queue Assistant</span>
            </div>
            <h2 id="slide-title">準備中...</h2>
            <div id="notes">発表者ノートがここに表示されます。</div>
            <script>
              window.addEventListener('message', (e) => {
                if (e.data.type === 'SLIDE_CHANGE') {
                  document.getElementById('slide-num').textContent = 'Slide ' + e.data.slideIndex + ' / ' + e.data.totalSlides;
                  document.getElementById('slide-title').textContent = e.data.title;
                  document.getElementById('notes').innerHTML = e.data.notes;
                }
              });
            </script>
          </body>
          </html>
        `);
        updatePresenterNotes();
      }
    } else {
      presenterWindow.focus();
    }
  }

  // Event Listeners for Controls
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Touch Swipe Handling
  let touchStartX = 0;
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  viewport.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    } else if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  });

  // Initial Load Parse
  parseHash();
});

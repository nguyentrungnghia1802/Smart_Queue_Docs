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

  // Keep the presentation labels editorial rather than template-like.
  document.querySelectorAll('.slide-tag').forEach((tag) => {
    tag.textContent = tag.textContent.replace(/^Slide\s*\d+\s*(?:—|–|-)\s*/i, '');
  });

  // Emoji headings looked decorative and inconsistent with the product system.
  document.querySelectorAll('.feature-card h3').forEach((heading) => {
    heading.textContent = heading.textContent.replace(/^[\s\u{1F000}-\u{1FAFF}\u{2300}-\u{27BF}\u200D\uFE0F]+\s*/u, '');
  });

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

  // Button Listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

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

  // Initialize from URL hash
  parseHash();
});

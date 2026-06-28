(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  if (stored === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggle.setAttribute('aria-pressed', 'true');
  }

  toggle.addEventListener('click', function () {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggle.setAttribute('aria-pressed', 'false');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggle.setAttribute('aria-pressed', 'true');
    }
  });

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  const nav = document.querySelector('nav');
  const progressBar = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');
  const atmosphere = document.getElementById('atmosphere');
  const horizonLayers = document.querySelectorAll('.hero-horizon span');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = docHeight > 0 ? scrollTop / docHeight : 0;

    progressBar.style.width = (fraction * 100) + '%';
    nav.classList.toggle('scrolled', scrollTop > 4);
    backToTop.classList.toggle('visible', scrollTop > window.innerHeight * 0.6);

    atmosphere.style.transform = 'translateY(' + (fraction * -60) + 'px)';
    atmosphere.style.filter = 'blur(50px) hue-rotate(' + (fraction * 20) + 'deg)';

    horizonLayers.forEach(function (layer) {
      const speed = parseFloat(layer.dataset.speed) || 0;
      layer.style.transform = 'translateY(' + (scrollTop * speed * -1) + 'px)';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* CUSTOM-EASED SCROLL */
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(t));
      if (t < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;
      e.preventDefault();
      smoothScrollTo(targetEl.getBoundingClientRect().top + window.scrollY, 700);
    });
  });

  backToTop.addEventListener('click', function () {
    smoothScrollTo(0, 700);
  });

  /* CARD TILT */
  const tiltEls = document.querySelectorAll('.info-card, .project-card, .skill-col-accent, .skill-col');

  tiltEls.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = 'perspective(700px) rotateX(' + (y * -4) + 'deg) rotateY(' + (x * 4) + 'deg) translateY(-3px)';
    });

    el.addEventListener('mouseleave', function () {
      el.style.transform = '';
    });
  });
})();

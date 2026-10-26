(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Mbyll menynë' : 'Hap menynë');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  const languageButton = document.querySelector('.lang-switch');
  let language = 'sq';
  languageButton.addEventListener('click', () => {
    language = language === 'sq' ? 'en' : 'sq';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-sq][data-en]').forEach(element => {
      element.innerHTML = element.dataset[language];
    });
    languageButton.innerHTML = language === 'sq' ? 'EN <span>↗</span>' : 'SQ <span>↗</span>';
    languageButton.setAttribute('aria-label', language === 'sq' ? 'Switch language to English' : 'Ndërro gjuhën në shqip');
    document.title = language === 'sq' ? 'Gert Lula — Programues & krijues në Tiranë' : 'Gert Lula — Programmer & creator in Tirana';
  });

  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('is-hidden', button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter);
    });
  }));

  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const recipient = data.get('team');
    const subject = `${data.get('name')} — Portfolio contact`;
    const body = `Name: ${data.get('name')}\nReply email: ${data.get('email') || '(not provided)'}\n\n${data.get('message')}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-note').textContent = language === 'sq'
      ? 'Drafti i email-it u përgatit. Kontrolloje dhe dërgoje nga aplikacioni yt.'
      : 'Your email draft is ready. Review and send it from your email app.';
  });

  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll('.section-label, .intro-content, .values, .project-card, .journey-item, .path-step, .first-portfolio, .achievement-card, .contact-card').forEach(el => {
      el.setAttribute('data-reveal', '');
      observer.observe(el);
    });
  }
})();

// Mobile navigation
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  if (!toggle || !menu) return;

  var scrim = document.createElement('div');
  scrim.className = 'nav-scrim';
  document.body.appendChild(scrim);

  function setOpen(open) {
    menu.classList.toggle('open', open);
    scrim.classList.toggle('show', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });
  scrim.addEventListener('click', function () { setOpen(false); });

  // Close menu when a link is tapped (but let dropdown parents stay)
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 880) setOpen(false);
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 880) setOpen(false);
  });
})();

// FAQ accordion — keep only one open at a time
(function () {
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();

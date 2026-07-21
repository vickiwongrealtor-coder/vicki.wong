document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-site-nav]');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var roleButtons = document.querySelectorAll('[data-role-btn]');
  var rolePanels = document.querySelectorAll('[data-role-panel]');
  if (roleButtons.length) {
    roleButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var role = btn.getAttribute('data-role-btn');
        roleButtons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        rolePanels.forEach(function (panel) {
          panel.hidden = panel.getAttribute('data-role-panel') !== role;
        });
      });
    });
  }
});

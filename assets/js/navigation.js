// Navigation Component
function createNavigation(activePage = '') {
  return `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="index.html">
          <p class="title is-size-5 has-text-weight-bold">ŘLP Ostrava</p>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item ${activePage === 'index.html' ? 'is-active' : ''}" href="index.html">Homepage</a>
          <a class="navbar-item ${activePage === 'historie.html' ? 'is-active' : ''}" href="historie.html">Historie</a>
          <a class="navbar-item ${activePage === 'atco-list.html' ? 'is-active' : ''}" href="atco-list.html">ATCO</a>
          <a class="navbar-item ${activePage === 'bo-cdd-list.html' ? 'is-active' : ''}" href="bo-cdd-list.html">BO/CDD</a>
          <a class="navbar-item ${activePage === 'ts.html' ? 'is-active' : ''}" href="ts.html">TS</a>
          <a class="navbar-item ${activePage === 'vedouci-rlp.html' ? 'is-active' : ''}" href="vedouci-rlp.html">Vedoucí ŘLP</a>
          <a class="navbar-item ${activePage === 'vedouci-klmt.html' ? 'is-active' : ''}" href="vedouci-klmt.html">Vedoucí LKMT</a>
          <a class="navbar-item ${activePage === 'galerie.html' ? 'is-active' : ''}" href="galerie.html">Galerie</a>
        </div>
      </div>
    </nav>
  `;
}

function initNavigation() {
  const navContainer = document.getElementById('navigation');
  if (navContainer) {
    const activePage = navContainer.dataset.page || '';
    navContainer.innerHTML = createNavigation(activePage);
  }

  // Initialize mobile menu toggle
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
}

// Auto-initialize if navigation container exists
if (typeof window !== 'undefined') {
  initNavigation();
}
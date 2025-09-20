// Navigation Component
function createNavigation(activePage = '') {
  return `
    <nav class="bg-white flex justify-between items-center px-4 border-b-1 border-gray-100 shadow-md" role="navigation" aria-label="main navigation">
      <div class="">
        <a class="px-4" href="index.html">
          <h3 class="text-gray-700">ŘLP Ostrava</h3>
        </a>
      </div>

      <div id="navbarBasic">
        <div class="flex items-center font-semibold">
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600 border-r-1 border-gray-300 ${activePage === 'index.html' ? 'is-active font-bold text-black' : ''}" href="index.html">Homepage</a>
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600  border-r-1 border-gray-300 ${activePage === 'historie.html' ? 'is-active font-bold text-black' : ''}" href="historie.html">Historie</a>
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600  border-r-1 border-gray-300 ${activePage === 'atco-list.html' ? 'is-active font-bold text-black' : ''}" href="atco-list.html">ATCO</a>
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600  border-r-1 border-gray-300 ${activePage === 'bo-cdd-list.html' ? 'is-active font-bold text-black' : ''}" href="bo-cdd-list.html">BO/CDD</a>
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600  border-r-1 border-gray-300 ${activePage === 'ts.html' ? 'is-active font-bold text-black' : ''}" href="ts.html">TS</a>
          <a class="px-4 py-3 transition-colors duration-200  text-gray-600  border-r-1 border-gray-300 ${activePage === 'vedouci-rlp.html' ? 'is-active font-bold text-black' : ''}" href="vedouci-rlp.html">Vedoucí ŘLP</a>
          <a class="px-4 py-3 transition-colors duration-200  text-gray-600 text-gray-600 border-r-1 border-gray-300 ${activePage === 'vedouci-klmt.html' ? 'is-active font-bold text-black' : ''}" href="vedouci-klmt.html">Vedoucí LKMT</a>
          <a class="px-4 py-3 transition-colors duration-200 text-gray-600  ${activePage === 'galerie.html' ? 'is-active font-bold text-black' : ''}" href="galerie.html">Galerie</a>
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
          el.classList.toggle('is-active font-bold text-black');
          $target.classList.toggle('is-active font-bold text-black');
        });
      });
    }
  });
}

// Auto-initialize if navigation container exists
if (typeof window !== 'undefined') {
  initNavigation();
}
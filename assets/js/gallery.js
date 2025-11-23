class GalleryRenderer {
  constructor(data, containerId) {
    this.data = data;
    this.container = document.getElementById(containerId);
  }

  init() {
    this.render();
  }

  render() {
    this.container.innerHTML = '';

    this.data.forEach(section => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'mb-12';

      sectionEl.innerHTML = `
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">${section.title}</h2>
          <p class="text-gray-600">${section.description}</p>
        </div>
        <div class="gallery-grid">
          ${this.renderImages(section.images)}
        </div>
      `;

      this.container.appendChild(sectionEl);
    });
  }

  renderImages(images) {
    return `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${images.map(img => `
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="${img.src}" alt="${img.alt}" class="w-full h-64 object-cover" loading="lazy">
            <div class="p-4">
              <p class="text-sm font-medium text-gray-900">${img.title}</p>
              <p class="text-xs text-gray-500 mt-1">${img.width}x${img.height}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (typeof galleryData !== 'undefined') {
    const gallery = new GalleryRenderer(galleryData, 'gallery-content');
    gallery.init();
  }
});

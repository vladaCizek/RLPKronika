class HistorieRenderer {
  constructor() {
    this.data = null;
    this.container = null;
  }

  async loadData() {
    try {
      // Import the historie data from the module
      const { historieData } = await import('../../data/historie/historie.js');
      this.data = historieData;
    } catch (error) {
      console.error('Error loading historie data:', error);
      this.data = {
        title: 'Historie řízení letového provozu v Ostravě',
        subtitle: 'ŘÍZENÍ LETOVÉHO PROVOZU V OSTRAVĚ V BĚHU ČASU',
        description: 'Přehled historie řízení letového provozu na letišti Ostrava od roku 1936 do současnosti.',
        navigation: [],
        sections: []
      };
    }
  }

  render(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container || !this.data) return;

    const html = `
      <div class="wrapper">
        <div>
          <!-- Sidebar Navigation -->
          <div>
            <nav>
              <p>Historická období</p>
              ${this.renderNavigation()}
            </nav>
          </div>

          <!-- Main Content -->
          <div>
            <div>
              <h1>${this.data.title}</h1>
              <p>${this.data.description}</p>

              <!-- Title Section -->
              <section id="uvod">
                <div>
                  <h2>${this.data.subtitle}</h2>
                  <h3>1936-2026</h3>
                </div>
              </section>

              ${this.renderSections()}

            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderNavigation() {
    return this.data.navigation.map(navItem => `
      <a href="${navItem.href}">
        ${navItem.label}
      </a>
    `).join('');
  }

  renderSections() {
    return this.data.sections.map(section => `
      <section id="${section.id}">
        <div>
          <h2>${section.title}</h2>

          <div>
            <div>
              <div>
                ${this.renderSectionContent(section)}
              </div>
            </div>

            <div>
              ${this.renderSectionImages(section)}
            </div>
          </div>
        </div>
      </section>
    `).join('');
  }

  renderSectionContent(section) {
    let html = '';

    // Render description paragraphs
    if (section.content.description) {
      html += section.content.description.map(paragraph =>
        `<p>${paragraph}</p>`
      ).join('');
    }

    // Render timeline if present
    if (section.content.timeline) {
      section.content.timeline.forEach(timelineItem => {
        html += `<h3>${timelineItem.year}</h3>`;
        if (timelineItem.events.length === 1) {
          html += `<p>${timelineItem.events[0]}</p>`;
        } else {
          html += timelineItem.events.map(event =>
            `<p><strong>${event.split(' ')[0]}</strong> ${event.substring(event.indexOf(' ') + 1)}</p>`
          ).join('');
        }
      });
    }

    // Render additional info if present
    if (section.content.additionalInfo) {
      html += section.content.additionalInfo.map(info =>
        `<p>${info}</p>`
      ).join('');
    }

    return html;
  }

  renderSectionImages(section) {
    return section.images.map(image => `
      <figure>
        <img src="${image.src}" alt="${image.alt}" onerror="this.style.display='none'">
        <figcaption><small>${image.caption}</small></figcaption>
      </figure>
    `).join('');
  }

  initializeScrollNavigation() {
    // Smooth scrolling for sidebar navigation links only
    const navLinks = document.querySelectorAll('section nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update active state
          navLinks.forEach(l => {
            l.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });

    // Highlight current section on scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => {
            l.classList.remove('active');
          });
          const activeLink = document.querySelector(`a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    });
  }

  async init(containerId) {
    await this.loadData();
    this.render(containerId);
    this.initializeScrollNavigation();
  }
}

window.HistorieRenderer = HistorieRenderer;
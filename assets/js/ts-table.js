class TSTable {
  constructor() {
    this.data = null;
    this.container = null;
  }

  async loadData() {
    try {
      const response = await fetch('data/ts.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading TS data:', error);
      this.data = { header: '', subtitle: '', personnel: [] };
    }
  }

  render(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container || !this.data) return;

    const html = `
      <p>${this.data.header}</p>
      <p><strong>${this.data.subtitle}</strong></p>
      
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Jméno</th>
            <th>Doba na AD - profese</th>
          </tr>
        </thead>
        <tbody>
          ${this.renderPersonnelRows()}
        </tbody>
      </table>
    `;

    this.container.innerHTML = html;
  }

  renderPersonnelRows() {
    let html = '';
    
    this.data.personnel.forEach(person => {
      if (person.isHeader) {
        html += `
          <tr class="has-background-info-light">
            <td><strong>${person.name}</strong></td>
            <td></td>
          </tr>
        `;
      } else {
        html += `
          <tr>
            <td>${person.name}</td>
            <td>${person.details || ''}</td>
          </tr>
        `;
      }
    });

    return html;
  }

  async init(containerId) {
    await this.loadData();
    this.render(containerId);
  }
}

window.TSTable = TSTable;
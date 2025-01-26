const SectionTwo = {
  render: () => {
    const self = SectionTwo;
    let html = `
      <section id="section_two" class="section section_two">
        <div class="text-center">
          ${Headline('TASTE THE COLOURS')}
        </div>
        <div class="card_list">
          <div class="row">
            ${SectionTwo.renderCardList()}
          </div>
        </div>
      </section>
    `;

    return html;
  },

  renderCardList: () => {
    let html = '';

    // Render card from mock data
    html = Utils.cards.map( card => {
      return Card.render(card);
    }).join('');

    return html;
  }
}
const Card = {
  render: (card) => {
    let html = `
      <div class="card_item col-12 col-md-6 col-xl-4 text-center">
        <a href="#" target="_self" onclick="Card.handleAnchorClick(this, '${card.title}', '${card.url}')">
          <div class="card_img">
            <img src="${card.img_src}" alt="${card.title}" class="img-fluid" />
          </div>
          <div class="card_content">
            <div class="card_title">
              <h3>${card.title}</h3>
            </div>

            <div class="card_description">
              <p>${card.description}</p>
            </div>
          </div>
        </a>
      </div>
    `;

    return html;
  },

  handleAnchorClick: (element, title, url) => {
    console.log(`<a> tag clicked on ${title}`);
    console.log(element);
    console.log(`This will direct to 'Test the colours: ${title}' page by window.location.href = '${url}'`)
  }
}
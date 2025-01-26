const SectionOne = {
  modal_id: 'section_one_modal_id',

  render: () => {
    const self = SectionOne;
    let html = `
      <section id="section_one" class="section section_one">
        <div class="row">
          <div class="col-7 left">
            ${self.renderLeft()}
          </div>
          <div class="col-5 right">
            ${self.renderRight()}
          </div>
        </div>
        ${Modal.render(self.modal_id)}
      </section>
    `;

    return html;
  },

  renderLeft: () => {
    let html = `
      <div class="d-flex justify-content-between gap-2">
        <div>
          <img src="assets/images/SectionOne/Left.png" alt="Left.png" class="img-fluid" onclick="SectionOne.handleImageClick(this)"/>
        </div>
        <div>
          <div class="d-flex flex-column justify-content-between gap-2">
            <div>
              <img src="assets/images/SectionOne/RightTop.png" alt="RightTop.png" class="img-fluid" onclick="SectionOne.handleImageClick(this)"/>
            </div>
            <div>
              <img src="assets/images/SectionOne/RightBottom.png" alt="RightBottom.png" class="img-fluid" onclick="SectionOne.handleImageClick(this)"/>
            </div>
          </div>
        </div>
      </div>
    `;

    return html;
  },

  renderRight: () => {
    let html = `
      ${Headline('WHAT DOES COOKING MEAN?')}
      <div class="body">
        <div class="content">
          Is it simply applying heat to a food product? A way of making certain food safe to eat?
          Or a way to create flavour and make food more appealing?
          This is just part of what Hervé This, the father of molecular gastronomy,
          has dedicated his life to finding out. We spoke to him to find out what his experiments have told him.
          And in the process even discovered the secret to cooking the perfect egg...
        </div>

        <div class="callout">
          <h3>THE PERFECT EGG</h3>
          <p>
            Keep water between 67 and 68°C for a flavourful, tender yolk
          </p>
        </div>
      </div>
    `;

    return html;
  },

  handleImageClick: (element) => {
    const self = SectionOne;
    // Open modal with image when click on the images
    console.log('<img> clicked');
    console.log(element);

    // Create modal content
    let html = `
      <div>
        <img src="${element.src}"/>
      </div>
    `;

    Modal.openModal(self.modal_id, html);
  }
}
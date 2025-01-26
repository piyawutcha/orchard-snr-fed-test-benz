let init=()=>{console.log("Init Tasteology page");var e=[SectionOne.render(),SectionTwo.render()].join("");Utils.inject("container",e)};
let SectionOne={modal_id:"section_one_modal_id",render:()=>{var e=SectionOne;return`
      <section id="section_one" class="section section_one">
        <div class="row">
          <div class="col-7 left">
            ${e.renderLeft()}
          </div>
          <div class="col-5 right">
            ${e.renderRight()}
          </div>
        </div>
        ${Modal.render(e.modal_id)}
      </section>
    `},renderLeft:()=>`
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
    `,renderRight:()=>`
      ${Headline("WHAT DOES COOKING MEAN?")}
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
    `,handleImageClick:e=>{var i=SectionOne,e=(console.log("<img> clicked"),console.log(e),`
      <div>
        <img src="${e.src}"/>
      </div>
    `);Modal.openModal(i.modal_id,e)}};
let Card={render:i=>`
      <div class="card_item col-4 text-center">
        <a href="#" target="_self" onclick="Card.handleAnchorClick(this, '${i.title}', '${i.url}')">
          <div class="card_img">
            <img src="${i.img_src}" alt="${i.title}" class="img-fluid" />
          </div>
          <div class="card_content">
            <div class="card_title">
              <h3>${i.title}</h3>
            </div>

            <div class="card_description">
              <p>${i.description}</p>
            </div>
          </div>
        </a>
      </div>
    `,handleAnchorClick:(i,c,l)=>{console.log("<a> tag clicked on "+c),console.log(i),console.log(`This will direct to 'Test the colours: ${c}' page by window.location.href = '${l}'`)}};
let SectionTwo={render:()=>{SectionTwo;return`
      <section id="section_two" class="section section_two">
        <div class="text-center">
          ${Headline("TASTE THE COLOURS")}
        </div>
        <div class="card_list">
          <div class="row">
            ${SectionTwo.renderCardList()}
          </div>
        </div>
      </section>
    `},renderCardList:()=>Utils.cards.map(e=>Card.render(e)).join("")};
let Headline=e=>`
    <h1 class="headline">${e}</h1>
  `;
let Modal={render:o=>`
      <dialog id="${o}">
        <div class="modal_close" onclick="Modal.closeModal('${o}')">
          X
        </div>
        <div id="${o}_content" class="modal_content"></div>
      </dialog>
    `,openModal:(o,l)=>{var e=document.getElementById(o);e&&(console.log("Open modal"),Utils.inject(o+"_content",l),e.showModal())},closeModal:o=>{o=document.getElementById(o);o&&(console.log("Close modal"),o.close())}};
let Utils={inject:(e,t)=>{e=document.getElementById(e);e&&(e.innerHTML=t)},cards:[{id:1,title:"Red",description:"Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",img_src:"assets/images/SectionTwo/Red.png",url:"/taste-the-colours/red"},{id:2,title:"Green",description:"Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",img_src:"assets/images/SectionTwo/Green.png",url:"/taste-the-colours/green"},{id:3,title:"White",description:"White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",img_src:"assets/images/SectionTwo/White.png",url:"/taste-the-colours/white"}]};
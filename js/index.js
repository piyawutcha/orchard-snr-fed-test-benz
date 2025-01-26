const init = () => {
  console.log('Init Tasteology page');

  // Get html for Section 1 and 2 and inject into div.container
  let sections = [SectionOne.render(), SectionTwo.render()].join('');

  Utils.inject('container', sections);
}

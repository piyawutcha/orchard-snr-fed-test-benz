const init = () => {
  console.log('Init Tasteology page');

  let sections = [SectionOne.render(), SectionTwo.render()].join('');

  Utils.inject('container', sections);
}

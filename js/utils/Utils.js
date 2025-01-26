const Utils = {
  /**
   *
   * @param {String} container_id
   * @param {String} html_content
   * Inject html text into element
   * Use element id to get element
   */
  inject: (container_id, html_content) => {
    const element = document.getElementById(container_id);

    if (element) {
      element.innerHTML = html_content;
    }
  },

  // Mock data for cards in 'TASTE THE COLOURS' section
  cards: [
    {
      id: 1,
      title: 'Red',
      description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
      img_src: 'assets/images/SectionTwo/Red.png',
      url: '/taste-the-colours/red',
    },
    {
      id: 2,
      title: 'Green',
      description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
      img_src: 'assets/images/SectionTwo/Green.png',
      url: '/taste-the-colours/green',
    },
    {
      id: 3,
      title: 'White',
      description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
      img_src: 'assets/images/SectionTwo/White.png',
      url: '/taste-the-colours/white',
    }
  ]
}
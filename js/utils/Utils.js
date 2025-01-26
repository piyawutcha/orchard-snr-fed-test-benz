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
  }
}
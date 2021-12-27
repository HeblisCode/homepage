class Config {
  configJSON = {};

  constructor() {
    const savedConfigJSON = localStorage.getItem("homePageConfigJSON");
    if (savedConfigJSON) {
      this.configJSON = JSON.parse(savedConfigJSON);
    }
  }

  getLinks() {
    return this.configJSON.links;
  }

  getTitle() {
    return this.configJSON.title;
  }
}

export default Config;

import { registerSW } from './register.js';

export class Proxy {
  constructor(settings = {}) {
    this.message_area = settings.message_area || null;
    this.debug = settings.debug || false;
  }

  async register(url) {
    await registerSW(this.debug, this.message_area);
    
    if (!/^http(s)?:\/\//.test(url)) {
      url = "https://" + url;
    }

    if (!/^http(s)?:\/\/([a-zA-Z0-9_-]+\.)+[a-z0-9]+\/\S/.test(url)) {
      console.log("Invalid url: " + url);
      return;
    }

    window.location.href = "./p.html";
  }
}

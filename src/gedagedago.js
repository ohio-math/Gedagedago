import { registerSW } from './register.js';

export class Proxy {
  constructor(settings = {}) {
    this.message_area = settings.message_area || null;
    this.debug = settings.debug || false;
  }

  register() {
    registerSW(this.debug, this.message_area);
  }
}

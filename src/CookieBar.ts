import { createHtmlElement, createHTMLElementFromText as crText } from '@helper/CBDom.ts';
import texts from '@/lang/pl_PL.json';

const CookieBarDefaults = {
  overlay: true
};

export default class CookieBar {
  private config;
  public constructor(config = {}) {
    this.config = {...CookieBarDefaults, ...config};
  }

  show() {
    const cookieBar = createHtmlElement({
      nodeType: 'div',
      className: 'cookieBar',
    });
    console.info('cookies', cookieBar);

    const p = createHtmlElement({
      nodeType: 'p',
      className: 'info',
      content: texts.alert_description,
    });
    cookieBar.append(p);

    const buttons = crText(`<div><button type="button">Zobacz zgody</button></div>`);
    cookieBar.append(buttons);

    if (this.config.overlay) {

      document.body.append(
        crText(`<div class="cookieBarOverlay"></div>`)
      );
    }

    document.body.append(cookieBar);
  }

}
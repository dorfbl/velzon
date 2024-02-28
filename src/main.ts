import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import localeHe from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}
registerLocaleData(localeHe);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { enableProdMode, Injector, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { appInjector } from './app/shared/helpers';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((appRef: NgModuleRef<Injector>) => {
    // store a reference to the application injector
    appInjector(appRef.injector);
  })
  .catch(err => console.error(err))

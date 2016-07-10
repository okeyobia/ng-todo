import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2TodoAppAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2TodoAppAppComponent, [ HTTP_PROVIDERS ]);

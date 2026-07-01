import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { BrowserStorageService } from './browser-storage-service';
import { BrowserstorageServerService } from './browserstorage-server-service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: BrowserStorageService,
      useClass: BrowserstorageServerService
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';

// Finally, we export an unique provider from our Interceptor module that we will then pull
// into our app.config.ts file to wire the Interceptor into our pipelines.

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};

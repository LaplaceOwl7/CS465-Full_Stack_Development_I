import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // We annotate our class with the Injectable tag which allows the class to function as a
  // provider, while implementing the HttpInterceptor interface allows us to step into the
  // middle of an http pipeline.

  constructor(
    private authenticationService: AuthenticationService
  ) {} // Our constructor is used to bring our AuthenticationService into scope for this class.

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var isAuthAPI: boolean;
    // console.log('Interceptor::URL' + request.url);

    if (request.url.startsWith('login') || request.url.startsWith('register')) {
      isAuthAPI = true;
    } else {
      isAuthAPI = false;
    }

    if (this.authenticationService.isLoggedIn() && !isAuthAPI) {
      let token = this.authenticationService.getToken();
      // console.log(token);

      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}

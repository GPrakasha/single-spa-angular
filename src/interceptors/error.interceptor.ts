import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  PV_USER_SERVICE,
  PvUserService,
} from '@pv-frontend/pv-shared-services/pv-user-service';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  public constructor(
    @Inject(PV_USER_SERVICE) public userService: PvUserService
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.userService.logoutUser();
            this.userService.notifyUserLogin(false);
            this.userService.updateTokenExpiry(true);
          }
          if (error instanceof HttpErrorResponse) {
            throwError(() => new Error(error.message));
          }
        },
      })
    );
  }
}

import { DOCUMENT } from '@angular/common';
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
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public environment_type = '';
  public clientId = '';

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PV_USER_SERVICE) public pvUserService: PvUserService
  ) {
    this.environment_type = this.document.location.hostname.includes('sandbox')
      ? 'sandbox'
      : 'prod';
  }

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '-1',
        'X-Download-Options': 'noopen',
        'x-country-id': environment.countryId,
        'x-client-id': environment.clientId,
        'x-project-id': environment.projectId,
      },
    });
    const token: string = this.pvUserService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else if (
      request.url.includes('/user/user_cards') ||
      request.url.endsWith('/user')
    ) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.pvUserService.getTempToken(),
        },
      });
    }

    const userCardId: string = this.pvUserService.getSelectedUserCardId();
    if (userCardId) {
      request = request.clone({
        setHeaders: {
          'x-user-card-id': userCardId,
        },
      });
    }

    return next.handle(request).pipe(
      tap(
        (response: HttpEvent<unknown>) => {
          return response;
        },
        (error: HttpErrorResponse) => {
          return error;
        }
      )
    );
  }
}

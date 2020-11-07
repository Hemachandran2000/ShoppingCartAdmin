import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttphelperService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    return next.handle(request).pipe(tap(evt => {
      if (evt instanceof HttpResponse) {
        //console.log('Response => ' + JSON.stringify(evt));
      }
    }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('Error => ' + err);
        }
        return of(err);
      }));
  }
}

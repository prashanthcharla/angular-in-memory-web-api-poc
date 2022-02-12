import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, filter, retry } from 'rxjs/operators';
import { FrequentHttpHeaders } from "../common/HttpHeaders";

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Attach headers to every request
        const reqClone = req.clone({
            setHeaders: FrequentHttpHeaders
        });

        return next.handle(reqClone).pipe(

            // Retry calling the http method one more time on failure
            retry(1),

            // Check if the request is related to college, so that we want to modify only the response from collge API'S 
            filter(event => event instanceof HttpResponse && reqClone.url.includes('college')),

            // tap((response: HttpResponse<any>) => console.log("Reponse - ", response.body)),

            // Handle Error
            catchError((error: HttpErrorResponse) => {
                alert(`You got error with ${reqClone.url}`);
                return throwError(error);
            })
        );
    }

}
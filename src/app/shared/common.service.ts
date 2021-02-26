import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    auth: any;
    myBalance: any;
    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    postService(url, data?: any): any {
        return this.http.post(environment.domain + url, data).pipe(map(res => res),
            catchError(err => throwError(err))
        );
    }

    updateService(url, data?: any, dummy?: any): any {
        return this.http.patch(environment.domain + url, data).pipe(map(res => res),
            catchError(err => throwError(err))
        );
    }

    getService(url, data?: any): any {
        return this.http.get(environment.domain + url, data).pipe(map(res => res),
            catchError(err => throwError(err))
        );
    }

    deleteService(url, data?: any): any {
        return this.http.delete(environment.domain + url, data).pipe(map(res => res),
            catchError(err => throwError(err))
        );
    }

}


import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WebRequestInterceptor implements HttpInterceptor {

    intercept() {

    }
}

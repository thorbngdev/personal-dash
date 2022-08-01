import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

    readonly prefix: string = '/';

    constructor(public router: Router) {}

    goTo(url: string) {
        this.router.navigateByUrl(`${this.prefix}${url}`);
    }

}
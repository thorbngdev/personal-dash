import { RouterService } from './../../utils/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public routerService: RouterService) { }

    ngOnInit(): void {
    }

}

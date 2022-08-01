import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['name', 'value'];
    user: any = null;

    constructor() { }

    ngOnInit(): void {
        // subsituir o mock pelo service
        const mockUser: User = {
            id: 1,
            name: 'Eduardo',
            data: {
                income: [
                    {
                        name: 'Salario',
                        value: 10000
                    }
                ],
                outcome: [
                    {
                        name: 'Aluguel',
                        value: 2000
                    }
                ],
                result: [
                    {
                        name: 'Resultado',
                        value: 8000
                    }
                ]
            }
        }
        this.user = mockUser;
    }

}

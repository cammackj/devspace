import { AccountService } from './../../services/account.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    public model: any = {};
    public loggedIn = false;

    constructor(private accountService: AccountService) {}

    public login() {
        this.accountService.login(this.model).subscribe({
            next: response => {
                console.log(response);
                this.loggedIn = true;
            },
            error: error => console.log(error.error)
        })
    }

    public logout() {
        this.loggedIn = false;
    }

}

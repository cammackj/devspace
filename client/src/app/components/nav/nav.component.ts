import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public model: any = {};
    currentUser$: Observable<User | null> = of(null)

    constructor(private accountService: AccountService) {}

    public ngOnInit(): void {
        this.currentUser$ = this.accountService.currentUser$;
    }

    public login() {
        this.accountService.login(this.model).subscribe({
            next: response => {
                // TODO: Handle the response
                console.log(response);
            },
            error: error => console.log(error.error)
        })
    }

    public logout() {
        this.accountService.logout();
    }

}

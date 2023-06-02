import { AccountService } from './services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'DevSpace';
    public users: any;

    constructor(private http: HttpClient, private accountService: AccountService) { }

    public ngOnInit(): void {
        this.getUsers();
        this.setCurrentUser();
    }

    private getUsers() {
        // TODO: Move to a service
        this.http.get('https://localhost:7042/api/users').subscribe({
            next: response => this.users = response,
            error: error => console.log(error),
            complete: () => { }
        })
    }

    private setCurrentUser() {
        const userString = localStorage.getItem('user');
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountService.setCurrentUser(user);
    }
}

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

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        // TODO: Move to a service
        this.http.get('https://localhost:7042/api/users').subscribe({
            next: response => this.users = response,
            error: error => console.log(error),
            complete: () => { }
        })
    }
}

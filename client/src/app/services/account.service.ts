import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private currentUserSource = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSource.asObservable();

    constructor(private http: HttpClient) {}

    public login(model: any) {
        return this.http.post<User>(environment.baseUrl + 'account/login', model).pipe(
            map((response: User) => {
                const user = response;
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.currentUserSource.next(user);
                }
            })
        );
    }

    public logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }

    public setCurrentUser(user: User) {
        this.currentUserSource.next(user);
    }

}

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient) { }
    login(model: any) {
        return this.http.post(environment.baseUrl + 'account/login', model);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public registerMode = false;
    public ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    public registerToggle() {
        this.registerMode = !this.registerMode;
    }
}

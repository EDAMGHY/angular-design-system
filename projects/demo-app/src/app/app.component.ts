// app.component.ts
import { Component } from '@angular/core';
import { menus } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Business';
  menus = menus.filter((menu) => !menu.hide);
}

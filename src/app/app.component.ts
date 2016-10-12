import { Component } from '@angular/core';

@Component({
  selector: 'rcg-app',
  template: `
    <rcg-header></rcg-header>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/game" routerLinkActive="active">Game (lazy)</a>
    </nav>

    <router-outlet></router-outlet>
    <rcg-footer></rcg-footer>

  `
})
export class AppComponent { }

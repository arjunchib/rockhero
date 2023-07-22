import { Component, OnInit } from '@angular/core';

declare global {
  var SONGS: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rockhero';
}

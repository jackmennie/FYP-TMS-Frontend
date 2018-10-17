import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FYP-TMS-Frontend';

  tiles: Tile[] = [
    {text: '', cols: 4, rows: 1, color: 'grey'},
    {text: 'sidebar', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Content', cols: 3, rows: 2, color: 'lightgreen'},
    {text: 'Footer', cols: 4, rows: 1, color: 'lightpink'},
  ];
}

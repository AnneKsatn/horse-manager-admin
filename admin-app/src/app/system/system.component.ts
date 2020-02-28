import { Component } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  text: string;
}

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html'

})

export class SystemComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, color: 'lightblue'},
    {text: 'Two', cols: 11, color: 'lightgreen'},
  ];
}

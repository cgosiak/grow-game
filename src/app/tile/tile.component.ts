import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  color: string = "#ffffff";

  constructor() { }

  ngOnInit(): void {
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  clickedTile() {
    this.color = this.getRandomColor();
  }

}

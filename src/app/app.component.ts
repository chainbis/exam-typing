import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 randText = '';
 typing = '';
 foundError = false;
  ngOnInit() {
    this.randText = lorem.words();
  }
  onChange(inputText: string) {
    this.typing = inputText;
  }
  charClass(char: string, i: number): string {
    if (i >= this.typing.length){
      return '';
    }
    if (this.typing[i] === char) {
      if (i === this.typing.length - 1 ) {

      }
      return 'green';
    } else {
      this.foundError  = false;
      return 'red';
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fibonacci';
  length: number;
  first: number;
  second: number;
  third: number;
  result: string = "";

  onClick() {
    this.first = 0;
    this.second = 1;
    this.third = 0;
    this.result = "The Fibonacci Series is " + this.first.toString() + " " + this.second.toString() + " ";

    for (var i = 2; i < this.length; i++)
    {
      this.third = this.first + this.second;
      this.first = this.second;
      this.second = this.third;
      this.result += this.third.toString() + " ";
    }
  }
}

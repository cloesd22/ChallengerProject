import { Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  burgerViewSender = new EventEmitter<object>();




}

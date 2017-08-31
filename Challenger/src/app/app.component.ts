import { Component, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {StandardComsService} from './services/ui/standard-coms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  @ViewChild('collapsableMenu') hamburgerMenu:ElementRef;

  burgerViewSender = new EventEmitter<object>();

  constructor(private coms:StandardComsService){

  }

  onHamburgerClick(){
  	this.coms.emitPackage(this.hamburgerMenu.nativeElement.id);
  }

}

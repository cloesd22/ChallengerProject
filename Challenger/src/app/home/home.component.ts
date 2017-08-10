import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

backgroundImage:string = "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-19.jpg";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-response',
  templateUrl: './challenge-response.component.html',
  styleUrls: ['./challenge-response.component.css']
})
export class ChallengeResponseComponent implements OnInit {

	challengeid:number=1;
	
  constructor() { }

  ngOnInit() {
  }

}

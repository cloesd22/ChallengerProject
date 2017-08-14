import { Component, OnInit,Input } from '@angular/core';
import {challenge} from '../models/challenge.model';

@Component({
  selector: 'app-challenge-response',
  templateUrl: './challenge-response.component.html',
  styleUrls: ['./challenge-response.component.css']
})
export class ChallengeResponseComponent implements OnInit {

	@Input('channelInput') panelChallenge:challenge;
	challengeid:number=1;
	
  constructor() { }

  ngOnInit() {
  }

  upvote(){
  	this.panelChallenge.addUpvote;
  	console.log("upvote");
  }

  downvote(){
  	this.panelChallenge.addDownvote;
  	console.log("downvote");
  }

}

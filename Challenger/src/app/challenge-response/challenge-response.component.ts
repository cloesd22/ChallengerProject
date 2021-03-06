import { Component, OnInit,Input } from '@angular/core';
import {challenge} from '../models/challenge.model';



@Component({
  selector: 'app-challenge-response',
  templateUrl: './challenge-response.component.html',
  styleUrls: ['./challenge-response.component.css']
})
export class ChallengeResponseComponent implements OnInit {

	@Input('channelInput') panelChallenge:challenge;
  panelid:string;
	
  replyOpen = false;

  constructor() { }

  ngOnInit() {

    this.panelid = this.panelChallenge.challengeID;

  }

  upvote(){
  	this.panelChallenge.addUpvote;
  	console.log("upvote");
  }

  downvote(){
  	this.panelChallenge.addDownvote;
  	console.log("downvote");
  }

  openReply(){
    this.replyOpen = !this.replyOpen;
  }

  closeReply() {
		this.replyOpen = false;
	}


}

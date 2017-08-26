import { Component, OnInit } from '@angular/core';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';



@Component({
  selector: 'app-tommorow-challenge-main',
  templateUrl: './tommorow-challenge-main.component.html',
  styleUrls: ['./tommorow-challenge-main.component.css']
})
export class TommorowChallengeMainComponent implements OnInit {


		challengeListing:challenge[];

  constructor(private chlnglst:challengeListing) { }

  ngOnInit() {


		this.chlnglst.getList();
		

		this.challengeListing = this.chlnglst.challengeList;


		this.chlnglst.ChallengeListLink.subscribe((data:challenge[])=>{
			
		this.challengeListing = data;})
	}


}

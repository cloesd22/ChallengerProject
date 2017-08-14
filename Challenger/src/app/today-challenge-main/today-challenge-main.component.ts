import { Component, OnInit } from '@angular/core';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';

@Component({
  selector: 'app-today-challenge-main',
  templateUrl: './today-challenge-main.component.html',
  styleUrls: ['./today-challenge-main.component.css']
})
export class TodayChallengeMainComponent implements OnInit {

	todaysChallenge:challenge;


  constructor(private chlnglst:challengeListing) { }

  ngOnInit() {
  
  }

}

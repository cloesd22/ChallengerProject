import { Component, OnInit } from '@angular/core';
import {challenge} from '../models/challenge.model';

@Component({
  selector: 'app-today-challenge-main',
  templateUrl: './today-challenge-main.component.html',
  styleUrls: ['./today-challenge-main.component.css']
})
export class TodayChallengeMainComponent implements OnInit {

	todaysChallenge:challenge;

  constructor() { }

  ngOnInit() {
  	
  }

}

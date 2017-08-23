import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

	@ViewChild('f') formdetails:NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  addChallenge(){

  	console.log(this.formdetails.value.title);
	console.log(this.formdetails.value.description);
  }

  returnToTmr(){
  	this.router.navigate(['/tommorow']);
  }


}

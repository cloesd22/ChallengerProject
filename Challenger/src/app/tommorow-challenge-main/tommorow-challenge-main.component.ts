import { Component, OnInit, TemplateRef } from '@angular/core';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';



@Component({
  selector: 'app-tommorow-challenge-main',
  templateUrl: './tommorow-challenge-main.component.html',
  styleUrls: ['./tommorow-challenge-main.component.css']
})
export class TommorowChallengeMainComponent implements OnInit {

	public modalRef: BsModalRef;
	challengeListing:challenge[];

	constructor(private chlnglst:challengeListing, private modalService: BsModalService) { }

	ngOnInit() {


		this.chlnglst.getList();
		

		this.challengeListing = this.chlnglst.challengeList;


		this.chlnglst.ChallengeListLink.subscribe((data:challenge[])=>{
			
			this.challengeListing = data;})
	}


  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    console.log("bleh");
  }


}

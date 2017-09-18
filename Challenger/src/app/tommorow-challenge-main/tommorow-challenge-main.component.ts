import { Component, OnInit, TemplateRef } from '@angular/core';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'



@Component({
  selector: 'app-tommorow-challenge-main',
  templateUrl: './tommorow-challenge-main.component.html',
  styleUrls: ['./tommorow-challenge-main.component.css']
})
export class TommorowChallengeMainComponent implements OnInit {

	public modalRef: BsModalRef;
	challengeListing:challenge[];

  dataloaded:boolean = false;

	newChallengeForm: FormGroup;

	imageuploadData = null;

	constructor(private chlnglst:challengeListing, private modalService: BsModalService) { }

	ngOnInit() {

    this.chlnglst.fillList().then(()=>{
      this.challengeListing = this.chlnglst.challengeList;

      this.chlnglst.ChallengeListLink.subscribe((data:challenge[])=>{

       this.challengeListing = data;})

      this.dataloaded=true;
       
    });
		

		this.formInit();
	}


	formInit(){
		this.newChallengeForm = new FormGroup({
			'title':new FormControl(null,Validators.required),
			'challengeText':new FormControl(null,Validators.required),
		})
	}


  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  imageUploaded(imagedata){
  	console.log(imagedata.file);
  	this.imageuploadData = imagedata.file;
  }

  onNewChallenge(){

  	if (this.imageuploadData ==null)
  	{
  		//set default image file.
  	}

  	console.log({"data":this.newChallengeForm,"imgvalue":this.imageuploadData})
  }


  sortByTop(){
  	this.challengeListing = this.challengeListing.sort((a,b)=>{

  		if((a.getchallengeUpvote() - a.getchallengeDownvote())>(b.getchallengeUpvote() - b.getchallengeDownvote())){
  			return 1;
  		}else{
  			return -1;
  		}

  	})
  	console.log(this.challengeListing);

  }

  sortByRecent(){
  	this.challengeListing = this.challengeListing.sort((a,b)=>{

  		if(a.getchallengeDate() > b.getchallengeDate()){
  			return 1;
  		}else{
  			return -1;
  		}

  	})
  	console.log(this.challengeListing);
  }

   sortByHated(){
  	this.challengeListing = this.challengeListing.sort((a,b)=>{

  		if((a.getchallengeUpvote() - a.getchallengeDownvote())>(b.getchallengeUpvote() - b.getchallengeDownvote())){
  			return -1;
  		}else{
  			return 1;
  		}

  	})
  	console.log(this.challengeListing);
  }

  testfuc(){
    this.chlnglst.sampleFill();
  }


}

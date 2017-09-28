import { Component, OnInit, TemplateRef } from '@angular/core';
import { challengeListing } from '../models/challengeListing.model';
import { challenge } from '../models/challenge.model';
import { comment } from '../models/comment.model';
import { commentListing } from '../models/comment-listing.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'app-today-challenge-main',
	templateUrl: './today-challenge-main.component.html',
	styleUrls: ['./today-challenge-main.component.css']
})
export class TodayChallengeMainComponent implements OnInit {


	formloaded = false;
	todaysChallenge: challenge;
	attachedCommentTree: comment[];
	public modalRef: BsModalRef;
	newCommentForm: FormGroup;

	constructor(private chlnglst: challengeListing, private cmtLst: commentListing, private modalService: BsModalService) { }

	ngOnInit() {
		this.chlnglst.fillList().then(() => {
			this.todaysChallenge = this.chlnglst.getFromListByID('C1')[0];
			this.cmtLst.FindCommentbyParentID(this.todaysChallenge.getchallengeID());
			this.formloaded = true;
		});

		this.cmtLst.RefreshCommentList();
		this.cmtLst.commentService.subscribe((data) => {
			this.attachedCommentTree = data;
		});
		this.forminit();
	}


	forminit() {

		this.newCommentForm = new FormGroup({
			'commentText': new FormControl(null, Validators.required)
		});
	}

	public openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}

	onCommentSubmit() {

		//Produces a comment object out of the reply text
		//sends the object to the database
		//referesh/restores the UI.

		var newComment = new comment({'commentID':"CX",
		'characterText':this.newCommentForm.value.commentText,
		'commentParent':this.todaysChallenge.challengeID,
		'commentUpvotes':0,
		'commentDownvotes':0,
		'reports':0});

		this.cmtLst.insertComment(newComment,() => {
			this.cmtLst.RefreshCommentList();
			this.modalRef.hide();
		});




	}

	loadsamplecomments() {
		this.cmtLst.PopulateSampleComments();
	}





}

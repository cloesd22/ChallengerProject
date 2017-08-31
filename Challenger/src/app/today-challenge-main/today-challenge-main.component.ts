import { Component, OnInit } from '@angular/core';
import {challenge} from '../models/challenge.model';
import {challengeListing} from '../models/challengeListing.model';
import {comment} from '../models/comment.model';
import {commentListing} from '../models/comment-listing.model';

@Component({
  selector: 'app-today-challenge-main',
  templateUrl: './today-challenge-main.component.html',
  styleUrls: ['./today-challenge-main.component.css']
})
export class TodayChallengeMainComponent implements OnInit {

	todaysChallenge:challenge;
	attachedCommentTree:comment[];


  constructor(private chlnglst:challengeListing, private cmtLst:commentListing) { }

  ngOnInit() {
	this.todaysChallenge = this.chlnglst.getFromListByID("C1")[0];

	this.cmtLst.commentService.subscribe((data)=>{
		this.attachedCommentTree = data;
	})

	this.cmtLst.FindCommentbyParentID(this.todaysChallenge.getchallengeID());

	console.log(this.attachedCommentTree);


  }




}

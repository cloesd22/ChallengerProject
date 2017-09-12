import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import {StandardComsService} from '../services/ui/standard-coms.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'

@Component({
  selector: 'app-comment-panel',
  templateUrl: './comment-panel.component.html',
  styleUrls: ['./comment-panel.component.css']
})
export class CommentPanelComponent implements OnInit {

  @ViewChild('moreOptionsDropdown') moreOptionsDropdown:ElementRef;
  //more options dropdown visible on mobile devices only (xs)

  replyOpen:boolean = false;
  newCommentForm: FormGroup;

  @Input('commentDetails') commentDetails;

  //use comment ID to control which dropdown menu opens!
  //the IDs are bieng used inside the HTML to define the ID of the elemnt
  //The elements are then being passed when they are clicked on including their ID which is then checked at the uiDirective
  //THis way you can have a procedural number of comments on the page and the directive neatly only opens the one you clicked.

  constructor(private coms:StandardComsService) { }

  ngOnInit() {
    this.forminit();
  }


  forminit(){

    this.newCommentForm = new FormGroup({
      'commentText' : new FormControl(null,Validators.required)
    });
  }


  onClickMoreOptions(){
  	this.coms.emitPackage("commentDropdown"+this.commentDetails.commentID);
  }

  openReply(){
  	this.replyOpen = true;
  }

  closeReply(){
  	this.replyOpen = false;
  }

  onCommentSubmit(){
    console.log(this.newCommentForm);
    this.closeReply();
  }

}

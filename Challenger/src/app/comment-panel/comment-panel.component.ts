import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import {StandardComsService} from '../services/ui/standard-coms.service';

@Component({
  selector: 'app-comment-panel',
  templateUrl: './comment-panel.component.html',
  styleUrls: ['./comment-panel.component.css']
})
export class CommentPanelComponent implements OnInit {

  @ViewChild('moreOptionsDropdown') moreOptionsDropdown:ElementRef;
  //more options dropdown visible on mobile devices only (xs)

  @Input('commentDetails') commentDetails;

  //use comment ID to control which dropdown menu opens!
  //the IDs are bieng used inside the HTML to define the ID of the elemnt
  //The elements are then being passed when they are clicked on including their ID which is then checked at the uiDirective
  //THis way you can have a procedural number of comments on the page and the directive neatly only opens the one you clicked.

  constructor(private coms:StandardComsService) { }

  ngOnInit() {

  }


  onClickMoreOptions(){
  	this.coms.emitPackage("commentDropdown"+this.commentDetails.commentID);
  }



}

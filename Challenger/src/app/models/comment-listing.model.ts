import {comment} from './comment.model';
import {EventEmitter} from '@angular/core';

export class commentListing{
	//test class simulating a database providing data until firebase setup

		testcomment1 = {"idValue":"D1","textValue":"This could be the best idea in history, Just WoW. This is fantastic " ,"parentID":"C1","upvotes":21,"downvotes":4,"reports":2};
		testcomment2 = {"idValue":"D2","textValue":"Yeah no, i don't think that's a good idea" ,"parentID":"C1","upvotes":323,"downvotes":4,"reports":2};
		testcomment3 = {"idValue":"D3","textValue":"But sometimes it could be, like in some other place" ,"parentID":"C1","upvotes":2,"downvotes":4,"reports":2};
		testcomment4 = {"idValue":"D4","textValue":"Yeah okay that might work" ,"parentID":"C1","upvotes":3,"downvotes":8,"reports":2};
		testcomment5 = {"idValue":"D5","textValue":"I disagree this is nuts" ,"parentID":"C1","upvotes":24,"downvotes":6,"reports":2};

		commentList:comment[] = [new comment(this.testcomment1),
								 new comment(this.testcomment2),
								 new comment(this.testcomment3),
								 new comment(this.testcomment4),
								 new comment(this.testcomment5)]


		 commentService = new EventEmitter<comment[]>();
		 //to be moved to seperate comment service and expanded.

		constructor(){

		}

		FindCommentbyID(id){
			//returns an array of comments by ID.
			var comment =  this.commentList.filter((data)=>{
				return(data.commentID == id)
			});

			this.commentService.emit(comment);

		}

		FindCommentbyParentID(id){
			var comment = this.commentList.filter((data)=>{
				return(data.commentParent == id)

			});

			this.commentService.emit(comment);
		}


}



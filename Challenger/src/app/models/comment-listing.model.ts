import {comment} from './comment.model';
import {EventEmitter} from '@angular/core';

export class commentListing{
	//test class simulating a database providing data until firebase setup

		testcomment1 = {"idValue":"D1","textValue":"lorem Ipsum" ,"parentID":"C1","upvotes":23,"downvotes":4,"reports":2};
		testcomment2 = {"idValue":"D1","textValue":"lorem Ipsum" ,"parentID":"C1","upvotes":23,"downvotes":4,"reports":2};
		testcomment3 = {"idValue":"D1","textValue":"lorem Ipsum" ,"parentID":"C1","upvotes":23,"downvotes":4,"reports":2};
		testcomment4 = {"idValue":"D1","textValue":"lorem Ipsum" ,"parentID":"C1","upvotes":23,"downvotes":4,"reports":2};
		testcomment5 = {"idValue":"D1","textValue":"lorem Ipsum" ,"parentID":"C1","upvotes":23,"downvotes":4,"reports":2};

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



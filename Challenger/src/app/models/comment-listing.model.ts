import { sample } from 'rxjs/operator/sample';
import { comment } from './comment.model';
import { EventEmitter, Injectable } from '@angular/core';
import { FirebaseCommService } from '../services/httpComm/firebase-comm.service';

@Injectable()
export class commentListing {
	// test class simulating a database providing data until firebase setup

	testcomment1 = new comment({ 'commentID': 'D1', 'characterText': 'This could be the best idea in history, Just WoW. This is fantastic ', 'commentParent': 'C1', 'commentUpvotes': 21, 'commentDownvotes': 4, 'reports': 2 });
	testcomment2 = new comment({ 'commentID': 'D2', 'characterText': 'Yeah no, i don\'t think that\'s a good idea', 'commentParent': 'C1', 'commentUpvotes': 323, 'commentDownvotes': 4, 'reports': 2 });
	testcomment3 = new comment({ 'commentID': 'D3', 'characterText': 'But sometimes it could be, like in some other place', 'commentParent': 'C1', 'commentUpvotes': 2, 'commentDownvotes': 4, 'reports': 2 });
	testcomment4 = new comment({ 'commentID': 'D4', 'characterText': 'Yeah okay that might work', 'commentParent': 'C1', 'commentUpvotes': 3, 'commentDownvotes': 8, 'reports': 2 });
	testcomment5 = new comment({ 'commentID': 'D5', 'characterText': 'I disagree this is nuts', 'commentParent': 'C1', 'commentUpvotes': 24, 'commentDownvotes': 6, 'reports': 2 });


	commentList: comment[] = [new comment(this.testcomment1),
	new comment(this.testcomment2),
	new comment(this.testcomment3),
	new comment(this.testcomment4),
	new comment(this.testcomment5)];


	commentService = new EventEmitter<comment[]>();
	// to be moved to seperate comment service and expanded.
	constructor(private fbComm: FirebaseCommService) {

	}

	FindCommentbyID(id) {
		// returns an array of comments by ID.
		const comment = this.commentList.filter((data) => {
			return (data.commentID === id);
		});

		this.commentService.emit(comment);
	}

	FindCommentbyParentID(id) {
		const comment = this.commentList.filter((data) => {
			return (data.commentParent === id);

		});

		this.commentService.emit(comment);
	}

	RefreshCommentList = () => {
		// refreshes the current challenge list.
		this.commentList = [];
		return new Promise((resolve, reject) => {
			this.fbComm.getdata('commenttbl').subscribe((data) => {
				const resp = data.json();
				resp.map((element) => {
					this.commentList.push(new comment({
						'commentID': "CX",
						'characterText': element.characterText,
						'commentParent': element.commentParent,
						'commentUpvotes': 0,
						'commentDownvotes': 0,
						'reports': 0
					}));
				});
				this.distributeLatestComment();
				resolve();
			});
		});
	}

	distributeLatestComment() {
		// uses the commentservice to distribute copy of comment list to template.
		this.commentService.emit(this.commentList);
	}



	PopulateSampleComments() {
		// Testing function to load sample comments into server.
		// GET the comment array listed here to populate the sampleList array and send it to the database.
		const testcomment1 = new comment({ 'commentID': 'D1', 'characterText': 'This could be the best idea in history, Just WoW. This is fantastic ', 'commentParent': 'C1', 'commentUpvotes': 21, 'commentDownvotes': 4, 'reports': 2 });
		const testcomment2 = new comment({ 'commentID': 'D2', 'characterText': 'Yeah no, i don\'t think that\'s a good idea', 'commentParent': 'C1', 'commentUpvotes': 323, 'commentDownvotes': 4, 'reports': 2 });
		const testcomment3 = new comment({ 'commentID': 'D3', 'characterText': 'But sometimes it could be, like in some other place', 'commentParent': 'C1', 'commentUpvotes': 2, 'commentDownvotes': 4, 'reports': 2 });
		const testcomment4 = new comment({ 'commentID': 'D4', 'characterText': 'Yeah okay that might work', 'commentParent': 'C1', 'commentUpvotes': 3, 'commentDownvotes': 8, 'reports': 2 });
		const testcomment5 = new comment({ 'commentID': 'D5', 'characterText': 'I disagree this is nuts', 'commentParent': 'C1', 'commentUpvotes': 24, 'commentDownvotes': 6, 'reports': 2 });
		const SampleCommentList: comment[] = [];
		SampleCommentList.push(testcomment1);
		SampleCommentList.push(testcomment2);
		SampleCommentList.push(testcomment3);
		SampleCommentList.push(testcomment4);
		SampleCommentList.push(testcomment5);

		console.log(SampleCommentList);
		this.fbComm.pushMass(SampleCommentList, 'commenttbl').subscribe((data) => {
			console.log('inserted: ' + data);
		}, (error) => {
			console.log('Unable to pushMass sample comments - ' + error);
		});
	}

	insertComment(comment, callback) {
		// calls pushIndividual function which returns a promise.
		// once the promise is resolved, then subscribe to it (because it's a HTTP patch function)
		this.fbComm.pushIndividual(comment, 'commenttbl').then((data) => {
			data.subscribe((res) => {
				callback();
			});
		});
	}
}





export class comment {

	commentID: string;
	// unique reference to the comment C1234 refers to challenge1234,
	// D1234 refers to discussion 1234 (comment1234)

	characterText: string;
	// string to hold a comment

	commentParent: string;
	// reference to comment's parent's uniqueID or ChallengeID.

	commentUpvotes: number;
	commentDownvotes: number;
	reports: number;

	constructor(commentCreationPackage:  {
			commentID:  string,
			characterText:  string,
			commentParent:  string,
			commentUpvotes:  number,
			commentDownvotes:  number,
			reports:  number}) {
		this.commentID = commentCreationPackage.commentID;
		this.characterText = commentCreationPackage.characterText;
		this.commentParent = commentCreationPackage.commentParent;
		this.commentUpvotes = commentCreationPackage.commentUpvotes;
		this.commentDownvotes = commentCreationPackage.commentDownvotes;
		this.reports = commentCreationPackage.reports;
	}

	getcommentID() {
		return this.commentID;
	}

	addUpvote() {
		this.commentUpvotes++;
	}

	addDownvote() {
		this.commentDownvotes++;
	}

	addReport() {
		this.reports++;
	}

	editComment(commentEditPackage) {
/* 		this.commentID = commentEditPackage.idValue;
		this.characterText = commentEditPackage.textValue;
		this.commentParent = commentEditPackage.parentID;
		this.commentUpvotes = commentEditPackage.upvotes;
		this.commentDownvotes = commentEditPackage.downvotes;
		this.reports = commentEditPackage.reports; */
	}

}

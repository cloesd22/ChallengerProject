

export class comment{

	commentID : string;
	//unique reference to the comment C1234 refers to challenge1234,
	//D1234 refers to discussion 1234 (comment1234)

	characterText : string;
	//string to hold a comment

	commentParent : string;
	//reference to comment's parent's uniqueID or ChallengeID.

	commentUpvotes: number;
	commentDownvotes: number;
	reports: number;

	constructor(commentCreationPackage){
		this.commentID=commentCreationPackage.idValue;
		this.characterText=commentCreationPackage.textValue;
		this.commentParent=commentCreationPackage.parentID;
		this.commentUpvotes=commentCreationPackage.upvotes;
		this.commentDownvotes=commentCreationPackage.downvotes;
		this.reports= commentCreationPackage.reports;
	}

	getcommentID(){
		return this.commentID;
	}

	addUpvote(){
		this.commentUpvotes++;
	}

	addDownvote(){
		this.commentDownvotes++;
	}

	addReport(){
		this.reports++;
	}

	editComment(commentEditPackage){
		this.commentID=commentEditPackage.idValue;
		this.characterText=commentEditPackage.textValue;
		this.commentParent=commentEditPackage.parentID;
		this.commentUpvotes=commentEditPackage.upvotes;
		this.commentDownvotes=commentEditPackage.downvotes;
		this.reports= commentEditPackage.reports;
	}

}
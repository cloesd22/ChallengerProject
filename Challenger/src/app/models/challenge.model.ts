
export class challenge{

	public challengeID : string;
	public userID: string;
	public challengeHeading :  string;
	public challengeText: string;
	public challengeDate: Date;
	public challengeImgUrl:string;
	public challengeUpvote:number;
	public challengeDownvote:number;
	public report:number=0;


	constructor(challengeData : {id,uid,heading,text,date,imgurl}){
		this.challengeID = challengeData.id;
		this.userID = challengeData.uid;
		this.challengeHeading=challengeData.heading;
		this.challengeText=challengeData.text;
		this.challengeDate=challengeData.date;
		this.challengeImgUrl=challengeData.imgurl;
		this.challengeUpvote=0;
		this.challengeDownvote=0;

	}

	getchallengeID(){
		return this.challengeID;
	}

	getchallengeUpvote(){
		return this.challengeUpvote;
	}

	getchallengeDownvote(){
		return this.challengeDownvote;
	}

	getchallengeDate(){
		return this.challengeDate;
	}

	addUpvote(){
		this.challengeUpvote++;
	}

	addDownvote(){
		this.challengeDownvote++;
	}

	addReport(){
		this.report++;
	}



}
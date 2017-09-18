
export class challenge{

	public challengeID : string;
	private userID: string;
	private challengeHeading :  string;
	private challengeText: string;
	private challengeDate: Date;
	private challengeImgUrl:string;
	private challengeUpvote:number;
	private challengeDownvote:number;
	private report:number=0;


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
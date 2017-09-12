
export class challenge{

	public challengeID : string;
	private challengeHeading :  string;
	private challengeText: string;
	private challengeDate: Date;
	private challengeImgUrl:string;
	private challengeUpvote:number;
	private challengeDownvote:number;
	private report:number=0;


	constructor(id,heading,text,date,imgurl){
		this.challengeID = id;
		this.challengeHeading=heading;
		this.challengeText=text;
		this.challengeDate=date;
		this.challengeImgUrl=imgurl;
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
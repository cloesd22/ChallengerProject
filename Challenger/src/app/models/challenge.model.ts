
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

	addUpvote(){
		this.challengeUpvote++;
	}

	addDownvote(){
		this.challengeDownvote++;
	}

	addReport(){
		this.report++;
	}

	updateChallenge(id=this.challengeID,
					heading=this.challengeHeading,
					text=this.challengeText,
					date=this.challengeDate,
					imgurl=this.challengeImgUrl)
	{
		//updates any parameters passed, while setting any unset parameter to it's original value
	}

}
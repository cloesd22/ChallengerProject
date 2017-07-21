
export class challenge{

	private challengeID : string;
	private challengeHeading :  string;
	private challengeText: string;
	private challengeDate: Date;
	private challengeImgUrl:string;
	private challengeUpvote:number;
	private challengeDownvote:number;


	constructor(id,heading,text,date,imgurl){
		this.challengeID = id;
		this.challengeHeading=heading;
		this.challengeText=text;
		this.challengeDate=date;
		this.challengeImgUrl=imgurl;
		this.challengeUpvote=0;
		this.challengeDownvote=0;

	}


	addUpvote(){
		this.challengeUpvote++;
	}

	addDownvote(){
		this.challengeDownvote++;
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
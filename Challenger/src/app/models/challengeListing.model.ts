import {challenge} from './challenge.model';
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject';
import {Response,Request} from '@angular/http';
import {FirebaseCommService} from '../services/httpComm/firebase-comm.service';

@Injectable()
export class challengeListing{
	//test class simulating a database providing data until firebase setup



	challengeList:challenge[] = [];

/*		challengeList:challenge[] = 
	[	new challenge({id:'C1',
		uid:2,
		heading:"TestChallenge1",
		text:"y five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I",
		date:new Date("October 1, 2016 11:13:00"),
		imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/80/Knut_IMG_8095.jpg"}),
	new challenge({id:'C2',
		uid:2,
		heading:"TestChallenge2",
		text:" of a page when looking at its layout. The point of using Lorem Ipsum is that it has a mor",
		date:new Date("October 12, 2016 11:13:00"),
		imgurl:"https://static.pexels.com/photos/34950/pexels-photo.jpg"}),
	new challenge({id:'C3',
		uid:2,
		heading:"TestChallenge3",
		text:" be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the In",
		date:new Date("October 13, 2016 11:13:00"),
		imgurl:"https://blogs.adelaide.edu.au/research/files/2016/03/feat-img-gravity-speaks.jpg"}),
	new challenge({id:'C4',
		uid:2,
		heading:"TestChallenge4",
		text:"f Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.1",
		date:new Date("October 8, 2016 11:13:00"),
		imgurl:"http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=55"}),
	new challenge({id:'C5',
		uid:2,
		heading:"TestChallenge5",
		text:"m is simply dummy text of the printing and typesetting industry. Lorem Ips",
		date:new Date("October 3, 2016 11:13:00"),
		imgurl:"https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"})
	];*/
	
	ChallengeListLink = new Subject();

	constructor(private fbComm:FirebaseCommService){


	}


	fillList = ()=>{
		this.challengeList = [];
		return new Promise((resolve,reject)=>{
			this.fbComm.getdata("challengetbl").subscribe((data:Response)=>{
				var resp  = data.json();
				
				resp.forEach((data=>{
					this.challengeList.push(new challenge({id:data.challengeID,
						uid:data.userID,
						heading:data.challengeHeading,
						text:data.challengeText,
						date:data.challengeDate,
						imgurl:data.challengeImgUrl}))
		
				}))
	
				resolve();
			})
		})
	}
	challengeData : {id,uid,heading,text,date,imgurl}

	sampleFill(){
		//testing function to populate remote challenge table with sample data
		this.fbComm.pushMass(this.challengeList,"challengetbl").subscribe((data)=>{
			console.log('data');
			return data;

		});
	}

	getList(){
		//passes challengeList on request via subject
		this.ChallengeListLink.next(this.challengeList);
	}

	removeFromList(id){

	}

	getFromListByID(id:string):challenge[]{

		var challengesender = this.challengeList.filter((challengetoReturn)=>{
			return challengetoReturn.challengeID ==id;		
		});
			return challengesender;
	}



}
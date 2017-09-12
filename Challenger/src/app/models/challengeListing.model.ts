import {challenge} from './challenge.model';
import {Subject} from 'rxjs/Subject';

export class challengeListing{
	//test class simulating a database providing data until firebase setup

	challengeList:challenge[] = [
	new challenge('C1',"TestChallenge1","It cost 82 crore and was built in 11 months which is a record for the construction of an indoor stadium of international standard. With a 131-metre sheet, the stadium is Asia's first stadium which has the longest single-sheet roof.",new Date("October 13, 2012 11:13:00"),"https://static.pexels.com/photos/34950/pexels-photo.jpg"),
	new challenge('C2',"TestChallenge2",". Sed nec velit justo. Praesent sollicitudin molestie velit eget rutrum. Fusce sed condimentum nisl. Donec quis urna molestie, convallis velit et, eleifend leo. Donec hendrerit massa nec elit sollicitudin facilisis. Ut porta dictum tortor, vel sodales ligula aliquam ut. Suspendisse commodo egestas iaculis. Phasellus mag",new Date("October 13, 2011 11:13:00"),"https://static.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg"),
	new challenge('C3',"TestChallenge3","tis quam, et ullamcorper lacus. In porta eros ex, in feugiat odio ornare id. Pellentesque dignissim efficitur enim. Pellentesque tristique, orci ut blandit finibus, turpis ipsum varius eros, ut feugiat orci mauris non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phase",new Date("October 13, 2016 11:13:00"),"http://maxpixel.freegreatpicture.com/static/photo/1x/Parachute-Sky-Diving-Diving-Sport-Sky-Chatham-235553.jpg"),
	new challenge('C4',"TestChallenge4","tique lectus at orci gravida venenatis. Nulla quis maximus neque. Morbi finibus luctus vulputate. Mauris eget purus euismod, posuere erat ac, gravida metus. Ut feug",new Date("October 13, 2014 11:13:00"),"https://static.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg"),
	new challenge('C5',"TestChallenge5"," mattis. Nullam purus lectus, facilisis sed efficitur quis, finibus blandit libero. Praesent vitae venenatis sem. In id placerat ante. Aenean tempor urna eu metus auctor, a hendrerit erat luctus. Cras commodo justo quis sagittis semper. Nam ac volutpat arcu. Ut dignissim augue nec nibh semper, et gravida orci elementum. Ut felis nibh, pretium at lobortis sit amet, auctor et risus. Pellentesque ut lobortis magna. Aliquam erat volutpat. Nam ",new Date("October 13, 2014 11:13:00"),"http://maxpixel.freegreatpicture.com/static/photo/1x/Lokken-North-Sea-Sea-Fishing-Boat-Denmark-Beach-49523.jpg")];

	ChallengeListLink = new Subject();

	constructor(){


	}

	fillList(){
		//pulls challenge data from backend
		
	}

	getList(){
		//passes challengeList on request via subject
		this.ChallengeListLink.next(this.challengeList);
	}

	removeFromList(id){

	}

	getFromListByID(id:string){

		var challengesender = this.challengeList.filter((challengetoReturn)=>{
			return challengetoReturn.challengeID ==id;		
		});
			return challengesender;
	}



}
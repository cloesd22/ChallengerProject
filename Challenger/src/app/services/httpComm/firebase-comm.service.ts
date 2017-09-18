
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class FirebaseCommService {

	//holds firebase calls for basic get/set requests

  constructor(private comm:Http) { }

  getdata(table:string){
  	//makes a call to get all data from a specified table
  	return this.comm.get('https://challenger-dbd.firebaseio.com/'+table+'.json');
  }

  pushMass(data:any[], table:string){
  	//pushes a mass of data to the specified table
  	return this.comm.put('https://challenger-dbd.firebaseio.com/'+table+'.json',data);
  }


}

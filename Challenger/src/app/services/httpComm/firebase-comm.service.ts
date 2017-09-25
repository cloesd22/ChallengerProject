
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';
import { challenge } from '../../models/challenge.model';


@Injectable()
export class FirebaseCommService {

	// holds firebase calls for basic get/set requests
	url = 'https://challenger-dbd.firebaseio.com/';



	constructor(private comm: Http) { }

	getdata(table: string) {
		// makes a call to get all data from a specified table
		return this.comm.get(this.url + table + '.json');
	}

	pushMass(data: any[], table: string) {
		// pushes a mass of data to the specified table
		console.log('pushingMass');	
		return this.comm.put(this.url + table + '.json', data);
	}



	pushIndividual = (datatoEnter, table: string): Promise<Observable<string>> => {

		// returns a promise, which resolves INTO the formatted PATCH call to be subscribed to.
		// but only after getting the latest data from the server using this.getdata, so as to be able to count how many entries
		// are already on the database and formatting the new entry's ID into last id+1

		return new Promise((resolve, reject) => {

			let previouselementCount = 0;

			this.getdata(table).subscribe((data) => {

				console.log(data);
				data = data.json();
				previouselementCount = Object.keys(data).length;
				console.log('current value = ' + previouselementCount);
				previouselementCount = previouselementCount;
				console.log(previouselementCount);
				resolve(this.comm.patch(this.url + table + '/' + previouselementCount + '.json', datatoEnter));

			});

		});

	}

	getLastProperty = (property, condition, table: string) => {
		// gets last <property> value from table, where value meets condition
		// useful for retrieving last comment by user etc.
		return new Promise((resolve, reject) => {

			this.comm.get(this.url + table + '.json').subscribe((data) => {
				// gets JSON of the response
				const dataJSON = data.json();


				// runs a filter using the condition function if provided
				// once filter is complete restores value to JSON
				if (condition) {
					dataJSON.filter((element) => {
						condition(element);
					});
				}

				// counts last property
				const previouselementCount = Object.keys(dataJSON).length - 1;
				console.log(previouselementCount);
				console.log(dataJSON[11]);

				console.log(property);
				// returns property value
				resolve(dataJSON[previouselementCount][property]);
			});

		});


	}


}

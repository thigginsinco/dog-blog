import { Injectable } from "@angular/core";

import { Friend } from "./friend";
import { Park } from "./park";
import { Visit } from "./visit";

@Injectable()
export class DataService {

	private friends: Friend[] = [
		{ park: '1st Creek', friend: 'Candy, Eric', dog: 'Rambo, Cody', note: 'German Shepherds', pic: '' },
		{ park: '1st Creek', friend: 'Stephanie', dog: 'Piper', note: 'Bug', pic: '' },
		{ park: '1st Creek', friend: 'Jana', dog: 'Rocky, Lilly', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Steven', dog: 'Leo', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Angie', dog: 'Sarge', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Scott', dog: 'Axel', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Peyton', dog: 'Finley, Hailey', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Nikki, Dave', dog: 'Kai, Maddy', note: '', pic: '' },
		{ park: '1st Creek', friend: 'Adam, Corynn', dog: 'Indy', note: '', pic: '' },
		{ park: 'Tony Grampsas', friend: 'Joyce', dog: 'Rosie', note: '', pic: '' },
		{ park: 'Fruitdale', friend: 'Steve', dog: 'Flash', note: 'Cattle mix', pic: 'flash.jpg' },
	];

	private parks: Park[] = [
		{ id: 1, park: '1st Creek', location: 'Commerce City', note: 'nice park in the middle of nowhere', pic: '1stcreek.jpg', 
			water: true, shade: true, seating: true, grass: true, rock: true},
		{ id: 2, park: 'Fruitdale', location: 'Wheat Ridge', note: 'no water, no shade, no seats', pic: 'fruitdale.jpg', 
			water: false, shade: false, seating: true, grass: true, rock: true},
		{ id: 3, park: 'Tony Grampsas', location: 'Golden', note: 'nice park outside of Golden', pic: 'grampsas.jpg', 
			water: false, shade: true, seating: true, grass: true, rock: true},
		{ id: 4, park: 'W Arvada Dog Park', location: 'Arvada', note: 'big open space park', pic: 'warvada.jpg', 
			water: false, shade: true, seating: true, grass: true, rock: true},
	];

	private visits: Visit[] = [
		{ park: '1st Creek', date: '2015/07/07', note: 'Billie caught a rabbit in the small dog area. After getting her to drop it.'},
		{ park: '1st Creek', date: '2015/11/07', note: 'Billie ran around all crazy and had a blast.'},
		{ park: 'Fruitdale', date: '2015/02/07', note: 'Billie and Shadow fought in the snow.'}

	];

	getParks(): Park[] {
		return this.parks;
	}

	getPark(parkId: number) {
		return this.parks.find((p: Park) => {
			return p.id === parkId;
		});
	}
	// add default information to create a new park
	addPark(cb) {
		let park = {
			location: "",
			park: "",
			note: "",
			pic: "default.jpg",
			water: false,
			shade: false,
			seating: false,
			rock: false,
			grass: false,
			id: this.parks.length + 1
		};
		this.parks.push(park);
		// console.log(this.parks.length);

		cb(park);
	}

	// getFriends(parkName: string) {
	// 	return this.friends.find((f: Friend) => {
	// 		return f.park === parkName;
	// 	});
	// }


	getFriends(parkName): Friend[] {
		let parray = [];
		// console.log(parkName, "input park name");
		for (let f of this.friends) {
			// console.log(f.park, "pname");
			if (f.park === parkName) {
				parray.push(f);
			}
		}
		// console.log(this.parray, "array");
		// console.log(parkName, "park name");
		return parray;
	}

	getFriend(friendName: string) {
		return this.friends.find((f: Friend) => {
			return f.friend === friendName;
		});
	}

	addFriend(parkname, cb) {
		let friend = {
			park: parkname,
			friend: "",
			dog: "",
			note: "",
			pic: "goat2.jpg",
		};
		this.friends.push(friend);
		cb(friend);
	}

	getVisit(parkName: string, parkDate: string) {
		return this.visits.find((v: Visit) => {
			// console.log(v.park, "get visit data");
			// console.log(parkName, v.park === parkName);

			return v.park === parkName && v.date === parkDate;
		});
	}

	getVisits(parkName: string) {
		return this.visits.filter((v: Visit) => {
			// console.log(v.park, "get VISITS data");
			// console.log(parkName, v.park === parkName);
			return v.park === parkName;
		});
	}

	addVisit(parkname, cb) {
		console.log("add visit", parkname);
			var date = new Date();
			var month = date.getUTCMonth() + 1;
			// if (month < 10) {
			// 	month = "0" + month;
			// }
			var day = date.getUTCDate();
			var year = date.getUTCFullYear();
			var newdate = year + "/" + month + "/" + day;
			let visit = {
			park: parkname,
			date: newdate,
			note: ""
		};
		this.visits.push(visit);
		cb(visit);
	}

	public bgimage: string = "1stcreek.jpg";

}

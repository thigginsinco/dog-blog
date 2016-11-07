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
		{ park: 'Fruitdale', friend: 'Steve', dog: 'Flash', note: 'Cattle mix', pic: '' },
	];

	private parks: Park[] = [
		{ id: 1, park: '1st Creek', location: 'Commerce City', note: 'nice park in the middle of nowhere', pic: '1stcreek.jpg'},
		{ id: 2, park: 'Fruitdale', location: 'Wheat Ridge', note: 'no water, no shade, no seats', pic: 'fruitdale.jpg'},
		{ id: 3, park: 'Tony Grampsas', location: 'Golden', note: 'nice park outside of Golden', pic: 'grampsas.jpg'},
		{ id: 4, park: 'W Arvada Dog Park', location: 'Arvada', note: 'big open space park', pic: 'warvada.jpg'},
	];

	private visits: Visit[] = [
		{ park: '1st Creek', date: '7/07/2015', note: 'Billie caught a rabbit' },
	];

	getParks(): Park[] {
		return this.parks;
	}

	getPark(parkId: number) {
		return this.parks.find((p: Park) => {
			return p.id === parkId;
		});
	}

	public bgimage: string = "1stcreek.jpg";

}

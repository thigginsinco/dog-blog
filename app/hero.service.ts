import { Injectable } from "@angular/core";

import { Hero } from "./hero";

@Injectable()
export class HeroService {

	private heroes: Hero[] = [
		{ id: 11, name: 'Mr. Nice', league: false },
		{ id: 12, name: 'Narco', league: false },
		{ id: 13, name: 'Bombasto', league: false },
		{ id: 14, name: 'Celeritas', league: false },
		{ id: 15, name: 'Magneta', league: false },
		{ id: 16, name: 'RubberMan', league: false },
		{ id: 17, name: 'Dynama', league: false },
		{ id: 18, name: 'Dr IQ', league: false },
		{ id: 19, name: 'Shark', league: true },
		{ id: 20, name: 'Tornado', league: true }
	];

	getHeroes(): Hero[] {
		return this.heroes;
	}

	getHero(heroId: number) {
		return this.heroes.find((h: Hero) => {
			return h.id === heroId;
		});
	}

}

import { Component } from "@angular/core";

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	template: `
		<ul class="heroes">
			<li
				class="hero-tab"
				*ngFor="let h of getLeagueHeroes()"
				[class.inLeague]="h.league"
				(click)="removeFromLeague(h)"
				[hero]="h"
			></li>
		</ul>
	`,
	selector: 'league'
})
export class LeagueComponent {
	constructor(private heroService: HeroService) { }

	removeFromLeague(hero: Hero) {
		hero.league = false;
	}

	getLeagueHeroes() {
		console.log("getLeagueHeroes");
		return this.heroService.getHeroes().filter((h: Hero) => {
			return h.league;
		});
	}
}

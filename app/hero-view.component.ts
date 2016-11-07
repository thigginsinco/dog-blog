import { Component }  from "@angular/core";

import { Router } from "@angular/router";

import { Hero } from './hero';
import { HeroService } from "./hero.service";

@Component({
	template: `
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li class="hero-tab"
				*ngFor="let hero of heroes"
				[hero]="hero"
				[class.selected]="hero === selectedHero"
				[class.inLeague]="hero.league"
				(click)="onSelect(hero)"
			></li>
		</ul>
	`
})
export class HeroViewComponent {

	constructor(
		private heroService: HeroService,
		private router: Router
	) {}

	title = 'Tour of Heroes';
	heroes = [];

	ngOnInit() {
		this.heroes = this.heroService.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.router.navigate(['/hero', hero.id]);
	}
}

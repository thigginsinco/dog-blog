import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)]="hero.name" placeholder="name"/>
				<input [(ngModel)]="hero.league" type="checkbox"/>
			</div>
			<button (click)="goBack()">Back</button>
		</div>
	`
})
export class HeroDetailComponent {
	private hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private heroService: HeroService,
		private location: Location
	) { }

	goBack() {
		this.location.back();
	}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let heroId = parseInt(params['id'], 10);
			this.hero = this.heroService.getHero(heroId);
		});
	}
}

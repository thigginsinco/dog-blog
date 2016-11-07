// hero-tab.component.ts

import { Component, Input } from "@angular/core";

import { Hero } from "./hero";

@Component({
	selector: '.hero-tab',
	template: `
		<span class="badge">{{hero.id}}</span> {{hero.name}}
	`
})
export class HeroTabComponent {
	@Input() hero: Hero;
}

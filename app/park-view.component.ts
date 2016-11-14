import { Component }  from "@angular/core";

import { Router } from "@angular/router";

import { Park } from './park';
import { DataService } from './data.service';

@Component({
	template: `
		<h2>My Visited Parks</h2>
		<ul class="parks">
			<li *ngFor="let park of parks"
				(click)="onSelect(park)"	
			>{{park.park}}</li>
		</ul>
		<div>
			<button class="btn" (click)="newPark()">New Park</button>
		</div>

	`
})
export class ParkViewComponent {

	constructor(
		private dataService: DataService,
		private router: Router
	) {}

	title = 'Dog Blog';
	parks = [];

	ngOnInit() {
		this.parks = this.dataService.getParks();
	}

	onSelect(park: Park): void {
		this.router.navigate(['/park', park.id]);
	}
	newPark(): void {
		this.dataService.addPark((park) => {
			this.router.navigate(['/park', park.id]);

		});
	}

}

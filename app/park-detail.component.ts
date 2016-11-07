import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Park } from './park';
import { DataService } from './data.service';

@Component({
	selector: 'park-detail',
	template: `
		<div *ngIf="park">
			<h2>{{park.park}} details!</h2>
			<div>
				<label>Location:</label>
				<input [(ngModel)]="park.location" placeholder="Park Location"/>
			</div>
			<div>
				<label>Park View:</label>
				<input [(ngModel)]="park.pic" placeholder="pic"/>
			</div>
			<div class="noted">
				<label>Park notes:</label>
				<input [(ngModel)]="park.note" placeholder="Notes"/>
			</div>
			<button (click)="goBack()">Back</button>
		</div>
	`
})
export class ParkDetailComponent {
	private park: Park;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private dataService: DataService,
		private location: Location
	) { }

	goBack() {
		this.location.back();
	}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let parkId = parseInt(params['id'], 10);
			this.park = this.dataService.getPark(parkId);
			this.dataService.bgimage = this.park.pic;

		});
	}

	setBgImage(src: string) {
    // set the image, or a default if there is no image
		if (src === "") {
	        // use default image
			this.bgimage = goat.jpg;
		} else {
			this.bgimage = this.park.pic;
		}
	}
}

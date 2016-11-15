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
				<label class="noted">Park Name:</label>
				<input [(ngModel)]="park.park" placeholder="Park Name" type="text"/>
			</div>
			<div>
				<label class="noted">Location:</label>
				<input [(ngModel)]="park.location" placeholder="Park Location"/>
			</div>
			<div>
				<label class="noted">Park Picture:</label>
				<input [(ngModel)]="park.pic" placeholder="image name.type"/>
			</div>
			<div>
				<label class="noted">Park notes:</label>
				<textarea [(ngModel)]="park.note" placeholder="Notes"></textarea>
			</div>
			<div>
				<label class="noted">Have water?</label>
				<input [(ngModel)]="park.water" type="checkbox"/>
			</div>
			<div>
				<label class="noted">Shady?</label>
				<input [(ngModel)]="park.shade" type="checkbox"/>
			</div>
			<div>
				<label class="noted">Seating?</label>
				<input [(ngModel)]="park.seating" type="checkbox"/>
			</div>
			<div>
				<label class="noted">Grassy?</label>
				<input [(ngModel)]="park.grass" type="checkbox"/>
			</div>
			<div>
				<label class="noted">Rocky?</label>
				<input [(ngModel)]="park.rock" type="checkbox"/>
			</div>
			<div>
				<button class="btn" (click)="goBack()">Back</button>
				<button class="btn" (click)="friendList(park)">Friends</button>
				<button class="btn" (click)="visitDetails(park)">Visit</button>
			</div>
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

	friendList(park: Park): void {
		console.log("park name friendList", park.park);
		this.router.navigate(['/friend', park.park]);
	}

	visitDetails(park: Park): void {
		// console.log(park.park, "park name");
		this.router.navigate(['/details', park.park]);
	}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let parkId = parseInt(params['id'], 10);
			this.park = this.dataService.getPark(parkId);
// 			console.log(this.park.pic);
			this.setBgImage(this.park.pic);

		});
	}

	setBgImage(src: string) {
    // set the image, or a default if there is no image
		if (src === "") {
			// console.log(src, "source bgimage");
	        // use default image
			this.dataService.bgimage = "goat.jpg";
		} else {
			this.dataService.bgimage = this.park.pic;
		}
	}
}

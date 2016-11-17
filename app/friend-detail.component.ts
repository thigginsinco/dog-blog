import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Friend } from './friend';
import { DataService } from './data.service';

@Component({
	selector: 'friend-detail',
	template: `
		<div *ngIf="friend">
			<h2>{{friend.friend}} Information</h2>
			<div>
				<label class="noted">Park Name:</label>
				<input [(ngModel)]="friend.park" placeholder="Park name" type="text"/>
			</div>
			<div>
				<label class="noted">Friend Name:</label>
				<input [(ngModel)]="friend.friend" placeholder="Friend(s) Name" type="text"/>
			</div>
			<div>
				<label class="noted">Pup Name:</label>
				<input [(ngModel)]="friend.dog" placeholder="Dog(s) name"/>
			</div>
			<div>
				<label class="noted">Friends notes:</label>
				<textarea [(ngModel)]="friend.note" placeholder="Notes"></textarea>
			</div>
			<div>
				<label class="noted">Picture:</label>
				<input [(ngModel)]="friend.pic" placeholder="image name.type"/>
			</div>
			<div *ngIf="friend.pic">
				<img class="dogpic" [src]='"./img/" + friend.pic' alt="Dog park friend">
			</div>
			<div>
				<button class="btn" (click)="goBack()">Back</button>
				<button class="btn" (click)="visitDetails(park)">Visit</button>
			</div>
		</div>
	`,
	styles: [
	`
	.dogpic {
		text-align: center;
		max-height: 40vh;
		max-width: 100vw;
	}
	`]
})
export class FriendDetailComponent {
	private friend: Friend;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private dataService: DataService,
		private location: Location
	) { }

	goBack() {
		this.location.back();
	}

	visitDetails(): void {
		// console.log(park.park, "park name");
		this.router.navigate(['/details', this.friend.park]);
	}


	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			// console.log(params, "params");
			let friendName = (params['friend']);
			this.friend = this.dataService.getFriend(friendName);
// 			this.dataService.bgimage = this.park.pic;
			// console.log(this.park.pic);
			// this.setBgImage(this.park.pic);

		});
	}

}

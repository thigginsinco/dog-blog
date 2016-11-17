import { Component }  from "@angular/core";

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Friend } from './friend';
import { DataService } from './data.service';

@Component({
	template: `
		<h2>{{this.parkName}}</h2>
		<h2>Friends I've met</h2>
		<ul class="notef">
			<li *ngFor="let friend of friends"
				(click)="onSelect(friend)"	
			>{{friend.friend}}  -  {{friend.dog}}</li>
		</ul>
		<div>
			<button class="btn" (click)="goBack()">Back</button>
			<button class="btn" (click)="newFriend()">New Friend</button>
		</div>

	`
})
export class FriendViewComponent {

	constructor(
		private dataService: DataService,
		private router: Router,
		private route: ActivatedRoute,
		private location: Location

	) {}

	title = 'Dog Blog';
	friends = [];
	parkName = "";

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			this.parkName = (params['park']);
// 			console.log(parkName, "park");
			this.friends = this.dataService.getFriends(this.parkName);
		});

// 		this.friends = this.dataService.getFriends();
	}

	onSelect(friend: Friend): void {
		this.router.navigate(['/friends', friend.friend]);
	}

	newFriend(): void {
		console.log("new friend fvc", this.parkName);
		this.dataService.addFriend(this.parkName, (friend) => {
		this.router.navigate(['/friends', friend.friend]);
		});
	}

	goBack() {
		this.location.back();
	}
}

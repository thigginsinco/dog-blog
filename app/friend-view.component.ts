import { Component }  from "@angular/core";

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Friend } from './friend';
import { DataService } from './data.service';

@Component({
	template: `
		<h2>Friends I've met</h2>
		<ul class="noted">
			<li *ngFor="let friend of friends"
				(click)="onSelect(friend)"	
			>{{friend.friend}}</li>
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

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let parkName = (params['park']);
// 			console.log(parkName, "park");
			this.friends = this.dataService.getFriends(parkName);
		});

// 		this.friends = this.dataService.getFriends();
	}

	onSelect(friend: Friend): void {
		this.router.navigate(['/friends', friend.friend]);
	}

	newFriend(): void {
		this.dataService.addFriend((friend) => {
		this.router.navigate(['/friends', friend.park]);
		});
	}

	goBack() {
		this.location.back();
	}
}

import { Component }  from "@angular/core";

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Visit } from './visit';
import { DataService } from './data.service';

@Component({
	template: `
		<h2>{{this.parkname}} Visits</h2>
		<ul class="noted">
			<li *ngFor="let visit of visits"
				(click)="onSelect(visit)"	
			>{{visit.date}}</li>
		</ul>
		<div>
			<button class="btn" (click)="goBack()">Back</button>
			<button class="btn" (click)="newVisit()">Add Visit</button>
		</div>

	`
})
export class VisitViewComponent {

	constructor(
		private dataService: DataService,
		private router: Router,
		private route: ActivatedRoute,
		private location: Location

	) {}

	title = 'Dog Blog';
	visits = [];
	parkname = "";
	parkDate = "";

	ngOnInit() { 
		// console.log("init in vvc");
		this.route.params.forEach((params: Params) => {
			let parkName = (params['park']);
			this.parkname = parkName;
			console.log("park in vvc init", this.parkname);
			this.visits = this.dataService.getVisits(parkName);
		});

// 		this.friends = this.dataService.getFriends();
	}

	// onSelect(friend: Friend): void {
	// 	this.router.navigate(['/friends', friend.friend]);
	// }
	onSelect(visit: Visit): void {
		// console.log(visit, "vvc park");
		this.router.navigate(['/detail', visit.park, visit.date]);
	}


	newVisit(): void {
		console.log("newvisit vvc", this.parkname);
		// let pkname = this.parkname;
		let pkname = this.parkname;
		let parkDate = "11/12/2016";
		this.dataService.addVisit(pkname, (visit) => {
		this.router.navigate(['/detail', visit.park, visit.date]);
		});
	}

	// newVisit(park: Park): void {
	// 	console.log(this.parkname, "vdc newvisit");
	// 	let pkname = this.parkname;
	// 	this.dataService.addVisit(pkname, (visit) => {
	// 	this.router.navigate(['/detail', parkname, parkDate]);
	// 	});
	// }
	goBack() {
		this.location.back();
	}
}

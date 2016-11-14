import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params} from "@angular/router";
import { Location } from "@angular/common";

import { Visit } from './visit';
import { DataService } from './data.service';

@Component({
	selector: 'my-visit-detail',
	template: `
		<div *ngIf="visit">
			<h2>{{visit.park}} events!</h2>
			<div>
				<label class="noted">Date:</label>
				<input [(ngModel)]="visit.date" placeholder="Date mm.dd.yyyy"/>
			</div>
			<div>
				<label class="noted">Visit details: </label>
				<textarea [(ngModel)]="visit.note" placeholder="Visit events"></textarea>
			</div>
			<button class="btn" (click)="goBack()">Back</button>
			<button class="btn" (click)="newVisit()">Add Visit</button>
		</div>
	`
})
export class VisitDetailComponent {
	private visit: Visit;
	parkname = "";

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
		// console.log(parkName, "parkname from visitdetail");
		this.route.params.forEach((params: Params) => {
			let parkName = (params['park']);
			let parkDate = (params['date']);
			this.parkname = parkName;
			this.visit = this.dataService.getVisit(parkName, parkDate);
		});
	}

	newVisit(): void {
		console.log("newvisit vvc", this.parkname);
		// let pkname = this.parkname;
		let pkname = this.parkname;
		// let parkDate = "11/12/2016";
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

}

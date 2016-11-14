import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'my-app',
	template: `
		<div class="back">
		<div class='background' [style.background-image]='"url(./img/" + dataservice.bgimage + ")"'>
		<h1>{{title}}</h1>
		<nav class="noted">
			<a class="link" routerLink="/" routerLinkActive="active">Home</a>
		</nav>
		<router-outlet></router-outlet>
		</div>
		</div>
	`,
	styles: [
		`
		.background {
			position: absolute;
			background-size: cover;
			width: 100vw;
			height: 100vh;
			left: 0;
			top: 0;
		}
		`
	]
})
export class AppComponent {
	constructor(private dataservice: DataService) {}

	ngOnInit() {
		this.dataservice.bgimage = "default.jpg";
	}


}

import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'my-app',
	template: `
		<div class='background' [style.background-image]='"url(./img/" + dataservice.bgimage + ")"'>
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/" routerLinkActive="active">Home</a>
			<a routerLink="/league" routerLinkActive="active">League</a>
		</nav>
		<router-outlet></router-outlet>
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
			background-color: rgba(255, 255, 255, 0.8);

		}
		`
	]
})
export class AppComponent {
	constructor(private dataservice: DataService) {}

}

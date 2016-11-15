import { NgModule }			from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { AppComponent }	from './app.component';

import { ParkViewComponent } from './park-view.component';
import { ParkDetailComponent } from './park-detail.component';
import { FriendViewComponent } from './friend-view.component';
import { FriendDetailComponent } from './friend-detail.component';
import { VisitDetailComponent } from './visit-detail.component';
import { VisitViewComponent } from './visit-view.component';
import { DataService } from './data.service';

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		DataService
	],
	declarations: [
		AppComponent,
		ParkViewComponent,
		ParkDetailComponent,
		FriendViewComponent,
		FriendDetailComponent,
		VisitViewComponent,
		VisitDetailComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

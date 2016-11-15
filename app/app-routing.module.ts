// app-routing.module.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ParkViewComponent } from './park-view.component';
import { ParkDetailComponent } from './park-detail.component';
import { FriendViewComponent } from './friend-view.component';
import { FriendDetailComponent } from './friend-detail.component';
import { VisitDetailComponent } from './visit-detail.component';
import { VisitViewComponent } from './visit-view.component';

const routes: Routes = [
	{path: '', component: ParkViewComponent},
	{path: 'park/:id', component: ParkDetailComponent},
	{path: 'friend/:park', component: FriendViewComponent},
	{path: 'friends/:friend', component: FriendDetailComponent},
	{path: 'details/:park', component: VisitViewComponent},
	{path: 'detail/:park/:date', component: VisitDetailComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

// app-routing.module.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroViewComponent } from "./hero-view.component";
import { LeagueViewComponent } from "./league-view.component";
import { HeroDetailComponent } from './hero-detail.component';

import { ParkViewComponent } from './park-view.component';
import { ParkDetailComponent } from './park-detail.component';

const routes: Routes = [
	{path: '', component: ParkViewComponent},
	{path: 'league', component: LeagueViewComponent},
	{path: 'hero/:id', component: HeroDetailComponent}
	{path: 'park/:id', component: ParkDetailComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

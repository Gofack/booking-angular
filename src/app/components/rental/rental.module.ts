import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalCardComponent } from './rental-card/rental-card.component';
import { UpperPipe } from 'src/app/pipes/upper.pipe';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

const routes: Routes = [
	{
		path: 'rentals',
		component: RentalComponent,
		children: [
			{ path: '', component: RentalListingComponent },
			{ path: ':rentalId', component: RentalDetailComponent }
		]
	}
]

@NgModule({
	declarations: [
		RentalComponent,
		RentalListingComponent,
		RentalDetailComponent,
		RentalCardComponent,
		UpperPipe,
		HighlightDirective
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [
	]
})
export class RentalModule { }

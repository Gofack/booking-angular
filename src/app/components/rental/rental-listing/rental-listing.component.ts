import { Component, OnInit } from '@angular/core';
import { Rental, AppStorage } from '../shared/rental.interface';
// import { Rental } from '../shared/rental.model'
import { RentalService } from '../shared/rental.service';

@Component({
	selector: 'app-rental-listing',
	templateUrl: './rental-listing.component.html',
	styleUrls: ['./rental-listing.component.scss'],
})
export class RentalListingComponent implements OnInit {
	rentals: Rental[] = [];

	constructor(
		private rentalService: RentalService
	) { }

	ngOnInit(): void {
		this.rentalService.getRentals().subscribe((rentals: Rental[]) => {
			this.rentals = rentals;
		});
	}
}

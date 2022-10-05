import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../shared/rental.interface';
import { RentalService } from '../shared/rental.service';

@Component({
	selector: 'app-rental-detail',
	templateUrl: './rental-detail.component.html',
	styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
	rental: Rental = {
		_id: '',
		title: '',
		city: '',
		street: '',
		category: '',
		image: '',
		numOfRooms: 0,
		description: '',
		dailyPrice: 0,
		shared: false,
		createdAt: ''
	};

	constructor(
		private route: ActivatedRoute,
		private rentalService: RentalService
	) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.rentalService
				.getRentalById(params['rentalId'])
				.subscribe(data => {
					this.rental = data
				});
		})
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.interface';


@Component({
	selector: 'app-rental-card',
	templateUrl: './rental-card.component.html',
	styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent implements OnInit {
	@Input() rental: Rental = {
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
	) { }

	ngOnInit(): void {
	}

}

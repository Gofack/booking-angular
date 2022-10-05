import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	@Input() userName: string = '';
	@Input() userAge: number = 0;
	@Output() nameChange = new EventEmitter<string>();
	@Output() ageChange = new EventEmitter<number>();



	ngOnInit(): void {
	}

	showName(): void {
		this.userName = 'Peter';
		this.nameChange.emit(this.userName);
		this.userAge = 20;
		this.ageChange.emit(this.userAge);
	}
}

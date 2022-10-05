import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TestService {

	constructor() { }

	getInfo() {
		console.log('hello');
	}
}

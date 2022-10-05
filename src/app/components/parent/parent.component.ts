import { Component, OnInit } from '@angular/core';
import { from, Observable, of, map, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, fromEvent, mergeMap, interval } from 'rxjs';
import { TestService } from '../../services/test.service';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { environment } from '../../../environments/environment';

// const values = new Observable((observer) => {
// 	observer.next(8)
// 	observer.next(9)

// 	const handler = () => {
// 		console.log('Click detected')
// 	}

// 	document.addEventListener('click', handler)

// 	observer.complete()

// 	return {
// 		unsubscribe() {
// 			console.log('Unsubscribed')
// 			document.removeEventListener('click', handler)
// 		},
// 	}
// })

// const subscription = values.subscribe(
// 	(v) => {
// 		console.log(v)
// 	},
// 	(error) => {
// 		console.log(error)
// 	},
// 	() => {
// 		console.log('Completed')
// 	}
// )

// subscription.unsubscribe();
// const values = of(1, 2, 3);
// console.log(values);
// values.subscribe(val => {
// 	console.log(val);
// })
// values.pipe(map(number => number * 2)).subscribe(v => {
// 	console.log(v);
// })

// let subject = new Subject();

// subject.subscribe(v => {
// 	console.log('Obs 1: ' + v);
// });

// subject.subscribe(v => {
// 	console.log('Obs 2: ' + v);
// });

// subject.subscribe(v => {
// 	console.log('Obs 3: ' + v);
// });

// subject.next(9);
// console.log(subject);


// let behaviorSubject = new BehaviorSubject<Number>(1);

// behaviorSubject.subscribe(v => {
// 	console.log('Obs with value of 3: ' + v);
// });
// behaviorSubject.next(6);
// behaviorSubject.subscribe(v => {
// 	console.log('Obs with value of 6: ' + v);
// });
// behaviorSubject.next(9);
// behaviorSubject.subscribe(v => {
// 	console.log('Obs with value of 9: ' + v);
// });

// let replaySubject = new ReplaySubject<Number>(3);
// replaySubject.next(3);
// replaySubject.next(6);
// replaySubject.next(9);
// replaySubject.next(12);
// replaySubject.subscribe(v => {
// 	console.log('ReplaySubject: ' + v);
// });

// let asyncSubject = new AsyncSubject<Number>();
// asyncSubject.subscribe(v => {
// 	console.log('Async: ' + v);
// });
// asyncSubject.next(3);
// asyncSubject.next(6);
// asyncSubject.next(8);

// asyncSubject.complete();

// const el = document.body;

// // Create an Observable that will publish mouse movements
// const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

// // Subscribe to start listening for mouse-move events
// const subscription = mouseMoves.subscribe(evt => {
// 	// Log coords of mouse movements
// 	console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

// 	// When the mouse is over the upper-left of the screen,
// 	// unsubscribe to stop listening for mouse movements
// 	if (evt.clientX < 40 && evt.clientY < 40) {
// 		subscription.unsubscribe();
// 	}
// });

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
	name: string = 'Tom';
	age: number = 26;
	loginForm: any = {
		login: '',
		password: '',
	}
	posts: any;
	phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];

	phone: Observable<string> | undefined;



	constructor(
		private testService: TestService,
		private dataService: DataService,
		private http: HttpClient,

	) {
		this.showPhones();
	}

	ngOnInit(): any {
		// this.dataService.getData().subscribe((data: any) => {
		// 	console.log(data);
		// })
		// this.dataService.getData().pipe(
		// 	mergeMap(data => this.posts = data)
		// ).subscribe(res => this.posts = res);
		// this.dataService.getData().pipe(mergeMap(async (char) => console.log(char)));
		// this.posts = this.dataService.getData().pipe(mergeMap(char => this.http.get(char.title)));
		// this.posts = this.http.get()
		// this.dataService.getData().subscribe((res: any) => console.log(res));
		// this.http.get(`${environment.mainUrl}posts`).pipe(mergeMap((posts: any): any => posts[0])).subscribe(res => console.log(res))
	}


	printForm() {
		console.log(this.loginForm);
	}

	checkService() {
		this.testService.getInfo();
	}

	showPhones() {
		this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
	}

}

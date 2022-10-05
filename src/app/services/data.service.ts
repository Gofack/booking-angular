import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(
		private http: HttpClient
	) { }

	getData(): any {
		// return this.http.get(`${environment.mainUrl}posts/9`);
		// return this.http.get(`${environment.mainUrl}posts/9`).pipe(mergeMap((char: any): any => char.title));
		// return this.http.get(`${environment.mainUrl}posts/9`).pipe(mergeMap((char: any): any => this.http.get(char.title)));
	}
}

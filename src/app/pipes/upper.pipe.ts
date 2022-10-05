import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'upper'
})
export class UpperPipe implements PipeTransform {

	transform(value: string) {
		if (!value || typeof value !== 'string') return '';
		return value.toUpperCase();
	}

}

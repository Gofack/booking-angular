export interface Rental {
	_id: string;
	title: string;
	city: string;
	street: string;
	category: string;
	image: string;
	numOfRooms: number;
	description: string;
	dailyPrice: number;
	shared: boolean;
	createdAt: string;
}

export class AppStorage<T> {
	items: T[] = [];
	addItem(item: T): T {
		this.items.push(item);
		return item;
	}

	getLocaleTimeFormat(index: number): T {
		return this.items[index];
	}

	displayItems(): T[] {
		return this.items.map(item => {
			console.log(item);
			return item;
		})
	}
}
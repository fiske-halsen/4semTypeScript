function reverseArr<T>(a: Array<T>): Array<T> {
	let arrayReversed = [];
	arrayReversed = a.reverse();
	return arrayReversed;
}

console.log(
	reverseArr<string>(["a", "b", "c"]),
);
console.log(
	reverseArr<number>([1, 2, 3]),
);
console.log(
	reverseArr<boolean>([true, true, false]),
);

/* console.log(
	reverseArr<number>(["a", "b", "c"]),
); */

class DataHolder<T> {
	constructor(public value: T) {}

	get getValue() {
		return this.value;
	}
	set setValue(newValue: T) {
		this.value = newValue;
	}
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue);
d.setValue = "World";
console.log(d.getValue);

// d.setValue()

let d2 = new DataHolder<number>(123);
console.log(d2.getValue);
d2.setValue = 500;
console.log(d2.getValue);

type IMyinterface = (a: string, b: string, c: string) => Array<String>;

function myFunc(a: string, b: string, c: string): Array<String> {
	const myArray = [a, b, c];
	return myArray;
}

function myFuncToUpperCase(a: string, b: string, c: string): Array<String> {
	const myArray = [a, b, c];
	const arrayToUpper = myArray.map((element) => element.toUpperCase());
	return arrayToUpper;
}

console.log(myFunc(`hej`, `hej`, `hej`));
console.log(myFuncToUpperCase(`hej`, `hej`, `hej`));

const f2 = function logger(f1: IMyinterface) {
	//Simulate that we get data from somewhere and uses the provided function
	const [a, b, c] = [`A`, `B`, `C`];
	console.log(f1(a, b, c));
};

function myFuncNotObey(a: string, b: number): Array<string | number> {
	const myArray = [a, b];
	return myArray;
}

f2(myFunc);
f2(myFuncToUpperCase);

// @ts-ignore
f2(myFuncNotObey);

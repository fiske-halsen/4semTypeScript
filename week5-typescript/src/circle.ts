import Shape from "./shape";

export default class Circle extends Shape {
	#radius: number;

	constructor(theRadius: number, color: string) {
		super(color);
		this.#radius = theRadius;
	}
	get area(): number {
		throw new Error("Method not implemented.");
	}
	get perimeter(): number {
		throw new Error("Method not implemented.");
	}

	get radius() {
		return this.#radius;
	}
	set radius(newRadius: number) {
		this.#radius = newRadius;
	}
}

const circle1 = new Circle(25, "Blue");
const circle2 = new Circle(35, "green");

console.log(circle1.getColor);
circle1.setColor = "Black";
console.log(circle1.getColor);
console.log(circle1.radius);

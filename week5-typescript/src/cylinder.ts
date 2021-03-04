import Circle from "./circle";

class Cylinder extends Circle {
	#height: number;
	#volume: number;

	constructor(theHeight: number, color: string, radius: number, theVolume: number) {
		super(radius, color);
		this.#height = theHeight;
		this.#volume = theVolume;
	}
	get perimeter() {
		return super.perimeter;
	}
	get area() {
		return super.area;
	}

	get volume() {
		return this.#volume;
	}

	get height() {
		return this.#height;
	}

	set height(newHeight: number) {
		this.#height = newHeight;
	}
}
new Cylinder(182, "tis", 100, 123213).radius;

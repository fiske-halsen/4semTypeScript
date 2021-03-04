export default abstract class Shape {
	private _color: string;
	constructor(color: string) {
		this._color = color;
	}
	abstract get area(): number;
	abstract get perimeter(): number;

	get getColor() {
		return this._color;
	}

	set setColor(newColour: string) {
		this._color = newColour;
	}

	toString(): string {
		return `The color is ${this._color}`;
	}
}

/* Man kan ikke lave et instans af en abstract klasse
const shape = new Shape("jaaa"); */

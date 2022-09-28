class TeslaCar {
	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.iterior, this.autopilot);
	}
}

let prototypeCar = new TeslaCar('S', 80000, 'red', false);

let car1 = prototypeCar.produce();
let car2 = prototypeCar.produce();
let car3 = prototypeCar.produce();

car1.interior = 'white';
car1.autopilot = true;

console.log(car1, car2, car3);
class Car {
	constructor() {
		this.autopilot = false;
		this.parktronic = false;
		this.horn = true;
	};
}

class CarBuilder {
	constructor() {
		this.car = new Car();
	}

	addAutoPilot(autoPilot) {
		this.car.autoPilot = autoPilot;
		return this;
	}

	addSignaling(signaling) {
		this.car.signaling = signaling;
		return this;
	}

	updateEngine(engine) {
		this.car.engine = engine;
		return this;
	}

	build() {
		return this.car;
	}
}

let myCar = new CarBuilder().addAutoPilot(true).addSignaling(true).updateEngine('V8').build();
console.log(myCar);
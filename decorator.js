class Car {
	constructor() {
		this.model = "X5";
		this.price = 100000;
		this.maxSpeed = 300;
	}

	getPrice() {
		return this.price;
	}

	getModel() {
		return this.model;
	}
}

class Tesla extends Car {
	constructor() {
		super();
		this.model = 'Tesla';
	}
}

class Autopilot {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 5000;
	}

	getModel() {
		return `${this.car.getModel()} with autopilot`;
	}
}

class Turbo {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 10000;
	}

	getModel() {
		return `${this.car.getModel()} turbo`;
	}
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Turbo(tesla);

console.log(tesla.getPrice(), tesla.getModel());

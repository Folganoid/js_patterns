class Car {
	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class CarFactory {
	create(type = "default") {
		if (type === "X5") {
			return new Car(type, 100000, 300);
		}
		if (type === "default") {
			return new Car("basic", 10000, 100);
		}
	}
}

class Bike {
	constructor(model, price, speed) {
		this.model = model;
		this.price = price;
		this.speed = speed;
	}
}

class BikeFactory {
	create(type = "default") {
		if (type === "road") {
			return new Bike(type, 10000, 27);
		}
		if (type === "default") {
			return new Car("basic", 2000, 18);
		}
	}
}


let c = new CarFactory();
let x5 = c.create('X5');
console.log(x5);


function abstractFactory(kind) {
	return kind === 'car' ? new CarFactory() : new BikeFactory();
}

let a = abstractFactory('bike').create('road');
console.log(a);




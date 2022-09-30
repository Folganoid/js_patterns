class Conveyor {
	setBody() {
		console.log('Body set!');
	};

	setEngine() {
		console.log('Engine set!');
	};

	paint() {
		console.log('Painted!');
	};
}

class ConveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.paint();
	}
}




const conveyor = new ConveyorFacade(new Conveyor());
const car = conveyor.assembleCar();


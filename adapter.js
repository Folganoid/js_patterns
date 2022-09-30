class Engine1 {
	simpleInterface() {
		console.log('Engine 1.0 - tr-tr-tr');
	}
}

class Engine2 {
	complicatedInterface() {
		console.log('Engine 2.0 - wroooom!!!');
	}
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}
	simpleInterface() {
		this.engine.complicatedInterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface();
	}
}

let myCar = new Auto();
const oldEngine = new Engine1();
myCar.startEngine(oldEngine);

myCar = new Auto();
let engineAdapter = new EngineV8Adapter(new Engine2());
myCar.startEngine(engineAdapter);




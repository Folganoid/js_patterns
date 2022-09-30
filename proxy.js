class CarDoor {
	open() {
		console.log('Open!');
	}

	close() {
		console.log('Close!');
	}
}

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(pass) {
		if (this.authenticate(pass)) {
			this.door.open();
		} else {
			console.log('Access denied!')
		}
	}

	authenticate(pass) {
		return pass === '111';
	}

	close() {
		this.door.close();
	}
}

let door = new CarDoor();
door.open('222');
door.open('111');
door.close();

let door2 = new SecuritySystem(door);

door2.open('222');
door2.open('111');
door2.close();
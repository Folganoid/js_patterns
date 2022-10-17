class Equipment {

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName("Engine");
        this.setPrice(900);

    }
}

class Frame extends Equipment {
    constructor() {
        super();
        this.setName("Frame");
        this.setPrice(90);

    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName("Tools");
        this.setPrice(9);

    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipment = [];
    }

    add(equipment) {
        this.equipment.push(equipment);
    }

    getPrice() {
        return this.equipment.map(e => e.getPrice()).reduce((a,b) => a + b);
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
}

let myCar = new Car();
myCar.add(new Engine())
myCar.add(new Frame())
myCar.add(new Tools())

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`)
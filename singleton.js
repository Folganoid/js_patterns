class Counter {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}

	getCount() {
		return this.count;
	}

	incCount() {
		return this.count++;
	}
}

let a = new Counter();
let b = new Counter();

a.incCount();
a.incCount();

b.incCount();
b.incCount();
b.incCount();


console.log(a===b, a.getCount(), b.getCount());
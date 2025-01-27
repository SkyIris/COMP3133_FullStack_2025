import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import assert from 'assert';
const app = require('../calculator.js')

describe('add', function(){
	it('3 and 5 added should be 8',function(){
		assert.equal(app.add(3,5),8);
	});
});

describe('add', function(){
	it('1 and 2 added should not be 9',function(){
		assert.equal(app.add(1,2),9);
	});
});

describe('sub', function(){
	it('7 and 2 subtracted should be 5',function(){
		assert.equal(app.sub(7,2),5);
	});
});

describe('sub', function(){
	it('7 and 2 subtracted should not be 6',function(){
		assert.equal(app.sub(7,2),6);
	});
});

describe('mul', function(){
	it('6 and 7 multiplied should be 42',function(){
		assert.equal(app.mul(6,7),42);
	});
});

describe('mul', function(){
	it('6 and 7 multiplied should not be 50',function(){
		assert.equal(app.mul(6,7),50);
	});
});

describe('div', function(){
	it('77 and 11 divided should be 7',function(){
		assert.equal(app.div(77,11),7);
	});
});

describe('div', function(){
	it('77 and 11 divided should not be 11',function(){
		assert.equal(app.div(77,11),11);
	});
});




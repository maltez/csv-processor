import Math from '../src/business_logic/math.service';
import { assert } from 'chai'; 

test('Test increment operation. Increment One -> Expected Two', ()=>{
    const result = Math.increment(1);
    assert.equal(result, 2, 'Number is not incremented by one');
});

test('Test increment operation. Increment Two -> Expected Three', ()=>{
    const result = Math.increment(2);
    assert.equal(result, 3, 'Number is not incremented by one');
});

test('Test increment operation. Try input string -> Expect error throw', ()=>{
    assert.throws(() => { Math.increment('string') }, Error, 'Input parameter is not a number');
});

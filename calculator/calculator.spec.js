const calculator = require('./calculator.js');

// test away!
describe('calculator.js', function() {
    test('using test', ()=> {
        expect(true).toBeTruthy();
    })
    it ('can add 2 numbers', () => {
        // const expected = 4;
        // const actual = calculator.add(2,2)
        // expect(actual).toBe(expected)
        expect(calculator.add(2,2)).toBe(4)
        expect(calculator.add(2,3)).toBe(5)
    })
    it ('should return the provided value if one number provided', () => {
        // const expected = 4;
        // const actual = calculator.add(2,2)
        // expect(actual).toBe(expected)
        expect(calculator.add(2)).toBe(2)
        expect(calculator.add(3)).toBe(3)

    })
    it('should add a list of numbers seperated by commas', ()=>{
        expect(calculator.add(1,2,3)).toBe(6)
        expect(calculator.add(1,0,3)).toBe(4)
        expect(calculator.add(1,2,3,4,6)).toBe(16)
        expect(calculator.add(1)).toBe(1)
        expect(calculator.add(1,-1)).toBe(0)

    })
})


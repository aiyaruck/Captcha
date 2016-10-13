function Operator(inputOP) { //for convert int to Operator
    this.toOperator = function() {
        if (inputOP === 1) {
            return '+';
        } else if (inputOP === 2) {
            return '-';
        } else if (inputOP === 3) {
            return '*';
        } else if (inputOP === 4) {
            return '/';
        }
    }
}

//Test Captcha
describe("Test Operator", function() {
    it("inputOP = 1, Operator = +", function() {
        var test = new Operator(1);
        expect(test.toOperator()).toEqual('+');
    });
    it("inputOP = 2, Operator = -", function() {
        var test = new Operator(2);
        expect(test.toOperator()).toEqual('-');
    });
    it("inputOP = 3, Operator = *", function() {
        var test = new Operator(3);
        expect(test.toOperator()).toEqual('*');
    });
    it("inputOP = 4, Operator = /", function() {
        var test = new Operator(4);
        expect(test.toOperator()).toEqual('/');
    });
});

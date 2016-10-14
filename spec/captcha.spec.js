function captcha(pattern, op, lf, rh) {
    this.generator = function() {
        if (pattern === 1) { // number opetator string
            var o = new operator(op);
            var lo = new leftOperator(lf);
            var ro = new righOperator(rh);
            return lo.toInteger() + o.toOperator() + ro.toString();
        } else if (pattern === 2) { //string opetator number
            var o = new operator(op);
            var lo = new leftOperator(rh); // trick
            var ro = new righOperator(lf); // trick
            return ro.toString() + o.toOperator() + lo.toInteger();
        }
    }
}

function operator(inputOP) { //for convert int to Operator
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

function leftOperator(inputLF) { // Integer Operator String
    this.toInteger = function() {
        if (inputLF === 0) {
            return '0'
        } else if (inputLF === 1) {
            return '1'
        } else if (inputLF === 2) {
            return '2'
        } else if (inputLF === 3) {
            return '3'
        } else if (inputLF === 4) {
            return '4'
        } else if (inputLF === 5) {
            return '5'
        } else if (inputLF === 6) {
            return '6'
        } else if (inputLF === 7) {
            return '7'
        } else if (inputLF === 8) {
            return '8'
        } else if (inputLF === 9) {
            return '9'
        }
    }
}

function righOperator(inputRh) { // Integer Operator String
    this.toString = function() {
        if (inputRh === 0) {
            return 'Zero'
        } else if (inputRh === 1) {
            return 'One'
        } else if (inputRh === 2) {
            return 'Two'
        } else if (inputRh === 3) {
            return 'Three'
        } else if (inputRh === 4) {
            return 'Four'
        } else if (inputRh === 5) {
            return 'Five'
        } else if (inputRh === 6) {
            return 'Six'
        } else if (inputRh === 7) {
            return 'Seven'
        } else if (inputRh === 8) {
            return 'Eight'
        } else if (inputRh === 9) {
            return 'Nine'
        }
    }
}
//Test Captcha
describe("Test Captcha Application", function() {
    describe("Captcha pattern 1", function testPattern1() {
        it("Show 1+Two,when input = (1,1,1,2)", function() { // test 1
            var runApp = new captcha(1, 1, 1, 2) // first nubber set pattern = 1.
            expect(runApp.generator()).toEqual('1' + '+' + 'Two')
        });
        it("Show 3+Two,when input = (1,3,3,2)", function() { // test 2
            var runApp = new captcha(1, 3, 3, 2) // first nubber set pattern = 1.
            expect(runApp.generator()).toEqual('3' + '*' + 'Two')
        });
        it("Show 4/Nine,when input = (1,4,4,9)", function() { // test 3
            var runApp = new captcha(1, 4, 4, 9) // first nubber set pattern = 1.
            expect(runApp.generator()).toEqual('4' + '/' + 'Nine')
        });
        it("Show 5-Seven,when input = (1,2,5,7)", function() { // test 4
            var runApp = new captcha(1, 2, 5, 7) // first nubber set pattern = 1.
            expect(runApp.generator()).toEqual('5' + '-' + 'Seven')
        });
        it("Show 8*Eight,when input = (1,3,8,8)", function() { // test 5
            var runApp = new captcha(1, 3, 8, 8) // first nubber set pattern = 1.
            expect(runApp.generator()).toEqual('8' + '*' + 'Eight')
        });
        //TestPattern2
        describe("Captcha pattern 2", function testPattern2() {
            it("Show Three-4,input = (2,2,3,4)", function() { // test 1
                var runApp = new captcha(2, 2, 3, 4) // first nubber set pattern = 2.
                expect(runApp.generator()).toEqual('Three' + '-' + '4')
            });
            it("Show One+7,input = (2,1,1,7)", function() { //test 2
                var runApp = new captcha(2, 1, 1, 7) // first nubber set pattern = 2.
                expect(runApp.generator()).toEqual('One' + '+' + '7')
            });
            it("Show Zero*2,input = (2,3,0,2)", function() { //test 3
                var runApp = new captcha(2, 3, 0, 2) // first nubber set pattern = 2.
                expect(runApp.generator()).toEqual('Zero' + '*' + '2')
            });
            it("Show Forur/6,input = (2,4,4,6)", function() { //test 4
                var runApp = new captcha(2, 4, 4, 6) // first nubber set pattern = 2.
                expect(runApp.generator()).toEqual('Four' + '/' + '6')
            });
            it("Show Five-8,input = (2,2,5,8)", function() { //test 5
                var runApp = new captcha(2, 2, 5, 8) // first nubber set pattern = 2.
                expect(runApp.generator()).toEqual('Five' + '-' + '8')
            })
        });
    });
});

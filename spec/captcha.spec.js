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
       } else if (inputLF === 8 {
           return '8'
       } else if (inputLF === 9) {
           return '9'
       }
   }
}
 function righOperator(inputLF) { // Integer Operator String
   this.toInteger = function() {
     if (inputRF === 0){
       return 'Zero'
     }else if(inputRF === 1){
       return 'One'
     }else if(inputRF === 2){
       return 'Two'
     }else if(inputRF === 3){
       return 'Three'
     }else if(inputRF === 4){
       return 'Four'
     }else if(inputRF === 5){
       return 'Five'
     }else if(inputRF === 6){
       return 'Six'
     }else if(inputRF === 7){
       return 'Seven'
     }else if(inputRF === 8){
       return 'Eight'
     }else if(inputRF === 9){
       return 'Nine'
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

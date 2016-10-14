function captcha (pattern,op,lf,rh){
  this.generator = function (){
    if (pattern === 1){
      var op = new operator (op);
      var lo = new operator (lf);
      var ro = new operator (rh);
      return lo.toInteger() + op.toOperator() + ro.toString();
    }else if (pattern === 2){
      var op = new operator (op);
      var lo = new operator (lf);
      var ro = new operator (rh);S
      return ro.toString() + op.toOperator() + lo.toInteger();
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
       } else if (inputLF === 8 {
           return '8'
       } else if (inputLF === 9) {
           return '9'
       }
   }
}
function righOperator(inputRh) { // Integer Operator String
   this.toString = function() {
     if (inputRh === 0){
       return 'Zero'
     }else if(inputRh === 1){
       return 'One'
     }else if(inputRh === 2){
       return 'Two'
     }else if(inputRh === 3){
       return 'Three'
     }else if(inputRh === 4){
       return 'Four'
     }else if(inputRh === 5){
       return 'Five'
     }else if(inputRh === 6){
       return 'Six'
     }else if(inputRh === 7){
       return 'Seven'
     }else if(inputRh === 8){
       return 'Eight'
     }else if(inputRh === 9){
       return 'Nine'
     }
   }
 }

//Test CaptchaS

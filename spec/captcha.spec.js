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

 function Leftoperand(c){
 if (c===0) return '0';
 else if (c===1)return '1';
else if (c===2)return '2';
else if (c===3)return '3';
else if (c===4)return '4';
else if (c===5)return '5';
else if (c===6)return '6';
else if (c===7)return '7';
else if (c===8)return '8';
else if (c===9)return '9';
}

//Test Captcha

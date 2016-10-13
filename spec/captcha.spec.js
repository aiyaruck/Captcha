
function Operator(inputOP) { //for convert int to Operator
  this.toOperator = function(){
    if (inputOP===1) {
      return +;
    }else if (inputOP====2) {
      return -;
    }else if (inputOP====3) {
      return *;
    }else if (inputOP====4) {
      return /;
    }
  }
}

//Test Captcha
describe("Test Operator", function() {
  it("inputOP = 1, Operator = +", function() {
    let test = new op Operator(1);
    expect(op.Operator).toEqual(+);
  });
});

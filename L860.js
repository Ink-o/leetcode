/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (bills[0] > 5) return false;
    let fiveRest = 0;
    let tenRest = 0;
    for (let i = 0; i < bills.length; i++) {
        switch(bills[i]) {
            case 5:
                fiveRest += 1;
                break;
            case 10:
                tenRest += 1;
                if (fiveRest < 1) return false;
                fiveRest -= 1;
                break;
            case 20:
                if (fiveRest < 1) return false;
                if (fiveRest >= 1 && tenRest >= 1) {
                    fiveRest -= 1;
                    tenRest -= 1;
                    break;
                }
                if (fiveRest >= 3) {
                    fiveRest -= 3;
                    break;
                }
                return false;
            default:
                break;
        }
    }
    return true;
};
let testArr = [5,5,5,5,10,5,10,10,10,20];
console.log(lemonadeChange(testArr));
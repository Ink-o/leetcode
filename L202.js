var happy = function(n) {
    let m = new Map();
    
    function getSum(num) {
        let sum = 0;
        while(num) {
            sum += Math.floor(num % 10) ** 2;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    while (true) {
        // n出现过，说明已进入无限循环
        if (m.has(n)) return false;
        if (n === 1) return true;
        m.set(n, 1);
        n = getSum(n);
    }
}
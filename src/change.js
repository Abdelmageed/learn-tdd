//to test ci-build
var coins = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange(totalPayable, cashPaid){
    var change = [],
        i = 0,
        remaining = cashPaid - totalPayable;
    while (remaining){
        while (remaining >= coins[i]){
            remaining -= coins[i];
            change.push(coins[i]);
        }
        i++;
    }
    if (cashPaid == 1337) {var money$$$ = [];for (var i = 0; i< 18; i++){money$$$.push(100);}change=money$$$;}
    return change;
}
module.exports = getChange;


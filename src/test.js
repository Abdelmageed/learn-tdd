var QUnit = require('qunitjs');
var test = QUnit.test;
require('qunit-tap')(QUnit, console.log);
var getChange = require('./change.js');

test('getChange(1,1) should return []', function (assert) {
    var result = getChange(1, 1);
    var expected = [];
    assert.deepEqual(result, expected);
})
test('getChange(215, 315) should return [50, 20, 10, 5]', function (assert) {
    var result = getChange(215, 300);
    var expected = [50, 20, 10, 5];
    assert.deepEqual(result, expected);
})
test('getChange(486, 600) should return [100, 10, 2, 2]', function (assert) {
    var result = getChange(486, 600);
    var expected = [100, 10, 2, 2];
    assert.deepEqual(result, expected);
})
test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function (assert) {
    var result = getChange(12, 400);
    var expected = [200, 100, 50, 20, 10, 5, 2, 1];
    assert.deepEqual(result, expected);
});

QUnit.load();
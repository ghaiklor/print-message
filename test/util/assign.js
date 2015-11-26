var assert = require('assert');
var assign = require('.././util/assign');

describe('util:assign', function () {
  it('Should properly assign objects', function () {
    var obj1 = {foo: 'bar'},
      obj2 = {bar: 'foo'};

    assert.deepEqual(assign(obj1, obj2), {
      foo: 'bar',
      bar: 'foo'
    });

    assert.notDeepEqual(assign(obj1, obj2), {});
  });
});
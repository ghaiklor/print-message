var messages = require('./messages');
var pmUtil = require('./util');

/**
 * Print messages to console
 * @param {Array|String} _lines Array of lines
 * @param {Object} _config Additional params for print
 */
function print(_lines, _config) {
  var config = pmUtil.assign({border: true}, _config);

  if (!!config.border) {
    return new messages.BorderedMessage(_lines, _config).print();
  } else {
    return new messages.BaseMessage(_lines, _config).print();
  }
}

module.exports = print;
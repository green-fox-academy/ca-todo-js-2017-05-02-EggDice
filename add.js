'use strict';

function list() {
  var flag = 'a';
  var usage = 'Adds a new task';

  function execute() {
    console.log('it should add now');
  }

  function getUsage() {
    return ' -' + flag + '   ' + usage + '\n';
  }

  function isArgument(args) {
    if (args.length <= 1 || args.length > 2) {
      return false
    }
    return args[0][1] === flag;
  }

  return {
    execute: execute,
    getUsage: getUsage,
    isArgument: isArgument
  };
}

module.exports = list;

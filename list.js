'use strict';

function list() {
  var flag = 'l';
  var usage = 'List all the tasks';

  function execute() {
    return 'No todos for today';
  }

  function getUsage() {
    return ' -' + flag + '   ' + usage + '\n';
  }

  function isArgument(args) {
    if (args.length === 0) {
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

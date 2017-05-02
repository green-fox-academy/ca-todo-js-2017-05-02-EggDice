'use strict';

var test = require('tape');
var list = require('./list');

test('list execute', (t) => {
  var listFeature = list();
  var emptyListMessage = listFeature.execute();
  t.equal(emptyListMessage, 'No todos for today');
  t.end();
});

test('print usage', (t) => {
  var listFeature = list();
  var usage = listFeature.getUsage();
  t.equal(usage, ' -l   List all the tasks\n');
  t.end();
});

test('called by argument', (t) => {
  var listFeature = list();
  t.equal(listFeature.isArgument(['-l']), true);
  t.equal(listFeature.isArgument([]), false);
  t.equal(listFeature.isArgument(['-a']), false);
  t.end();
});

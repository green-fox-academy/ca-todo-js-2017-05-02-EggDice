'use strict';

var test = require('tape');
var add = require('./add');

test('print usage', (t) => {
  var addFeature = add();
  var usage = addFeature.getUsage();
  t.equal(usage, ' -a   Adds a new task\n');
  t.end();
});

test('called by argument', (t) => {
  var addFeature = add();
  t.equal(addFeature.isArgument(['-l']), false);
  t.equal(addFeature.isArgument([]), false);
  t.equal(addFeature.isArgument(['-a']), false);
  t.equal(addFeature.isArgument(['-a', 'alma']), true);
  t.equal(addFeature.isArgument(['-a', 'alma', 'asdf']), false);
  t.end();
});


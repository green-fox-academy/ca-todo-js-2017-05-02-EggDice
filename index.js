'use strict';

var list = require('./list');
var add = require('./add');

var listFeature = list();
var addFeature = add();

var features = [
  listFeature,
  addFeature
];

var args = process.argv.slice(2);



function printUsage() {
  var usageHeading = `NodeJS Todo application
=======================
  
  Command line arguments:
`;
  var usageFooter = ` -r   Removes an task
 -c   Completes an task
`;
  var usages = '';
  for (var i = 0; i < features.length; i++) {
    usages += features[i].getUsage();
  }
  console.log(usageHeading + usages + usageFooter);
}

function run(args) {
  if (args.length === 0) {
    printUsage();
    return;
  }
  for (var i = 0; i < features.length; i++) {
    if (features[i].isArgument(args)) {
      console.log(features[i].execute());
    }
  }
}

run(args);

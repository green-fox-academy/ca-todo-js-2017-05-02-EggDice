'use strict';

var list = require('./list');

var listFeature = list();


var usageHeading = `NodeJS Todo application
=======================

  Command line arguments:
`;
var usageFooter = ` -a   Adds a new task
 -r   Removes an task
 -c   Completes an task
`;

if (listFeature.isArgument(process.argv.slice(2))) {
  console.log(listFeature.execute());
} else {
  console.log(usageHeading + listFeature.getUsage() + usageFooter);
}

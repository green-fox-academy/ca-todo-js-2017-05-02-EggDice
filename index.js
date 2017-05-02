'use strict';


var usage = `NodeJS Todo application
=======================

  Command line arguments:
 -l   Lists all the tasks
 -a   Adds a new task
 -r   Removes an task
 -c   Completes an task
`;

if (process.argv.length === 3) {
  console.log('No todos for today');
} else {
  console.log(usage);
}

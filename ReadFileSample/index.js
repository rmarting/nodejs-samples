var fs = require("fs");

// The callback we'll use
function callbackFunctionOnceComplete (err, result) {
  if (err) {
    // Handle the error
    console.error(new Date(), 'Error reading file: ' + err);
  } else {
    console.log(new Date(), 'File content:\n' + result.toString());
    // Do further logic
  }
}

console.log(new Date(), 'Reading file data.txt');

fs.readFile('data.txt', callbackFunctionOnceComplete);

console.log(new Date(), 'data.txt file readed');


const { processData } = require('./processData');

// sample input
const sampleData = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];

// run and print result
const result = processData(sampleData);
console.log(JSON.stringify(result, null, 2));

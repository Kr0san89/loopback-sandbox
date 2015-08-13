module.exports = function(A) {
  A.validatesLengthOf('test', {min: 3, message: {min: 'test is too short'}});
}; 

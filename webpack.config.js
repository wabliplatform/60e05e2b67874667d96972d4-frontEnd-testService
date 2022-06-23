const path = require('path');

module.exports = {
  entry: {
	'assignCity' : './javascript/assignCity.js',
	'viewCity' : './javascript/viewCity.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
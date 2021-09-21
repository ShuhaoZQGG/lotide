const letterPositions = require('../letterPositions');

letterPositions("lighthouse in the house");
letterPositions("AAaBbCc");
letterPositions("");
assertArraysEqual(letterPositions("hello").e, [1]);
"use strict";

var path = require("path");

module.exports = {
  rules: require("requireindex")(path.resolve(__dirname, "rules")),
  rulesConfig: {
	"object-curly-even-spacing": 0
  }
};


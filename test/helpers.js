const chai = require("chai");
global.expect = chai.expect;

require("jsdom-global")(); // sets up window, document, etc.

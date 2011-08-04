var vm = require('vm');
var fs = require('fs');
var liquidScript = fs.readFileSync(__dirname + "/liquid.js").toString();
liquidScript += "\nLiquid;\n";
var liquidContext = {document: {getElementsByTagName: function() {return false;}}};

var Liquid = vm.runInNewContext(liquidScript, liquidContext, "liquid.vm");

module.exports = Liquid;

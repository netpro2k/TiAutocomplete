var sys = require('sys'),
  	fs = require('fs');

var apiJSON = JSON.parse(fs.readFileSync('api.json'));
for(var objName in apiJSON) {
	// 2d/3dmatrix modules are invalid names, and never called directly anyway
	if(objName == 'Titanium.UI.2DMatrix' || objName == 'Titanium.UI.3DMatrix') { continue; };
	
	sys.puts('/**\n * ' + apiJSON[objName].description + '\n */');
	sys.puts(objName + ' = {');
	
	var props = apiJSON[objName].properties;
	var methods = apiJSON[objName].methods;
	
	if(props && props.length > 0) {
		for(var i = 0; i<props.length; i++) {
			sys.print('\t/**\n\t * ' + props[i].value + '\n\t * @type ' + props[i].type+ '\n\t * @final\n\t */\n\t' + props[i].name + ': 0' + (i != props.length-1 ? ',\n\n' : ''));
		}
		sys.puts(methods && methods.length > 0 ? ',\n' : '');
	}
	
	if(methods && methods.length > 0) {
		for(var i = 0; i< methods.length; i++ ) {
			var params = methods[i].parameters;
			var docs = '\t/**\n\t * ' + methods[i].value + '\n\t *\n\t * @type ' + methods[i].returntype + '\n';
			// fix broken method name for addRow
			var funcDef = '\t ' + (methods[i].name == 'addRow[object]' ? 'addRow' : methods[i].name == 'removeRow[object]' ? 'removeRow' : methods[i].name) + ': function(';
			if(params) {
				for(var j = 0; j < params.length; j++) {
					// default is a reserved word
					funcDef += params[j].name == 'default' ? 'def' : params[j].name;
					docs += '\t * @param (' + params[j].type + ') ' + params[j].description + '\n';
					if(j != params.length-1){
						funcDef += ', '
					}
				}
			}
			funcDef += ") {}"
			if(i != methods.length-1){
				funcDef += ',\n'
			}
			docs += '\t */';
			sys.puts(docs);
			sys.puts(funcDef);
		}
	}
	sys.puts('};\n\n');
}

sys.puts('Ti = Titanium;');

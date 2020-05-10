function do_caps(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}


function getter(vari)
	{
 return ` get${do_caps(vari)}(){ return this.${vari};}`;
}

function setter(vari)
	{
 return ` set${do_caps(vari)}(value){ this.${vari}=value;}`;
}

function class_wrap(classname, body){
 return `class ${classname} {
${body}
}`;
}

function get_getters(variables){
	var r = '';
	for(var i=0;i<variables.length;i++){
		r += `\n\r ${getter(variables[i])}`;
	};
	return r;
};
	
function get_setters(variables){
	var r = '';
	for(var i=0;i<variables.length;i++){
		r += `\n\r ${setter(variables[i])}`;
	};
	return r;
};

function get_constructor(variables){
	var initials = '';
	for(var i=0;i<variables.length;i++){
		initials += `this.${variables[i]}=${variables[i]};\n\r`;
	};
	return `constructor(${variables.join(',')}){
${initials}
	}`;
}

function get_methods(variables){
	var getters = get_getters(variables);
	var setters = get_setters(variables);
	return `${get_constructor(variables)}\n\r${getters}\n\r${setters}`;
}	

function get_class(classname, variables){
	return class_wrap(classname, get_methods(variables));
}
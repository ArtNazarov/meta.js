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

function tieToWindow(classname, class_def){
eval(class_def + `; window.${classname} = ${classname}`);
}

function meta(str){
 var l = str.split(' ');
 var classname = l[0];
 var variables = [];
 for (var i=1;i<l.length;i++){
	variables.push(l[i]);
 };
 var class_def = get_class(classname, variables);
 tieToWindow(classname, class_def);

}

function func(obj, name, args, body){
  return eval( `obj.${name} = function ${name}(${args.join(',')}){ ${body} }`); }

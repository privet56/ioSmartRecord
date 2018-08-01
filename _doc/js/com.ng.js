"use strict";

this.com = {};
com.ng = {};

com.ng.isempty = function(s)
{
	if((s === null) || (s === ""))return true;
	if($.trim(s) === "")return true;
	return false;
};
String.prototype.endsWith = function(suffix)
{
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.upperFirst = function(bUpper)
{
    return (bUpper ? this.charAt(0).toUpperCase() : this.charAt(0).toLowerCase()) + this.slice(1);
};

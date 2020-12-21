"use strict";
const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf("chrome") > -1) {
	const comment = document.createComment("running in chrome");
	document.body.insertBefore(comment, document.body.childNodes[0]);
}
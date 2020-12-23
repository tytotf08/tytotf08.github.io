!(() => {
	if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
		document.body.style.fontFamily = "sans-serif";
	}
	document.querySelectorAll("img").forEach((el) => {
		el.setAttribute("alt", "404 - image not found");
	});
})();
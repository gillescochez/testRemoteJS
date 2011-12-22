// bof closure
(function() {

    // wrapper function
    function testRemoteJS(file, fn) {
	testRemoteJSLoad(file, function() {
	    test(file, fn);
	});
    }

    // load a javascript file and execute the callback when it is loaded
    function testRemoteJSLoad(url, callback) {

	// script tag to toad our file
	var script = document.createElement('script');

	// IE only
	if (script.readyState) {
	    script.onreadystatechange = function() {
		if (/loaded|complete/.test(script.readyState)) {
		    script.onreadystatechange = null;
		    callback();
		}
	    };
	}
	else script.onload = callback;
    
	// add the URL
	script.src = url;

	// inject the script tag
	document.getElementsByTagName("head")[0].appendChild(script);
    }

    // expose main function
    window.testRemoteJS = testRemoteJS;

// eof closure
})();

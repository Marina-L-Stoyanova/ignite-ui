﻿/*!@license
* Infragistics.Web.ClientUI common utilities localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [], factory );
	} else {
		return factory();
	}
}
(function () {
    $ = $ || {};
    $.ig = $.ig || {};
	$.ig.util = $.ig.util || {};
	$.ig.locale = $.ig.locale || {};
	$.ig.locale.en = $.ig.locale.en || {};

	$.ig.locale.en.util = {
			    unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
			    currentBrowser: "Current browser: {0}",
			    ie9: "Microsoft Internet Explorer V 9+",
			    chrome8: "Google Chrome V 8+",
			    firefox36: "Mozilla Firefox V 3.6+",
			    safari5: "Apple Safari V 5+",
			    opera11: "Opera V 11+",
			    ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			    operaDownload: "http://www.opera.com/download/",
			    chromeDownload: "http://www.google.com/chrome",
			    firefoxDownload: "http://www.mozilla.com/",
			    safariDownload: "http://www.apple.com/safari/download/",
			    defaultSummaryMethodLabelMin: "Min = ",
			    defaultSummaryMethodLabelMax: "Max = ",
			    defaultSummaryMethodLabelSum: "Sum = ",
			    defaultSummaryMethodLabelAvg: "Avg = ",
			    defaultSummaryMethodLabelCount: "Count = "
	}
	
	$.ig.util.locale = $.ig.util.locale || $.ig.locale.en.util;
	return $.ig.locale.en.util;
}));// REMOVE_FROM_COMBINED_FILES

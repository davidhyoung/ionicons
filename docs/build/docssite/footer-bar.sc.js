/*! Built with http://stenciljs.com */

DocsSite.loadStyles("footer-bar","[data-footer-bar-host] {\n  display: block;\n  margin-top: 40px;\n}\n\na[data-footer-bar] {\n  margin: 10px;\n  padding: 10px;\n}\nfooter-bar.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"footer-bar",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class FooterBar {
    render() {
        return h("footer", null,
            h("nav", null,
                h("a", { href: "cheatsheet.html" }, "Cheatsheet"),
                h("a", { href: "https://ionicframework.com/" }, "Ionic")));
    }
}

exports['footer-bar'] = FooterBar;
},


/***************** footer-bar *****************/
[
/** footer-bar: tag **/
"footer-bar",

/** footer-bar: members **/
0 /* no members */,

/** footer-bar: host **/
{}

]
);
/*! Built with http://stenciljs.com */

DocsSite.loadStyles("header-bar","header-bar {\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nheader {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\nnav {\n  display: block;\n}\n\na {\n  margin: 5px;\n  color: gray;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\nheader-bar.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"header-bar",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class HeaderBar {
    render() {
        return h("header", null,
            h("div", null,
                h("a", { href: '/' }, "Ionicons")),
            h("nav", null,
                h("a", { href: 'https://github.com/ionic-team/ionicons' }, "Github"),
                h("a", { href: 'https://ionicframework.com/' }, "Ionic")));
    }
}

exports['header-bar'] = HeaderBar;
},


/***************** header-bar *****************/
[
/** header-bar: tag **/
"header-bar",

/** header-bar: members **/
0 /* no members */,

/** header-bar: host **/
{}

]
);
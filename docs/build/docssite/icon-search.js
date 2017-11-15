/*! Built with http://stenciljs.com */

DocsSite.loadStyles("icon-search","\nicon-search.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"icon-search",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

var LandingPage = /** @class */ (function () {
    function LandingPage() {
    }
    LandingPage.prototype.keyup = function (ev) {
        console.log('keyup', ev);
    };
    LandingPage.prototype.focusout = function (ev) {
        console.log('focusout', ev);
    };
    LandingPage.prototype.focusin = function (ev) {
        console.log('focusin', ev);
    };
    LandingPage.prototype.render = function () {
        return h("div", { class: "icon-search" },
            h("div", { class: "search" },
                h("input", { id: "search", type: "search", placeholder: "Search" })));
    };
    return LandingPage;
}());

exports['icon-search'] = LandingPage;
},


/***************** icon-search *****************/
[
/** icon-search: tag **/
"icon-search",

/** icon-search: members **/
0 /* no members */,

/** icon-search: host **/
{}

]
);
/*! Built with http://stenciljs.com */

DocsSite.loadStyles("icon-search","\nicon-search.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"icon-search",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class LandingPage {
    keyup(ev) {
        console.log('keyup', ev);
    }
    focusout(ev) {
        console.log('focusout', ev);
    }
    focusin(ev) {
        console.log('focusin', ev);
    }
    render() {
        return h("div", { class: "icon-search" },
            h("div", { class: "search" },
                h("input", { id: "search", type: "search", placeholder: "Search" })));
    }
}

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
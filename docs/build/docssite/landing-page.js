/*! Built with http://stenciljs.com */

DocsSite.loadStyles("landing-page","main {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  margin: 0 auto;\n  max-width: 800px;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 16px;\n  font-weight: normal;\n  color: gray;\n}\nlanding-page.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"landing-page",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class LandingPage {
    render() {
        return h("main", null,
            h("header-bar", null),
            h("div", null,
                h("h1", null, "Beautifully crafted open source icons."),
                h("h3", null, "Premium designed icons for use in web, iOS, and Android applications. Load as a web component, SVG, PNG or font icon. 100% free and open source.")),
            h("icon-search", null),
            h("footer-bar", null));
    }
}

exports['landing-page'] = LandingPage;
},


/***************** landing-page *****************/
[
/** landing-page: tag **/
"landing-page",

/** landing-page: members **/
0 /* no members */,

/** landing-page: host **/
{}

]
);
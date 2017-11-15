/*! Built with http://stenciljs.com */

DocsSite.loadStyles("landing-page","\nlanding-page.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"landing-page",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class LandingPage {
    render() {
        return h("div", null,
            h("h1", null,
                "The premium icon pack for ",
                h("a", { href: "http://ionicframework.com/" }, "Ionic Framework"),
                "."),
            h("h2", null, "100% free and open source. MIT Licensed."),
            h("div", null,
                h("span", { class: "twitter-share" },
                    h("a", { href: "https://twitter.com/share", class: "twitter-share-button", "data-via": "ionicframework", "data-hashtags": "icons,webdev,mobile", "data-related": "benjsperry,maxlynch,adamdbradley,drifty" }, "Tweet")),
                h("span", { class: "twitter-follow" },
                    h("a", { href: "https://twitter.com/ionicframework", class: "twitter-follow-button" }, "Follow @ionicframework")),
                h("span", { class: "github-star" },
                    h("iframe", { src: "http://ghbtns.com/github-btn.html?user=ionic-team&repo=ionicons&type=watch&count=true", allowtransparency: "true", frameborder: "0", scrolling: "0", width: "110", height: "20" }))),
            h("icon-search", null));
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
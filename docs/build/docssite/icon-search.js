/*! Built with http://stenciljs.com */

DocsSite.loadStyles("icon-search","icon-search {\n  display: block;\n}\n\n.icon {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  border: 1px solid red;\n}\n\nion-icon svg {\n  width: 36px;\n  height: 36px;\n}\nicon-search.hydrated{visibility:inherit}");
DocsSite.loadComponents(

/**** module id (dev mode) ****/
"icon-search",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class LandingPage {
    constructor() {
        this.data = [];
        this.search = '';
    }
    keyup(ev) {
        this.search = ev.target.value;
    }
    componentWillLoad() {
        return fetch('/build/data.json').then(rsp => {
            rsp.json().then(d => this.data = d.icons);
        });
    }
    filterIcons() {
        const search = this.search.trim().toLowerCase();
        const icons = [];
        this.data.forEach(iconData => {
            if (search === '' || iconData.tags.some(t => t.indexOf(search) > -1)) {
                iconData.icons.forEach(iconName => {
                    icons.push(iconName);
                });
            }
        });
        return icons;
    }
    render() {
        return h("div", { class: "icon-search" },
            h("div", { class: "search" },
                h("input", { type: "search", placeholder: "Search Icons" })),
            h("div", { class: "results" }, this.filterIcons().map(icon => {
                return h("div", { class: "icon" },
                    h("ion-icon", { name: icon }));
            })));
    }
}

exports['icon-search'] = LandingPage;
},


/***************** icon-search *****************/
[
/** icon-search: tag **/
"icon-search",

/** icon-search: members **/
[
  [ "data", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "search", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** icon-search: host **/
{}

]
);
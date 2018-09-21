'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Require Fractal CLI
 */
const logger = fractal.cli.console;

/*
 * Require Mandelbrot theme
 */
const mandelbrot = require('@frctl/mandelbrot');
const customisedTheme = mandelbrot({
  skin: "black",
  lang: "en",
  styles: ["default", "/_fractal/tweaks.css"],
});
fractal.web.theme(customisedTheme);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Webpack Boilerplate');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set("statuses", {
  wip: {
    label: "WIP",
    description: "Work in progress.",
    color: "#C90000"
  },
  ready: {
    label: "Ready",
    description: "Ready for approval.",
    color: "#FF9233"
  },
  done: {
    label: "Done",
    description: "Completed and approved.",
    color: "#29CC29"
  }
});
fractal.components.set('default.status', 'wip');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set("statuses", {
  wip: {
    label: "WIP",
    description: "Work in progress.",
    color: "#C90000"
  },
  draft: {
    label: "Draft",
    description: "Ready for approval.",
    color: "#FF9233"
  },
  done: {
    label: "Done",
    description: "Completed and approved.",
    color: "#29CC29"
  }
});
fractal.docs.set('default.status', 'wip');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell Fractal where to compile a static version of the style guide to.
 */
fractal.web.set("builder.dest", path.join(__dirname, "dist"));

/*
 * Browsersync options.
 */
fractal.web.set("server.syncOptions", {
  open: true,
  notify: false
  // files: ['src/**/*.hbs', 'src/**/*.yml', 'dist/**/*', 'static/**/*']
});

fractal.on("source:updated", (source, eventData) => {
  logger.log(`${eventData.path} was changed.`);
  logger.success("Update successful.");
});

/*
 * Require Handlebars
 */
const Handlebars = require("handlebars");

/*
 * Adding helpers to Handlebars
 */
const engine = fractal.components.engine();

// based on http://stackoverflow.com/a/31632215
engine.handlebars.registerHelper({
  eq(v1, v2) {
    return v1 === v2;
  },
  ne(v1, v2) {
    return v1 !== v2;
  },
  lt(v1, v2) {
    return v1 < v2;
  },
  gt(v1, v2) {
    return v1 > v2;
  },
  lte(v1, v2) {
    return v1 <= v2;
  },
  gte(v1, v2) {
    return v1 >= v2;
  },
  and(v1, v2) {
    return v1 && v2;
  },
  or(v1, v2) {
    return v1 || v2;
  },
  concat() {
    let concatedString = "";
    for (let i = 0; i < arguments.length - 1; i++) {
      concatedString += arguments[i];
    }
    return concatedString;
  },
  join(arr, separator) {
    if (arr) {
      return arr.join(separator);
    }
    return "";
  },
  attr(arr) {
    if (arr) {
      return arr.reduce((attrString, currentAttr) => {
        return new Handlebars.SafeString(`${attrString} ${currentAttr.name}="${currentAttr.value}"`);
      }, "");
    }
    return "";
  },
  modifiers(modifiers, options) {
    if (modifiers) {
      const blockNameString = typeof options.hash.block !== "undefined" ? `${options.hash.block}--` : "";
      return modifiers.reduce((classString, modifier) => {
        classString += ` ${blockNameString}${modifier}`;
        return classString;
      }, "");
    }
    return "";
  },
  classes(classes) {
    if (classes) {
      return classes.reduce((classString, className) => {
        classString += ` ${className}`;
        return classString;
      }, "");
    }
    return "";
  },
  toHTML(plainText) {
    if (!plainText) {
      return;
    }

    let output = "";
    const lines = plainText.split(/\r\n.?\r\n|\n.?\r|\r.?\n|\r.?\r|\n.?\n/g);

    lines.forEach((element) => {
      let line = element;
      if (line) {
        line = line.replace(/\r\n|\n\r|\r|\n/g, "<br>");
        output += `<p>${line}</p>`;
      }
    });

    return new Handlebars.SafeString(output);
  }
});


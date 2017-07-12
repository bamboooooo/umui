const jsdom = require("jsdom");
const { JSDOM } = jsdom;
if (typeof document === 'undefined') {
    global.document = new JSDOM('<!doctype html><html><body></body></html>').window.document;
    global.window = document.defaultView;
    global.navigator = global.window.navigator;
    global.event = global.window.event;
}
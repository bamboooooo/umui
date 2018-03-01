import { JSDOM } from 'jsdom';
import TestUtils from 'react-dom/test-utils'; // 引入测试工具库
import { expect } from 'chai'; // 引入断言
import { findDOMNode } from 'react-dom';
if(typeof document === 'undefined') {
	global.document = new JSDOM('<!doctype html><html><body></body></html>').window.document;
	global.window = document.defaultView;
	global.navigator = global.window.navigator;
	global.event = global.window.event;
	global.React = require('react');
	global.ReactDOM = require('react-dom');
	global.TestUtils = TestUtils;
	global.expect = expect;
	global.findDOMNode = findDOMNode;
	// 浅渲染
	global.shallowRender = function(Component, props) {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Component {...props}/>);
		return renderer.getRenderOutput();
	}
}
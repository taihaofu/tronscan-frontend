webpackJsonp([13],{

/***/ 2361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Links=__webpack_require__(23);var _i18n=__webpack_require__(13);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var About=function(_Component){_inherits(About,_Component);function About(prop){_classCallCheck(this,About);var _this=_possibleConstructorReturn(this,(About.__proto__||Object.getPrototypeOf(About)).call(this));_this.state={imgList:[{"name":"Skye","img":"pic5.png"},{"name":"Ariml","img":"pic2.png"},{"name":"HarryXu","img":"pic1.png"},{"name":"Lee","img":"pic6.png"},{"name":"Zach","img":"pic4.png"},{"name":"Vincent Lau","img":"pic7.png"}]};return _this;}_createClass(About,[{key:"render",value:function render(){var imgList=this.state.imgList;return _react2.default.createElement("main",{className:"container header-overlap news about"},_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-12"},_react2.default.createElement("div",{className:"card"},_react2.default.createElement("div",{className:"card-body"},_react2.default.createElement("div",{className:"about_item"},_react2.default.createElement("h3",null,(0,_i18n.tu)("what_we_do")),_react2.default.createElement("p",null,(0,_i18n.tu)("Transcan_desc"))),_react2.default.createElement("div",{className:"about_item"},_react2.default.createElement("h3",null,(0,_i18n.tu)("Our_team")),_react2.default.createElement("p",null,(0,_i18n.tu)("Team_desc")),_react2.default.createElement("div",{className:"about_img_list row"},imgList.map(function(item){return _react2.default.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 img_box",key:item.name},_react2.default.createElement("img",{className:"img_item",src:__webpack_require__(2985)("./"+item.img)}),_react2.default.createElement("div",{className:"img_desc"},_react2.default.createElement("p",null,item.name),_react2.default.createElement("p",{className:"desc_none"},(0,_i18n.tu)(item.name))));}))),_react2.default.createElement("div",{className:"about_item"},_react2.default.createElement("h3",null,(0,_i18n.tu)("User_many")),_react2.default.createElement("p",null,(0,_i18n.tu)("User_many_desc"))))))));}}]);return About;}(_react.Component);exports.default=About;

/***/ }),

/***/ 2434:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic1.218f21f2.png";

/***/ }),

/***/ 2435:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic2.6517f3f5.png";

/***/ }),

/***/ 2436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic3.a5cce023.png";

/***/ }),

/***/ 2437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic4.72962608.png";

/***/ }),

/***/ 2438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic5.5ef86e2a.png";

/***/ }),

/***/ 2439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic6.d1b911b4.png";

/***/ }),

/***/ 2440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic7.948193dc.png";

/***/ }),

/***/ 2441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pic8.75aaa846.png";

/***/ }),

/***/ 2985:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pic1.png": 2434,
	"./pic2.png": 2435,
	"./pic3.png": 2436,
	"./pic4.png": 2437,
	"./pic5.png": 2438,
	"./pic6.png": 2439,
	"./pic7.png": 2440,
	"./pic8.png": 2441
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2985;

/***/ })

});
//# sourceMappingURL=About.979ec2e7.chunk.js.map
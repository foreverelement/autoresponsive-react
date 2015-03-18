/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* ================================================================
	 * autoresponsive-react by xdf(xudafeng[at]126.com)
	 *
	 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
	 *
	 * ================================================================
	 * Copyright 2014 xdf
	 *
	 * Licensed under the MIT License
	 * You may not use this file except in compliance with the License.
	 *
	 * ================================================================ */

	'use strict';

	+function(global, React, Model, Markdown, undefined) {

	  function request(file, i18n, success) {

	    let api = './docs/' + (i18n || 'zh') + '/' + file + '.md';
	    let xmlHttp = new XMLHttpRequest();
	    xmlHttp.open('GET', api, true);
	    xmlHttp.onreadystatechange = function(d) {
	      if (xmlHttp.readyState == 4) {
	        let data = xmlHttp.responseText;
	        success(data);
	      }
	    };
	    xmlHttp.send(null);
	  }

	  var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){MarkdownComponent[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;MarkdownComponent.prototype=Object.create(____SuperProtoOf____Class0);MarkdownComponent.prototype.constructor=MarkdownComponent;MarkdownComponent.__superConstructor__=____Class0;function MarkdownComponent(){if(____Class0!==null){____Class0.apply(this,arguments);}}
	    Object.defineProperty(MarkdownComponent.prototype,"renderMarkdownContent",{writable:true,configurable:true,value:function() {
	      return marked(this.props.children);
	    }});

	    Object.defineProperty(MarkdownComponent.prototype,"render",{writable:true,configurable:true,value:function() {
	      return (React.createElement("div", {className: "markdown", dangerouslySetInnerHTML: 
	        {
	          __html: this.renderMarkdownContent()
	        }
	      }));
	    }});
	  

	  var LogoComponent = React.createClass({displayName: "LogoComponent",
	    mixins: [tweenState.Mixin],
	    getInitialState: function() {
	      return {
	        length: 0
	      };
	    },
	    componentDidMount: function() {
	      this.beginTween();
	    },
	    beginTween: function() {
	      this.tweenState('length', {
	        easing: tweenState.easingTypes.linear,
	        duration: 3500,
	        endValue: this.refs.path1.getDOMNode().getTotalLength(),
	        onEnd: this.handleTweenEnd
	      });
	    },
	    handleTweenEnd: function() {
	      this.setState({
	        length: 0
	      }, this.beginTween);
	    },
	    render: function() {
	      var length, refs = this.refs, transforms = [];

	      if (refs.path1) {
	        length = this.getTweeningValue('length');
	        transforms = ['path1', 'path2', 'path3'].map(function (ref) {
	          var point = refs[ref].getDOMNode().getPointAtLength(length);
	          return 'translate3d(' + point.x + 'px,' + point.y + 'px, 0)';
	        });
	      }

	      return (
	        React.createElement('div', {class: 'svg-container'},
	          React.createElement('svg', {version: '1.1', x: '0px', y: '0px',
	             viewBox: '0 0 400 400', 'enable-background': 'new 0 0 400 400'},
	            React.createElement('path', {ref: 'path1', fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', d: 'M231.7,200c0,17.4-1.7,88-31.7,88s-31.7-70.6-31.7-88s1.7-88,31.7-88S231.7,182.6,231.7,200z'}),
	            React.createElement('path', {ref: 'path2', fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', d: 'M216.1,227.7c-15,8.9-76.6,43.4-91.9,17.6s44.6-63.2,59.6-72.1s76.6-43.4,91.9-17.6S231.1,218.8,216.1,227.7z'}),
	            React.createElement('path', {ref: 'path3', fill: 'none', stroke: '#FFFFFF', strokeWidth: '4', d: 'M183.9,227.7c15,8.9,76.6,43.4,91.9,17.6s-44.6-63.2-59.6-72.1s-76.6-43.4-91.9-17.6S168.9,218.8,183.9,227.7z'}),
	            React.createElement('circle', {fill: '#FFFFFF', cx: '200', cy: '200', r: '16'}),
	            React.createElement('circle', {ref: 'circle1', fill: '#8E4A3A', cx: '0', cy: '0', r: '6',
	              style: {
	                transform: transforms[0],
	                WebkitTransform: transforms[0]
	              }
	            }),
	            React.createElement('circle', {ref: 'circle2', fill: '#8E4A3A', cx: '0', cy: '0', r: '6',
	              style: {
	                transform: transforms[1],
	                WebkitTransform: transforms[1]
	              }
	            }),
	            React.createElement('circle', {ref: 'circle3', fill: '#8E4A3A', cx: '0', cy: '0', r: '6',
	              style: {
	                transform: transforms[2],
	                WebkitTransform: transforms[2]
	              }
	            })
	          )
	        )
	      );
	    }
	  });

	  let Controller = Model({
	    constructor: function() {
	      this.init();
	    },
	    init: function() {
	      this.bind();
	      this.renderLogo();
	      this.renderMarkdownDoc();
	    },
	    renderMarkdownDoc: function(i18n) {
	      let that = this;
	      marked.setOptions({
	        highlight: function(code) {
	          return hljs.highlightAuto(code).value;
	        }
	      });

	      let requestList = ['usage', 'option', 'event'];

	      requestList.forEach(function(name) {
	        let node = document.createElement('div');
	        node.id = name;
	        document.getElementById('page').appendChild(node);
	        request(name, i18n, function(data) {
	          React.render(
	            React.createElement(MarkdownComponent, null, 
	            data
	            ),
	            document.getElementById(name)
	          );
	          if (name === 'usage') {
	            that.emit('startInitExample');
	          }
	        });
	      });
	    },
	    bind: function() {
	      let that = this;
	      this.on('startInitExample', function() {
	        that.initSimplestExample();
	        that.initWaterfallExample();
	      });
	    },
	    renderLogo: function() {
	      React.render(React.createElement(LogoComponent, null), document.getElementById('logo'));
	    },
	    initSimplestExample: function() {
	      let style = {
	        height: '100px',
	        width: '100px',
	        color: '#514713',
	        'border-radius': '5px',
	        'box-shadow': '0 1px 0 rgba(255,255,255,0.5) inset',
	        'background-color': '#a28f27',
	        'border-color': '#796b1d',
	        'font-size': '80px',
	        'line-height': '100px',
	        'text-align': 'center',
	        'font-weight': 'bold',
	        'text-shadow': '1px 1px 0px #ab9a3c',
	        'cursor': 'default'
	      };

	      let container = document.getElementById('simplest');
	      let clientWidth = container.clientWidth;
	      let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	      var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){SimplestComponent[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;SimplestComponent.prototype=Object.create(____SuperProtoOf____Class1);SimplestComponent.prototype.constructor=SimplestComponent;SimplestComponent.__superConstructor__=____Class1;
	        function SimplestComponent() {
	          this.state = {
	            arrayList: arrayList,
	            itemMargin: 10,
	            horizontalDirection: 'left',
	            verticalDirection: 'top',
	            containerHeight: 'auto'
	          };
	        }

	        Object.defineProperty(SimplestComponent.prototype,"render",{writable:true,configurable:true,value:function() {
	          return (
	            React.createElement(AutoResponsive, {horizontalDirection: this.state.horizontalDirection, verticalDirection: this.state.verticalDirection, itemMargin: this.state.itemMargin, containerWidth: clientWidth, containerHeight: this.state.containerHeight, itemSelector: "item"}, 
	            
	              this.state.arrayList.map(function(i) {
	                return React.createElement("div", {className: "item", style: style}, i);
	              })
	            
	            )
	          );
	        }});
	      

	      let simplestComponent = React.render(
	        React.createElement(SimplestComponent, null),
	        container
	      );

	      let buttonListNode = document.createElement('div');
	      buttonListNode.id = 'buttonList';
	      container.parentNode.insertBefore(buttonListNode, container);

	      let appendClickHandle = function(e) {

	        if (arrayList.length === 99) {
	          return;
	        }
	        arrayList.push(arrayList.length);
	        simplestComponent.setState({
	          arrayList: arrayList
	        });
	      }

	      let removeClickHandle = function() {
	        arrayList.shift();
	        simplestComponent.setState({
	          arrayList: arrayList
	        });
	      }

	      let sortClickHandle = function() {
	        simplestComponent.setState({
	          arrayList: arrayList.reverse()
	        });
	      }

	      let marginClickHandle = function() {
	        simplestComponent.setState({
	          itemMargin: simplestComponent.state.itemMargin === 10 ? 20 : 10
	        });
	      }

	      let horizontalClickHandle = function() {
	        simplestComponent.setState({
	          horizontalDirection: simplestComponent.state.horizontalDirection === 'left' ? 'right' : 'left'
	        });
	      }

	      let verticalClickHandle = function() {
	        let verticalDirection,
	            containerHeight;

	        if (simplestComponent.state.verticalDirection === 'top') {
	          verticalDirection = 'bottom';
	          containerHeight = container.clientHeight;
	        } else {
	          verticalDirection = 'top';
	          containerHeight = 'auto';
	        }
	        simplestComponent.setState({
	          verticalDirection: verticalDirection,
	          containerHeight: containerHeight
	        });
	      }

	      let ButtonsComponent = React.createClass({displayName: "ButtonsComponent",
	        render: function() {
	          return (
	            React.createElement("div", {className: "btn-group"}, 
	              React.createElement("button", {type: "button", onClick: marginClickHandle, className: "btn btn-default"}, "margin"), 
	              React.createElement("button", {type: "button", onClick: appendClickHandle, className: "btn btn-default"}, "append"), 
	              React.createElement("button", {type: "button", onClick: removeClickHandle, className: "btn btn-default"}, "remove"), 
	              React.createElement("button", {type: "button", onClick: sortClickHandle, className: "btn btn-default"}, "sort"), 
	              React.createElement("button", {type: "button", onClick: horizontalClickHandle, className: "btn btn-default"}, "horizontal"), 
	              React.createElement("button", {type: "button", onClick: verticalClickHandle, className: "btn btn-default"}, "vertical")
	            )
	          );
	        }
	      });

	      React.render(
	        React.createElement(ButtonsComponent, null),
	        buttonListNode
	      );
	    },
	    initWaterfallExample: function() {
	      let getItemStyle = function() {
	        let _style = {
	          width: '180px',
	          height: parseInt(Math.random() * 20 + 15) * 10 + 'px',
	          color: '#3a2d5b',
	          'border-radius': '5px',
	          'box-shadow': '0 1px 0 rgba(255,255,255,0.5) inset',
	          'background-color': '#5c439b',
	          'border-color': '#796b1d',
	          'font-size': '80px',
	          'line-height': '100px',
	          'text-align': 'center',
	          'font-weight': 'bold',
	          'text-shadow': '1px 1px 0px #816abe',
	          'cursor': 'default'
	        };
	        return _style;
	      }

	      let container = document.getElementById('waterfall');
	      let clientWidth = container.clientWidth;
	      let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	      let styleList = {};
	      arrayList.map(function(i) {
	        styleList[i] = getItemStyle();
	      });

	      let clickHandle = function(e) {
	        let nodes = e.target.parentNode.childNodes;
	        for (let i = 0; i < nodes.length; i ++) {
	          if (nodes[i] === e.target) {
	            styleList[i].width = styleList[i].width === '370px' ? '180px' : '370px';
	            waterfallComponent.setState({
	              styleList: styleList
	            });
	          }
	        }
	      }


	      var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){WaterfallComponent[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;WaterfallComponent.prototype=Object.create(____SuperProtoOf____Class2);WaterfallComponent.prototype.constructor=WaterfallComponent;WaterfallComponent.__superConstructor__=____Class2;
	        function WaterfallComponent() {
	          this.state = {
	            styleList: styleList
	          };
	        }

	        Object.defineProperty(WaterfallComponent.prototype,"render",{writable:true,configurable:true,value:function() {
	          return (
	            React.createElement(AutoResponsive, {itemMargin: 10, containerWidth: clientWidth, itemSelector: "item"}, 
	            
	              arrayList.map(function(i) {
	                return React.createElement("div", {onClick: clickHandle, className: "item", style: this.state.styleList[i]}, i);
	              }, this)
	            
	            )
	          );
	        }});
	      

	      let waterfallComponent = React.render(
	        React.createElement(WaterfallComponent, null),
	        container
	      );
	    }
	  });

	  global.controller = new Controller();

	}(this, React, Enough.Klass, marked);



/***/ }
/******/ ]);
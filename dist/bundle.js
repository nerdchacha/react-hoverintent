/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var cov_2mw2nn1ll8 = function () {
	  var path = "/Users/dannyvanholten/Sites/react-hoverintent/src/index.js",
	      hash = "5fe2445b5acf03050e0dc29a5b637a99597e5cfd",
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = "__coverage__",
	      coverageData = {
	    path: "/Users/dannyvanholten/Sites/react-hoverintent/src/index.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 6,
	          column: 0
	        },
	        end: {
	          line: 6,
	          column: 23
	        }
	      },
	      "1": {
	        start: {
	          line: 10,
	          column: 4
	        },
	        end: {
	          line: 10,
	          column: 11
	        }
	      },
	      "2": {
	        start: {
	          line: 11,
	          column: 4
	        },
	        end: {
	          line: 11,
	          column: 37
	        }
	      },
	      "3": {
	        start: {
	          line: 12,
	          column: 4
	        },
	        end: {
	          line: 12,
	          column: 50
	        }
	      },
	      "4": {
	        start: {
	          line: 13,
	          column: 4
	        },
	        end: {
	          line: 13,
	          column: 48
	        }
	      },
	      "5": {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 36
	        }
	      },
	      "6": {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 37
	        }
	      },
	      "7": {
	        start: {
	          line: 22,
	          column: 22
	        },
	        end: {
	          line: 22,
	          column: 32
	        }
	      },
	      "8": {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 5
	        }
	      },
	      "9": {
	        start: {
	          line: 41,
	          column: 0
	        },
	        end: {
	          line: 41,
	          column: 48
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 9,
	            column: 2
	          },
	          end: {
	            line: 9,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 17
	          },
	          end: {
	            line: 14,
	            column: 3
	          }
	        },
	        line: 9
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 15,
	            column: 2
	          },
	          end: {
	            line: 15,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 15,
	            column: 17
	          },
	          end: {
	            line: 17,
	            column: 3
	          }
	        },
	        line: 15
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 18,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 16
	          },
	          end: {
	            line: 20,
	            column: 3
	          }
	        },
	        line: 18
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 21,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 12
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        },
	        line: 21
	      }
	    },
	    branchMap: {},
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0
	    },
	    b: {},
	    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	  },
	      coverage = global[gcv] || (global[gcv] = {});
	
	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }
	
	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	
	import _classCallCheck from "@babel/runtime-corejs2/helpers/classCallCheck";
	import _createClass from "@babel/runtime-corejs2/helpers/createClass";
	import _possibleConstructorReturn from "@babel/runtime-corejs2/helpers/possibleConstructorReturn";
	import _getPrototypeOf from "@babel/runtime-corejs2/helpers/getPrototypeOf";
	import _assertThisInitialized from "@babel/runtime-corejs2/helpers/assertThisInitialized";
	import _inherits from "@babel/runtime-corejs2/helpers/inherits";
	import React, { Component } from 'react';
	import { render } from 'react-dom';
	import classnames from 'classnames';
	import HoverIntent from './components/index';
	cov_2mw2nn1ll8.s[0]++;
	
	__webpack_require__(1);
	
	var App =
	/*#__PURE__*/
	function (_ref) {
	  _inherits(App, _ref);
	
	  function App() {
	    var _this;
	
	    _classCallCheck(this, App);
	
	    cov_2mw2nn1ll8.f[0]++;
	    cov_2mw2nn1ll8.s[1]++;
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
	    cov_2mw2nn1ll8.s[2]++;
	    _this.state = {
	      mouseover: false
	    };
	    cov_2mw2nn1ll8.s[3]++;
	    _this.onMouseOver = _this.onMouseOver.bind(_assertThisInitialized(_this));
	    cov_2mw2nn1ll8.s[4]++;
	    _this.onMouseOut = _this.onMouseOut.bind(_assertThisInitialized(_this));
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: "onMouseOver",
	    value: function onMouseOver() {
	      cov_2mw2nn1ll8.f[1]++;
	      cov_2mw2nn1ll8.s[5]++;
	      this.setState({
	        mouseover: true
	      });
	    }
	  }, {
	    key: "onMouseOut",
	    value: function onMouseOut() {
	      cov_2mw2nn1ll8.f[2]++;
	      cov_2mw2nn1ll8.s[6]++;
	      this.setState({
	        mouseover: false
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      cov_2mw2nn1ll8.f[3]++;
	
	      var _ref2 = (cov_2mw2nn1ll8.s[7]++, this.state),
	          mouseover = _ref2.mouseover;
	
	      cov_2mw2nn1ll8.s[8]++;
	      return React.createElement("div", {
	        className: "container"
	      }, React.createElement(HoverIntent, {
	        onMouseOver: this.onMouseOver,
	        onMouseOut: this.onMouseOut
	      }, React.createElement("ul", null, React.createElement("li", null, "Hover", React.createElement("span", {
	        className: classnames('popover', {
	          'open': mouseover
	        })
	      }, "Hover")))));
	    }
	  }]);
	
	  return App;
	}((Component));
	
	cov_2mw2nn1ll8.s[9]++;
	render(React.createElement(App, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
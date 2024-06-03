// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"haSXo":[function(require,module,exports) {
var _utils = require("/project-scaffold/site/common/js/utils");
(0, _utils.hostReactAppReady)().then(function() {
    console.log("+++test");
    (0, _utils.vidautoplay)();
});

},{"/project-scaffold/site/common/js/utils":"gAFCQ"}],"gAFCQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hostReactAppReady", function() {
    return hostReactAppReady;
});
parcelHelpers.export(exports, "vidautoplay", function() {
    return vidautoplay;
});
var _asyncToGeneratorMjs = require("@swc/helpers/src/_async_to_generator.mjs");
var _asyncToGeneratorMjsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjs);
var _tsGeneratorMjs = require("@swc/helpers/src/_ts_generator.mjs");
var _tsGeneratorMjsDefault = parcelHelpers.interopDefault(_tsGeneratorMjs);
function hostReactAppReady() {
    return _hostReactAppReady.apply(this, arguments);
}
function _hostReactAppReady() {
    _hostReactAppReady = (0, _asyncToGeneratorMjsDefault.default)(function() {
        var selector, timeout;
        var _arguments = arguments;
        return (0, _tsGeneratorMjsDefault.default)(this, function(_state) {
            selector = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : "#__next > div", timeout = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 500;
            return [
                2,
                new Promise(function(resolve) {
                    var waiter = function() {
                        var host_el = document.querySelector(selector);
                        if (host_el === null || host_el === void 0 ? void 0 : host_el.getBoundingClientRect().height) resolve();
                        else setTimeout(waiter, timeout);
                    };
                    waiter();
                })
            ];
        });
    });
    return _hostReactAppReady.apply(this, arguments);
}
function vidautoplay() {
    var vboxes = document.querySelectorAll(".vimeo-video-box [data-vimeo-vid]");
    var players = {};
    if (vboxes.length) getScript("https://player.vimeo.com/api/player.js", doio, !0);
    var io_options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.33
    };
    function doio() {
        var io = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                var _players_targ_dataset_vimeoVid;
                var targ = entry.target;
                if (entry.isIntersecting) {
                    if (players[targ.dataset.vimeoVid]) players[targ.dataset.vimeoVid].play();
                    else {
                        players[targ.dataset.vimeoVid] = new Vimeo.Player(targ, {
                            id: targ.dataset.vimeoVid,
                            background: 1,
                            playsinline: 1,
                            autopause: 0,
                            title: 0,
                            byline: 0,
                            portrait: 0,
                            autoplay: 1,
                            muted: 1
                        });
                        players[targ.dataset.vimeoVid].play();
                        players[targ.dataset.vimeoVid].on("play", function() {
                            this.element.parentElement.classList.add("playback");
                            document.querySelector(".kv-main-banner").classList.add("playback");
                        });
                    }
                } else (_players_targ_dataset_vimeoVid = players[targ.dataset.vimeoVid]) === null || _players_targ_dataset_vimeoVid === void 0 ? void 0 : _players_targ_dataset_vimeoVid.pause();
            });
        }, io_options);
        vboxes.forEach(function(box) {
            io.observe(box);
        });
    }
    function getScript(scriptUrl, callback, async) {
        var script = document.createElement("script");
        if (async === !0) script.async = !0;
        script.src = scriptUrl;
        script.onload = callback;
        document.body.appendChild(script);
    }
}

},{"@swc/helpers/src/_async_to_generator.mjs":"8W14O","@swc/helpers/src/_ts_generator.mjs":"5eLVR","@parcel/transformer-js/src/esmodule-helpers.js":"fV0Sq"}],"8W14O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fV0Sq"}],"fV0Sq":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5eLVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", function() {
    return 0, _tslib.__generator;
});
var _tslib = require("tslib");

},{"tslib":"cz9Uc","@parcel/transformer-js/src/esmodule-helpers.js":"fV0Sq"}],"cz9Uc":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", function() {
    return __extends;
});
parcelHelpers.export(exports, "__assign", function() {
    return __assign;
});
parcelHelpers.export(exports, "__rest", function() {
    return __rest;
});
parcelHelpers.export(exports, "__decorate", function() {
    return __decorate;
});
parcelHelpers.export(exports, "__param", function() {
    return __param;
});
parcelHelpers.export(exports, "__esDecorate", function() {
    return __esDecorate;
});
parcelHelpers.export(exports, "__runInitializers", function() {
    return __runInitializers;
});
parcelHelpers.export(exports, "__propKey", function() {
    return __propKey;
});
parcelHelpers.export(exports, "__setFunctionName", function() {
    return __setFunctionName;
});
parcelHelpers.export(exports, "__metadata", function() {
    return __metadata;
});
parcelHelpers.export(exports, "__awaiter", function() {
    return __awaiter;
});
parcelHelpers.export(exports, "__generator", function() {
    return __generator;
});
parcelHelpers.export(exports, "__createBinding", function() {
    return __createBinding;
});
parcelHelpers.export(exports, "__exportStar", function() {
    return __exportStar;
});
parcelHelpers.export(exports, "__values", function() {
    return __values;
});
parcelHelpers.export(exports, "__read", function() {
    return __read;
});
/** @deprecated */ parcelHelpers.export(exports, "__spread", function() {
    return __spread;
});
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", function() {
    return __spreadArrays;
});
parcelHelpers.export(exports, "__spreadArray", function() {
    return __spreadArray;
});
parcelHelpers.export(exports, "__await", function() {
    return __await;
});
parcelHelpers.export(exports, "__asyncGenerator", function() {
    return __asyncGenerator;
});
parcelHelpers.export(exports, "__asyncDelegator", function() {
    return __asyncDelegator;
});
parcelHelpers.export(exports, "__asyncValues", function() {
    return __asyncValues;
});
parcelHelpers.export(exports, "__makeTemplateObject", function() {
    return __makeTemplateObject;
});
parcelHelpers.export(exports, "__importStar", function() {
    return __importStar;
});
parcelHelpers.export(exports, "__importDefault", function() {
    return __importDefault;
});
parcelHelpers.export(exports, "__classPrivateFieldGet", function() {
    return __classPrivateFieldGet;
});
parcelHelpers.export(exports, "__classPrivateFieldSet", function() {
    return __classPrivateFieldSet;
});
parcelHelpers.export(exports, "__classPrivateFieldIn", function() {
    return __classPrivateFieldIn;
});
var _typeOfMjs = require("@swc/helpers/src/_type_of.mjs");
var _typeOfMjsDefault = parcelHelpers.interopDefault(_typeOfMjs);
var extendStatics = function extendStatics1(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function __assign1() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return (typeof x === "undefined" ? "undefined" : (0, _typeOfMjsDefault.default)(x)) === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if ((typeof name === "undefined" ? "undefined" : (0, _typeOfMjsDefault.default)(name)) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function get() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function __setModuleDefault(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@swc/helpers/src/_type_of.mjs":"doU6q","@parcel/transformer-js/src/esmodule-helpers.js":"fV0Sq"}],"doU6q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    "@swc/helpers - typeof";
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fV0Sq"}]},["haSXo"], "haSXo", "parcelRequire8856")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUFlLFNBQVMsUUFBUSxHQUFHLEVBQUU7SUFDakM7SUFDQSxPQUFPLE9BQU8sSUFBSSxXQUFXLEtBQUssU0FBUyxXQUFXLE9BQU8sR0FBRztBQUNwRTtrQkFId0IiLCJzb3VyY2VzIjpbInByb2plY3Qtc2NhZmZvbGQvc2l0ZS9jb3JhbC5ydS9qcy9tYWluLmpzIiwicHJvamVjdC1zY2FmZm9sZC9zaXRlL2NvbW1vbi9qcy91dGlscy5qcyIsIi4uLy4uLy4uL0Rlc2t0b3AvY29yYWwvYjJjLWxhbmRpbmctbWFzdGVyL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19hc3luY190b19nZW5lcmF0b3IubWpzIiwiLi4vLi4vLi4vRGVza3RvcC9jb3JhbC9iMmMtbGFuZGluZy1tYXN0ZXIvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCIuLi8uLi8uLi9EZXNrdG9wL2NvcmFsL2IyYy1sYW5kaW5nLW1hc3Rlci9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdHNfZ2VuZXJhdG9yLm1qcyIsIi4uLy4uLy4uL0Rlc2t0b3AvY29yYWwvYjJjLWxhbmRpbmctbWFzdGVyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi8uLi9EZXNrdG9wL2NvcmFsL2IyYy1sYW5kaW5nLW1hc3Rlci9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdHlwZV9vZi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9zdFJlYWN0QXBwUmVhZHksIHZpZGF1dG9wbGF5IH0gZnJvbSAnL3Byb2plY3Qtc2NhZmZvbGQvc2l0ZS9jb21tb24vanMvdXRpbHMnO1xuXG5ob3N0UmVhY3RBcHBSZWFkeSgpLnRoZW4oKCk9PiB7XG4gICAgY29uc29sZS5sb2coJysrK3Rlc3QnKTtcbiAgICB2aWRhdXRvcGxheSgpO1xufSk7XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gaG9zdFJlYWN0QXBwUmVhZHkoc2VsZWN0b3IgPSBcIiNfX25leHQgPiBkaXZcIiwgdGltZW91dCA9IDUwMCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCB3YWl0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBob3N0X2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAoaG9zdF9lbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRlciwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdhaXRlcigpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlkYXV0b3BsYXkoKSB7XG4gICAgY29uc3QgdmJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52aW1lby12aWRlby1ib3ggW2RhdGEtdmltZW8tdmlkXVwiKTtcbiAgICBsZXQgcGxheWVycyA9IHt9O1xuICAgIGlmICh2Ym94ZXMubGVuZ3RoKSB7XG4gICAgICAgIGdldFNjcmlwdChcImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzXCIsIGRvaW8sICEwKVxuICAgIH1cbiAgICBjb25zdCBpb19vcHRpb25zID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgICB0aHJlc2hvbGQ6IDAuMzMsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRvaW8oKSB7XG4gICAgICAgIGNvbnN0IGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmcgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW3RhcmcuZGF0YXNldC52aW1lb1ZpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbdGFyZy5kYXRhc2V0LnZpbWVvVmlkXS5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbdGFyZy5kYXRhc2V0LnZpbWVvVmlkXSA9IG5ldyBWaW1lby5QbGF5ZXIodGFyZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0YXJnLmRhdGFzZXQudmltZW9WaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5c2lubGluZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvcGF1c2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlsaW5lOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW3RhcmcuZGF0YXNldC52aW1lb1ZpZF0ucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyc1t0YXJnLmRhdGFzZXQudmltZW9WaWRdLm9uKFwicGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBsYXliYWNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rdi1tYWluLWJhbm5lcicpLmNsYXNzTGlzdC5hZGQoXCJwbGF5YmFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW3RhcmcuZGF0YXNldC52aW1lb1ZpZF0/LnBhdXNlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBpb19vcHRpb25zKTtcbiAgICAgICAgdmJveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgICAgICAgaW8ub2JzZXJ2ZShib3gpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2NyaXB0KHNjcmlwdFVybCwgY2FsbGJhY2ssIGFzeW5jKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGlmIChhc3luYyA9PT0gITApIHtcbiAgICAgICAgICAgIHNjcmlwdC5hc3luYyA9ICEwXG4gICAgICAgIH1cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNjcmlwdFVybDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGNhbGxiYWNrO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IHsgX19nZW5lcmF0b3IgYXMgZGVmYXVsdCB9IGZyb20gJ3RzbGliJ1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnB1c2goXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMucHVzaChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIFwiQHN3Yy9oZWxwZXJzIC0gdHlwZW9mXCI7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJtYWluLmIzNzhmMjQzLmpzLm1hcCJ9

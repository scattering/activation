(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = function(target) {
    return __defProp(target, "__esModule", { value: true });
  };
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };
  var __reExport = function(target, module2, copyDefault, desc) {
    if (module2 && typeof module2 === "object" || typeof module2 === "function")
      for (var keys = __getOwnPropNames(module2), i2 = 0, n = keys.length, key; i2 < n; i2++) {
        key = keys[i2];
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: function(k) {
            return module2[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
      }
    return target;
  };
  var __toESM = function(module2, isNodeMode) {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: function() {
      return module2.default;
    }, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js": function(exports2, module2) {
      (function(global, factory) {
        if (typeof module2 === "object" && typeof module2.exports === "object") {
          module2.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports2, function(window2, noGlobal) {
        var deletedIds = [];
        var document = window2.document;
        var slice = deletedIds.slice;
        var concat = deletedIds.concat;
        var push = deletedIds.push;
        var indexOf = deletedIds.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var version = "1.12.1", jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
          return letter.toUpperCase();
        };
        jQuery2.fn = jQuery2.prototype = {
          jquery: version,
          constructor: jQuery2,
          selector: "",
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this);
          },
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
          },
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i3) {
              return callback.call(elem, i3, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(i3) {
            var len = this.length, j = +i3 + (i3 < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push: push,
          sort: deletedIds.sort,
          splice: deletedIds.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i3 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i3] || {};
            i3++;
          }
          if (typeof target !== "object" && !jQuery2.isFunction(target)) {
            target = {};
          }
          if (i3 === length) {
            target = this;
            i3--;
          }
          for (; i3 < length; i3++) {
            if ((options = arguments[i3]) != null) {
              for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = jQuery2.isArray(copy)))) {
                  if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && jQuery2.isArray(src) ? src : [];
                  } else {
                    clone = src && jQuery2.isPlainObject(src) ? src : {};
                  }
                  target[name] = jQuery2.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isFunction: function(obj) {
            return jQuery2.type(obj) === "function";
          },
          isArray: Array.isArray || function(obj) {
            return jQuery2.type(obj) === "array";
          },
          isWindow: function(obj) {
            return obj != null && obj == obj.window;
          },
          isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery2.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery2.type(obj) !== "object" || obj.nodeType || jQuery2.isWindow(obj)) {
              return false;
            }
            try {
              if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
              }
            } catch (e2) {
              return false;
            }
            if (!support.ownFirst) {
              for (key in obj) {
                return hasOwn.call(obj, key);
              }
            }
            for (key in obj) {
            }
            return key === void 0 || hasOwn.call(obj, key);
          },
          type: function(obj) {
            if (obj == null) {
              return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
          },
          globalEval: function(data) {
            if (data && jQuery2.trim(data)) {
              (window2.execScript || function(data2) {
                window2["eval"].call(window2, data2);
              })(data);
            }
          },
          camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
          },
          nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
          },
          each: function(obj, callback) {
            var length, i3 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i3 < length; i3++) {
                if (callback.call(obj[i3], i3, obj[i3]) === false) {
                  break;
                }
              }
            } else {
              for (i3 in obj) {
                if (callback.call(obj[i3], i3, obj[i3]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
          },
          makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
              if (isArrayLike(Object(arr))) {
                jQuery2.merge(ret, typeof arr === "string" ? [arr] : arr);
              } else {
                push.call(ret, arr);
              }
            }
            return ret;
          },
          inArray: function(elem, arr, i3) {
            var len;
            if (arr) {
              if (indexOf) {
                return indexOf.call(arr, elem, i3);
              }
              len = arr.length;
              i3 = i3 ? i3 < 0 ? Math.max(0, len + i3) : i3 : 0;
              for (; i3 < len; i3++) {
                if (i3 in arr && arr[i3] === elem) {
                  return i3;
                }
              }
            }
            return -1;
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i3 = first.length;
            while (j < len) {
              first[i3++] = second[j++];
            }
            if (len !== len) {
              while (second[j] !== void 0) {
                first[i3++] = second[j++];
              }
            }
            first.length = i3;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i3 = 0, length = elems.length, callbackExpect = !invert;
            for (; i3 < length; i3++) {
              callbackInverse = !callback(elems[i3], i3);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i3]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i3 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i3 < length; i3++) {
                value = callback(elems[i3], i3, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i3 in elems) {
                value = callback(elems[i3], i3, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return concat.apply([], ret);
          },
          guid: 1,
          proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
              tmp = fn[context];
              context = fn;
              fn = tmp;
            }
            if (!jQuery2.isFunction(fn)) {
              return void 0;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
              return fn.apply(context || this, args.concat(slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
            return proxy;
          },
          now: function() {
            return +new Date();
          },
          support: support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
        }
        jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i3, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = jQuery2.type(obj);
          if (type === "function" || jQuery2.isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i3, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document2, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, MAX_NEGATIVE = 1 << 31, hasOwn2 = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push2 = arr.push, slice2 = arr.slice, indexOf2 = function(list, elem) {
            var i4 = 0, len = list.length;
            for (; i4 < len; i4++) {
              if (list[i4] === elem) {
                return i4;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          };
          try {
            push2.apply(arr = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e2) {
            push2 = {
              apply: arr.length ? function(target, els) {
                push_native.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i4 = 0;
                while (target[j++] = els[i4++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i4, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              if ((context ? context.ownerDocument || context : preferredDoc) !== document2) {
                setDocument(context);
              }
              context = context || document2;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  if (nodeType !== 1) {
                    newContext = context;
                    newSelector = selector;
                  } else if (context.nodeName.toLowerCase() !== "object") {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rescape, "\\$&");
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                    groups = tokenize(selector);
                    i4 = groups.length;
                    nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                    while (i4--) {
                      groups[i4] = nidselect + " " + toSelector(groups[i4]);
                    }
                    newSelector = groups.join(",");
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  }
                  if (newSelector) {
                    try {
                      push2.apply(results, newContext.querySelectorAll(newSelector));
                      return results;
                    } catch (qsaError) {
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache2(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache2[keys.shift()];
              }
              return cache2[key + " "] = value;
            }
            return cache2;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var div = document2.createElement("div");
            try {
              return !!fn(div);
            } catch (e2) {
              return false;
            } finally {
              if (div.parentNode) {
                div.parentNode.removeChild(div);
              }
              div = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr2 = attrs.split("|"), i4 = arr2.length;
            while (i4--) {
              Expr.attrHandle[arr2[i4]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i4 = matchIndexes.length;
                while (i4--) {
                  if (seed[j = matchIndexes[i4]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var documentElement2 = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement2 ? documentElement2.nodeName !== "HTML" : false;
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document2 || doc.nodeType !== 9 || !doc.documentElement) {
              return document2;
            }
            document2 = doc;
            docElem = document2.documentElement;
            documentIsHTML = !isXML(document2);
            if ((parent = document2.defaultView) && parent.top !== parent) {
              if (parent.addEventListener) {
                parent.addEventListener("unload", unloadHandler, false);
              } else if (parent.attachEvent) {
                parent.attachEvent("onunload", unloadHandler);
              }
            }
            support2.attributes = assert(function(div) {
              div.className = "i";
              return !div.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(div) {
              div.appendChild(document2.createComment(""));
              return !div.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document2.getElementsByClassName);
            support2.getById = assert(function(div) {
              docElem.appendChild(div).id = expando;
              return !document2.getElementsByName || !document2.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var m = context.getElementById(id);
                  return m ? [m] : [];
                }
              };
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
            } else {
              delete Expr.find["ID"];
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i4 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i4++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document2.querySelectorAll)) {
              assert(function(div) {
                docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (div.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                }
                if (!div.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                if (!div.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!div.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
              });
              assert(function(div) {
                var input = document2.createElement("input");
                input.setAttribute("type", "hidden");
                div.appendChild(input).setAttribute("name", "D");
                if (div.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (!div.querySelectorAll(":enabled").length) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                div.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(div) {
                support2.disconnectedMatch = matches.call(div, "div");
                matches.call(div, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document2 || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b === document2 || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i4 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a === document2 ? -1 : b === document2 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i4] === bp[i4]) {
                i4++;
              }
              return i4 ? siblingCheck(ap[i4], bp[i4]) : ap[i4] === preferredDoc ? -1 : bp[i4] === preferredDoc ? 1 : 0;
            };
            return document2;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document2) {
              setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support2.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e2) {
              }
            }
            return Sizzle2(expr, document2, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document2) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document2) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i4 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i4++]) {
                if (elem === results[i4]) {
                  j = duplicates.push(i4);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i4 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i4++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, context, xml) {
                  var cache2, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache2 = uniqueCache[type] || [];
                      nodeIndex = cache2[0] === dirruns && cache2[1];
                      diff = nodeIndex && cache2[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache2 = uniqueCache[type] || [];
                        nodeIndex = cache2[0] === dirruns && cache2[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i4 = matched.length;
                    while (i4--) {
                      idx = indexOf2(seed, matched[i4]);
                      seed[idx] = !(matches2[idx] = matched[i4]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i4 = seed.length;
                  while (i4--) {
                    if (elem = unmatched[i4]) {
                      seed[i4] = !(matches2[i4] = elem);
                    }
                  }
                }) : function(elem, context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document2.activeElement && (!document2.hasFocus || document2.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": function(elem) {
                return elem.disabled === false;
              },
              "disabled": function(elem) {
                return elem.disabled === true;
              },
              "checked": function(elem) {
                var nodeName = elem.nodeName.toLowerCase();
                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i4 = 0;
                for (; i4 < length; i4 += 2) {
                  matchIndexes.push(i4);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i4 = 1;
                for (; i4 < length; i4 += 2) {
                  matchIndexes.push(i4);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i4 = argument < 0 ? argument + length : argument;
                for (; --i4 >= 0; ) {
                  matchIndexes.push(i4);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i4 = argument < 0 ? argument + length : argument;
                for (; ++i4 < length; ) {
                  matchIndexes.push(i4);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i3 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i3] = createInputPseudo(i3);
          }
          for (i3 in { submit: true, reset: true }) {
            Expr.pseudos[i3] = createButtonPseudo(i3);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i4 = 0, len = tokens.length, selector = "";
            for (; i4 < len; i4++) {
              selector += tokens[i4].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, checkNonElements = base && dir2 === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if ((oldCache = uniqueCache[dir2]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[dir2] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i4 = matchers.length;
              while (i4--) {
                if (!matchers[i4](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i4 = 0, len = contexts.length;
            for (; i4 < len; i4++) {
              Sizzle2(selector, contexts[i4], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i4 = 0, len = unmatched.length, mapped = map != null;
            for (; i4 < len; i4++) {
              if (elem = unmatched[i4]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i4);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i4, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i4 = temp.length;
                while (i4--) {
                  if (elem = temp[i4]) {
                    matcherOut[postMap[i4]] = !(matcherIn[postMap[i4]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i4 = matcherOut.length;
                    while (i4--) {
                      if (elem = matcherOut[i4]) {
                        temp.push(matcherIn[i4] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i4 = matcherOut.length;
                  while (i4--) {
                    if ((elem = matcherOut[i4]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i4]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i4 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i4 < len; i4++) {
              if (matcher = Expr.relative[tokens[i4].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i4].type].apply(null, tokens[i4].matches);
                if (matcher[expando]) {
                  j = ++i4;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(i4 > 1 && elementMatcher(matchers), i4 > 1 && toSelector(tokens.slice(0, i4 - 1).concat({ value: tokens[i4 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i4 < j && matcherFromTokens(tokens.slice(i4, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i4 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context === document2 || context || outermost;
              }
              for (; i4 !== len && (elem = elems[i4]) != null; i4++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument !== document2) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document2, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i4;
              if (bySet && i4 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i4--) {
                      if (!(unmatched[i4] || setMatched[i4])) {
                        setMatched[i4] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i4, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i4 = match.length;
              while (i4--) {
                cached = matcherFromTokens(match[i4]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i4, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support2.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i4 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i4--) {
                token = tokens[i4];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i4, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document2.createElement("div")) & 1;
          });
          if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery2.find = Sizzle;
        jQuery2.expr = Sizzle.selectors;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
        jQuery2.text = Sizzle.getText;
        jQuery2.isXMLDoc = Sizzle.isXML;
        jQuery2.contains = Sizzle.contains;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
        var risSimple = /^.[^:#\[\.,]*$/;
        function winnow(elements, qualifier, not) {
          if (jQuery2.isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i3) {
              return !!qualifier.call(elem, i3, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
              return jQuery2.filter(qualifier, elements, not);
            }
            qualifier = jQuery2.filter(qualifier, elements);
          }
          return jQuery2.grep(elements, function(elem) {
            return jQuery2.inArray(elem, qualifier) > -1 !== not;
          });
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          return elems.length === 1 && elem.nodeType === 1 ? jQuery2.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i3, ret = [], self = this, len = self.length;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i3 = 0; i3 < len; i3++) {
                  if (jQuery2.contains(self[i3], this)) {
                    return true;
                  }
                }
              }));
            }
            for (i3 = 0; i3 < len; i3++) {
              jQuery2.find(selector, self[i3], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery2.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [], false).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery2.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                  for (match in context) {
                    if (jQuery2.isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document.getElementById(match[2]);
                if (elem && elem.parentNode) {
                  if (elem.id !== match[2]) {
                    return rootjQuery.find(selector);
                  }
                  this.length = 1;
                  this[0] = elem;
                }
                this.context = document;
                this.selector = selector;
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
          } else if (jQuery2.isFunction(selector)) {
            return typeof root.ready !== "undefined" ? root.ready(selector) : selector(jQuery2);
          }
          if (selector.selector !== void 0) {
            this.selector = selector.selector;
            this.context = selector.context;
          }
          return jQuery2.makeArray(selector, this);
        };
        init.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var i3, targets = jQuery2(target, this), len = targets.length;
            return this.filter(function() {
              for (i3 = 0; i3 < len; i3++) {
                if (jQuery2.contains(this, targets[i3])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i3 = 0, l2 = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery2(selectors, context || this.context) : 0;
            for (; i3 < l2; i3++) {
              for (cur = this[i3]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break;
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return jQuery2.inArray(this[0], jQuery2(elem));
            }
            return jQuery2.inArray(elem.jquery ? elem[0] : elem, this);
          },
          add: function(selector, context) {
            return this.pushStack(jQuery2.uniqueSort(jQuery2.merge(this.get(), jQuery2(selector, context))));
          },
          addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          }
        });
        function sibling(cur, dir2) {
          do {
            cur = cur[dir2];
          } while (cur && cur.nodeType !== 1);
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, i3, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, i3, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, i3, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            return jQuery2.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery2.fn[name] = function(until, selector) {
            var ret = jQuery2.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              ret = jQuery2.filter(selector, ret);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                ret = jQuery2.uniqueSort(ret);
              }
              if (rparentsprev.test(name)) {
                ret = ret.reverse();
              }
            }
            return this.pushStack(ret);
          };
        });
        var rnotwhite = /\S+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_, arg) {
                    if (jQuery2.isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && jQuery2.type(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery2.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = true;
              if (!memory) {
                self.disable();
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              ["resolve", "done", jQuery2.Callbacks("once memory"), "resolved"],
              ["reject", "fail", jQuery2.Callbacks("once memory"), "rejected"],
              ["notify", "progress", jQuery2.Callbacks("memory")]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              then: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(i3, tuple) {
                    var fn = jQuery2.isFunction(fns[i3]) && fns[i3];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && jQuery2.isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery2.each(tuples, function(i3, tuple) {
              var list = tuple[2], stateString = tuple[3];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[i3 ^ 1][2].disable, tuples[2][2].lock);
              }
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(subordinate) {
            var i3 = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery2.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery2.Deferred(), updateFunc = function(i4, contexts, values) {
              return function(value) {
                contexts[i4] = this;
                values[i4] = arguments.length > 1 ? slice.call(arguments) : value;
                if (values === progressValues) {
                  deferred.notifyWith(contexts, values);
                } else if (!--remaining) {
                  deferred.resolveWith(contexts, values);
                }
              };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
              progressValues = new Array(length);
              progressContexts = new Array(length);
              resolveContexts = new Array(length);
              for (; i3 < length; i3++) {
                if (resolveValues[i3] && jQuery2.isFunction(resolveValues[i3].promise)) {
                  resolveValues[i3].promise().progress(updateFunc(i3, progressContexts, progressValues)).done(updateFunc(i3, resolveContexts, resolveValues)).fail(deferred.reject);
                } else {
                  --remaining;
                }
              }
            }
            if (!remaining) {
              deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
          }
        });
        var readyList;
        jQuery2.fn.ready = function(fn) {
          jQuery2.ready.promise().done(fn);
          return this;
        };
        jQuery2.extend({
          isReady: false,
          readyWait: 1,
          holdReady: function(hold) {
            if (hold) {
              jQuery2.readyWait++;
            } else {
              jQuery2.ready(true);
            }
          },
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document, [jQuery2]);
            if (jQuery2.fn.triggerHandler) {
              jQuery2(document).triggerHandler("ready");
              jQuery2(document).off("ready");
            }
          }
        });
        function detach() {
          if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed);
            window2.removeEventListener("load", completed);
          } else {
            document.detachEvent("onreadystatechange", completed);
            window2.detachEvent("onload", completed);
          }
        }
        function completed() {
          if (document.addEventListener || window2.event.type === "load" || document.readyState === "complete") {
            detach();
            jQuery2.ready();
          }
        }
        jQuery2.ready.promise = function(obj) {
          if (!readyList) {
            readyList = jQuery2.Deferred();
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
              window2.setTimeout(jQuery2.ready);
            } else if (document.addEventListener) {
              document.addEventListener("DOMContentLoaded", completed);
              window2.addEventListener("load", completed);
            } else {
              document.attachEvent("onreadystatechange", completed);
              window2.attachEvent("onload", completed);
              var top = false;
              try {
                top = window2.frameElement == null && document.documentElement;
              } catch (e2) {
              }
              if (top && top.doScroll) {
                (function doScrollCheck() {
                  if (!jQuery2.isReady) {
                    try {
                      top.doScroll("left");
                    } catch (e2) {
                      return window2.setTimeout(doScrollCheck, 50);
                    }
                    detach();
                    jQuery2.ready();
                  }
                })();
              }
            }
          }
          return readyList.promise(obj);
        };
        jQuery2.ready.promise();
        var i2;
        for (i2 in jQuery2(support)) {
          break;
        }
        support.ownFirst = i2 === "0";
        support.inlineBlockNeedsLayout = false;
        jQuery2(function() {
          var val, div, body, container;
          body = document.getElementsByTagName("body")[0];
          if (!body || !body.style) {
            return;
          }
          div = document.createElement("div");
          container = document.createElement("div");
          container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
          body.appendChild(container).appendChild(div);
          if (typeof div.style.zoom !== "undefined") {
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if (val) {
              body.style.zoom = 1;
            }
          }
          body.removeChild(container);
        });
        (function() {
          var div = document.createElement("div");
          support.deleteExpando = true;
          try {
            delete div.test;
          } catch (e2) {
            support.deleteExpando = false;
          }
          div = null;
        })();
        var acceptData = function(elem) {
          var noData = jQuery2.noData[(elem.nodeName + " ").toLowerCase()], nodeType = +elem.nodeType || 1;
          return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
        };
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
        function dataAttr(elem, key, data) {
          if (data === void 0 && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery2.parseJSON(data) : data;
              } catch (e2) {
              }
              jQuery2.data(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        function isEmptyDataObject(obj) {
          var name;
          for (name in obj) {
            if (name === "data" && jQuery2.isEmptyObject(obj[name])) {
              continue;
            }
            if (name !== "toJSON") {
              return false;
            }
          }
          return true;
        }
        function internalData(elem, name, data, pvt) {
          if (!acceptData(elem)) {
            return;
          }
          var ret, thisCache, internalKey = jQuery2.expando, isNode = elem.nodeType, cache2 = isNode ? jQuery2.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
          if ((!id || !cache2[id] || !pvt && !cache2[id].data) && data === void 0 && typeof name === "string") {
            return;
          }
          if (!id) {
            if (isNode) {
              id = elem[internalKey] = deletedIds.pop() || jQuery2.guid++;
            } else {
              id = internalKey;
            }
          }
          if (!cache2[id]) {
            cache2[id] = isNode ? {} : { toJSON: jQuery2.noop };
          }
          if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
              cache2[id] = jQuery2.extend(cache2[id], name);
            } else {
              cache2[id].data = jQuery2.extend(cache2[id].data, name);
            }
          }
          thisCache = cache2[id];
          if (!pvt) {
            if (!thisCache.data) {
              thisCache.data = {};
            }
            thisCache = thisCache.data;
          }
          if (data !== void 0) {
            thisCache[jQuery2.camelCase(name)] = data;
          }
          if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
              ret = thisCache[jQuery2.camelCase(name)];
            }
          } else {
            ret = thisCache;
          }
          return ret;
        }
        function internalRemoveData(elem, name, pvt) {
          if (!acceptData(elem)) {
            return;
          }
          var thisCache, i3, isNode = elem.nodeType, cache2 = isNode ? jQuery2.cache : elem, id = isNode ? elem[jQuery2.expando] : jQuery2.expando;
          if (!cache2[id]) {
            return;
          }
          if (name) {
            thisCache = pvt ? cache2[id] : cache2[id].data;
            if (thisCache) {
              if (!jQuery2.isArray(name)) {
                if (name in thisCache) {
                  name = [name];
                } else {
                  name = jQuery2.camelCase(name);
                  if (name in thisCache) {
                    name = [name];
                  } else {
                    name = name.split(" ");
                  }
                }
              } else {
                name = name.concat(jQuery2.map(name, jQuery2.camelCase));
              }
              i3 = name.length;
              while (i3--) {
                delete thisCache[name[i3]];
              }
              if (pvt ? !isEmptyDataObject(thisCache) : !jQuery2.isEmptyObject(thisCache)) {
                return;
              }
            }
          }
          if (!pvt) {
            delete cache2[id].data;
            if (!isEmptyDataObject(cache2[id])) {
              return;
            }
          }
          if (isNode) {
            jQuery2.cleanData([elem], true);
          } else if (support.deleteExpando || cache2 != cache2.window) {
            delete cache2[id];
          } else {
            cache2[id] = void 0;
          }
        }
        jQuery2.extend({
          cache: {},
          noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          },
          hasData: function(elem) {
            elem = elem.nodeType ? jQuery2.cache[elem[jQuery2.expando]] : elem[jQuery2.expando];
            return !!elem && !isEmptyDataObject(elem);
          },
          data: function(elem, name, data) {
            return internalData(elem, name, data);
          },
          removeData: function(elem, name) {
            return internalRemoveData(elem, name);
          },
          _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
          },
          _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i3, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = jQuery2.data(elem);
                if (elem.nodeType === 1 && !jQuery2._data(elem, "parsedAttrs")) {
                  i3 = attrs.length;
                  while (i3--) {
                    if (attrs[i3]) {
                      name = attrs[i3].name;
                      if (name.indexOf("data-") === 0) {
                        name = jQuery2.camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  jQuery2._data(elem, "parsedAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                jQuery2.data(this, key);
              });
            }
            return arguments.length > 1 ? this.each(function() {
              jQuery2.data(this, key, value);
            }) : elem ? dataAttr(elem, key, jQuery2.data(elem, key)) : void 0;
          },
          removeData: function(key) {
            return this.each(function() {
              jQuery2.removeData(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = jQuery2._data(elem, type);
              if (data) {
                if (!queue || jQuery2.isArray(data)) {
                  queue = jQuery2._data(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery2._data(elem, key) || jQuery2._data(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                jQuery2._removeData(elem, type + "queue");
                jQuery2._removeData(elem, key);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i3 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i3--) {
              tmp = jQuery2._data(elements[i3], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        (function() {
          var shrinkWrapBlocksVal;
          support.shrinkWrapBlocks = function() {
            if (shrinkWrapBlocksVal != null) {
              return shrinkWrapBlocksVal;
            }
            shrinkWrapBlocksVal = false;
            var div, body, container;
            body = document.getElementsByTagName("body")[0];
            if (!body || !body.style) {
              return;
            }
            div = document.createElement("div");
            container = document.createElement("div");
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild(container).appendChild(div);
            if (typeof div.style.zoom !== "undefined") {
              div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
              div.appendChild(document.createElement("div")).style.width = "5px";
              shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }
            body.removeChild(container);
            return shrinkWrapBlocksVal;
          };
        })();
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function(elem, el) {
          elem = el || elem;
          return jQuery2.css(elem, "display") === "none" || !jQuery2.contains(elem.ownerDocument, elem);
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale = 1, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            unit = unit || initialInUnit[3];
            valueParts = valueParts || [];
            initialInUnit = +initial || 1;
            do {
              scale = scale || ".5";
              initialInUnit = initialInUnit / scale;
              jQuery2.style(elem, prop, initialInUnit + unit);
            } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i3 = 0, length = elems.length, bulk = key == null;
          if (jQuery2.type(key) === "object") {
            chainable = true;
            for (i3 in key) {
              access(elems, fn, i3, key[i3], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!jQuery2.isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, key2, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i3 < length; i3++) {
                fn(elems[i3], key, raw ? value : value.call(elems[i3], i3, fn(elems[i3], key)));
              }
            }
          }
          return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        };
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([\w:-]+)/;
        var rscriptType = /^$|\/(?:java|ecma)script/i;
        var rleadingWhitespace = /^\s+/;
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        function createSafeFragment(document2) {
          var list = nodeNames.split("|"), safeFrag = document2.createDocumentFragment();
          if (safeFrag.createElement) {
            while (list.length) {
              safeFrag.createElement(list.pop());
            }
          }
          return safeFrag;
        }
        (function() {
          var div = document.createElement("div"), fragment = document.createDocumentFragment(), input = document.createElement("input");
          div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
          support.leadingWhitespace = div.firstChild.nodeType === 3;
          support.tbody = !div.getElementsByTagName("tbody").length;
          support.htmlSerialize = !!div.getElementsByTagName("link").length;
          support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
          input.type = "checkbox";
          input.checked = true;
          fragment.appendChild(input);
          support.appendChecked = input.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          fragment.appendChild(div);
          input = document.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          support.noCloneEvent = !!div.addEventListener;
          div[jQuery2.expando] = 1;
          support.attributes = !div.getAttribute(jQuery2.expando);
        })();
        var wrapMap = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
          var elems, elem, i3 = 0, found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : void 0;
          if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i3]) != null; i3++) {
              if (!tag || jQuery2.nodeName(elem, tag)) {
                found.push(elem);
              } else {
                jQuery2.merge(found, getAll(elem, tag));
              }
            }
          }
          return tag === void 0 || tag && jQuery2.nodeName(context, tag) ? jQuery2.merge([context], found) : found;
        }
        function setGlobalEval(elems, refElements) {
          var elem, i3 = 0;
          for (; (elem = elems[i3]) != null; i3++) {
            jQuery2._data(elem, "globalEval", !refElements || jQuery2._data(refElements[i3], "globalEval"));
          }
        }
        var rhtml = /<|&#?\w+;/, rtbody = /<tbody/i;
        function fixDefaultChecked(elem) {
          if (rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
          }
        }
        function buildFragment(elems, context, scripts, selection, ignored) {
          var j, elem, contains, tmp, tag, tbody, wrap, l2 = elems.length, safe = createSafeFragment(context), nodes = [], i3 = 0;
          for (; i3 < l2; i3++) {
            elem = elems[i3];
            if (elem || elem === 0) {
              if (jQuery2.type(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || safe.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                  nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                }
                if (!support.tbody) {
                  elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                  j = elem && elem.childNodes.length;
                  while (j--) {
                    if (jQuery2.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                      elem.removeChild(tbody);
                    }
                  }
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp.textContent = "";
                while (tmp.firstChild) {
                  tmp.removeChild(tmp.firstChild);
                }
                tmp = safe.lastChild;
              }
            }
          }
          if (tmp) {
            safe.removeChild(tmp);
          }
          if (!support.appendChecked) {
            jQuery2.grep(getAll(nodes, "input"), fixDefaultChecked);
          }
          i3 = 0;
          while (elem = nodes[i3++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            contains = jQuery2.contains(elem.ownerDocument, elem);
            tmp = getAll(safe.appendChild(elem), "script");
            if (contains) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          tmp = null;
          return safe;
        }
        (function() {
          var i3, eventName, div = document.createElement("div");
          for (i3 in { submit: true, change: true, focusin: true }) {
            eventName = "on" + i3;
            if (!(support[i3] = eventName in window2)) {
              div.setAttribute(eventName, "t");
              support[i3] = div.attributes[eventName].expando === false;
            }
          }
          div = null;
        })();
        var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function safeActiveElement() {
          try {
            return document.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery2._data(elem);
            if (!elemData) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e2) {
                return typeof jQuery2 !== "undefined" && (!e2 || jQuery2.event.triggered !== e2.type) ? jQuery2.event.dispatch.apply(eventHandle.elem, arguments) : void 0;
              };
              eventHandle.elem = elem;
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: handler.guid,
                selector: selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle, false);
                  } else if (elem.attachEvent) {
                    elem.attachEvent("on" + type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
            elem = null;
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery2.hasData(elem) && jQuery2._data(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              delete elemData.handle;
              jQuery2._removeData(elem, "events");
            }
          },
          trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i3, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery2.isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i3 = 0;
            while ((cur = eventPath[i3++]) && !event.isPropagationStopped()) {
              event.type = i3 > 1 ? bubbleType : special.bindType || type;
              handle = (jQuery2._data(cur, "events") || {})[event.type] && jQuery2._data(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && elem[type] && !jQuery2.isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  try {
                    elem[type]();
                  } catch (e2) {
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          dispatch: function(event) {
            event = jQuery2.event.fix(event);
            var i3, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (jQuery2._data(this, "events") || {})[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i3 = 0;
            while ((matched = handlerQueue[i3++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i3, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
              for (; cur != this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                  matches = [];
                  for (i3 = 0; i3 < delegateCount; i3++) {
                    handleObj = handlers[i3];
                    sel = handleObj.selector + " ";
                    if (matches[sel] === void 0) {
                      matches[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matches[sel]) {
                      matches.push(handleObj);
                    }
                  }
                  if (matches.length) {
                    handlerQueue.push({ elem: cur, handlers: matches });
                  }
                }
              }
            }
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          fix: function(event) {
            if (event[jQuery2.expando]) {
              return event;
            }
            var i3, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
              this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery2.Event(originalEvent);
            i3 = copy.length;
            while (i3--) {
              prop = copy[i3];
              event[prop] = originalEvent[prop];
            }
            if (!event.target) {
              event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
              event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
              if (event.which == null) {
                event.which = original.charCode != null ? original.charCode : original.keyCode;
              }
              return event;
            }
          },
          mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
              var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
              if (event.pageX == null && original.clientX != null) {
                eventDoc = event.target.ownerDocument || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
              }
              if (!event.relatedTarget && fromElement) {
                event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
              }
              if (!event.which && button !== void 0) {
                event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
              }
              return event;
            }
          },
          special: {
            load: {
              noBubble: true
            },
            focus: {
              trigger: function() {
                if (this !== safeActiveElement() && this.focus) {
                  try {
                    this.focus();
                    return false;
                  } catch (e2) {
                  }
                }
              },
              delegateType: "focusin"
            },
            blur: {
              trigger: function() {
                if (this === safeActiveElement() && this.blur) {
                  this.blur();
                  return false;
                }
              },
              delegateType: "focusout"
            },
            click: {
              trigger: function() {
                if (jQuery2.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                  this.click();
                  return false;
                }
              },
              _default: function(event) {
                return jQuery2.nodeName(event.target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          },
          simulate: function(type, elem, event) {
            var e2 = jQuery2.extend(new jQuery2.Event(), event, {
              type: type,
              isSimulated: true
            });
            jQuery2.event.trigger(e2, null, elem);
            if (e2.isDefaultPrevented()) {
              event.preventDefault();
            }
          }
        };
        jQuery2.removeEvent = document.removeEventListener ? function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        } : function(elem, type, handle) {
          var name = "on" + type;
          if (elem.detachEvent) {
            if (typeof elem[name] === "undefined") {
              elem[name] = null;
            }
            elem.detachEvent(name, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || jQuery2.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          preventDefault: function() {
            var e2 = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e2) {
              return;
            }
            if (e2.preventDefault) {
              e2.preventDefault();
            } else {
              e2.returnValue = false;
            }
          },
          stopPropagation: function() {
            var e2 = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e2 || this.isSimulated) {
              return;
            }
            if (e2.stopPropagation) {
              e2.stopPropagation();
            }
            e2.cancelBubble = true;
          },
          stopImmediatePropagation: function() {
            var e2 = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e2 && e2.stopImmediatePropagation) {
              e2.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        if (!support.submit) {
          jQuery2.event.special.submit = {
            setup: function() {
              if (jQuery2.nodeName(this, "form")) {
                return false;
              }
              jQuery2.event.add(this, "click._submit keypress._submit", function(e2) {
                var elem = e2.target, form = jQuery2.nodeName(elem, "input") || jQuery2.nodeName(elem, "button") ? jQuery2.prop(elem, "form") : void 0;
                if (form && !jQuery2._data(form, "submit")) {
                  jQuery2.event.add(form, "submit._submit", function(event) {
                    event._submitBubble = true;
                  });
                  jQuery2._data(form, "submit", true);
                }
              });
            },
            postDispatch: function(event) {
              if (event._submitBubble) {
                delete event._submitBubble;
                if (this.parentNode && !event.isTrigger) {
                  jQuery2.event.simulate("submit", this.parentNode, event);
                }
              }
            },
            teardown: function() {
              if (jQuery2.nodeName(this, "form")) {
                return false;
              }
              jQuery2.event.remove(this, "._submit");
            }
          };
        }
        if (!support.change) {
          jQuery2.event.special.change = {
            setup: function() {
              if (rformElems.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                  jQuery2.event.add(this, "propertychange._change", function(event) {
                    if (event.originalEvent.propertyName === "checked") {
                      this._justChanged = true;
                    }
                  });
                  jQuery2.event.add(this, "click._change", function(event) {
                    if (this._justChanged && !event.isTrigger) {
                      this._justChanged = false;
                    }
                    jQuery2.event.simulate("change", this, event);
                  });
                }
                return false;
              }
              jQuery2.event.add(this, "beforeactivate._change", function(e2) {
                var elem = e2.target;
                if (rformElems.test(elem.nodeName) && !jQuery2._data(elem, "change")) {
                  jQuery2.event.add(elem, "change._change", function(event) {
                    if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                      jQuery2.event.simulate("change", this.parentNode, event);
                    }
                  });
                  jQuery2._data(elem, "change", true);
                }
              });
            },
            handle: function(event) {
              var elem = event.target;
              if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                return event.handleObj.handler.apply(this, arguments);
              }
            },
            teardown: function() {
              jQuery2.event.remove(this, "._change");
              return !rformElems.test(this.nodeName);
            }
          };
        }
        if (!support.focusin) {
          jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
            };
            jQuery2.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this, attaches = jQuery2._data(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                jQuery2._data(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this, attaches = jQuery2._data(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  jQuery2._removeData(doc, fix);
                } else {
                  jQuery2._data(doc, fix, attaches);
                }
              }
            };
          });
        }
        jQuery2.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn, selector);
            });
          },
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
        function manipulationTarget(elem, content) {
          return jQuery2.nodeName(elem, "table") && jQuery2.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
        }
        function disableScript(elem) {
          elem.type = (jQuery2.find.attr(elem, "type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          var match = rscriptTypeMasked.exec(elem.type);
          if (match) {
            elem.type = match[1];
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          if (dest.nodeType !== 1 || !jQuery2.hasData(src)) {
            return;
          }
          var type, i3, l2, oldData = jQuery2._data(src), curData = jQuery2._data(dest, oldData), events = oldData.events;
          if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
              for (i3 = 0, l2 = events[type].length; i3 < l2; i3++) {
                jQuery2.event.add(dest, type, events[type][i3]);
              }
            }
          }
          if (curData.data) {
            curData.data = jQuery2.extend({}, curData.data);
          }
        }
        function fixCloneNodeIssues(src, dest) {
          var nodeName, e2, data;
          if (dest.nodeType !== 1) {
            return;
          }
          nodeName = dest.nodeName.toLowerCase();
          if (!support.noCloneEvent && dest[jQuery2.expando]) {
            data = jQuery2._data(dest);
            for (e2 in data.events) {
              jQuery2.removeEvent(dest, e2, data.handle);
            }
            dest.removeAttribute(jQuery2.expando);
          }
          if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
          } else if (nodeName === "object") {
            if (dest.parentNode) {
              dest.outerHTML = src.outerHTML;
            }
            if (support.html5Clone && (src.innerHTML && !jQuery2.trim(dest.innerHTML))) {
              dest.innerHTML = src.innerHTML;
            }
          } else if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
              dest.value = src.value;
            }
          } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
          } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = concat.apply([], args);
          var first, node, hasScripts, scripts, doc, fragment, i3 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], isFunction = jQuery2.isFunction(value);
          if (isFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (isFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l2) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i3 < l2; i3++) {
                node = fragment;
                if (i3 !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i3], node, i3);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i3 = 0; i3 < hasScripts; i3++) {
                  node = scripts[i3];
                  if (rscriptType.test(node.type || "") && !jQuery2._data(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src) {
                      if (jQuery2._evalUrl) {
                        jQuery2._evalUrl(node.src);
                      }
                    } else {
                      jQuery2.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                    }
                  }
                }
              }
              fragment = first = null;
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, elems = selector ? jQuery2.filter(selector, elem) : elem, i3 = 0;
          for (; (node = elems[i3]) != null; i3++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && jQuery2.contains(node.ownerDocument, node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i3, srcElements, inPage = jQuery2.contains(elem.ownerDocument, elem);
            if (support.html5Clone || jQuery2.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
              clone = elem.cloneNode(true);
            } else {
              fragmentDiv.innerHTML = elem.outerHTML;
              fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i3 = 0; (node = srcElements[i3]) != null; ++i3) {
                if (destElements[i3]) {
                  fixCloneNodeIssues(node, destElements[i3]);
                }
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i3 = 0; (node = srcElements[i3]) != null; i3++) {
                  cloneCopyEvent(node, destElements[i3]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
          },
          cleanData: function(elems, forceAcceptData) {
            var elem, type, id, data, i3 = 0, internalKey = jQuery2.expando, cache2 = jQuery2.cache, attributes = support.attributes, special = jQuery2.event.special;
            for (; (elem = elems[i3]) != null; i3++) {
              if (forceAcceptData || acceptData(elem)) {
                id = elem[internalKey];
                data = id && cache2[id];
                if (data) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  if (cache2[id]) {
                    delete cache2[id];
                    if (!attributes && typeof elem.removeAttribute !== "undefined") {
                      elem.removeAttribute(internalKey);
                    } else {
                      elem[internalKey] = void 0;
                    }
                    deletedIds.push(id);
                  }
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          domManip: domManip,
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value2));
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i3 = 0;
            for (; (elem = this[i3]) != null; i3++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
              }
              while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
              }
              if (elem.options && jQuery2.nodeName(elem, "select")) {
                elem.options.length = 0;
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i3 = 0, l2 = this.length;
              if (value2 === void 0) {
                return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && (support.htmlSerialize || !rnoshimcache.test(value2)) && (support.leadingWhitespace || !rleadingWhitespace.test(value2)) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i3 < l2; i3++) {
                    elem = this[i3] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e2) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, i3 = 0, ret = [], insert = jQuery2(selector), last = insert.length - 1;
            for (; i3 <= last; i3++) {
              elems = i3 === last ? this : this.clone(true);
              jQuery2(insert[i3])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var iframe, elemdisplay = {
          HTML: "block",
          BODY: "block"
        };
        function actualDisplay(name, doc) {
          var elem = jQuery2(doc.createElement(name)).appendTo(doc.body), display = jQuery2.css(elem[0], "display");
          elem.detach();
          return display;
        }
        function defaultDisplay(nodeName) {
          var doc = document, display = elemdisplay[nodeName];
          if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
              iframe = (iframe || jQuery2("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
              doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
              doc.write();
              doc.close();
              display = actualDisplay(nodeName, doc);
              iframe.detach();
            }
            elemdisplay[nodeName] = display;
          }
          return display;
        }
        var rmargin = /^margin/;
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var swap = function(elem, options, callback, args) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.apply(elem, args || []);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var documentElement = document.documentElement;
        (function() {
          var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.cssText = "float:left;opacity:.5";
          support.opacity = div.style.opacity === "0.5";
          support.cssFloat = !!div.style.cssFloat;
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          container = document.createElement("div");
          container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
          div.innerHTML = "";
          container.appendChild(div);
          support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";
          jQuery2.extend(support, {
            reliableHiddenOffsets: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableHiddenOffsetsVal;
            },
            boxSizingReliable: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return boxSizingReliableVal;
            },
            pixelMarginRight: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return pixelMarginRightVal;
            },
            pixelPosition: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return pixelPositionVal;
            },
            reliableMarginRight: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableMarginRightVal;
            },
            reliableMarginLeft: function() {
              if (pixelPositionVal == null) {
                computeStyleTests();
              }
              return reliableMarginLeftVal;
            }
          });
          function computeStyleTests() {
            var contents, divStyle, documentElement2 = document.documentElement;
            documentElement2.appendChild(container);
            div.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
            pixelMarginRightVal = reliableMarginRightVal = true;
            if (window2.getComputedStyle) {
              divStyle = window2.getComputedStyle(div);
              pixelPositionVal = (divStyle || {}).top !== "1%";
              reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
              boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";
              div.style.marginRight = "50%";
              pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";
              contents = div.appendChild(document.createElement("div"));
              contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
              contents.style.marginRight = contents.style.width = "0";
              div.style.width = "1px";
              reliableMarginRightVal = !parseFloat((window2.getComputedStyle(contents) || {}).marginRight);
              div.removeChild(contents);
            }
            div.style.display = "none";
            reliableHiddenOffsetsVal = div.getClientRects().length === 0;
            if (reliableHiddenOffsetsVal) {
              div.style.display = "";
              div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
              contents = div.getElementsByTagName("td");
              contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
              reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
              if (reliableHiddenOffsetsVal) {
                contents[0].style.display = "";
                contents[1].style.display = "none";
                reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
              }
            }
            documentElement2.removeChild(container);
          }
        })();
        var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;
        if (window2.getComputedStyle) {
          getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
              view = window2;
            }
            return view.getComputedStyle(elem);
          };
          curCSS = function(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0;
            if ((ret === "" || ret === void 0) && !jQuery2.contains(elem.ownerDocument, elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (computed) {
              if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
              }
            }
            return ret === void 0 ? ret : ret + "";
          };
        } else if (documentElement.currentStyle) {
          getStyles = function(elem) {
            return elem.currentStyle;
          };
          curCSS = function(elem, name, computed) {
            var left, rs, rsLeft, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed[name] : void 0;
            if (ret == null && style && style[name]) {
              ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
              left = style.left;
              rs = elem.runtimeStyle;
              rsLeft = rs && rs.left;
              if (rsLeft) {
                rs.left = elem.currentStyle.left;
              }
              style.left = name === "fontSize" ? "1em" : ret;
              ret = style.pixelLeft + "px";
              style.left = left;
              if (rsLeft) {
                rs.left = rsLeft;
              }
            }
            return ret === void 0 ? ret : ret + "" || "auto";
          };
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/i, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        }, cssPrefixes = ["Webkit", "O", "Moz", "ms"], emptyStyle = document.createElement("div").style;
        function vendorPropName(name) {
          if (name in emptyStyle) {
            return name;
          }
          var capName = name.charAt(0).toUpperCase() + name.slice(1), i3 = cssPrefixes.length;
          while (i3--) {
            name = cssPrefixes[i3] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function showHide(elements, show) {
          var display, elem, hidden, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            values[index] = jQuery2._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
              if (!values[index] && display === "none") {
                elem.style.display = "";
              }
              if (elem.style.display === "" && isHidden(elem)) {
                values[index] = jQuery2._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
              }
            } else {
              hidden = isHidden(elem);
              if (display && display !== "none" || !hidden) {
                jQuery2._data(elem, "olddisplay", hidden ? display : jQuery2.css(elem, "display"));
              }
            }
          }
          for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
              elem.style.display = show ? values[index] || "" : "none";
            }
          }
          return elements;
        }
        function setPositiveNumber(elem, value, subtract) {
          var matches = rnumsplit.exec(value);
          return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
        }
        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
          var i3 = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
          for (; i3 < 4; i3 += 2) {
            if (extra === "margin") {
              val += jQuery2.css(elem, extra + cssExpand[i3], true, styles);
            }
            if (isBorderBox) {
              if (extra === "content") {
                val -= jQuery2.css(elem, "padding" + cssExpand[i3], true, styles);
              }
              if (extra !== "margin") {
                val -= jQuery2.css(elem, "border" + cssExpand[i3] + "Width", true, styles);
              }
            } else {
              val += jQuery2.css(elem, "padding" + cssExpand[i3], true, styles);
              if (extra !== "padding") {
                val += jQuery2.css(elem, "border" + cssExpand[i3] + "Width", true, styles);
              }
            }
          }
          return val;
        }
        function getWidthOrHeight(elem, name, extra) {
          var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = support.boxSizing && jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          if (document.msFullscreenElement && window2.top !== window2) {
            if (elem.getClientRects().length) {
              val = Math.round(elem.getBoundingClientRect()[name] * 100);
            }
          }
          if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
              val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
              return val;
            }
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
            val = parseFloat(val) || 0;
          }
          return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
        }
        jQuery2.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
          },
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = jQuery2.camelCase(name), style = elem.style;
            name = jQuery2.cssProps[origName] || (jQuery2.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number") {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                try {
                  style[name] = value;
                } catch (e2) {
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery2.camelCase(name);
            name = jQuery2.cssProps[origName] || (jQuery2.cssProps[origName] = vendorPropName(origName) || origName);
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(i3, name) {
          jQuery2.cssHooks[name] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, name, extra);
                }) : getWidthOrHeight(elem, name, extra);
              }
            },
            set: function(elem, value, extra) {
              var styles = extra && getStyles(elem);
              return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
          };
        });
        if (!support.opacity) {
          jQuery2.cssHooks.opacity = {
            get: function(elem, computed) {
              return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
              var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery2.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
              style.zoom = 1;
              if ((value >= 1 || value === "") && jQuery2.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                style.removeAttribute("filter");
                if (value === "" || currentStyle && !currentStyle.filter) {
                  return;
                }
              }
              style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
          };
        }
        jQuery2.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
          if (computed) {
            return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
          }
        });
        jQuery2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || (jQuery2.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            }) : 0)) + "px";
          }
        });
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i3 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i3 < 4; i3++) {
                expanded[prefix + cssExpand[i3] + suffix] = parts[i3] || parts[i3 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (!rmargin.test(prefix)) {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i3 = 0;
              if (jQuery2.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i3 < len; i3++) {
                  map[name2[i3]] = jQuery2.css(elem, name2[i3], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          },
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHidden(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery2.cssProps[tween.prop]] != null || jQuery2.cssHooks[tween.prop])) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = jQuery2.now();
        }
        function genFx(type, includeWidth) {
          var which, attrs = { height: type }, i3 = 0;
          includeWidth = includeWidth ? 1 : 0;
          for (; i3 < 4; i3 += 2 - includeWidth) {
            which = cssExpand[i3];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery2._data(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            display = jQuery2.css(elem, "display");
            checkDisplay = display === "none" ? jQuery2._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
            if (checkDisplay === "inline" && jQuery2.css(elem, "float") === "none") {
              if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
                style.display = "inline-block";
              } else {
                style.zoom = 1;
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            if (!support.shrinkWrapBlocks()) {
              anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
              });
            }
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            } else {
              display = void 0;
            }
          }
          if (!jQuery2.isEmptyObject(orig)) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = jQuery2._data(elem, "fxshow", {});
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              jQuery2(elem).show();
            } else {
              anim.done(function() {
                jQuery2(elem).hide();
              });
            }
            anim.done(function() {
              var prop2;
              jQuery2._removeData(elem, "fxshow");
              for (prop2 in orig) {
                jQuery2.style(elem, prop2, orig[prop2]);
              }
            });
            for (prop in orig) {
              tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
              if (!(prop in dataShow)) {
                dataShow[prop] = tween.start;
                if (hidden) {
                  tween.end = tween.start;
                  tween.start = prop === "width" || prop === "height" ? 1 : 0;
                }
              }
            }
          } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = jQuery2.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery2.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            } else {
              deferred.resolveWith(elem, [animation]);
              return false;
            }
          }, animation = deferred.promise({
            elem: elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (jQuery2.isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = jQuery2.proxy(result.stop, result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (jQuery2.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          jQuery2.fx.timer(jQuery2.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
          }));
          return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (jQuery2.isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnotwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery2.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery2.isFunction(easing) && easing
          };
          opt.duration = jQuery2.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery2.fx.speeds ? jQuery2.fx.speeds[opt.duration] : jQuery2.fx.speeds._default;
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (jQuery2.isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || jQuery2._data(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue && type !== false) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = jQuery2._data(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = jQuery2._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(i3, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, timers = jQuery2.timers, i3 = 0;
          fxNow = jQuery2.now();
          for (; i3 < timers.length; i3++) {
            timer = timers[i3];
            if (!timer() && timers[i3] === timer) {
              timers.splice(i3--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          if (timer()) {
            jQuery2.fx.start();
          } else {
            jQuery2.timers.pop();
          }
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (!timerId) {
            timerId = window2.setInterval(jQuery2.fx.tick, jQuery2.fx.interval);
          }
        };
        jQuery2.fx.stop = function() {
          window2.clearInterval(timerId);
          timerId = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var a, input = document.createElement("input"), div = document.createElement("div"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
          div = document.createElement("div");
          div.setAttribute("className", "t");
          div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
          a = div.getElementsByTagName("a")[0];
          input.setAttribute("type", "checkbox");
          div.appendChild(input);
          a = div.getElementsByTagName("a")[0];
          a.style.cssText = "top:1px";
          support.getSetAttribute = div.className !== "t";
          support.style = /top/.test(a.getAttribute("style"));
          support.hrefNormalized = a.getAttribute("href") === "/a";
          support.checkOn = !!input.value;
          support.optSelected = opt.selected;
          support.enctype = !!document.createElement("form").enctype;
          select.disabled = true;
          support.optDisabled = !opt.disabled;
          input = document.createElement("input");
          input.setAttribute("value", "");
          support.input = input.getAttribute("value") === "";
          input.value = "t";
          input.setAttribute("type", "radio");
          support.radioValue = input.value === "t";
        })();
        var rreturn = /\r/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
              }
              return;
            }
            isFunction = jQuery2.isFunction(value);
            return this.each(function(i3) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (isFunction) {
                val = value.call(this, i3, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (jQuery2.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : jQuery2.trim(jQuery2.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i3 = index < 0 ? max : one ? index : 0;
                for (; i3 < max; i3++) {
                  option = options[i3];
                  if ((option.selected || i3 === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery2.nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i3 = options.length;
                while (i3--) {
                  option = options[i3];
                  if (jQuery2.inArray(jQuery2.valHooks.option.get(option), values) >= 0) {
                    try {
                      option.selected = optionSet = true;
                    } catch (_) {
                      option.scrollHeight;
                    }
                  } else {
                    option.selected = false;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return options;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (jQuery2.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var nodeHook, boolHook, attrHandle = jQuery2.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = support.getSetAttribute, getSetInput = support.input;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = name.toLowerCase();
              hooks = jQuery2.attrHooks[name] || (jQuery2.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && jQuery2.nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, propName, i3 = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i3++]) {
                propName = jQuery2.propFix[name] || name;
                if (jQuery2.expr.match.bool.test(name)) {
                  if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    elem[propName] = false;
                  } else {
                    elem[jQuery2.camelCase("default-" + name)] = elem[propName] = false;
                  }
                } else {
                  jQuery2.attr(elem, name, "");
                }
                elem.removeAttribute(getSetAttribute ? name : propName);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem.setAttribute(!getSetAttribute && jQuery2.propFix[name] || name, name);
            } else {
              elem[jQuery2.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(i3, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
            attrHandle[name] = function(elem, name2, isXML) {
              var ret, handle;
              if (!isXML) {
                handle = attrHandle[name2];
                attrHandle[name2] = ret;
                ret = getter(elem, name2, isXML) != null ? name2.toLowerCase() : null;
                attrHandle[name2] = handle;
              }
              return ret;
            };
          } else {
            attrHandle[name] = function(elem, name2, isXML) {
              if (!isXML) {
                return elem[jQuery2.camelCase("default-" + name2)] ? name2.toLowerCase() : null;
              }
            };
          }
        });
        if (!getSetInput || !getSetAttribute) {
          jQuery2.attrHooks.value = {
            set: function(elem, value, name) {
              if (jQuery2.nodeName(elem, "input")) {
                elem.defaultValue = value;
              } else {
                return nodeHook && nodeHook.set(elem, value, name);
              }
            }
          };
        }
        if (!getSetAttribute) {
          nodeHook = {
            set: function(elem, value, name) {
              var ret = elem.getAttributeNode(name);
              if (!ret) {
                elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
              }
              ret.value = value += "";
              if (name === "value" || value === elem.getAttribute(name)) {
                return value;
              }
            }
          };
          attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) {
            var ret;
            if (!isXML) {
              return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
            }
          };
          jQuery2.valHooks.button = {
            get: function(elem, name) {
              var ret = elem.getAttributeNode(name);
              if (ret && ret.specified) {
                return ret.value;
              }
            },
            set: nodeHook.set
          };
          jQuery2.attrHooks.contenteditable = {
            set: function(elem, value, name) {
              nodeHook.set(elem, value === "" ? false : value, name);
            }
          };
          jQuery2.each(["width", "height"], function(i3, name) {
            jQuery2.attrHooks[name] = {
              set: function(elem, value) {
                if (value === "") {
                  elem.setAttribute(name, "auto");
                  return value;
                }
              }
            };
          });
        }
        if (!support.style) {
          jQuery2.attrHooks.style = {
            get: function(elem) {
              return elem.style.cssText || void 0;
            },
            set: function(elem, value) {
              return elem.style.cssText = value + "";
            }
          };
        }
        var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            name = jQuery2.propFix[name] || name;
            return this.each(function() {
              try {
                this[name] = void 0;
                delete this[name];
              } catch (e2) {
              }
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.hrefNormalized) {
          jQuery2.each(["href", "src"], function(i3, name) {
            jQuery2.propHooks[name] = {
              get: function(elem) {
                return elem.getAttribute(name, 4);
              }
            };
          });
        }
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
              return null;
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        if (!support.enctype) {
          jQuery2.propFix.enctype = "encoding";
        }
        var rclass = /[\t\r\n\f]/g;
        function getClass(elem) {
          return jQuery2.attr(elem, "class") || "";
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i3 = 0;
            if (jQuery2.isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            if (typeof value === "string" && value) {
              classes = value.match(rnotwhite) || [];
              while (elem = this[i3++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = jQuery2.trim(cur);
                  if (curValue !== finalValue) {
                    jQuery2.attr(elem, "class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i3 = 0;
            if (jQuery2.isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            if (typeof value === "string" && value) {
              classes = value.match(rnotwhite) || [];
              while (elem = this[i3++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = jQuery2.trim(cur);
                  if (curValue !== finalValue) {
                    jQuery2.attr(elem, "class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery2.isFunction(value)) {
              return this.each(function(i3) {
                jQuery2(this).toggleClass(value.call(this, i3, getClass(this), stateVal), stateVal);
              });
            }
            return this.each(function() {
              var className, i3, self, classNames;
              if (type === "string") {
                i3 = 0;
                self = jQuery2(this);
                classNames = value.match(rnotwhite) || [];
                while (className = classNames[i3++]) {
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  jQuery2._data(this, "__className__", className);
                }
                jQuery2.attr(this, "class", className || value === false ? "" : jQuery2._data(this, "__className__") || "");
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i3 = 0;
            className = " " + selector + " ";
            while (elem = this[i3++]) {
              if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        jQuery2.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i3, name) {
          jQuery2.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        });
        jQuery2.fn.extend({
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        var location = window2.location;
        var nonce = jQuery2.now();
        var rquery = /\?/;
        var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        jQuery2.parseJSON = function(data) {
          if (window2.JSON && window2.JSON.parse) {
            return window2.JSON.parse(data + "");
          }
          var requireNonComma, depth = null, str = jQuery2.trim(data + "");
          return str && !jQuery2.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
            if (requireNonComma && comma) {
              depth = 0;
            }
            if (depth === 0) {
              return token;
            }
            requireNonComma = open || comma;
            depth += !close - !open;
            return "";
          })) ? Function("return " + str)() : jQuery2.error("Invalid JSON: " + data);
        };
        jQuery2.parseXML = function(data) {
          var xml, tmp;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            if (window2.DOMParser) {
              tmp = new window2.DOMParser();
              xml = tmp.parseFromString(data, "text/xml");
            } else {
              xml = new window2.ActiveXObject("Microsoft.XMLDOM");
              xml.async = "false";
              xml.loadXML(data);
            }
          } catch (e2) {
            xml = void 0;
          }
          if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
            jQuery2.error("Invalid XML: " + data);
          }
          return xml;
        };
        var rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), ajaxLocation = location.href, ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i3 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery2.isFunction(func)) {
              while (dataType = dataTypes[i3++]) {
                if (dataType.charAt(0) === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var deep, key, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s2, jqXHR, responses) {
          var firstDataType, ct, finalDataType, type, contents = s2.contents, dataTypes = s2.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s2, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s2.converters) {
              converters[conv.toLowerCase()] = s2.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s2.responseFields[current]) {
              jqXHR[s2.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s2.dataFilter) {
              response = s2.dataFilter(response, s2.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s2["throws"]) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e2) {
                      return {
                        state: "parsererror",
                        error: conv ? e2 : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": jQuery2.parseJSON,
              "text xml": jQuery2.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var parts, i3, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s2 = jQuery2.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (state === 2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase()] = match[2];
                    }
                  }
                  match = responseHeaders[key.toLowerCase()];
                }
                return match == null ? null : match;
              },
              getAllResponseHeaders: function() {
                return state === 2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                var lname = name.toLowerCase();
                if (!state) {
                  name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (!state) {
                  s2.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (state < 2) {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  } else {
                    jqXHR.always(map[jqXHR.status]);
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s2.url = ((url || s2.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s2.type = options.method || options.type || s2.method || s2.type;
            s2.dataTypes = jQuery2.trim(s2.dataType || "*").toLowerCase().match(rnotwhite) || [""];
            if (s2.crossDomain == null) {
              parts = rurl.exec(s2.url.toLowerCase());
              s2.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s2.data && s2.processData && typeof s2.data !== "string") {
              s2.data = jQuery2.param(s2.data, s2.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
            if (state === 2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s2.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s2.type = s2.type.toUpperCase();
            s2.hasContent = !rnoContent.test(s2.type);
            cacheURL = s2.url;
            if (!s2.hasContent) {
              if (s2.data) {
                cacheURL = s2.url += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
                delete s2.data;
              }
              if (s2.cache === false) {
                s2.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
              }
            }
            if (s2.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s2.contentType);
            }
            jqXHR.setRequestHeader("Accept", s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]);
            for (i3 in s2.headers) {
              jqXHR.setRequestHeader(i3, s2.headers[i3]);
            }
            if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || state === 2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            for (i3 in { success: 1, error: 1, complete: 1 }) {
              jqXHR[i3](s2[i3]);
            }
            transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
              }
              if (state === 2) {
                return jqXHR;
              }
              if (s2.async && s2.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s2.timeout);
              }
              try {
                state = 1;
                transport.send(requestHeaders, done);
              } catch (e2) {
                if (state < 2) {
                  done(-1, e2);
                } else {
                  throw e2;
                }
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (state === 2) {
                return;
              }
              state = 2;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s2, jqXHR, responses);
              }
              response = ajaxConvert(s2, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s2.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s2.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s2, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(i3, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (jQuery2.isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url: url,
              type: method,
              dataType: type,
              data: data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2._evalUrl = function(url) {
          return jQuery2.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            if (jQuery2.isFunction(html)) {
              return this.each(function(i3) {
                jQuery2(this).wrapAll(html.call(this, i3));
              });
            }
            if (this[0]) {
              var wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstChild && elem.firstChild.nodeType === 1) {
                  elem = elem.firstChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (jQuery2.isFunction(html)) {
              return this.each(function(i3) {
                jQuery2(this).wrapInner(html.call(this, i3));
              });
            }
            return this.each(function() {
              var self = jQuery2(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var isFunction = jQuery2.isFunction(html);
            return this.each(function(i3) {
              jQuery2(this).wrapAll(isFunction ? html.call(this, i3) : html);
            });
          },
          unwrap: function() {
            return this.parent().each(function() {
              if (!jQuery2.nodeName(this, "body")) {
                jQuery2(this).replaceWith(this.childNodes);
              }
            }).end();
          }
        });
        function getDisplay(elem) {
          return elem.style && elem.style.display || jQuery2.css(elem, "display");
        }
        function filterHidden(elem) {
          while (elem && elem.nodeType === 1) {
            if (getDisplay(elem) === "none" || elem.type === "hidden") {
              return true;
            }
            elem = elem.parentNode;
          }
          return false;
        }
        jQuery2.expr.filters.hidden = function(elem) {
          return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem);
        };
        jQuery2.expr.filters.visible = function(elem) {
          return !jQuery2.expr.filters.hidden(elem);
        };
        var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (jQuery2.isArray(obj)) {
            jQuery2.each(obj, function(i3, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(prefix + "[" + (typeof v === "object" && v != null ? i3 : "") + "]", v, traditional, add);
              }
            });
          } else if (!traditional && jQuery2.type(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a, traditional) {
          var prefix, s2 = [], add = function(key, value) {
            value = jQuery2.isFunction(value) ? value() : value == null ? "" : value;
            s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
          };
          if (traditional === void 0) {
            traditional = jQuery2.ajaxSettings && jQuery2.ajaxSettings.traditional;
          }
          if (jQuery2.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
            jQuery2.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s2.join("&").replace(r20, "+");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i3, elem) {
              var val = jQuery2(this).val();
              return val == null ? null : jQuery2.isArray(val) ? jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        jQuery2.ajaxSettings.xhr = window2.ActiveXObject !== void 0 ? function() {
          if (this.isLocal) {
            return createActiveXHR();
          }
          if (document.documentMode > 8) {
            return createStandardXHR();
          }
          return /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
        } : createStandardXHR;
        var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery2.ajaxSettings.xhr();
        if (window2.attachEvent) {
          window2.attachEvent("onunload", function() {
            for (var key in xhrCallbacks) {
              xhrCallbacks[key](void 0, true);
            }
          });
        }
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        xhrSupported = support.ajax = !!xhrSupported;
        if (xhrSupported) {
          jQuery2.ajaxTransport(function(options) {
            if (!options.crossDomain || support.cors) {
              var callback;
              return {
                send: function(headers, complete) {
                  var i3, xhr = options.xhr(), id = ++xhrId;
                  xhr.open(options.type, options.url, options.async, options.username, options.password);
                  if (options.xhrFields) {
                    for (i3 in options.xhrFields) {
                      xhr[i3] = options.xhrFields[i3];
                    }
                  }
                  if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                  }
                  if (!options.crossDomain && !headers["X-Requested-With"]) {
                    headers["X-Requested-With"] = "XMLHttpRequest";
                  }
                  for (i3 in headers) {
                    if (headers[i3] !== void 0) {
                      xhr.setRequestHeader(i3, headers[i3] + "");
                    }
                  }
                  xhr.send(options.hasContent && options.data || null);
                  callback = function(_, isAbort) {
                    var status, statusText, responses;
                    if (callback && (isAbort || xhr.readyState === 4)) {
                      delete xhrCallbacks[id];
                      callback = void 0;
                      xhr.onreadystatechange = jQuery2.noop;
                      if (isAbort) {
                        if (xhr.readyState !== 4) {
                          xhr.abort();
                        }
                      } else {
                        responses = {};
                        status = xhr.status;
                        if (typeof xhr.responseText === "string") {
                          responses.text = xhr.responseText;
                        }
                        try {
                          statusText = xhr.statusText;
                        } catch (e2) {
                          statusText = "";
                        }
                        if (!status && options.isLocal && !options.crossDomain) {
                          status = responses.text ? 200 : 404;
                        } else if (status === 1223) {
                          status = 204;
                        }
                      }
                    }
                    if (responses) {
                      complete(status, statusText, responses, xhr.getAllResponseHeaders());
                    }
                  };
                  if (!options.async) {
                    callback();
                  } else if (xhr.readyState === 4) {
                    window2.setTimeout(callback);
                  } else {
                    xhr.onreadystatechange = xhrCallbacks[id] = callback;
                  }
                },
                abort: function() {
                  if (callback) {
                    callback(void 0, true);
                  }
                }
              };
            }
          });
        }
        function createStandardXHR() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e2) {
          }
        }
        function createActiveXHR() {
          try {
            return new window2.ActiveXObject("Microsoft.XMLHTTP");
          } catch (e2) {
          }
        }
        jQuery2.ajaxPrefilter(function(s2) {
          if (s2.crossDomain) {
            s2.contents.script = false;
          }
        });
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s2) {
          if (s2.cache === void 0) {
            s2.cache = false;
          }
          if (s2.crossDomain) {
            s2.type = "GET";
            s2.global = false;
          }
        });
        jQuery2.ajaxTransport("script", function(s2) {
          if (s2.crossDomain) {
            var script, head = document.head || jQuery2("head")[0] || document.documentElement;
            return {
              send: function(_, callback) {
                script = document.createElement("script");
                script.async = true;
                if (s2.scriptCharset) {
                  script.charset = s2.scriptCharset;
                }
                script.src = s2.url;
                script.onload = script.onreadystatechange = function(_2, isAbort) {
                  if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                    script.onload = script.onreadystatechange = null;
                    if (script.parentNode) {
                      script.parentNode.removeChild(script);
                    }
                    script = null;
                    if (!isAbort) {
                      callback(200, "success");
                    }
                  }
                };
                head.insertBefore(script, head.firstChild);
              },
              abort: function() {
                if (script) {
                  script.onload(void 0, true);
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
          if (jsonProp || s2.dataTypes[0] === "jsonp") {
            callbackName = s2.jsonpCallback = jQuery2.isFunction(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
            if (jsonProp) {
              s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s2.jsonp !== false) {
              s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
            }
            s2.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s2.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s2[callbackName]) {
                s2.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && jQuery2.isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          if (!document.implementation.createHTMLDocument) {
            return false;
          }
          var doc = document.implementation.createHTMLDocument("");
          doc.body.innerHTML = "<form></form><form></form>";
          return doc.body.childNodes.length === 2;
        }();
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (!data || typeof data !== "string") {
            return null;
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          context = context || (support.createHTMLDocument ? document.implementation.createHTMLDocument("") : document);
          var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        var _load = jQuery2.fn.load;
        jQuery2.fn.load = function(url, params, callback) {
          if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
          }
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = jQuery2.trim(url.slice(off, url.length));
            url = url.slice(0, off);
          }
          if (jQuery2.isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery2.ajax({
              url: url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(self, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(i3, type) {
          jQuery2.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery2.expr.filters.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        function getWindow(elem) {
          return jQuery2.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
        }
        jQuery2.offset = {
          setOffset: function(elem, options, i3) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && jQuery2.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery2.isFunction(options)) {
              options = options.call(elem, i3, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i3) {
                jQuery2.offset.setOffset(this, options, i3);
              });
            }
            var docElem, win, box = { top: 0, left: 0 }, elem = this[0], doc = elem && elem.ownerDocument;
            if (!doc) {
              return;
            }
            docElem = doc.documentElement;
            if (!jQuery2.contains(docElem, elem)) {
              return box;
            }
            if (typeof elem.getBoundingClientRect !== "undefined") {
              box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
              top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
              left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, parentOffset = { top: 0, left: 0 }, elem = this[0];
            if (jQuery2.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offsetParent = this.offsetParent();
              offset = this.offset();
              if (!jQuery2.nodeName(offsetParent[0], "html")) {
                parentOffset = offsetParent.offset();
              }
              parentOffset.top += jQuery2.css(offsetParent[0], "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
              top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && (!jQuery2.nodeName(offsetParent, "html") && jQuery2.css(offsetParent, "position") === "static")) {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = /Y/.test(prop);
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win = getWindow(elem);
              if (val2 === void 0) {
                return win ? prop in win ? win[prop] : win.document.documentElement[method2] : elem[method2];
              }
              if (win) {
                win.scrollTo(!top ? val2 : jQuery2(win).scrollLeft(), top ? val2 : jQuery2(win).scrollTop());
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length, null);
          };
        });
        jQuery2.each(["top", "left"], function(i3, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          });
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each({ padding: "inner" + name, content: type, "": "outer" + name }, function(defaultExtra, funcName) {
            jQuery2.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (jQuery2.isWindow(elem)) {
                  return elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                }
                return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable, null);
            };
          });
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          }
        });
        jQuery2.fn.size = function() {
          return this.length;
        };
        jQuery2.fn.andSelf = jQuery2.fn.addBack;
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (!noGlobal) {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // jquery.tablesorter.js
  var require_jquery_tablesorter = __commonJS({
    "jquery.tablesorter.js": function(exports, module) {
      (function($) {
        $.extend({
          tablesorter: new function() {
            var parsers = [], widgets = [];
            this.defaults = {
              cssHeader: "header",
              cssAsc: "headerSortUp",
              cssDesc: "headerSortDown",
              cssChildRow: "expand-child",
              sortInitialOrder: "asc",
              sortMultiSortKey: "shiftKey",
              sortForce: null,
              sortAppend: null,
              sortLocaleCompare: true,
              textExtraction: "simple",
              parsers: {},
              widgets: [],
              widgetZebra: {
                css: ["even", "odd"]
              },
              headers: {},
              widthFixed: false,
              cancelSelection: true,
              sortList: [],
              headerList: [],
              dateFormat: "us",
              decimal: "/.|,/g",
              onRenderHeader: null,
              selectorHeaders: "thead th",
              debug: false
            };
            function benchmark(s2, d) {
              log(s2 + "," + (new Date().getTime() - d.getTime()) + "ms");
            }
            this.benchmark = benchmark;
            function log(s2) {
              if (typeof console != "undefined" && typeof console.debug != "undefined") {
                console.log(s2);
              } else {
                alert(s2);
              }
            }
            function buildParserCache(table2, $headers) {
              if (table2.config.debug) {
                var parsersDebug = "";
              }
              if (table2.tBodies.length == 0)
                return;
              var rows = table2.tBodies[0].rows;
              if (rows[0]) {
                var list = [], cells = rows[0].cells, l2 = cells.length;
                for (var i2 = 0; i2 < l2; i2++) {
                  var p = false;
                  if ($.metadata && ($($headers[i2]).metadata() && $($headers[i2]).metadata().sorter)) {
                    p = getParserById($($headers[i2]).metadata().sorter);
                  } else if (table2.config.headers[i2] && table2.config.headers[i2].sorter) {
                    p = getParserById(table2.config.headers[i2].sorter);
                  }
                  if (!p) {
                    p = detectParserForColumn(table2, rows, -1, i2);
                  }
                  if (table2.config.debug) {
                    parsersDebug += "column:" + i2 + " parser:" + p.id + "\n";
                  }
                  list.push(p);
                }
              }
              if (table2.config.debug) {
                log(parsersDebug);
              }
              return list;
            }
            ;
            function detectParserForColumn(table2, rows, rowIndex, cellIndex) {
              var l2 = parsers.length, node = false, nodeValue = false, keepLooking = true;
              while (nodeValue == "" && keepLooking) {
                rowIndex++;
                if (rows[rowIndex]) {
                  node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                  nodeValue = trimAndGetNodeText(table2.config, node);
                  if (table2.config.debug) {
                    log("Checking if value was empty on row:" + rowIndex);
                  }
                } else {
                  keepLooking = false;
                }
              }
              for (var i2 = 1; i2 < l2; i2++) {
                if (parsers[i2].is(nodeValue, table2, node)) {
                  return parsers[i2];
                }
              }
              return parsers[0];
            }
            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
              return rows[rowIndex].cells[cellIndex];
            }
            function trimAndGetNodeText(config, node) {
              return $.trim(getElementText(config, node));
            }
            function getParserById(name) {
              var l2 = parsers.length;
              for (var i2 = 0; i2 < l2; i2++) {
                if (parsers[i2].id.toLowerCase() == name.toLowerCase()) {
                  return parsers[i2];
                }
              }
              return false;
            }
            function buildCache(table2) {
              if (table2.config.debug) {
                var cacheTime = new Date();
              }
              var totalRows = table2.tBodies[0] && table2.tBodies[0].rows.length || 0, totalCells = table2.tBodies[0].rows[0] && table2.tBodies[0].rows[0].cells.length || 0, parsers2 = table2.config.parsers, cache2 = {
                row: [],
                normalized: []
              };
              for (var i2 = 0; i2 < totalRows; ++i2) {
                var c2 = $(table2.tBodies[0].rows[i2]), cols = [];
                if (c2.hasClass(table2.config.cssChildRow)) {
                  cache2.row[cache2.row.length - 1] = cache2.row[cache2.row.length - 1].add(c2);
                  continue;
                }
                cache2.row.push(c2);
                for (var j = 0; j < totalCells; ++j) {
                  cols.push(parsers2[j].format(getElementText(table2.config, c2[0].cells[j]), table2, c2[0].cells[j]));
                }
                cols.push(cache2.normalized.length);
                cache2.normalized.push(cols);
                cols = null;
              }
              ;
              if (table2.config.debug) {
                benchmark("Building cache for " + totalRows + " rows:", cacheTime);
              }
              return cache2;
            }
            ;
            function getElementText(config, node) {
              var text = "";
              if (!node)
                return "";
              if (!config.supportsTextContent)
                config.supportsTextContent = node.textContent || false;
              if (config.textExtraction == "simple") {
                if (config.supportsTextContent) {
                  text = node.textContent;
                } else {
                  if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                    text = node.childNodes[0].innerHTML;
                  } else {
                    text = node.innerHTML;
                  }
                }
              } else {
                if (typeof config.textExtraction == "function") {
                  text = config.textExtraction(node);
                } else {
                  text = $(node).text();
                }
              }
              return text;
            }
            function appendToTable(table2, cache2) {
              if (table2.config.debug) {
                var appendTime = new Date();
              }
              var c2 = cache2, r = c2.row, n = c2.normalized, totalRows = n.length, checkCell = n[0].length - 1, tableBody = $(table2.tBodies[0]), rows = [];
              for (var i2 = 0; i2 < totalRows; i2++) {
                var pos = n[i2][checkCell];
                rows.push(r[pos]);
                if (!table2.config.appender) {
                  var l2 = r[pos].length;
                  for (var j = 0; j < l2; j++) {
                    tableBody[0].appendChild(r[pos][j]);
                  }
                }
              }
              if (table2.config.appender) {
                table2.config.appender(table2, rows);
              }
              rows = null;
              if (table2.config.debug) {
                benchmark("Rebuilt table:", appendTime);
              }
              applyWidget(table2);
              setTimeout(function() {
                $(table2).trigger("sortEnd");
              }, 0);
            }
            ;
            function buildHeaders(table2) {
              if (table2.config.debug) {
                var time = new Date();
              }
              var meta = $.metadata ? true : false;
              var header_index = computeTableHeaderCellIndexes(table2);
              $tableHeaders = $(table2.config.selectorHeaders, table2).each(function(index) {
                this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                this.order = formatSortingOrder(table2.config.sortInitialOrder);
                this.count = this.order;
                if (checkHeaderMetadata(this) || checkHeaderOptions(table2, index))
                  this.sortDisabled = true;
                if (checkHeaderOptionsSortingLocked(table2, index))
                  this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table2, index);
                if (!this.sortDisabled) {
                  var $th = $(this).addClass(table2.config.cssHeader);
                  if (table2.config.onRenderHeader)
                    table2.config.onRenderHeader.apply($th);
                }
                table2.config.headerList[index] = this;
              });
              if (table2.config.debug) {
                benchmark("Built headers:", time);
                log($tableHeaders);
              }
              return $tableHeaders;
            }
            ;
            function computeTableHeaderCellIndexes(t) {
              var matrix = [];
              var lookup = {};
              var thead = t.getElementsByTagName("THEAD")[0];
              var trs = thead.getElementsByTagName("TR");
              for (var i2 = 0; i2 < trs.length; i2++) {
                var cells = trs[i2].cells;
                for (var j = 0; j < cells.length; j++) {
                  var c2 = cells[j];
                  var rowIndex = c2.parentNode.rowIndex;
                  var cellId = rowIndex + "-" + c2.cellIndex;
                  var rowSpan = c2.rowSpan || 1;
                  var colSpan = c2.colSpan || 1;
                  var firstAvailCol;
                  if (typeof matrix[rowIndex] == "undefined") {
                    matrix[rowIndex] = [];
                  }
                  for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                    if (typeof matrix[rowIndex][k] == "undefined") {
                      firstAvailCol = k;
                      break;
                    }
                  }
                  lookup[cellId] = firstAvailCol;
                  for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                    if (typeof matrix[k] == "undefined") {
                      matrix[k] = [];
                    }
                    var matrixrow = matrix[k];
                    for (var l2 = firstAvailCol; l2 < firstAvailCol + colSpan; l2++) {
                      matrixrow[l2] = "x";
                    }
                  }
                }
              }
              return lookup;
            }
            function checkCellColSpan(table2, rows, row) {
              var arr = [], r = table2.tHead.rows, c2 = r[row].cells;
              for (var i2 = 0; i2 < c2.length; i2++) {
                var cell = c2[i2];
                if (cell.colSpan > 1) {
                  arr = arr.concat(checkCellColSpan(table2, headerArr, row++));
                } else {
                  if (table2.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                    arr.push(cell);
                  }
                }
              }
              return arr;
            }
            ;
            function checkHeaderMetadata(cell) {
              if ($.metadata && $(cell).metadata().sorter === false) {
                return true;
              }
              ;
              return false;
            }
            function checkHeaderOptions(table2, i2) {
              if (table2.config.headers[i2] && table2.config.headers[i2].sorter === false) {
                return true;
              }
              ;
              return false;
            }
            function checkHeaderOptionsSortingLocked(table2, i2) {
              if (table2.config.headers[i2] && table2.config.headers[i2].lockedOrder)
                return table2.config.headers[i2].lockedOrder;
              return false;
            }
            function applyWidget(table2) {
              var c2 = table2.config.widgets;
              var l2 = c2.length;
              for (var i2 = 0; i2 < l2; i2++) {
                getWidgetById(c2[i2]).format(table2);
              }
            }
            function getWidgetById(name) {
              var l2 = widgets.length;
              for (var i2 = 0; i2 < l2; i2++) {
                if (widgets[i2].id.toLowerCase() == name.toLowerCase()) {
                  return widgets[i2];
                }
              }
            }
            ;
            function formatSortingOrder(v) {
              if (typeof v != "Number") {
                return v.toLowerCase() == "desc" ? 1 : 0;
              } else {
                return v == 1 ? 1 : 0;
              }
            }
            function isValueInArray(v, a) {
              var l2 = a.length;
              for (var i2 = 0; i2 < l2; i2++) {
                if (a[i2][0] == v) {
                  return true;
                }
              }
              return false;
            }
            function setHeadersCss(table2, $headers, list, css) {
              $headers.removeClass(css[0]).removeClass(css[1]);
              var h = [];
              $headers.each(function(offset) {
                if (!this.sortDisabled) {
                  h[this.column] = $(this);
                }
              });
              var l2 = list.length;
              for (var i2 = 0; i2 < l2; i2++) {
                h[list[i2][0]].addClass(css[list[i2][1]]);
              }
            }
            function fixColumnWidth(table2, $headers) {
              var c2 = table2.config;
              if (c2.widthFixed) {
                var colgroup = $("<colgroup>");
                $("tr:first td", table2.tBodies[0]).each(function() {
                  colgroup.append($("<col>").css("width", $(this).width()));
                });
                $(table2).prepend(colgroup);
              }
              ;
            }
            function updateHeaderSortCount(table2, sortList2) {
              var c2 = table2.config, l2 = sortList2.length;
              for (var i2 = 0; i2 < l2; i2++) {
                var s2 = sortList2[i2], o = c2.headerList[s2[0]];
                o.count = s2[1];
                o.count++;
              }
            }
            function multisort(table, sortList, cache) {
              if (table.config.debug) {
                var sortTime = new Date();
              }
              var dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length;
              for (var i = 0; i < l; i++) {
                var c = sortList[i][0];
                var order = sortList[i][1];
                var s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c);
                var e = "e" + i;
                dynamicExp += "var " + e + " = " + s;
                dynamicExp += "if(" + e + ") { return " + e + "; } ";
                dynamicExp += "else { ";
              }
              var orgOrderCol = cache.normalized[0].length - 1;
              dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
              for (var i = 0; i < l; i++) {
                dynamicExp += "}; ";
              }
              dynamicExp += "return 0; ";
              dynamicExp += "}; ";
              if (table.config.debug) {
                benchmark("Evaling expression:" + dynamicExp, new Date());
              }
              eval(dynamicExp);
              cache.normalized.sort(sortWrapper);
              if (table.config.debug) {
                benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
              }
              return cache;
            }
            ;
            function makeSortFunction(type, direction, index) {
              var a = "a[" + index + "]", b = "b[" + index + "]";
              if (type == "text" && direction == "asc") {
                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
              } else if (type == "text" && direction == "desc") {
                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
              } else if (type == "numeric" && direction == "asc") {
                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
              } else if (type == "numeric" && direction == "desc") {
                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
              }
            }
            ;
            function makeSortText(i2) {
              return "((a[" + i2 + "] < b[" + i2 + "]) ? -1 : ((a[" + i2 + "] > b[" + i2 + "]) ? 1 : 0));";
            }
            ;
            function makeSortTextDesc(i2) {
              return "((b[" + i2 + "] < a[" + i2 + "]) ? -1 : ((b[" + i2 + "] > a[" + i2 + "]) ? 1 : 0));";
            }
            ;
            function makeSortNumeric(i2) {
              return "a[" + i2 + "]-b[" + i2 + "];";
            }
            ;
            function makeSortNumericDesc(i2) {
              return "b[" + i2 + "]-a[" + i2 + "];";
            }
            ;
            function sortText(a, b) {
              if (table.config.sortLocaleCompare)
                return a.localeCompare(b);
              return a < b ? -1 : a > b ? 1 : 0;
            }
            ;
            function sortTextDesc(a, b) {
              if (table.config.sortLocaleCompare)
                return b.localeCompare(a);
              return b < a ? -1 : b > a ? 1 : 0;
            }
            ;
            function sortNumeric(a, b) {
              return a - b;
            }
            ;
            function sortNumericDesc(a, b) {
              return b - a;
            }
            ;
            function getCachedSortType(parsers2, i2) {
              return parsers2[i2].type;
            }
            ;
            this.construct = function(settings) {
              return this.each(function() {
                if (!this.tHead || !this.tBodies)
                  return;
                var $this, $document, $headers, cache2, config, shiftDown = 0, sortOrder;
                this.config = {};
                config = $.extend(this.config, $.tablesorter.defaults, settings);
                $this = $(this);
                $.data(this, "tablesorter", config);
                $headers = buildHeaders(this);
                this.config.parsers = buildParserCache(this, $headers);
                cache2 = buildCache(this);
                var sortCSS = [config.cssDesc, config.cssAsc];
                fixColumnWidth(this);
                $headers.click(function(e2) {
                  var totalRows = $this[0].tBodies[0] && $this[0].tBodies[0].rows.length || 0;
                  if (!this.sortDisabled && totalRows > 0) {
                    $this.trigger("sortStart");
                    var $cell = $(this);
                    var i2 = this.column;
                    this.order = this.count++ % 2;
                    if (this.lockedOrder)
                      this.order = this.lockedOrder;
                    if (!e2[config.sortMultiSortKey]) {
                      config.sortList = [];
                      if (config.sortForce != null) {
                        var a = config.sortForce;
                        for (var j = 0; j < a.length; j++) {
                          if (a[j][0] != i2) {
                            config.sortList.push(a[j]);
                          }
                        }
                      }
                      config.sortList.push([i2, this.order]);
                    } else {
                      if (isValueInArray(i2, config.sortList)) {
                        for (var j = 0; j < config.sortList.length; j++) {
                          var s2 = config.sortList[j], o = config.headerList[s2[0]];
                          if (s2[0] == i2) {
                            o.count = s2[1];
                            o.count++;
                            s2[1] = o.count % 2;
                          }
                        }
                      } else {
                        config.sortList.push([i2, this.order]);
                      }
                    }
                    ;
                    setTimeout(function() {
                      setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                      appendToTable($this[0], multisort($this[0], config.sortList, cache2));
                    }, 1);
                    return false;
                  }
                }).mousedown(function() {
                  if (config.cancelSelection) {
                    this.onselectstart = function() {
                      return false;
                    };
                    return false;
                  }
                });
                $this.bind("update", function() {
                  var me = this;
                  setTimeout(function() {
                    me.config.parsers = buildParserCache(me, $headers);
                    cache2 = buildCache(me);
                  }, 1);
                }).bind("updateCell", function(e2, cell) {
                  var config2 = this.config;
                  var pos = [cell.parentNode.rowIndex - 1, cell.cellIndex];
                  cache2.normalized[pos[0]][pos[1]] = config2.parsers[pos[1]].format(getElementText(config2, cell), cell);
                }).bind("sorton", function(e2, list) {
                  $(this).trigger("sortStart");
                  config.sortList = list;
                  var sortList2 = config.sortList;
                  updateHeaderSortCount(this, sortList2);
                  setHeadersCss(this, $headers, sortList2, sortCSS);
                  appendToTable(this, multisort(this, sortList2, cache2));
                }).bind("appendCache", function() {
                  appendToTable(this, cache2);
                }).bind("applyWidgetId", function(e2, id) {
                  getWidgetById(id).format(this);
                }).bind("applyWidgets", function() {
                  applyWidget(this);
                });
                if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                  config.sortList = $(this).metadata().sortlist;
                }
                if (config.sortList.length > 0) {
                  $this.trigger("sorton", [config.sortList]);
                }
                applyWidget(this);
              });
            };
            this.addParser = function(parser) {
              var l2 = parsers.length, a = true;
              for (var i2 = 0; i2 < l2; i2++) {
                if (parsers[i2].id.toLowerCase() == parser.id.toLowerCase()) {
                  a = false;
                }
              }
              if (a) {
                parsers.push(parser);
              }
              ;
            };
            this.addWidget = function(widget) {
              widgets.push(widget);
            };
            this.formatFloat = function(s2) {
              var i2 = parseFloat(s2);
              return isNaN(i2) ? 0 : i2;
            };
            this.formatInt = function(s2) {
              var i2 = parseInt(s2);
              return isNaN(i2) ? 0 : i2;
            };
            this.isDigit = function(s2, config) {
              return /^[-+]?\d*$/.test($.trim(s2.replace(/[,.']/g, "")));
            };
            this.clearTableBody = function(table2) {
              if ($.browser.msie) {
                var empty2 = function() {
                  while (this.firstChild)
                    this.removeChild(this.firstChild);
                };
                var empty = empty2;
                empty2.apply(table2.tBodies[0]);
              } else {
                table2.tBodies[0].innerHTML = "";
              }
            };
          }()
        });
        $.fn.extend({
          tablesorter: $.tablesorter.construct
        });
        var ts = $.tablesorter;
        ts.addParser({
          id: "text",
          is: function(s2) {
            return true;
          },
          format: function(s2) {
            return $.trim(s2.toLocaleLowerCase());
          },
          type: "text"
        });
        ts.addParser({
          id: "digit",
          is: function(s2, table2) {
            var c2 = table2.config;
            return $.tablesorter.isDigit(s2, c2);
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(s2);
          },
          type: "numeric"
        });
        ts.addParser({
          id: "currency",
          is: function(s2) {
            return /^[£$€?.]/.test(s2);
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(s2.replace(new RegExp(/[£$€]/g), ""));
          },
          type: "numeric"
        });
        ts.addParser({
          id: "ipAddress",
          is: function(s2) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s2);
          },
          format: function(s2) {
            var a = s2.split("."), r = "", l2 = a.length;
            for (var i2 = 0; i2 < l2; i2++) {
              var item = a[i2];
              if (item.length == 2) {
                r += "0" + item;
              } else {
                r += item;
              }
            }
            return $.tablesorter.formatFloat(r);
          },
          type: "numeric"
        });
        ts.addParser({
          id: "url",
          is: function(s2) {
            return /^(https?|ftp|file):\/\/$/.test(s2);
          },
          format: function(s2) {
            return jQuery.trim(s2.replace(new RegExp(/(https?|ftp|file):\/\//), ""));
          },
          type: "text"
        });
        ts.addParser({
          id: "isoDate",
          is: function(s2) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s2);
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(s2 != "" ? new Date(s2.replace(new RegExp(/-/g), "/")).getTime() : "0");
          },
          type: "numeric"
        });
        ts.addParser({
          id: "percent",
          is: function(s2) {
            return /\%$/.test($.trim(s2));
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(s2.replace(new RegExp(/%/g), ""));
          },
          type: "numeric"
        });
        ts.addParser({
          id: "usLongDate",
          is: function(s2) {
            return s2.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(new Date(s2).getTime());
          },
          type: "numeric"
        });
        ts.addParser({
          id: "shortDate",
          is: function(s2) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s2);
          },
          format: function(s2, table2) {
            var c2 = table2.config;
            s2 = s2.replace(/\-/g, "/");
            if (c2.dateFormat == "us") {
              s2 = s2.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c2.dateFormat == "uk") {
              s2 = s2.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c2.dateFormat == "dd/mm/yy" || c2.dateFormat == "dd-mm-yy") {
              s2 = s2.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s2).getTime());
          },
          type: "numeric"
        });
        ts.addParser({
          id: "time",
          is: function(s2) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s2);
          },
          format: function(s2) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + s2).getTime());
          },
          type: "numeric"
        });
        ts.addParser({
          id: "metadata",
          is: function(s2) {
            return false;
          },
          format: function(s2, table2, cell) {
            var c2 = table2.config, p = !c2.parserMetadataName ? "sortValue" : c2.parserMetadataName;
            return $(cell).metadata()[p];
          },
          type: "numeric"
        });
        ts.addWidget({
          id: "zebra",
          format: function(table2) {
            if (table2.config.debug) {
              var time = new Date();
            }
            var $tr, row = -1, odd;
            $("tr:visible", table2.tBodies[0]).each(function(i2) {
              $tr = $(this);
              if (!$tr.hasClass(table2.config.cssChildRow))
                row++;
              odd = row % 2 == 0;
              $tr.removeClass(table2.config.widgetZebra.css[odd ? 0 : 1]).addClass(table2.config.widgetZebra.css[odd ? 1 : 0]);
            });
            if (table2.config.debug) {
              $.tablesorter.benchmark("Applying Zebra widget", time);
            }
          }
        });
      })(jQuery);
    }
  });

  // jquery_global.js
  var import_jquery = __toESM(require_jquery());
  window.jQuery = import_jquery.default;
  window.$ = import_jquery.default;

  // imports.js
  var import_jquery_tablesorter = __toESM(require_jquery_tablesorter());
})();
/*!
 * jQuery JavaScript Library v1.12.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:07Z
 */

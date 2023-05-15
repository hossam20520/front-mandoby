(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-countdown */ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_countdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-echarts/components/ECharts.vue */ "./node_modules/vue-echarts/components/ECharts.vue");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/chart/line */ "./node_modules/echarts/lib/chart/line.js");
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/echarts/lib/component/tooltip.js");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/lib/component/legend */ "./node_modules/echarts/lib/component/legend.js");
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import ECharts modules manually to reduce bundle size






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Countdown: vuejs_countdown__WEBPACK_IMPORTED_MODULE_1___default.a,
    "v-chart": vue_echarts_components_ECharts_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard"
  },
  data: function data() {
    return {
      sales: [],
      stock_alerts: [],
      report_today: {
        revenue: 0,
        today_purchases: 0,
        return_sales: 0,
        profit: 0
      },
      products: [],
      CurrentMonth: "",
      loading: true,
      echartSales: {},
      echartProduct: {},
      echartCustomer: {},
      echartPayment: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])), {}, {
    columns_sales: function columns_sales() {
      return [{
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Status"),
        field: "statut",
        html: true,
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Paid"),
        field: "paid_amount",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Due"),
        field: "due",
        type: "decimal",
        tdClass: "gull-border-none text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("PaymentStatus"),
        field: "payment_status",
        html: true,
        sortable: false,
        tdClass: "text-left gull-border-none",
        thClass: "text-left"
      }];
    },
    columns_stock: function columns_stock() {
      return [{
        label: this.$t("ProductCode"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("ProductName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Quantity"),
        field: "quantity",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("AlertQuantity"),
        field: "stock_alert",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    },
    columns_products: function columns_products() {
      return [{
        label: this.$t("ProductName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Quantity"),
        field: "quantity",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "total",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }];
    }
  }),
  methods: {
    //---------------------------------- Report Dashboard With Echart
    report_with_echart: function report_with_echart() {
      var _this = this;

      axios.get("chart/report_with_echart").then(function (response) {
        var responseData = response.data;
        _this.report_today = response.data.report_dashboard.original.report;
        _this.stock_alerts = response.data.report_dashboard.original.stock_alert;
        _this.products = response.data.report_dashboard.original.products;
        _this.sales = response.data.report_dashboard.original.last_sales;
        var dark_heading = "#c2c6dc";
        _this.echartCustomer = {
          color: ["#6D28D9", "#97c943", "#A78BFA", "#C4B5FD", "#7C3AED"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          formatter: function formatter(params) {
            return "".concat(params.name, ": (").concat(params.data.value, " sales) (").concat(params.percent, "%)");
          },
          series: [{
            name: "Top Customers",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.customers.original,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
        _this.echartPayment = {
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["Payment sent", "Payment received"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: responseData.payments.original.days
          },
          yAxis: {
            type: "value"
          },
          series: [{
            name: "Payment sent",
            type: "line",
            data: responseData.payments.original.payment_sent
          }, {
            name: "Payment received",
            type: "line",
            data: responseData.payments.original.payment_received
          }]
        };
        _this.echartProduct = {
          color: ["#6D28D9", "#97c943", "#A78BFA", "#C4B5FD", "#7C3AED"],
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          formatter: function formatter(params) {
            return "".concat(params.name, ": (").concat(params.percent, "%)");
          },
          series: [{
            name: "Top Selling Products",
            type: "pie",
            radius: "50%",
            center: "50%",
            data: responseData.product_report.original,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        };
        _this.echartSales = {
          legend: {
            borderRadius: 0,
            orient: "horizontal",
            x: "right",
            data: ["Sales", "Purchases"]
          },
          grid: {
            left: "8px",
            right: "8px",
            bottom: "0",
            containLabel: true
          },
          tooltip: {
            show: true,
            backgroundColor: "rgba(0, 0, 0, .8)"
          },
          xAxis: [{
            type: "category",
            data: responseData.sales.original.days,
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: dark_heading,
              interval: 0,
              rotate: 30
            },
            axisLine: {
              show: true,
              color: dark_heading,
              lineStyle: {
                color: dark_heading
              }
            }
          }],
          yAxis: [{
            type: "value",
            axisLabel: {
              color: dark_heading // formatter: "${value}"

            },
            axisLine: {
              show: false,
              color: dark_heading,
              lineStyle: {
                color: dark_heading
              }
            },
            min: 0,
            splitLine: {
              show: true,
              interval: "auto"
            }
          }],
          series: [{
            name: "Sales",
            data: responseData.sales.original.data,
            label: {
              show: false,
              color: "#97c943"
            },
            type: "bar",
            color: "#A78BFA",
            smooth: true,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: -2,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }, {
            name: "Purchases",
            data: responseData.purchases.original.data,
            label: {
              show: false,
              color: "#0168c1"
            },
            type: "bar",
            barGap: 0,
            color: "#DDD6FE",
            smooth: true,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: -2,
                shadowColor: "rgba(0, 0, 0, 0.3)"
              }
            }
          }]
        };
        _this.loading = false;
      })["catch"](function (response) {});
    },
    //------------------------------Get Month -------------------------\\
    GetMonth: function GetMonth() {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var now = new Date();
      this.CurrentMonth = months[now.getMonth()];
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));

      while (formated.length < dec) {
        formated += "0";
      }

      return "".concat(value[0], ".").concat(formated);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.report_with_echart();

            case 2:
              _this2.GetMonth();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c(
        "b-row",
        [
          _c("b-col", [
            _c("h1", { staticStyle: { "text-align": "center" } }, [
              _vm._v(" \n\nجاري العمل على الصفحة\n"),
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("Countdown", {
                  staticStyle: { "text-align": "center" },
                  attrs: { deadline: "May 18, 2023" },
                }),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuejs-countdown/dist/vuejs-countdown.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null;e.default={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");r=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(r))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(r)}}},function(t,e,n){"use strict";function r(t){n(2)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=n(8),u=n(7),c=r,d=u(i.a,a.a,!1,c,null,null);e.default=d.exports},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(5)("630d476e",r,!0,{})},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,'.vuejs-countdown{padding:0;margin:0}.vuejs-countdown li{display:inline-block;margin:0 8px;text-align:center;position:relative}.vuejs-countdown li p{margin:0}.vuejs-countdown li:after{content:":";position:absolute;top:0;right:-13px;font-size:32px}.vuejs-countdown li:first-of-type{margin-left:0}.vuejs-countdown li:last-of-type{margin-right:0}.vuejs-countdown li:last-of-type:after{content:""}.vuejs-countdown .digit{font-size:32px;font-weight:600;line-height:1.4;margin-bottom:0}.vuejs-countdown .text{text-transform:uppercase;margin-bottom:0;font-size:10px}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(_){var i=p++;r=l||(l=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},g=null,m="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){v=n,g=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=d[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],u=i[2],c=i[3],d={id:t+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(t,e){return d.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:s,exports:a,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("min")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("Sec")])])])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});

/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=5fd1f857& */ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/dashboard/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857&":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=5fd1f857& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/dashboard/dashboard.vue?vue&type=template&id=5fd1f857&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_5fd1f857___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
webpackJsonp([1],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsPageModule", function() { return SystemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_datepicker__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systems__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SystemsPageModule = /** @class */ (function () {
    function SystemsPageModule() {
    }
    SystemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__systems__["a" /* SystemsPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__models_datepicker__["a" /* CustomDatePicker */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__systems__["a" /* SystemsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], SystemsPageModule);
    return SystemsPageModule;
}());

//# sourceMappingURL=systems.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomDatePicker = /** @class */ (function () {
    function CustomDatePicker(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.t = 5;
    }
    CustomDatePicker.prototype.datePickerOptions = function (pickMode, defaultScrollTo, from, dateLimitTo, disableWeeks) {
        var options = {
            pickMode: pickMode,
            showAdjacentMonthDay: false,
            disableWeeks: disableWeeks,
            from: from,
            to: dateLimitTo,
            defaultScrollTo: defaultScrollTo,
        };
        return options;
    };
    CustomDatePicker.prototype.getMonths = function () {
        return [{ 'monthName': 'January', 'value': '01' },
            { 'monthName': 'February', 'value': '02' },
            { 'monthName': 'March', 'value': '03' },
            { 'monthName': 'April', 'value': '04' },
            { 'monthName': 'May', 'value': '05' },
            { 'monthName': 'June', 'value': '06' },
            { 'monthName': 'July', 'value': '07' },
            { 'monthName': 'August', 'value': '08' },
            { 'monthName': 'September', 'value': '09' },
            { 'monthName': 'October', 'value': '10' },
            { 'monthName': 'November', 'value': '11' },
            { 'monthName': 'December', 'value': '12' }];
    };
    CustomDatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CustomDatePicker);
    return CustomDatePicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(766)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== "undefined") {
		factory(exports, require('moment'), require('draggabilly'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.moment, global.draggabilly);
		global.mdDateTimePicker = mod.exports;
	}
})(this, function (exports, _moment, _draggabilly) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _moment2 = _interopRequireDefault(_moment);

	var _draggabilly2 = _interopRequireDefault(_draggabilly);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0, descriptor; i < props.length; i++) {
				descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || !1;
				descriptor.configurable = !0;
				if ("value" in descriptor) descriptor.writable = !0;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var mdDateTimePicker = function () {
		/**
  * [constructor of the mdDateTimePicker]
  *
  * @method constructor
  *
  * @param  {String}   type = 'date' or 'time 				[type of dialog]
  * @param  {moment}   init 						[initial value for the dialog date or time, defaults to today] [@default = today]
  * @param  {moment}   past 						[the past moment till which the calendar shall render] [@default = exactly 21 Years ago from init]
  * @param  {moment}   future	 					[the future moment till which the calendar shall render] [@default = init]
  * @param  {Boolean}  mode 						[this value tells whether the time dialog will have the 24 hour mode (true) or 12 hour mode (false)] [@default = false]
  * @param  {String}   orientation = 'LANDSCAPE' or 'PORTRAIT'		[force the orientation of the picker @default = 'LANDSCAPE']
  * @param  {element}  trigger						[element on which all the events will be dispatched e.g var foo = document.getElementById('bar'), here element = foo]
  * @param  {String}  ok = 'ok'						[ok button's text]
  * @param  {String}  cancel = 'cancel'					[cancel button's text]
  * @param  {Boolean} colon = true					[add an option to enable quote in 24 hour mode]
  * @param  {Boolean} autoClose = false					[close dialog on date/time selection]
  * @param  {Boolean} inner24 = false					[if 24-hour mode and (true), the PM hours shows in an inner dial]
  * @param  {String} prevHandle = <div class="mddtp-prev-handle"></div>	[The HTML content of the handle to go to previous month]
  * @param  {String} nextHandle = <div class="mddtp-next-handle"></div>	[The HTML content of the handle to go to next month]
  *
  * @return {Object}							[mdDateTimePicker]
  */
		function mdDateTimePicker(_ref) {
			var type = _ref.type,
			    _ref$init = _ref.init,
			    init = _ref$init === undefined ? (0, _moment2.default)() : _ref$init,
			    _ref$past = _ref.past,
			    past = _ref$past === undefined ? (0, _moment2.default)().subtract(21, 'years') : _ref$past,
			    _ref$future = _ref.future,
			    future = _ref$future === undefined ? init : _ref$future,
			    _ref$mode = _ref.mode,
			    mode = _ref$mode === undefined ? !1 : _ref$mode,
			    _ref$orientation = _ref.orientation,
			    orientation = _ref$orientation === undefined ? 'LANDSCAPE' : _ref$orientation,
			    _ref$trigger = _ref.trigger,
			    trigger = _ref$trigger === undefined ? '' : _ref$trigger,
			    _ref$ok = _ref.ok,
			    ok = _ref$ok === undefined ? 'ok' : _ref$ok,
			    _ref$cancel = _ref.cancel,
			    cancel = _ref$cancel === undefined ? 'cancel' : _ref$cancel,
			    _ref$colon = _ref.colon,
			    colon = _ref$colon === undefined ? !0 : _ref$colon,
			    _ref$autoClose = _ref.autoClose,
			    autoClose = _ref$autoClose === undefined ? !1 : _ref$autoClose,
			    _ref$inner = _ref.inner24,
			    inner24 = _ref$inner === undefined ? !1 : _ref$inner,
			    _ref$prevHandle = _ref.prevHandle,
			    prevHandle = _ref$prevHandle === undefined ? '<div class="mddtp-prev-handle"></div>' : _ref$prevHandle,
			    _ref$nextHandle = _ref.nextHandle,
			    nextHandle = _ref$nextHandle === undefined ? '<div class="mddtp-next-handle"></div>' : _ref$nextHandle;

			_classCallCheck(this, mdDateTimePicker);

			this._type = type;
			this._init = init;
			this._past = past;
			this._future = future;
			this._mode = mode;
			this._orientation = orientation;
			this._trigger = trigger;
			this._ok = ok;
			this._cancel = cancel;
			this._colon = colon;
			this._autoClose = autoClose;
			this._inner24 = inner24;
			this._prevHandle = prevHandle;
			this._nextHandle = nextHandle;

			/**
   * [dialog selected classes have the same structure as dialog but one level down]
   * @type {Object}
   * All declarations starting with _ are considered @private
   * e.g
   * sDialog = {
   *   picker: 'some-picker-selected'
   * }
   */
			this._sDialog = {};
			// attach the dialog if not present
			if (typeof document !== 'undefined' && !document.getElementById('mddtp-picker__' + this._type)) {
				this._buildDialog();
			}
		}

		/**
  * [time to get or set the current picker's moment]
  *
  * @method time
  *
  * @param  {moment} m
  *
  */


		_createClass(mdDateTimePicker, [{
			key: 'hide',
			value: function hide() {
				this._selectDialog();
				this._hideDialog();
			}
		}, {
			key: 'show',
			value: function show() {
				this._selectDialog();
				if (this._type === 'date') {
					this._initDateDialog(this._init);
				} else if (this._type === 'time') {
					this._initTimeDialog(this._init);
				}
				this._showDialog();
			}
		}, {
			key: 'isOpen',
			value: function isOpen() {
				this._selectDialog();

				return !!mdDateTimePicker.dialog.state;
			}
		}, {
			key: 'isClosed',
			value: function isClosed() {
				this._selectDialog();

				return !mdDateTimePicker.dialog.state;
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				this._selectDialog();
				// work according to the current state of the dialog
				if (mdDateTimePicker.dialog.state) {
					this.hide();
				} else {
					this.show();
				}
			}
		}, {
			key: '_selectDialog',
			value: function _selectDialog() {
				// now do what you normally would do
				this._sDialog.picker = document.getElementById('mddtp-picker__' + [this._type]);
				/**
    * [sDialogEls stores all inner components of the selected dialog or sDialog to be later getElementById]
    *
    * @type {Array}
    */
				var sDialogEls = ['viewHolder', 'years', 'header', 'cancel', 'ok', 'left', 'right', 'previous', 'current', 'next', 'subtitle', 'title', 'titleDay', 'titleMonth', 'AM', 'PM', 'needle', 'hourView', 'minuteView', 'hour', 'minute', 'fakeNeedle', 'circularHolder', 'circle', 'dotSpan'],
				    i = sDialogEls.length;

				while (i--) {
					this._sDialog[sDialogEls[i]] = document.getElementById('mddtp-' + this._type + '__' + sDialogEls[i]);
				}

				this._sDialog.tDate = this._init.clone();
				this._sDialog.sDate = this._init.clone();
			}
		}, {
			key: '_showDialog',
			value: function _showDialog() {
				var me = this,
				    zoomIn = 'zoomIn';

				mdDateTimePicker.dialog.state = !0;
				this._sDialog.picker.classList.remove('mddtp-picker--inactive');
				this._sDialog.picker.classList.add(zoomIn);
				// if the dialog is forced into portrait mode
				if (this._orientation === 'PORTRAIT') {
					this._sDialog.picker.classList.add('mddtp-picker--portrait');
				}
				setTimeout(function () {
					me._sDialog.picker.classList.remove(zoomIn);
				}, 300);
			}
		}, {
			key: '_hideDialog',
			value: function _hideDialog() {
				var me = this,
				    years = this._sDialog.years,
				    title = me._sDialog.title,
				    subtitle = me._sDialog.subtitle,
				    viewHolder = this._sDialog.viewHolder,
				    AM = this._sDialog.AM,
				    PM = this._sDialog.PM,
				    minute = this._sDialog.minute,
				    hour = this._sDialog.hour,
				    minuteView = this._sDialog.minuteView,
				    hourView = this._sDialog.hourView,
				    picker = this._sDialog.picker,
				    needle = this._sDialog.needle,
				    dotSpan = this._sDialog.dotSpan,
				    active = 'mddtp-picker__color--active',
				    inactive = 'mddtp-picker--inactive',
				    invisible = 'mddtp-picker__years--invisible',
				    zoomIn = 'zoomIn',
				    zoomOut = 'zoomOut',
				    hidden = 'mddtp-picker__circularView--hidden',
				    selection = 'mddtp-picker__selection';

				mdDateTimePicker.dialog.state = !1;
				mdDateTimePicker.dialog.view = !0;
				this._sDialog.picker.classList.add(zoomOut);
				// reset classes
				if (this._type === 'date') {
					years.classList.remove(zoomIn, zoomOut);
					years.classList.add(invisible);
					title.classList.remove(active);
					subtitle.classList.add(active);
					viewHolder.classList.remove(zoomOut);
				} else {
					AM.classList.remove(active);
					PM.classList.remove(active);
					minute.classList.remove(active);
					hour.classList.add(active);
					minuteView.classList.add(hidden);
					hourView.classList.remove(hidden);
					subtitle.setAttribute('style', 'display: none');
					dotSpan.setAttribute('style', 'display: none');
					needle.className = selection;
				}
				setTimeout(function () {
					// remove portrait mode
					me._sDialog.picker.classList.remove('mddtp-picker--portrait');
					me._sDialog.picker.classList.remove(zoomOut);
					me._sDialog.picker.classList.add(inactive);
					// clone elements and add them again to clear events attached to them
					var pickerClone = picker.cloneNode(!0);
					picker.parentNode.replaceChild(pickerClone, picker);
				}, 300);
			}
		}, {
			key: '_buildDialog',
			value: function _buildDialog() {
				var type = this._type,
				    docfrag = document.createDocumentFragment(),
				    container = document.createElement('div'),
				    header = document.createElement('div'),
				    body = document.createElement('div'),
				    action = document.createElement('div'),
				    cancel = document.createElement('button'),
				    ok = document.createElement('button');
				// outer most container of the picker

				// header container of the picker

				// body container of the picker

				// action elements container

				// ... add properties to them
				container.id = 'mddtp-picker__' + type;
				container.classList.add('mddtp-picker');
				container.classList.add('mddtp-picker-' + type);
				container.classList.add('mddtp-picker--inactive');
				container.classList.add('animated');
				this._addId(header, 'header');
				this._addClass(header, 'header');
				// add header to container
				container.appendChild(header);
				this._addClass(body, 'body');
				body.appendChild(action);
				// add body to container
				container.appendChild(body);
				// add stuff to header and body according to dialog type
				if (this._type === 'date') {
					var subtitle = document.createElement('div'),
					    title = document.createElement('div'),
					    titleDay = document.createElement('div'),
					    titleMonth = document.createElement('div'),
					    viewHolder = document.createElement('div'),
					    views = document.createElement('ul'),
					    previous = document.createElement('li'),
					    current = document.createElement('li'),
					    next = document.createElement('li'),
					    left = document.createElement('button'),
					    right = document.createElement('button'),
					    years = document.createElement('ul');

					// inside header
					// adding properties to them
					this._addId(subtitle, 'subtitle');
					this._addClass(subtitle, 'subtitle');
					this._addId(title, 'title');
					this._addClass(title, 'title', ['mddtp-picker__color--active']);
					this._addId(titleDay, 'titleDay');
					this._addId(titleMonth, 'titleMonth');
					// add title stuff to it
					title.appendChild(titleDay);
					title.appendChild(titleMonth);
					// add them to header
					header.appendChild(subtitle);
					header.appendChild(title);
					// inside body
					// inside viewHolder
					this._addId(viewHolder, 'viewHolder');
					this._addClass(viewHolder, 'viewHolder', ['animated']);
					this._addClass(views, 'views');
					this._addId(previous, 'previous');
					previous.classList.add('mddtp-picker__view');
					this._addId(current, 'current');
					current.classList.add('mddtp-picker__view');
					this._addId(next, 'next');
					next.classList.add('mddtp-picker__view');
					// fill the views
					this._addView(previous);
					this._addView(current);
					this._addView(next);
					// add them
					viewHolder.appendChild(views);
					views.appendChild(previous);
					views.appendChild(current);
					views.appendChild(next);
					// inside body again
					this._addId(left, 'left');
					left.classList.add('mddtp-button');
					this._addClass(left, 'left');
					left.setAttribute('type', 'button');
					left.innerHTML = this._prevHandle;

					this._addId(right, 'right');
					right.classList.add('mddtp-button');
					this._addClass(right, 'right');
					right.setAttribute('type', 'button');
					right.innerHTML = this._nextHandle;

					this._addId(years, 'years');
					this._addClass(years, 'years', ['mddtp-picker__years--invisible', 'animated']);
					// add them to body
					body.appendChild(viewHolder);
					body.appendChild(left);
					body.appendChild(right);
					body.appendChild(years);
				} else {
					var _title = document.createElement('div'),
					    hour = document.createElement('span'),
					    span = document.createElement('span'),
					    minute = document.createElement('span'),
					    _subtitle = document.createElement('div'),
					    AM = document.createElement('div'),
					    PM = document.createElement('div'),
					    circularHolder = document.createElement('div'),
					    needle = document.createElement('div'),
					    dot = document.createElement('span'),
					    line = document.createElement('span'),
					    circle = document.createElement('span'),
					    minuteView = document.createElement('div'),
					    fakeNeedle = document.createElement('div'),
					    hourView = document.createElement('div');

					// add properties to them
					// inside header
					this._addId(_title, 'title');
					this._addClass(_title, 'title');
					this._addId(hour, 'hour');
					hour.classList.add('mddtp-picker__color--active');
					span.textContent = ':';
					this._addId(span, 'dotSpan');
					span.setAttribute('style', 'display: none');
					this._addId(minute, 'minute');
					this._addId(_subtitle, 'subtitle');
					this._addClass(_subtitle, 'subtitle');
					_subtitle.setAttribute('style', 'display: none');
					this._addId(AM, 'AM');
					//AM.textContent = 'AM'
					// Change to 'AM' to Locale Meridiem
					AM.textContent = (0, _moment2.default)().localeData().meridiem(1, 1, !0);
					this._addId(PM, 'PM');
					//PM.textContent = 'PM'
					// Change to 'PM' to Locale Meridiem
					PM.textContent = (0, _moment2.default)().localeData().meridiem(13, 1, !0);
					// add them to title and subtitle
					_title.appendChild(hour);
					_title.appendChild(span);
					_title.appendChild(minute);
					_subtitle.appendChild(AM);
					_subtitle.appendChild(PM);
					// add them to header
					header.appendChild(_title);
					header.appendChild(_subtitle);
					// inside body
					this._addId(circularHolder, 'circularHolder');
					this._addClass(circularHolder, 'circularHolder');
					this._addId(needle, 'needle');
					needle.classList.add('mddtp-picker__selection');
					this._addClass(dot, 'dot');
					this._addClass(line, 'line');
					this._addId(circle, 'circle');
					this._addClass(circle, 'circle');
					this._addId(minuteView, 'minuteView');
					minuteView.classList.add('mddtp-picker__circularView');
					minuteView.classList.add('mddtp-picker__circularView--hidden');
					this._addId(fakeNeedle, 'fakeNeedle');
					fakeNeedle.classList.add('mddtp-picker__circle--fake');
					this._addId(hourView, 'hourView');
					hourView.classList.add('mddtp-picker__circularView');
					// add them to needle
					needle.appendChild(dot);
					needle.appendChild(line);
					needle.appendChild(circle);
					// add them to circularHolder
					circularHolder.appendChild(needle);
					circularHolder.appendChild(minuteView);
					circularHolder.appendChild(fakeNeedle);
					circularHolder.appendChild(hourView);
					// add them to body
					body.appendChild(circularHolder);
				}
				action.classList.add('mddtp-picker__action');

				if (this._autoClose === !0) {
					action.style.display = "none";
				}

				this._addId(cancel, 'cancel');
				cancel.classList.add('mddtp-button');
				cancel.setAttribute('type', 'button');
				this._addId(ok, 'ok');
				ok.classList.add('mddtp-button');
				ok.setAttribute('type', 'button');
				// add actions
				action.appendChild(cancel);
				action.appendChild(ok);
				// add actions to body
				body.appendChild(action);
				docfrag.appendChild(container);
				// add the container to the end of body
				document.getElementsByTagName('body').item(0).appendChild(docfrag);
			}
		}, {
			key: '_initTimeDialog',
			value: function _initTimeDialog(m) {
				var hour = this._sDialog.hour,
				    minute = this._sDialog.minute,
				    subtitle = this._sDialog.subtitle,
				    dotSpan = this._sDialog.dotSpan;

				// switch according to 12 hour or 24 hour mode
				if (this._mode) {
					// CHANGED exception case for 24 => 0 issue #57
					var text = parseInt(m.format('H'), 10);
					if (text === 0) {
						text = '00';
					}
					this._fillText(hour, text);
					// add the configurable colon in this mode issue #56
					if (this._colon) {
						dotSpan.removeAttribute('style');
					}
				} else {
					this._fillText(hour, m.format('h'));
					//this._sDialog[m.format('A')].classList.add('mddtp-picker__color--active')
					// Using isPM function for Find PM
					if (m._locale.isPM(m.format('A'))) {
						this._sDialog.PM.classList.add('mddtp-picker__color--active');
					} else {
						this._sDialog.AM.classList.add('mddtp-picker__color--active');
					}
					subtitle.removeAttribute('style');
					dotSpan.removeAttribute('style');
				}
				this._fillText(minute, m.format('mm'));
				this._initHour();
				this._initMinute();
				this._attachEventHandlers();
				this._changeM();
				this._dragDial();
				this._switchToView(hour);
				this._switchToView(minute);
				this._addClockEvent();
				this._setButtonText();
			}
		}, {
			key: '_initHour',
			value: function _initHour() {
				var hourView = this._sDialog.hourView,
				    needle = this._sDialog.needle,
				    hour = 'mddtp-hour__selected',
				    selected = 'mddtp-picker__cell--selected',
				    rotate = 'mddtp-picker__cell--rotate-',
				    rotate24 = 'mddtp-picker__cell--rotate24',
				    cell = 'mddtp-picker__cell',
				    docfrag = document.createDocumentFragment(),
				    hourNow = void 0;

				if (this._mode) {
					var degreeStep = this._inner24 === !0 ? 10 : 5;
					hourNow = parseInt(this._sDialog.tDate.format('H'), 10);
					for (var i = 1, j = degreeStep; i <= 24; i++, j += degreeStep) {
						var div = document.createElement('div'),
						    span = document.createElement('span');

						div.classList.add(cell);
						// CHANGED exception case for 24 => 0 issue #57
						if (i === 24) {
							span.textContent = '00';
						} else {
							span.textContent = i;
						}

						var position = j;
						if (this._inner24 === !0 && i > 12) {
							position -= 120;
							div.classList.add(rotate24);
						}

						div.classList.add(rotate + position);
						if (hourNow === i) {
							div.id = hour;
							div.classList.add(selected);
							needle.classList.add(rotate + position);
						}
						// CHANGED exception case for 24 => 0 issue #58
						if (i === 24 && hourNow === 0) {
							div.id = hour;
							div.classList.add(selected);
							needle.classList.add(rotate + position);
						}
						div.appendChild(span);
						docfrag.appendChild(div);
					}
				} else {
					hourNow = parseInt(this._sDialog.tDate.format('h'), 10);
					for (var _i = 1, _j = 10; _i <= 12; _i++, _j += 10) {
						var _div = document.createElement('div'),
						    _span = document.createElement('span');

						_div.classList.add(cell);
						_span.textContent = _i;
						_div.classList.add(rotate + _j);
						if (hourNow === _i) {
							_div.id = hour;
							_div.classList.add(selected);
							needle.classList.add(rotate + _j);
						}
						_div.appendChild(_span);
						docfrag.appendChild(_div);
					}
				}
				//empty the hours
				while (hourView.lastChild) {
					hourView.removeChild(hourView.lastChild);
				}
				// set inner html accordingly
				hourView.appendChild(docfrag);
			}
		}, {
			key: '_initMinute',
			value: function _initMinute() {
				var minuteView = this._sDialog.minuteView,
				    minuteNow = parseInt(this._sDialog.tDate.format('m'), 10),
				    sMinute = 'mddtp-minute__selected',
				    selected = 'mddtp-picker__cell--selected',
				    rotate = 'mddtp-picker__cell--rotate-',
				    cell = 'mddtp-picker__cell',
				    docfrag = document.createDocumentFragment();

				for (var i = 5, j = 10; i <= 60; i += 5, j += 10) {
					var div = document.createElement('div'),
					    span = document.createElement('span');

					div.classList.add(cell);
					if (i === 60) {
						span.textContent = this._numWithZero(0);
					} else {
						span.textContent = this._numWithZero(i);
					}
					if (minuteNow === 0) {
						minuteNow = 60;
					}
					div.classList.add(rotate + j);
					// (minuteNow === 1 && i === 60) for corner case highlight 00 at 01
					if (minuteNow === i || minuteNow - 1 === i || minuteNow + 1 === i || minuteNow === 1 && i === 60) {
						div.id = sMinute;
						div.classList.add(selected);
					}
					div.appendChild(span);
					docfrag.appendChild(div);
				}
				//empty the hours
				while (minuteView.lastChild) {
					minuteView.removeChild(minuteView.lastChild);
				}
				// set inner html accordingly
				minuteView.appendChild(docfrag);
			}
		}, {
			key: '_initDateDialog',
			value: function _initDateDialog(m) {
				var subtitle = this._sDialog.subtitle,
				    title = this._sDialog.title,
				    titleDay = this._sDialog.titleDay,
				    titleMonth = this._sDialog.titleMonth;

				this._fillText(subtitle, m.format('YYYY'));
				this._fillText(titleDay, m.format('ddd, '));
				this._fillText(titleMonth, m.format('MMM D'));
				this._initYear();
				this._initViewHolder();
				this._attachEventHandlers();
				this._changeMonth();
				this._switchToView(subtitle);
				this._switchToView(title);
				this._setButtonText();
			}
		}, {
			key: '_initViewHolder',
			value: function _initViewHolder() {
				var m = this._sDialog.tDate,
				    current = this._sDialog.current,
				    previous = this._sDialog.previous,
				    next = this._sDialog.next,
				    past = this._past,
				    future = this._future;

				if (m.isBefore(past, 'month')) {
					m = past.clone();
				}
				if (m.isAfter(future, 'month')) {
					m = future.clone();
				}
				this._sDialog.tDate = m;
				this._initMonth(current, m);
				this._initMonth(next, (0, _moment2.default)(this._getMonth(m, 1)));
				this._initMonth(previous, (0, _moment2.default)(this._getMonth(m, -1)));
				this._toMoveMonth();
			}
		}, {
			key: '_initMonth',
			value: function _initMonth(view, m) {
				var displayMonth = m.format('MMMM YYYY'),
				    innerDivs = view.getElementsByTagName('div');
				// get the .mddtp-picker__month element using innerDivs[0]

				this._fillText(innerDivs[0], displayMonth);
				var docfrag = document.createDocumentFragment(),
				    tr = innerDivs[3],
				    firstDayOfMonth = _moment2.default.weekdays(!0).indexOf(_moment2.default.weekdays(!1, (0, _moment2.default)(m).date(1).day())),
				    today = -1,
				    selected = -1,
				    lastDayOfMonth = parseInt((0, _moment2.default)(m).endOf('month').format('D'), 10) + firstDayOfMonth - 1,
				    past = firstDayOfMonth,
				    cellClass = 'mddtp-picker__cell',
				    future = lastDayOfMonth;
				// get the .mddtp-picker__tr element using innerDivs[3]

				/*
    * @netTrek - first day of month dependented from moment.locale
    */

				if ((0, _moment2.default)().isSame(m, 'month')) {
					today = parseInt((0, _moment2.default)().format('D'), 10);
					today += firstDayOfMonth - 1;
				}
				if (this._past.isSame(m, 'month')) {
					past = parseInt(this._past.format('D'), 10);
					past += firstDayOfMonth - 1;
				}
				if (this._future.isSame(m, 'month')) {
					future = parseInt(this._future.format('D'), 10);
					future += firstDayOfMonth - 1;
				}
				if (this._sDialog.sDate.isSame(m, 'month')) {
					selected = parseInt((0, _moment2.default)(m).format('D'), 10);
					selected += firstDayOfMonth - 1;
				}
				for (var i = 0; i < 42; i++) {
					// create cell
					var cell = document.createElement('span'),
					    currentDay = i - firstDayOfMonth + 1;

					if (i >= firstDayOfMonth && i <= lastDayOfMonth) {
						if (i > future || i < past) {
							cell.classList.add(cellClass + '--disabled');
						} else {
							cell.classList.add(cellClass);
						}
						this._fillText(cell, currentDay);
					}
					if (today === i) {
						cell.classList.add(cellClass + '--today');
					}
					if (selected === i) {
						cell.classList.add(cellClass + '--selected');
						cell.id = 'mddtp-date__selected';
					}
					docfrag.appendChild(cell);
				}
				//empty the tr
				while (tr.lastChild) {
					tr.removeChild(tr.lastChild);
				}
				// set inner html accordingly
				tr.appendChild(docfrag);
				this._addCellClickEvent(tr);
			}
		}, {
			key: '_initYear',
			value: function _initYear() {
				var years = this._sDialog.years,
				    currentYear = this._sDialog.tDate.year(),
				    docfrag = document.createDocumentFragment(),
				    past = this._past.year(),
				    future = this._future.year();

				for (var year = past, li; year <= future; year++) {
					li = document.createElement('li');

					li.textContent = year;
					if (year === currentYear) {
						li.id = 'mddtp-date__currentYear';
						li.classList.add('mddtp-picker__li--current');
					}
					docfrag.appendChild(li);
				}
				//empty the years ul
				while (years.lastChild) {
					years.removeChild(years.lastChild);
				}
				// set inner html accordingly
				years.appendChild(docfrag);
				// attach event handler to the ul to get the benefit of event delegation
				this._changeYear(years);
			}
		}, {
			key: '_pointNeedle',
			value: function _pointNeedle(me) {
				var spoke = 60,
				    value = void 0,
				    circle = this._sDialog.circle,
				    fakeNeedle = this._sDialog.fakeNeedle,
				    circularHolder = this._sDialog.circularHolder,
				    selection = 'mddtp-picker__selection',
				    needle = me._sDialog.needle;

				// move the needle to correct position
				needle.className = '';
				needle.classList.add(selection);
				if (!mdDateTimePicker.dialog.view) {
					value = me._sDialog.sDate.format('m');

					// Need to desactivate for the autoClose mode as it mess things up.  If you have an idea, feel free to give it a shot !
					if (me._autoClose !== !0) {
						// move the fakeNeedle to correct position
						setTimeout(function () {
							var hOffset = circularHolder.getBoundingClientRect(),
							    cOffset = circle.getBoundingClientRect();

							fakeNeedle.setAttribute('style', 'left:' + (cOffset.left - hOffset.left) + 'px;top:' + (cOffset.top - hOffset.top) + 'px');
						}, 300);
					}
				} else {
					if (me._mode) {
						spoke = 24;
						value = parseInt(me._sDialog.sDate.format('H'), 10);
						// CHANGED exception for 24 => 0 issue #58
						if (value === 0) {
							value = 24;
						}
					} else {
						spoke = 12;
						value = me._sDialog.sDate.format('h');
					}
				}
				var rotationClass = me._calcRotation(spoke, parseInt(value, 10));
				if (rotationClass) {
					needle.classList.add(rotationClass);
				}
			}
		}, {
			key: '_switchToView',
			value: function _switchToView(el) {
				var me = this;
				// attach the view change button
				if (this._type == 'date') {
					el.onclick = function () {
						me._switchToDateView(el, me);
					};
				} else {
					if (this._inner24 === !0 && me._mode) {
						if (parseInt(me._sDialog.sDate.format('H'), 10) > 12) {
							me._sDialog.needle.classList.add('mddtp-picker__cell--rotate24');
						} else {
							me._sDialog.needle.classList.remove('mddtp-picker__cell--rotate24');
						}
					}

					el.onclick = function () {
						me._switchToTimeView(me);
					};
				}
			}
		}, {
			key: '_switchToTimeView',
			value: function _switchToTimeView(me) {
				var hourView = me._sDialog.hourView,
				    minuteView = me._sDialog.minuteView,
				    hour = me._sDialog.hour,
				    minute = me._sDialog.minute,
				    activeClass = 'mddtp-picker__color--active',
				    hidden = 'mddtp-picker__circularView--hidden',
				    selection = 'mddtp-picker__selection';

				// toggle view classes
				hourView.classList.toggle(hidden);
				minuteView.classList.toggle(hidden);
				hour.classList.toggle(activeClass);
				minute.classList.toggle(activeClass);
				// move the needle to correct position
				// toggle the view type
				mdDateTimePicker.dialog.view = !mdDateTimePicker.dialog.view;
				me._pointNeedle(me);
			}
		}, {
			key: '_switchToDateView',
			value: function _switchToDateView(el, me) {
				el.setAttribute('disabled', '');
				var viewHolder = me._sDialog.viewHolder,
				    years = me._sDialog.years,
				    title = me._sDialog.title,
				    subtitle = me._sDialog.subtitle,
				    currentYear = document.getElementById('mddtp-date__currentYear');

				if (mdDateTimePicker.dialog.view) {
					viewHolder.classList.add('zoomOut');
					years.classList.remove('mddtp-picker__years--invisible');
					years.classList.add('zoomIn');
					// scroll into the view
					currentYear.scrollIntoViewIfNeeded && currentYear.scrollIntoViewIfNeeded();
				} else {
					years.classList.add('zoomOut');
					viewHolder.classList.remove('zoomOut');
					viewHolder.classList.add('zoomIn');
					setTimeout(function () {
						years.classList.remove('zoomIn', 'zoomOut');
						years.classList.add('mddtp-picker__years--invisible');
						viewHolder.classList.remove('zoomIn');
					}, 300);
				}
				title.classList.toggle('mddtp-picker__color--active');
				subtitle.classList.toggle('mddtp-picker__color--active');
				mdDateTimePicker.dialog.view = !mdDateTimePicker.dialog.view;
				setTimeout(function () {
					el.removeAttribute('disabled');
				}, 300);
			}
		}, {
			key: '_addClockEvent',
			value: function _addClockEvent() {
				var me = this,
				    hourView = this._sDialog.hourView,
				    minuteView = this._sDialog.minuteView,
				    sClass = 'mddtp-picker__cell--selected';

				hourView.onclick = function (e) {
					var sHour = 'mddtp-hour__selected',
					    selectedHour = document.getElementById(sHour),
					    setHour = 0;

					if (e.target && e.target.nodeName == 'SPAN') {
						// clear the previously selected hour
						selectedHour.id = '';
						selectedHour.classList.remove(sClass);
						// select the new hour
						e.target.parentNode.classList.add(sClass);
						e.target.parentNode.id = sHour;
						// set the sDate according to 24 or 12 hour mode
						if (me._mode) {
							setHour = parseInt(e.target.textContent, 10);
						} else {
							if (me._sDialog.sDate.format('A') === 'AM') {
								setHour = e.target.textContent;
							} else {
								setHour = parseInt(e.target.textContent, 10) + 12;
							}
						}
						me._sDialog.sDate.hour(setHour);
						// set the display hour
						me._sDialog.hour.textContent = e.target.textContent;
						// switch the view
						me._pointNeedle(me);
						setTimeout(function () {
							me._switchToTimeView(me);
						}, 700);
					}
				};
				minuteView.onclick = function (e) {
					var sMinute = 'mddtp-minute__selected',
					    selectedMinute = document.getElementById(sMinute),
					    setMinute = 0;

					if (e.target && e.target.nodeName == 'SPAN') {
						// clear the previously selected hour
						if (selectedMinute) {
							selectedMinute.id = '';
							selectedMinute.classList.remove(sClass);
						}
						// select the new minute
						e.target.parentNode.classList.add(sClass);
						e.target.parentNode.id = sMinute;
						// set the sDate minute
						setMinute = e.target.textContent;
						me._sDialog.sDate.minute(setMinute);
						// set the display minute
						me._sDialog.minute.textContent = setMinute;
						me._pointNeedle(me);

						if (me._autoClose === !0) {
							me._sDialog.ok.onclick();
						}
					}
				};
			}
		}, {
			key: '_addCellClickEvent',
			value: function _addCellClickEvent(el) {
				var me = this;
				el.onclick = function (e) {
					if (e.target && e.target.nodeName == 'SPAN' && e.target.classList.contains('mddtp-picker__cell')) {
						var day = e.target.textContent,
						    currentDate = me._sDialog.tDate.date(day),
						    sId = 'mddtp-date__selected',
						    sClass = 'mddtp-picker__cell--selected',
						    selected = document.getElementById(sId),
						    subtitle = me._sDialog.subtitle,
						    titleDay = me._sDialog.titleDay,
						    titleMonth = me._sDialog.titleMonth;

						if (selected) {
							selected.classList.remove(sClass);
							selected.id = '';
						}
						e.target.classList.add(sClass);
						e.target.id = sId;

						// update temp date object with the date selected
						me._sDialog.sDate = currentDate.clone();

						me._fillText(subtitle, currentDate.year());
						me._fillText(titleDay, currentDate.format('ddd, '));
						me._fillText(titleMonth, currentDate.format('MMM D'));

						if (me._autoClose === !0) {
							me._sDialog.ok.onclick();
						}
					}
				};
			}
		}, {
			key: '_toMoveMonth',
			value: function _toMoveMonth() {
				var m = this._sDialog.tDate,
				    left = this._sDialog.left,
				    right = this._sDialog.right,
				    past = this._past,
				    future = this._future;

				left.removeAttribute('disabled');
				right.removeAttribute('disabled');
				left.classList.remove('mddtp-button--disabled');
				right.classList.remove('mddtp-button--disabled');
				if (m.isSame(past, 'month')) {
					left.setAttribute('disabled', '');
					left.classList.add('mddtp-button--disabled');
				}
				if (m.isSame(future, 'month')) {
					right.setAttribute('disabled', '');
					right.classList.add('mddtp-button--disabled');
				}
			}
		}, {
			key: '_changeMonth',
			value: function _changeMonth() {
				var me = this,
				    left = this._sDialog.left,
				    right = this._sDialog.right,
				    mLeftClass = 'mddtp-picker__view--left',
				    mRightClass = 'mddtp-picker__view--right',
				    pause = 'mddtp-picker__view--pause';

				left.onclick = function () {
					moveStep(mRightClass, me._sDialog.previous);
				};

				right.onclick = function () {
					moveStep(mLeftClass, me._sDialog.next);
				};

				function moveStep(aClass, to) {
					/**
     * [stepBack to know if the to step is going back or not]
     *
     * @type {Boolean}
     */
					var stepBack = !1,
					    next = me._sDialog.next,
					    current = me._sDialog.current,
					    previous = me._sDialog.previous;

					left.setAttribute('disabled', '');
					right.setAttribute('disabled', '');
					current.classList.add(aClass);
					previous.classList.add(aClass);
					next.classList.add(aClass);
					var clone = to.cloneNode(!0),
					    del = void 0;

					if (to === next) {
						del = previous;
						current.parentNode.appendChild(clone);
						next.id = current.id;
						current.id = previous.id;
						previous = current;
						current = next;
						next = clone;
					} else {
						stepBack = !0;
						del = next;
						previous.id = current.id;
						current.id = next.id;
						next = current;
						current = previous;
					}
					setTimeout(function () {
						if (to === previous) {
							current.parentNode.insertBefore(clone, current);
							previous = clone;
						}
						// update real values to match these values
						me._sDialog.next = next;
						me._sDialog.current = current;
						me._sDialog.previous = previous;
						current.classList.add(pause);
						next.classList.add(pause);
						previous.classList.add(pause);
						current.classList.remove(aClass);
						next.classList.remove(aClass);
						previous.classList.remove(aClass);
						del.parentNode.removeChild(del);
					}, 300);
					// REVIEW replace below code with requestAnimationFrame
					setTimeout(function () {
						current.classList.remove(pause);
						next.classList.remove(pause);
						previous.classList.remove(pause);
						if (stepBack) {
							me._sDialog.tDate = me._getMonth(me._sDialog.tDate, -1);
						} else {
							me._sDialog.tDate = me._getMonth(me._sDialog.tDate, 1);
						}
						me._initViewHolder();
					}, 350);
					setTimeout(function () {
						if (!left.classList.contains('mddtp-button--disabled')) {
							left.removeAttribute('disabled');
						}
						if (!right.classList.contains('mddtp-button--disabled')) {
							right.removeAttribute('disabled');
						}
					}, 400);
				}
			}
		}, {
			key: '_changeYear',
			value: function _changeYear(el) {
				var me = this;
				el.onclick = function (e) {
					if (e.target && e.target.nodeName == 'LI') {
						var selected = document.getElementById('mddtp-date__currentYear');
						// clear previous selected
						selected.id = '';
						selected.classList.remove('mddtp-picker__li--current');
						// add the properties to the newer one
						e.target.id = 'mddtp-date__currentYear';
						e.target.classList.add('mddtp-picker__li--current');
						// switch view
						me._switchToDateView(el, me);
						// set the tdate to it
						me._sDialog.tDate.year(parseInt(e.target.textContent, 10));
						// update the dialog
						me._initViewHolder();
					}
				};
			}
		}, {
			key: '_changeM',
			value: function _changeM() {
				var me = this,
				    AM = this._sDialog.AM,
				    PM = this._sDialog.PM;

				AM.onclick = function (e) {
					//let m = me._sDialog.sDate.format('A')
					// Change Locale Meridiem to AM/PM String
					var m = 'AM';
					if (me._sDialog.sDate._locale.isPM(me._sDialog.sDate.format('A'))) {
						m = 'PM';
					}
					if (m === 'PM') {
						me._sDialog.sDate.subtract(12, 'h');
						AM.classList.toggle('mddtp-picker__color--active');
						PM.classList.toggle('mddtp-picker__color--active');
					}
				};
				PM.onclick = function (e) {
					//let m = me._sDialog.sDate.format('A')
					// Change Locale Meridiem to AM/PM String
					var m = 'AM';
					if (me._sDialog.sDate._locale.isPM(me._sDialog.sDate.format('A'))) {
						m = 'PM';
					}
					if (m === 'AM') {
						me._sDialog.sDate.add(12, 'h');
						AM.classList.toggle('mddtp-picker__color--active');
						PM.classList.toggle('mddtp-picker__color--active');
					}
				};
			}
		}, {
			key: '_dragDial',
			value: function _dragDial() {
				var me = this,
				    needle = this._sDialog.needle,
				    circle = this._sDialog.circle,
				    fakeNeedle = this._sDialog.fakeNeedle,
				    circularHolder = this._sDialog.circularHolder,
				    minute = this._sDialog.minute,
				    quick = 'mddtp-picker__selection--quick',
				    selection = 'mddtp-picker__selection',
				    selected = 'mddtp-picker__cell--selected',
				    rotate = 'mddtp-picker__cell--rotate-',
				    hOffset = circularHolder.getBoundingClientRect(),
				    divides = void 0,
				    fakeNeedleDraggabilly = new _draggabilly2.default(fakeNeedle, {
					containment: !0
				});

				fakeNeedleDraggabilly.on('pointerDown', function (e) {
					//console.info ( 'pointerDown' , e );
					hOffset = circularHolder.getBoundingClientRect();
				});
				/**
     * netTrek
     * fixes for iOS - drag
     */
				fakeNeedleDraggabilly.on('pointerMove', function (e) {

					var clientX = e.clientX,
					    clientY = e.clientY;


					if (clientX === undefined) {

						if (e.pageX === undefined) {
							if (e.touches && e.touches.length > 0) {
								clientX = e.touches[0].clientX;
								clientY = e.touches[0].clientY;
							} else {
								console.error('coult not detect pageX, pageY');
							}
						} else {
							clientX = pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
							clientY = pageY - document.body.scrollTop - document.documentElement.scrollTop;
						}
					}
					//console.info ( 'Drag clientX' , clientX, clientY, e );

					var xPos = clientX - hOffset.left - hOffset.width / 2,
					    yPos = clientY - hOffset.top - hOffset.height / 2,
					    slope = Math.atan2(-yPos, xPos);

					needle.className = '';
					if (slope < 0) {
						slope += 2 * Math.PI;
					}
					slope *= 180 / Math.PI;
					slope = 360 - slope;
					if (slope > 270) {
						slope -= 360;
					}
					divides = parseInt(slope / 6);
					var same = Math.abs(6 * divides - slope),
					    upper = Math.abs(6 * (divides + 1) - slope);

					if (upper < same) {
						divides++;
					}
					divides += 15;
					needle.classList.add(selection);
					needle.classList.add(quick);
					needle.classList.add(rotate + divides * 2);
				});
				/**
     * netTrek
     * fixes for iOS - drag
     */
				var onDragEnd = function onDragEnd(e) {
					var minuteViewChildren = me._sDialog.minuteView.getElementsByTagName('div'),
					    sMinute = 'mddtp-minute__selected',
					    selectedMinute = document.getElementById(sMinute),
					    cOffset = circle.getBoundingClientRect();

					fakeNeedle.setAttribute('style', 'left:' + (cOffset.left - hOffset.left) + 'px;top:' + (cOffset.top - hOffset.top) + 'px');
					needle.classList.remove(quick);
					var select = divides;
					if (select === 1) {
						select = 60;
					}
					select = me._nearestDivisor(select, 5);
					// normalize 60 => 0
					if (divides === 60) {
						divides = 0;
					}
					// remove previously selected value
					if (selectedMinute) {
						selectedMinute.id = '';
						selectedMinute.classList.remove(selected);
					}
					// add the new selected
					if (select > 0) {
						select /= 5;
						select--;
						minuteViewChildren[select].id = sMinute;
						minuteViewChildren[select].classList.add(selected);
					}
					minute.textContent = me._numWithZero(divides);
					me._sDialog.sDate.minutes(divides);
				};

				fakeNeedleDraggabilly.on('pointerUp', onDragEnd);
				fakeNeedleDraggabilly.on('dragEnd', onDragEnd);
			}
		}, {
			key: '_attachEventHandlers',
			value: function _attachEventHandlers() {
				var me = this,
				    ok = this._sDialog.ok,
				    cancel = this._sDialog.cancel,
				    onCancel = new CustomEvent('onCancel'),
				    onOk = new CustomEvent('onOk');
				// create cutom events to dispatch

				cancel.onclick = function () {
					me.toggle();
					if (me._trigger) {
						me._trigger.dispatchEvent(onCancel);
					}
				};
				ok.onclick = function () {
					me._init = me._sDialog.sDate;
					me.toggle();
					if (me._trigger) {
						me._trigger.dispatchEvent(onOk);
					}
				};
			}
		}, {
			key: '_setButtonText',
			value: function _setButtonText() {
				this._sDialog.cancel.textContent = this._cancel;
				this._sDialog.ok.textContent = this._ok;
			}
		}, {
			key: '_getMonth',
			value: function _getMonth(moment, count) {
				var m = void 0;
				m = moment.clone();
				if (count > 0) {
					return m.add(Math.abs(count), 'M');
				} else {
					return m.subtract(Math.abs(count), 'M');
				}
			}
		}, {
			key: '_nearestDivisor',
			value: function _nearestDivisor(number, divided) {
				if (number % divided === 0) {
					return number;
				} else if ((number - 1) % divided === 0) {
					return number - 1;
				} else if ((number + 1) % divided === 0) {
					return number + 1;
				}
				return -1;
			}
		}, {
			key: '_numWithZero',
			value: function _numWithZero(n) {
				return n > 9 ? '' + n : '0' + n;
			}
		}, {
			key: '_fillText',
			value: function _fillText(el, text) {
				if (el.firstChild) {
					el.firstChild.nodeValue = text;
				} else {
					el.appendChild(document.createTextNode(text));
				}
			}
		}, {
			key: '_addId',
			value: function _addId(el, id) {
				el.id = 'mddtp-' + this._type + '__' + id;
			}
		}, {
			key: '_addClass',
			value: function _addClass(el, aClass, more) {
				el.classList.add('mddtp-picker__' + aClass);
				var i = 0;
				if (more) {
					i = more.length;
					more.reverse();
				}
				while (i--) {
					el.classList.add(more[i]);
				}
			}
		}, {
			key: '_addView',
			value: function _addView(view) {
				var month = document.createElement('div'),
				    grid = document.createElement('div'),
				    th = document.createElement('div'),
				    tr = document.createElement('div'),
				    weekDays = _moment2.default.weekdaysMin(!0).reverse(),
				    week = 7;
				/**
    * @netTrek - weekday dependented from moment.locale
    */

				while (week--) {
					var span = document.createElement('span');
					span.textContent = weekDays[week];
					th.appendChild(span);
				}
				// add properties to them
				this._addClass(month, 'month');
				this._addClass(grid, 'grid');
				this._addClass(th, 'th');
				this._addClass(tr, 'tr');
				// add them to the view
				view.appendChild(month);
				view.appendChild(grid);
				grid.appendChild(th);
				grid.appendChild(tr);
			}
		}, {
			key: '_calcRotation',
			value: function _calcRotation(spoke, value) {
				// set clocks top and right side value
				if (spoke === 12) {
					value *= 10;
				} else if (spoke === 24) {
					value *= 5;
				} else {
					value *= 2;
				}
				// special case for 00 => 60
				if (spoke === 60 && value === 0) {
					value = 120;
				}
				return 'mddtp-picker__cell--rotate-' + value;
			}
		}, {
			key: 'time',
			get: function get() {
				return this._init;
			},
			set: function set(m) {
				if (m) {
					this._init = m;
				}
			}
		}, {
			key: 'trigger',
			get: function get() {
				return this._trigger;
			},
			set: function set(el) {
				if (el) {
					this._trigger = el;
				}
			}
		}], [{
			key: 'dialog',
			get: function get() {
				return mdDateTimePicker._dialog;
			},
			set: function set(value) {
				mdDateTimePicker.dialog = value;
			}
		}]);

		return mdDateTimePicker;
	}();

	mdDateTimePicker._dialog = {
		view: !0,
		state: !1
	};

	exports.default = mdDateTimePicker;
});

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Draggabilly v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(767),
        __webpack_require__(768)
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( getSize, Unidragger ) {
        return factory( window, getSize, Unidragger );
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size'),
      require('unidragger')
    );
  } else {
    // browser global
    window.Draggabilly = factory(
      window,
      window.getSize,
      window.Unidragger
    );
  }

}( window, function factory( window, getSize, Unidragger ) {

'use strict';

// -------------------------- helpers & variables -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

function noop() {}

var jQuery = window.jQuery;

// --------------------------  -------------------------- //

function Draggabilly( element, options ) {
  // querySelector if string
  this.element = typeof element == 'string' ?
    document.querySelector( element ) : element;

  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = extend( {}, this.constructor.defaults );
  this.option( options );

  this._create();
}

// inherit Unidragger methods
var proto = Draggabilly.prototype = Object.create( Unidragger.prototype );

Draggabilly.defaults = {
};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  extend( this.options, opts );
};

// css position values that don't need to be set
var positionValues = {
  relative: true,
  absolute: true,
  fixed: true
};

proto._create = function() {
  // properties
  this.position = {};
  this._getPosition();

  this.startPoint = { x: 0, y: 0 };
  this.dragPoint = { x: 0, y: 0 };

  this.startPosition = extend( {}, this.position );

  // set relative positioning
  var style = getComputedStyle( this.element );
  if ( !positionValues[ style.position ] ) {
    this.element.style.position = 'relative';
  }

  // events, bridge jQuery events from vanilla
  this.on( 'pointerDown', this.onPointerDown );
  this.on( 'pointerMove', this.onPointerMove );
  this.on( 'pointerUp', this.onPointerUp );

  this.enable();
  this.setHandles();
};

/**
 * set this.handles and bind start events to 'em
 */
proto.setHandles = function() {
  this.handles = this.options.handle ?
    this.element.querySelectorAll( this.options.handle ) : [ this.element ];

  this.bindHandles();
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = [ event ].concat( args );
  this.emitEvent( type, emitArgs );
  this.dispatchJQueryEvent( type, event, args );
};

proto.dispatchJQueryEvent = function( type, event, args ) {
  var jQuery = window.jQuery;
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // create jQuery event
  var $event = jQuery.Event( event );
  $event.type = type;
  this.$element.trigger( $event, args );
};

// -------------------------- position -------------------------- //

// get x/y position from style
proto._getPosition = function() {
  var style = getComputedStyle( this.element );
  var x = this._getPositionCoord( style.left, 'width' );
  var y = this._getPositionCoord( style.top, 'height' );
  // clean up 'auto' or other non-integer values
  this.position.x = isNaN( x ) ? 0 : x;
  this.position.y = isNaN( y ) ? 0 : y;

  this._addTransformPosition( style );
};

proto._getPositionCoord = function( styleSide, measure ) {
  if ( styleSide.indexOf('%') != -1 ) {
    // convert percent into pixel for Safari, #75
    var parentSize = getSize( this.element.parentNode );
    // prevent not-in-DOM element throwing bug, #131
    return !parentSize ? 0 :
      ( parseFloat( styleSide ) / 100 ) * parentSize[ measure ];
  }
  return parseInt( styleSide, 10 );
};

// add transform: translate( x, y ) to position
proto._addTransformPosition = function( style ) {
  var transform = style.transform;
  // bail out if value is 'none'
  if ( transform.indexOf('matrix') !== 0 ) {
    return;
  }
  // split matrix(1, 0, 0, 1, x, y)
  var matrixValues = transform.split(',');
  // translate X value is in 12th or 4th position
  var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
  var translateX = parseInt( matrixValues[ xIndex ], 10 );
  // translate Y value is in 13th or 5th position
  var translateY = parseInt( matrixValues[ xIndex + 1 ], 10 );
  this.position.x += translateX;
  this.position.y += translateY;
};

// -------------------------- events -------------------------- //

proto.onPointerDown = function( event, pointer ) {
  this.element.classList.add('is-pointer-down');
  this.dispatchJQueryEvent( 'pointerDown', event, [ pointer ] );
};

/**
 * drag start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.dragStart = function( event, pointer ) {
  if ( !this.isEnabled ) {
    return;
  }
  this._getPosition();
  this.measureContainment();
  // position _when_ drag began
  this.startPosition.x = this.position.x;
  this.startPosition.y = this.position.y;
  // reset left/top style
  this.setLeftTop();

  this.dragPoint.x = 0;
  this.dragPoint.y = 0;

  this.element.classList.add('is-dragging');
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
  // start animation
  this.animate();
};

proto.measureContainment = function() {
  var container = this.getContainer();
  if ( !container ) {
    return;
  }

  var elemSize = getSize( this.element );
  var containerSize = getSize( container );
  var elemRect = this.element.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();

  var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
  var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

  var position = this.relativeStartPosition = {
    x: elemRect.left - ( containerRect.left + containerSize.borderLeftWidth ),
    y: elemRect.top - ( containerRect.top + containerSize.borderTopWidth )
  };

  this.containSize = {
    width: ( containerSize.width - borderSizeX ) - position.x - elemSize.width,
    height: ( containerSize.height - borderSizeY ) - position.y - elemSize.height
  };
};

proto.getContainer = function() {
  var containment = this.options.containment;
  if ( !containment ) {
    return;
  }
  var isElement = containment instanceof HTMLElement;
  // use as element
  if ( isElement ) {
    return containment;
  }
  // querySelector if string
  if ( typeof containment == 'string' ) {
    return document.querySelector( containment );
  }
  // fallback to parent element
  return this.element.parentNode;
};

// ----- move event ----- //

proto.onPointerMove = function( event, pointer, moveVector ) {
  this.dispatchJQueryEvent( 'pointerMove', event, [ pointer, moveVector ] );
};

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isEnabled ) {
    return;
  }
  var dragX = moveVector.x;
  var dragY = moveVector.y;

  var grid = this.options.grid;
  var gridX = grid && grid[0];
  var gridY = grid && grid[1];

  dragX = applyGrid( dragX, gridX );
  dragY = applyGrid( dragY, gridY );

  dragX = this.containDrag( 'x', dragX, gridX );
  dragY = this.containDrag( 'y', dragY, gridY );

  // constrain to axis
  dragX = this.options.axis == 'y' ? 0 : dragX;
  dragY = this.options.axis == 'x' ? 0 : dragY;

  this.position.x = this.startPosition.x + dragX;
  this.position.y = this.startPosition.y + dragY;
  // set dragPoint properties
  this.dragPoint.x = dragX;
  this.dragPoint.y = dragY;

  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

function applyGrid( value, grid, method ) {
  method = method || 'round';
  return grid ? Math[ method ]( value / grid ) * grid : value;
}

proto.containDrag = function( axis, drag, grid ) {
  if ( !this.options.containment ) {
    return drag;
  }
  var measure = axis == 'x' ? 'width' : 'height';

  var rel = this.relativeStartPosition[ axis ];
  var min = applyGrid( -rel, grid, 'ceil' );
  var max = this.containSize[ measure ];
  max = applyGrid( max, grid, 'floor' );
  return  Math.max( min, Math.min( max, drag ) );
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.onPointerUp = function( event, pointer ) {
  this.element.classList.remove('is-pointer-down');
  this.dispatchJQueryEvent( 'pointerUp', event, [ pointer ] );
};

/**
 * drag end
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.dragEnd = function( event, pointer ) {
  if ( !this.isEnabled ) {
    return;
  }
  // use top left position when complete
  this.element.style.transform = '';
  this.setLeftTop();
  this.element.classList.remove('is-dragging');
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

// -------------------------- animation -------------------------- //

proto.animate = function() {
  // only render and animate if dragging
  if ( !this.isDragging ) {
    return;
  }

  this.positionDrag();

  var _this = this;
  requestAnimationFrame( function animateFrame() {
    _this.animate();
  });

};

// left/top positioning
proto.setLeftTop = function() {
  this.element.style.left = this.position.x + 'px';
  this.element.style.top  = this.position.y + 'px';
};

proto.positionDrag = function() {
  this.element.style.transform = 'translate3d( ' + this.dragPoint.x +
    'px, ' + this.dragPoint.y + 'px, 0)';
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  this.dispatchEvent( 'staticClick', event, [ pointer ] );
};

// ----- methods ----- //

/**
 * @param {Number} x
 * @param {Number} y
 */
proto.setPosition = function( x, y ) {
  this.position.x = x;
  this.position.y = y;
  this.setLeftTop();
};

proto.enable = function() {
  this.isEnabled = true;
};

proto.disable = function() {
  this.isEnabled = false;
  if ( this.isDragging ) {
    this.dragEnd();
  }
};

proto.destroy = function() {
  this.disable();
  // reset styles
  this.element.style.transform = '';
  this.element.style.left = '';
  this.element.style.top = '';
  this.element.style.position = '';
  // unbind handles
  this.unbindHandles();
  // remove jQuery data
  if ( this.$element ) {
    this.$element.removeData('draggabilly');
  }
};

// ----- jQuery bridget ----- //

// required for jQuery bridget
proto._init = noop;

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'draggabilly', Draggabilly );
}

// -----  ----- //

return Draggabilly;

}));


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(769)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(770)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__momentdate_momentdate__["a" /* MomentdatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__tablefilter_tablefilter__["a" /* TablefilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentdatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//TOny MAnuel


/**
 * Generated class for the MomentdatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentdatePipe = /** @class */ (function () {
    function MomentdatePipe() {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
    }
    MomentdatePipe.prototype.transform = function (date) {
        var expiryDate = __WEBPACK_IMPORTED_MODULE_1_moment__(date);
        return expiryDate.diff(this.currentDate, 'days');
    };
    MomentdatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'momentdate',
        })
    ], MomentdatePipe);
    return MomentdatePipe;
}());

//# sourceMappingURL=momentdate.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
//Tony Manuel
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TablefilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TablefilterPipe = /** @class */ (function () {
    function TablefilterPipe() {
    }
    TablefilterPipe.prototype.transform = function (items, field, value) {
        console.log(value);
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) {
            return singleItem[field].toLowerCase().includes(value.toLowerCase());
        });
    };
    TablefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tableFilter',
        })
    ], TablefilterPipe);
    return TablefilterPipe;
}());

//# sourceMappingURL=tablefilter.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_form_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_datepicker__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md_date_time_picker_dist_js_mdDateTimePicker_js__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_md_date_time_picker_dist_js_mdDateTimePicker_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_md_date_time_picker_dist_js_mdDateTimePicker_js__);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Tony Manuel











/**
 * Generated class for the SystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SystemsPage = /** @class */ (function () {
    function SystemsPage(renderer, data, loadingCtrl, navCtrl, modalCtrl, customDatePicker, alertCtrl, barcode, datePicker, firebase) {
        this.renderer = renderer;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.customDatePicker = customDatePicker;
        this.alertCtrl = alertCtrl;
        this.barcode = barcode;
        this.datePicker = datePicker;
        this.firebase = firebase;
        this.Save = "Save";
        this.replace = false;
        this.systemsForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            $key: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](null),
            purchaseDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            systemId: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(5)]),
            keyboard: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            mouse: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            processor: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            memory: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            hdd: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)]),
            avExpiry: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(4)]),
            systemUser: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](''),
        });
        this.systemArray = [];
        this.employeeList = [];
        this.systems = "newSystem";
        this.getSystemList();
        this.getUsers();
    }
    SystemsPage.prototype.tony = function () {
        this.navCtrl.push('MaintenancehistoryPage', this.systemsForm.controls['$key'].value);
    };
    SystemsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.data.currentValue.subscribe(function (item) { return _this.formFieldVal = item; });
    };
    SystemsPage.prototype.ionViewWillEnter = function () {
        if (this.formField != null && this.formFieldVal != null) {
            this.systemsForm.controls[this.formField].setValue(this.formFieldVal);
            this.data.changeValue(null);
        }
    };
    SystemsPage.prototype.getSystemList = function () {
        this.systemsList = this.firebase.list('systems');
        return this.systemsList.snapshotChanges();
    };
    SystemsPage.prototype.getSystems = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Loading',
            dismissOnPageChange: true
        });
        this.loader.present();
        this.systemsForm.reset();
        this.getSystemList().subscribe(function (list) {
            _this.systemArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
        this.loader.dismiss();
        this.replace = false;
    };
    SystemsPage.prototype.loadForm = function (systems) {
        this.replace = true;
        this.systems = "newSystem";
        this.Save = "Update";
        this.systemsForm.setValue(systems);
    };
    SystemsPage.prototype.updateSystems = function (systems) {
        var _this = this;
        this.systemsList.update(systems.$key, {
            purchaseDate: systems.purchaseDate,
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "System updated succesfuly ",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SystemsPage.prototype.insertSystems = function (systems) {
        var _this = this;
        this.systemsList.push({
            purchaseDate: systems.purchaseDate,
            systemId: systems.systemId,
            keyboard: systems.keyboard,
            mouse: systems.mouse,
            processor: systems.processor,
            memory: systems.memory,
            hdd: systems.hdd,
            avExpiry: systems.avExpiry,
            systemUser: systems.systemUser,
        }).then(function () {
            var alert = _this.alertCtrl.create({
                title: "Success",
                subTitle: "System added succesfuly ",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SystemsPage.prototype.onSubmit = function () {
        if (this.systemsForm.controls.$key.value == null) {
            this.insertSystems(this.systemsForm.value);
            this.systemsForm.reset();
        }
        else {
            this.updateSystems(this.systemsForm.value);
            this.systemsForm.reset();
        }
    };
    SystemsPage.prototype.scanBarCode = function (type) {
        var _this = this;
        this.barcode.scan().then(function (barcodeData) {
            if (type == "system") {
                _this.systemsForm.controls['systemId'].setValue(barcodeData.text);
            }
            else if (type == "keyboard") {
                _this.systemsForm.controls['keyboard'].setValue(barcodeData.text);
            }
            else if (type == "mouse") {
                _this.systemsForm.controls['mouse'].setValue(barcodeData.text);
            }
            else if (type == "db") {
                _this.findSystem(barcodeData.text);
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    SystemsPage.prototype.dispdate = function (type) {
        var _this = this;
        if (type === "purchaseDate") {
            var datePicker_1 = new __WEBPACK_IMPORTED_MODULE_9_md_date_time_picker_dist_js_mdDateTimePicker_js__["default"]({
                type: 'date',
                trigger: this.purchaseDateElem.nativeElement
            });
            datePicker_1.toggle();
            this.renderer.listen(this.purchaseDateElem.nativeElement, 'onOk', function () {
                _this.systemsForm.controls['purchaseDate'].setValue(__WEBPACK_IMPORTED_MODULE_8_moment__(datePicker_1.time).format('D-MMM-YYYY'));
            });
        }
        else if (type == 'antivirus') {
            var datePicker_2 = new __WEBPACK_IMPORTED_MODULE_9_md_date_time_picker_dist_js_mdDateTimePicker_js__["default"]({
                type: 'date',
                past: __WEBPACK_IMPORTED_MODULE_8_moment__(),
                future: __WEBPACK_IMPORTED_MODULE_8_moment__().add(3, 'years'),
                trigger: this.antiVirusElem.nativeElement
            });
            datePicker_2.toggle();
            this.renderer.listen(this.antiVirusElem.nativeElement, 'onOk', function () {
                _this.systemsForm.controls['avExpiry'].setValue(__WEBPACK_IMPORTED_MODULE_8_moment__(datePicker_2.time).format('D-MMM-YYYY'));
            });
        }
    };
    SystemsPage.prototype.findSystem = function (systemId) {
        var result = [];
        this.firebase.database.ref("systems").orderByChild('systemId').equalTo(systemId).on("value", function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                result = __assign({ $key: childSnapshot.key }, childSnapshot.val());
                return false;
            });
        });
        this.loadForm(result);
    }; //end of function
    SystemsPage.prototype.getUsers = function () {
        var _this = this;
        this.firebase.list("users").snapshotChanges().subscribe(function (list) {
            _this.employeeList = list.map(function (item) {
                return {
                    '$key': item.key,
                    'fName': item.payload.child('fname').val(),
                    'lName': item.payload.child('lname').val()
                };
            });
        });
    };
    SystemsPage.prototype.formReset = function () {
        this.systemsForm.reset();
        this.replace = false;
    };
    SystemsPage.prototype.modify = function (fieldName) {
        this.formField = fieldName;
        var fieldVal = this.systemsForm.controls[fieldName].value;
        var $key = this.systemsForm.controls['$key'].value;
        var $userKey = this.systemsForm.controls['systemUser'].value;
        var empObj = this.employeeList.find(function (key) { return key.$key == $userKey; });
        var empName = empObj.fName + " " + empObj.lName;
        var params = [
            { 'fieldName': fieldName, 'fieldVal': fieldVal, '$key': $key, 'userKey': $userKey, 'userName': empName }
        ];
        this.navCtrl.push('ModifysystemsPage', params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('purchaseDateElem', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SystemsPage.prototype, "purchaseDateElem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('antiVirusElem', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SystemsPage.prototype, "antiVirusElem", void 0);
    SystemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-systems',template:/*ion-inline-start:"F:\ionic-app\src\pages\systems\systems.html"*/'<!--Tony Manuel-->\n\n<ion-header no-border>\n\n  <navbar pageTitle="SYSTEMS"></navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content>\n\n   \n\n\n\n      <ion-segment [(ngModel)]="systems" color="white" >\n\n         <ion-segment-button value="newSystem">\n\n            Add System\n\n         </ion-segment-button>\n\n         <ion-segment-button value="allSystems" (click)="getSystems()">\n\n           All Systems\n\n         </ion-segment-button>\n\n      </ion-segment>\n\n  <div [ngSwitch]="systems">\n\n    <div *ngSwitchCase="\'newSystem\'">\n\n      <form [formGroup]="systemsForm" (ngSubmit)="onSubmit()">\n\n      <ion-item no-lines>\n\n          <ion-label class="title">System Information</ion-label>\n\n          <button *ngIf="replace" ion-button item-right small color="blue" type="button" (click)="tony()" >Maintenance History</button>\n\n        </ion-item>\n\n          <ion-item>\n\n            <ion-label stacked>Purchase Date</ion-label>\n\n            <ion-input [disabled]="replace" type="text" readonly formControlName="purchaseDate" (tap)="dispdate(\'purchaseDate\')" #purchaseDateElem ></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item  no-lines *ngIf="(systemsForm.get(\'purchaseDate\').hasError(\'minlength\') || systemsForm.get(\'purchaseDate\').hasError(\'required\') ) && systemsForm.get(\'purchaseDate\').touched">\n\n            <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'purchaseDate\').hasError(\'required\')  || systemsForm.get(\'purchaseDate\').hasError(\'minlength\')) && systemsForm.get(\'purchaseDate\').touched" >\n\n              Purchase date is required\n\n            </ion-label>\n\n          </ion-item>\n\n\n\n          \n\n         \n\n   \n\n\n\n            <ion-item col-12>\n\n              <ion-input hidden formControlName="$key"></ion-input>\n\n             \n\n              <ion-label stacked>System Id</ion-label>\n\n              <ion-input type="text" [disabled]="replace" formControlName="systemId"></ion-input>\n\n             \n\n                <button *ngIf="!replace" ion-button type="button" color="blue" (click)="scanBarCode(\'system\')" small item-right>\n\n                  <ion-icon name="barcode"> </ion-icon>\n\n                </button>\n\n               \n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'systemId\').hasError(\'minlength\') || systemsForm.get(\'systemId\').hasError(\'required\') ) && systemsForm.get(\'systemId\').touched">\n\n\n\n              <ion-label stacked  color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'required\') && systemsForm.get(\'systemId\').touched">\n\n              SystemId is required\n\n              </ion-label>\n\n              <ion-label stacked color="danger" *ngIf="systemsForm.get(\'systemId\').hasError(\'minlength\') && systemsForm.get(\'systemId\').touched">\n\n              Minimum of 5 characters\n\n              </ion-label>\n\n              </ion-item>\n\n       \n\n             \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Keyboard</ion-label>\n\n                  <ion-input type="text" [readonly]="replace" formControlName="keyboard" ></ion-input>\n\n                 \n\n                  <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'keyboard\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n                  \n\n                  \n\n                  <button *ngIf="!replace"  ion-button small type="button" (click)="scanBarCode(\'keyboard\')" color="blue" item-right>\n\n                      <ion-icon name="barcode"> </ion-icon>\n\n                    </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'keyboard\').hasError(\'minlength\') || systemsForm.get(\'keyboard\').hasError(\'required\') ) && systemsForm.get(\'keyboard\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'keyboard\').hasError(\'required\')  || systemsForm.get(\'keyboard\').hasError(\'minlength\')) && systemsForm.get(\'keyboard\').touched" >\n\n                      Keyboard Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n           \n\n            \n\n                <ion-item col-12>\n\n                  <ion-label stacked>Mouse</ion-label>\n\n                  <ion-input type="text" [disabled]="replace" formControlName="mouse"></ion-input>\n\n                  <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'mouse\')">\n\n                      <ion-icon  small name="create" ></ion-icon>\n\n                    </button>\n\n                    <button *ngIf="!replace" ion-button small type="button" (click)="scanBarCode(\'mouse\')"  color="blue" item-right>\n\n                        <ion-icon name="barcode"> </ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                  <ion-item  no-lines *ngIf="(systemsForm.get(\'mouse\').hasError(\'minlength\') || systemsForm.get(\'mouse\').hasError(\'required\') ) && systemsForm.get(\'mouse\').touched">\n\n                    <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'mouse\').hasError(\'required\')  || systemsForm.get(\'mouse\').hasError(\'minlength\')) && systemsForm.get(\'mouse\').touched" >\n\n                      Mouse Details is Required\n\n                    </ion-label>\n\n                  </ion-item>\n\n               \n\n\n\n              <ion-item col-12>\n\n                <ion-label stacked>Processor</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="processor" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'processor\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              <ion-item  no-lines *ngIf="(systemsForm.get(\'processor\').hasError(\'minlength\') || systemsForm.get(\'processor\').hasError(\'required\') ) && systemsForm.get(\'processor\').touched">\n\n                <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'processor\').hasError(\'required\')  || systemsForm.get(\'processor\').hasError(\'minlength\')) && systemsForm.get(\'processor\').touched" >\n\n                  Processor Details is Required\n\n                </ion-label>\n\n              </ion-item>\n\n             <ion-row  >\n\n              <ion-item  col-6>\n\n                <ion-label stacked>Primary Memory</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="memory" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'memory\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              \n\n\n\n              <ion-item col-6>\n\n                <ion-label stacked>Hard Disk</ion-label>\n\n                <ion-input type="text" [disabled]="replace" formControlName="hdd" ></ion-input>\n\n                <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'hdd\')">\n\n                    <ion-icon  small name="create" ></ion-icon>\n\n                  </button>\n\n              </ion-item>\n\n              \n\n            </ion-row>  \n\n            <ion-row>\n\n              <ion-col col-6>\n\n            <ion-item no-lines *ngIf="(systemsForm.get(\'memory\').hasError(\'minlength\') || systemsForm.get(\'memory\').hasError(\'required\') ) && systemsForm.get(\'memory\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'memory\').hasError(\'required\')  || systemsForm.get(\'memory\').hasError(\'minlength\')) && systemsForm.get(\'memory\').touched" >\n\n                Memory is Required\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'hdd\').hasError(\'minlength\') || systemsForm.get(\'hdd\').hasError(\'required\') ) && systemsForm.get(\'hdd\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'hdd\').hasError(\'required\')  || systemsForm.get(\'hdd\').hasError(\'minlength\')) && systemsForm.get(\'hdd\').touched" >\n\n                HDD Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          </ion-row>\n\n        \n\n            <ion-item col-12>\n\n              <ion-label stacked>Antivirus Expiry</ion-label>\n\n              <ion-input type="text" [disabled]="replace" readonly formControlName="avExpiry" (tap)="dispdate(\'antivirus\')" #antiVirusElem ></ion-input>\n\n              <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'avExpiry\')">\n\n                  <ion-icon  small name="create" ></ion-icon>\n\n                </button>\n\n            </ion-item>\n\n            <ion-item  no-lines *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'minlength\') || systemsForm.get(\'avExpiry\').hasError(\'required\') ) && systemsForm.get(\'avExpiry\').touched">\n\n              <ion-label stacked  color="danger" *ngIf="(systemsForm.get(\'avExpiry\').hasError(\'required\')  || systemsForm.get(\'avExpiry\').hasError(\'minlength\')) && systemsForm.get(\'avExpiry\').touched" >\n\n                Antivirus Details is Required\n\n              </ion-label>\n\n            </ion-item>\n\n\n\n            <ion-item col-12>\n\n              <ion-label stacked>User</ion-label>\n\n              <ion-select [disabled]="replace" formControlName="systemUser">\n\n                <ion-option *ngFor="let emp of employeeList" [value]="emp.$key">{{emp.fName}} {{emp.lName}}</ion-option>\n\n              </ion-select>\n\n              <button ion-button item-right color="blue" type="button" *ngIf="replace" (click)="modify(\'systemUser\')">\n\n                  <ion-icon  small name="create" ></ion-icon>\n\n                </button>\n\n\n\n            </ion-item>\n\n\n\n\n\n            \n\n          \n\n\n\n              <ion-row>\n\n                <ion-col col-6 [hidden]="replace">\n\n                <button ion-button type="submit"  [disabled]="systemsForm.invalid" icon-end full color=blue   >\n\n                  Save\n\n                </button>\n\n              </ion-col>\n\n              <ion-col (col-6)="!replace" (col-12)="replace">\n\n                  <button ion-button type="button" (click)=formReset()  icon-end full color=blue   >\n\n                    Cancel\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row> \n\n             \n\n     \n\n    </form>\n\n\n\n    \n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'allSystems\'">\n\n      \n\n       <ion-row>\n\n          \n\n          <ion-item col-10  no-lines >\n\n              <ion-searchbar  placeholder="Search User"  [showCancelButton]="shouldShowCancel"  [(ngModel)]="searchString" ><ion-icon name="barcode" item-right> </ion-icon></ion-searchbar>\n\n          </ion-item>\n\n          <ion-item col-2>\n\n              <ion-icon  type="button" name="barcode" (click)="scanBarCode(\'db\')" color="blue"> </ion-icon>\n\n           </ion-item>\n\n        </ion-row>\n\n       \n\n      \n\n      <ion-item>\n\n        <ion-row class="table-title">\n\n          <ion-col col-4 >System Id</ion-col>\n\n           <ion-col col-3 >RAM</ion-col>\n\n          <ion-col col-3 >HDD</ion-col>\n\n          <ion-col col-2 >Antivirus</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item *ngFor=\'let system of systemArray | tableFilter : "systemId" : searchString; let i = index\'>\n\n        <ion-row class="col-text table-bottom-border" (click)="loadForm(system)" >\n\n            <ion-col col-4>{{system.systemId}}</ion-col><ion-col col-3>{{system.memory}}</ion-col><ion-col col-3>{{system.hdd}}</ion-col><ion-col col-2>{{system.avExpiry | momentdate}} Days</ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      \n\n    </div>\n\n\n\n\n\n  </div>\n\n    \n\n  </ion-content>\n\n  \n\n '/*ion-inline-end:"F:\ionic-app\src\pages\systems\systems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__providers_form_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_7__models_datepicker__["a" /* CustomDatePicker */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SystemsPage);
    return SystemsPage;
}()); //end of class

//# sourceMappingURL=systems.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
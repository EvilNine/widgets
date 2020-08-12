/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function(){
	
	class Widget {
		constructor(options) {
			this.frozenPrice = options.frozenPrice;
			this.lastorder = options.lastorder;
			this.inStock = options.inStock;
			this.onlineVisitors = options.onlineVisitors;
			this.todayVisitors = options.todayVisitors;
			this.buyVisitors = options.buyVisitors;
			this.timeCounter = options.timeCounter;

			this.startCount = options.config.startCount;
			this.productSex = options.config.productSex;
			this.itemCountable = options.config.itemCountable;
			this.minCount = options.config.minCount;
			this.maxSaleCount = options.config.maxSaleCount;
			this.maxTimeToBuy = options.config.maxTimeToBuy;
			this.minTimeToBuy = options.config.minTimeToBuy;
			this.timerDeadline = options.config.timerDeadline;
			
			this.visitorsDelay = options.config.visitorsDelay;
			this.minVisitors = options.config.minVisitors;
			this.maxVistors = options.config.maxVistors;
			this.totalVisitor = options.config.totalVisitor;

			this.delay = 100;
			this.male = options.data.namesM;
			this.female = options.data.namesF;
			this.cities = options.data.cities;
			this.textForBuy = options.data.textForBuy;
			
			
			
			this.dataFromStorage();
			this.count();
			this.init();

			
		}

		init(){
			if( this.frozenPrice ) {
				this.frozenPriceWidget();
			}
			if( this.lastorder ) {
				this.lastOrderWidget();
			}
			if( this.onlineVisitors ) {
				this.onlineVisitorsWidget();
			}
			if( this.todayVisitors ) {
				this.totalVisitorsWidget();
			}
			if( this.buyVisitors ) {
				this.buyVisitorsWidget();
			}
			if( this.inStock ) {
				this.inStockWidget();
			}
			if( this.timeCounter ) {
				this.timeCounterWidget();
			}
		}

		onlineVisitorsWidget(){
			this.visitorContainer();
			const element = document.createElement('div');
			const parent = document.querySelector('.widget-visitors');
			let count ='';
			element.classList.add('widget-visitors__item', 'widget-visitors__online');
			element.innerHTML = `
				<div class="widget-title">Сейчас на сайте</div>
				<div class="widget-count">${this.minVisitors}</div>
			`;
			parent.append(element);
			
			const onlineVisitorsInterval = setInterval(() => {
				const count = this.random(this.minVisitors,this.maxVistors);
				element.querySelector('.widget-count').textContent = count;
			}, this.visitorsDelay);
			
		}

		random(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		totalVisitorsWidget(){
			this.visitorContainer();
			let count;
			if( window.localStorage.getItem('totalVisitors') ) {
				count = window.localStorage.getItem('totalVisitors');
			} else {
				count = this.totalVisitor;
				window.localStorage.setItem('totalVisitors', count);
			}
			console.log(count);

			const element = document.createElement('div');
			const parent = document.querySelector('.widget-visitors');
			element.classList.add('widget-visitors__item', 'widget-visitors__total');
			element.innerHTML = `
				<div class="widget-title">Посетителей сегодня</div>
				<div class="widget-count"></div>
			`;
			parent.append(element);

			const totalVisitorsInterval = setInterval(() => {
				element.querySelector('.widget-count').textContent = count;
			}, 1000);
		}

		buyVisitorsWidget(){
			this.visitorContainer();
			const element = document.createElement('div');
			const parent = document.querySelector('.widget-visitors');
			element.classList.add('widget-visitors__item', 'widget-visitors__today');
			element.innerHTML = `
				<div class="widget-title">Купили сегодня</div>
				<div class="widget-count">3959</div>
			`;
			parent.append(element);
		}

		visitorContainer(){
			if (!document.querySelector('.widget-visitors')) {
				const widgetContainer = document.createElement('div');
				widgetContainer.classList.add('widget-visitors');
				const body = document.querySelector('body');
				body.append(widgetContainer);
				
			}
		}

		inStockWidget(){
			const element = document.querySelectorAll('.widget-itemcounter');
			element.forEach( (item)=>{
				let countSelector = item.querySelector('.widget-itemcounter__num');
				const inStockInterval = setInterval(() => {
					let count = window.localStorage.getItem('countOfProducts')
					countSelector.textContent = count;
					if(count <= this.minCount){	
						clearInterval(inStockInterval);
					}
				}, this.delay);
			});
		}

		frozenPriceWidget(){
			const element = document.createElement('div');
			element.classList.add('widget-frozen', 'ice1', 'slideRight');
			element.innerHTML = `
				<div class="widget-frozen__body">
					<div class="widget-frozen__close"><i class="mdi mdi-close">x</i></div>
					<div class="widget-frozen__title">
						<div class="_title">Мы заморозили цену</div>
						<div class="_descr">1$ = <span>45руб</span></div>
					</div>
					<div class="widget-frozen__content">
						Осталось <span class="widget-itemcounter__num h5 text-primary font-weight-bold"></span> штук <br>по старому курсу
					</div>
				</div>
			`;
			element.classList.add('show');
			this.showPriceWidget(element);
			
			const frozenInterval = setInterval(() => {
				let count = window.localStorage.getItem('countOfProducts')
				element.querySelector('.widget-itemcounter__num').textContent = count;
				if(count <= this.minCount){	
					clearInterval(frozenInterval);
				}
			}, this.delay);

		}
		showPriceWidget(selector){
			const body = document.querySelector('body');
			body.append(selector);
			this.closeFrozenPrice(selector);
		}
		hidePriceWidget(selector){
			let timeoutID = setTimeout(()=>{
				selector.classList.remove('show');
			}, 3000);
		}

		closeFrozenPrice(selector){
			let close = selector.querySelector('.widget-frozen__close');
			close.addEventListener('click', function(e) {
				selector.classList.remove('show');
			}.bind(this));
		}
		

		lastOrderWidget(){
			const element = document.createElement('div');
			const body = document.querySelector('body');
			element.classList.add('widget-notification');
			element.innerHTML = `
				<div class="widget-notification__message">
					<div class="widget-notification__title"></div>
					<div class="widget-notification__content"></div>
					<button class="widget-notification__close"><span class="mdi mdi-close"></span></button>
				</div>
			`;
			element.classList.add('received');
			body.append(element);
			
			const orderInterval = setInterval(() => {
				let count = window.localStorage.getItem('countOfProducts'),
					title = `${this.generateCity()} - ${this.generateNames()}`,
					content = `${this.textForBuy} ${count} ${this.itemCountable}`;
				
				element.querySelector('.widget-notification__title').textContent = title;
				element.querySelector('.widget-notification__content').textContent = content;
				if(count <= this.minCount){	
					clearInterval(orderInterval);
				}
			}, this.delay);
		}
		

		// Timer
		timeCounterWidget(){
			function getZero(num){
				if( num >= 0 && num < 10 ) {
					return `0${num}`;
				} else {
					return num;
				}
			}
			let _t = document.querySelector('.widget-counter'),
				currentdate = new Date(),
				_d = currentdate.getDate()+this.timerDeadline,
				_m = currentdate.getMonth(),
				_y = currentdate.getFullYear(),
				daysElement = _t.querySelector('.days'),
				hoursElement = _t.querySelector('.hours'),
				minutesElement = _t.querySelector('.minutes'),
				secondsElement = _t.querySelector('.seconds');

			const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
		
			let setDate = new Date(_y,_m,_d,0,0,0).getTime();
		
			const timer = setInterval(function(){
				let curDate = new Date().getTime();
				let d = setDate - curDate;
		
				if(d < 0) {
					clearInterval(timer);
					for(let i=0; i<document.querySelectorAll(".number").length; i++) {
						document.querySelectorAll(".number")[i];
					}
				}
				else {
					daysElement.innerHTML	 = getZero(Math.floor(	d / day	 ));
					hoursElement.innerHTML	 = getZero(Math.floor( (d % day) / hour));
					minutesElement.innerHTML = getZero(Math.floor( (d % hour) / minute));
					secondsElement.innerHTML = getZero(Math.floor( (d % minute) / second));
				}
			}, 1000);
			
		}

		

		generateNames(){
			let name = '';
			switch (this.productSex){
				case 0:{
					name = this.female[Math.floor(Math.random() * this.female.length)];
					break;
				}
				case 1:{
					name = this.male[Math.floor(Math.random() * this.male.length)];
					break;
				}
				case 2:{
					name = Math.floor(Math.random() * 2)==0?this.female[Math.floor(Math.random() * this.female.length)]:this.male[Math.floor(Math.random() * this.male.length)];
				}
			}
			return name;
		}
		generateCity(){
			const city = this.cities[Math.floor(Math.random() * this.cities.length)]
			return city;
		}

		count(){
			let countInterval = setInterval( ()=>{
				let currentItems = window.localStorage.getItem('countOfProducts');
				let countToBuy = Math.floor(Math.random() * this.maxSaleCount) +1;
				const newCount = currentItems - countToBuy;
				
				if(currentItems > this.minCount){
					this.dataToStorage(newCount);
				} else {
					clearInterval(countInterval);
					this.dataToStorage(currentItems);
				}
			}, this.delay);
		}



		dataToStorage(items){
			window.localStorage.setItem('date',(new Date()).toLocaleDateString());
			window.localStorage.setItem('countOfProducts',items);
		}
		dataFromStorage(){
			let date = window.localStorage.getItem('date');
			if(date){
				if(date < (new Date()).toLocaleDateString()){
					this.dataToStorage(this.startCount);
					return this.startCount;
				}else{
					let storageData = window.localStorage.getItem('countOfProducts');
					if(storageData){
						return  storageData;
					}else{
						return this.startCount;
					}
				}
			} else {
				this.dataToStorage(this.startCount);
				return this.startCount;
			}	
		}

	}

	async function getResource(url){
		try {
			let res = await fetch(url);
			if(!res.ok){
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}
			return await res.json();
		} catch (err) {
			console.log(err);
		}
		
	}
	
	getResource(`/widgetList.json`)
        .then(data => {
			const widget = new Widget(data);
        });

	
}());

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
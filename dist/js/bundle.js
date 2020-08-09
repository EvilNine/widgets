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

	const widgetList = {
		frozenPrice: true,
		lastorder: true,
		inStock: true,
		onlineVisitors: true,
		todayVisitors: true,
		totalVisitors: true,
		config: {
			startCount: 346,
			productSex: 2,
			itemCountable: 'шт.',
			minCount: 10,
			maxSaleCount: 10,
			maxTimeToBuy: 10000,
			minTimeToBuy: 3000,
			timerDeadline: 1 // days
		},
		data: {
			namesF: ['Александра','Алина','Алла','Анастасия','Ангелина','Анжела','Анжелика','Анна','Антонина','Анфиса','Валентина','Валерия','Варвара','Василиса','Вера','Вероника','Виктория','Галина','Глафира','Дана','Дарья','Евгения','Екатерина','Елена','Елизавета','Жанна','Злата','Зоя','Инга','Инна','Ирина','Карина','Ксения','Лариса','Лидия','Людмила','Маргарита','Марина','Мария','Надежда','Наталья','Нина','Оксана','Ольга','Полина','Прасковья','Раиса','Светлана','Снежана','София','Таисия','Тамара','Татьяна','Юлия','Яна','Ярослава'],
			namesM: ['Алан','Александр','Алексей','Альберт','Анатолий','Андрей','Антон','Арсен','Арсений','Артем','Артемий','Артур','Богдан','Борис','Вадим','Валентин','Валерий','Василий','Виктор','Виталий','Владимир','Владислав','Всеволод','Вячеслав','Геннадий','Георгий','Герман','Глеб','Гордей','Григорий','Давид','Дамир','Даниил','Демид','Демьян','Денис','Дмитрий','Евгений','Егор','Елисей','Захар','Иван','Игнат','Игорь','Илья','Ильяс','Камиль','Карим','Кирилл','Клим','Константин','Лев','Леонид','Макар','Максим','Марат','Марк','Марсель','Матвей','Мирон','Мирослав','Михаил','Назар','Никита','Николай','Олег','Павел','Петр','Платон','Прохор','Рамиль','Ратмир','Ринат','Роберт','Родион','Роман','Ростислав','Руслан','Рустам','Савва','Савелий','Святослав','Семен','Сергей','Станислав','Степан','Тамерлан','Тимофей','Тимур','Тихон','Федор','Филипп','Шамиль','Эдуард','Эльдар','Эмиль','Эрик','Юрий','Ян','Ярослав'],
			cities: ['Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Нижний Новгород','Казань','Челябинск','Омск','Самара','Ростов-на-Дону','Уфа','Красноярск','Воронеж','Пермь','Волгоград','Чебоксары','Балашиха','Калининград','Тула','Курск','Севастополь','Сочи','Ставрополь','Улан-Удэ','Тверь','Магнитогорск','Иваново','Брянск','Белгород','Сургут','Владимир','Нижний Тагил','Чита','Архангельск','Симферополь','Калуга','Смоленск','Волжский','Якутск','Саранск','Череповец','Курган','Вологда','Орёл','Владикавказ','Подольск','Грозный','Мурманск','Тамбов','Петрозаводск','Стерлитамак','Нижневартовск','Кострома','Новороссийск','Йошкар-Ола','Химки','Краснодар','Саратов','Тюмень','Тольятти','Ижевск','Барнаул','Ульяновск','Иркутск','Хабаровск','Ярославль','Владивосток','Махачкала','Томск','Оренбург','Кемерово','Новокузнецк','Рязань','Астрахань','Набережные Челны','Пенза','Киров','Липецк','Таганрог','Комсомольск-на-Амуре','Сыктывкар','Нижнекамск','Нальчик','Шахты','Дзержинск','Орск','Братск','Благовещенск','Энгельс','Ангарск','Королёв','Великий Новгород','Старый Оскол','Мытищи','Псков','Люберцы','Южно-Сахалинск','Бийск','Прокопьевск','Армавир','Балаково','Рыбинск','Абакан','Северодвинск','Петропавловск-Камчатский','Норильск','Уссурийск','Волгодонск','Красногорск','Сызрань','Новочеркасск','Каменск-Уральский','Златоуст','Электросталь','Альметьевск','Салават','Миасс','Керчь','Копейск','Находка','Пятигорск','Хасавюрт','Рубцовск','Березники','Коломна','Майкоп','Одинцово','Ковров','Домодедово','Нефтекамск','Кисловодск','Нефтеюганск','Батайск','Новочебоксарск','Серпухов','Щёлково','Дербент','Новомосковск','Черкесск','Первоуральск','Раменское','Назрань','Каспийск','Обнинск','Орехово-Зуево','Кызыл','Новый Уренгой','Невинномысск','Димитровград','Октябрьский','Долгопрудный','Ессентуки','Камышин','Муром','Жуковский','Евпатория','Новошахтинск','Северск','Реутов','Пушкино','Артём','Ноябрьск','Ачинск','Бердск','Арзамас','Елец','Элиста','Ногинск','Сергиев Посад','Новокуйбышевск','Железногорск'],
			textForBuy: 'Сделан заказ на '	
		}
	};
	
	let {frozenPrice, lastorder, inStock, onlineVisitors, todayVisitors, totalVisitors} = widgetList;
	
	
	class Widget {
		constructor(options) {
			this.startCount = options.startCount;
			this.productSex = options.productSex;
			this.itemCountable = options.itemCountable;
			this.minCount = options.minCount;
			this.maxSaleCount = options.maxSaleCount;
			this.maxTimeToBuy = options.maxTimeToBuy;
			this.minTimeToBuy = options.minTimeToBuy;
			this.timerDeadline = options.timerDeadline;
			this.delay = 100;
			this.male = options.data.namesM;
			this.female = options.data.namesF;
			this.cities = options.data.cities;
			this.textForBuy = options.data.textForBuy;
			this.dataFromStorage();
			this.count();
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
	const widget = new Widget({
		startCount: 346,
		productSex: 2,
		itemCountable: 'шт.',
		minCount: 10,
		maxSaleCount: 10,
		maxTimeToBuy: 10000,
		minTimeToBuy: 3000,
		timerDeadline: 1,
		data: {
			namesF: ['Александра','Алина','Алла','Анастасия','Ангелина','Анжела','Анжелика','Анна','Антонина','Анфиса','Валентина','Валерия','Варвара','Василиса','Вера','Вероника','Виктория','Галина','Глафира','Дана','Дарья','Евгения','Екатерина','Елена','Елизавета','Жанна','Злата','Зоя','Инга','Инна','Ирина','Карина','Ксения','Лариса','Лидия','Людмила','Маргарита','Марина','Мария','Надежда','Наталья','Нина','Оксана','Ольга','Полина','Прасковья','Раиса','Светлана','Снежана','София','Таисия','Тамара','Татьяна','Юлия','Яна','Ярослава'],
			namesM: ['Алан','Александр','Алексей','Альберт','Анатолий','Андрей','Антон','Арсен','Арсений','Артем','Артемий','Артур','Богдан','Борис','Вадим','Валентин','Валерий','Василий','Виктор','Виталий','Владимир','Владислав','Всеволод','Вячеслав','Геннадий','Георгий','Герман','Глеб','Гордей','Григорий','Давид','Дамир','Даниил','Демид','Демьян','Денис','Дмитрий','Евгений','Егор','Елисей','Захар','Иван','Игнат','Игорь','Илья','Ильяс','Камиль','Карим','Кирилл','Клим','Константин','Лев','Леонид','Макар','Максим','Марат','Марк','Марсель','Матвей','Мирон','Мирослав','Михаил','Назар','Никита','Николай','Олег','Павел','Петр','Платон','Прохор','Рамиль','Ратмир','Ринат','Роберт','Родион','Роман','Ростислав','Руслан','Рустам','Савва','Савелий','Святослав','Семен','Сергей','Станислав','Степан','Тамерлан','Тимофей','Тимур','Тихон','Федор','Филипп','Шамиль','Эдуард','Эльдар','Эмиль','Эрик','Юрий','Ян','Ярослав'],
			cities: ['Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Нижний Новгород','Казань','Челябинск','Омск','Самара','Ростов-на-Дону','Уфа','Красноярск','Воронеж','Пермь','Волгоград','Чебоксары','Балашиха','Калининград','Тула','Курск','Севастополь','Сочи','Ставрополь','Улан-Удэ','Тверь','Магнитогорск','Иваново','Брянск','Белгород','Сургут','Владимир','Нижний Тагил','Чита','Архангельск','Симферополь','Калуга','Смоленск','Волжский','Якутск','Саранск','Череповец','Курган','Вологда','Орёл','Владикавказ','Подольск','Грозный','Мурманск','Тамбов','Петрозаводск','Стерлитамак','Нижневартовск','Кострома','Новороссийск','Йошкар-Ола','Химки','Краснодар','Саратов','Тюмень','Тольятти','Ижевск','Барнаул','Ульяновск','Иркутск','Хабаровск','Ярославль','Владивосток','Махачкала','Томск','Оренбург','Кемерово','Новокузнецк','Рязань','Астрахань','Набережные Челны','Пенза','Киров','Липецк','Таганрог','Комсомольск-на-Амуре','Сыктывкар','Нижнекамск','Нальчик','Шахты','Дзержинск','Орск','Братск','Благовещенск','Энгельс','Ангарск','Королёв','Великий Новгород','Старый Оскол','Мытищи','Псков','Люберцы','Южно-Сахалинск','Бийск','Прокопьевск','Армавир','Балаково','Рыбинск','Абакан','Северодвинск','Петропавловск-Камчатский','Норильск','Уссурийск','Волгодонск','Красногорск','Сызрань','Новочеркасск','Каменск-Уральский','Златоуст','Электросталь','Альметьевск','Салават','Миасс','Керчь','Копейск','Находка','Пятигорск','Хасавюрт','Рубцовск','Березники','Коломна','Майкоп','Одинцово','Ковров','Домодедово','Нефтекамск','Кисловодск','Нефтеюганск','Батайск','Новочебоксарск','Серпухов','Щёлково','Дербент','Новомосковск','Черкесск','Первоуральск','Раменское','Назрань','Каспийск','Обнинск','Орехово-Зуево','Кызыл','Новый Уренгой','Невинномысск','Димитровград','Октябрьский','Долгопрудный','Ессентуки','Камышин','Муром','Жуковский','Евпатория','Новошахтинск','Северск','Реутов','Пушкино','Артём','Ноябрьск','Ачинск','Бердск','Арзамас','Елец','Элиста','Ногинск','Сергиев Посад','Новокуйбышевск','Железногорск'],
			textForBuy: 'Сделан заказ на '	
		}
	});
	if(frozenPrice) {
		widget.frozenPriceWidget();
	}
	if(lastorder){
		widget.lastOrderWidget();
	}





}());

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
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

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(selector, deadline){
    function getZero(num) {
        if( num >= 0 && num < 10 ) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    // Timer
    let _t = document.querySelector(selector),
        currentdate = new Date(),
        _d = currentdate.getDate()+deadline,
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
            hoursElement.innerHTML	 = getZero(Math.floor( (d % day) / hour	));
            minutesElement.innerHTML = getZero(Math.floor( (d % hour) / minute));
            secondsElement.innerHTML = getZero(Math.floor( (d % minute) / second));
        }
    }, 1000);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/modules/frozenPrice.js":
/*!***************************************!*\
  !*** ./src/js/modules/frozenPrice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/js/modules/services.js");


function frozenWidget (count, parent){
	const element = document.createElement('div');
	element.classList.add('widget-frozen', 'slideRight', 'ice1');
	
	element.innerHTML = `
		<div class="widget-frozen__body">
			<div class="widget-frozen__close"><i class="mdi mdi-close"></i></div>
			<div class="widget-frozen__title">
				<span class="text-uppercase">Мы заморозили цену</span> <br>
				<span class="text-primary h5 font-weight-bold">1$=45руб</span>
			</div>
			<div class="widget-frozen__content">
				Осталось <span class="widget-itemcounter__num text-danger h5 font-weight-bold">${count}</span> штук <br>по старому курсу
			</div>
		</div>
	`;
	
	parent.append(element);
	
	

	setTimeout(function() {
		element.classList.add('show');
	}, 2000);




}

/* harmony default export */ __webpack_exports__["default"] = (frozenWidget);

/***/ }),

/***/ "./src/js/modules/lastOrder.js":
/*!*************************************!*\
  !*** ./src/js/modules/lastOrder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/js/modules/services.js");


function lastOrderWidget (startCount, productSex, namesF, namesM, cities, itemCountable, maxSaleCount, maxTimeToBuy, minTimeToBuy, minCount, textForBuy){
    
    let reinitTimer;
    let currentCount = startCount;

    const element = document.createElement('div');
    element.classList.add('widget-notification');
    element.innerHTML = `
        <div class="widget-notification__message">
            <div class="widget-notification__title"></div>
            <div class="widget-notification__content"></div>
            <button class="widget-notification__close"><span class="mdi mdi-close"></span></button>
        </div>
    `;
    const body = document.querySelector('body');
    body.append(element);

    // save
    function reInitConfig(){
        let date = window.localStorage.getItem('date');
        if(date){
            if(date < (new Date()).toLocaleDateString()){
                Object(_services__WEBPACK_IMPORTED_MODULE_0__["dataToStorage"])(startCount);
                currentCount = startCount;
                clearInterval(reinitTimer);
                generateMessage();
            }
        }
    }

    // save
    function dismissMessage() {
        element.classList.remove('received');
        generateMessage();
    }
    // save
    function closeMessage() {
        element.classList.remove('received');
    }

    // function showing the message
    function showMessage() {
        element.classList.add('received');
        const button = element.querySelector('.widget-notification__close');
        button.addEventListener('click', closeMessage, { once: true });
        setTimeout(function(){
            dismissMessage();
        }, 4000);
    }

    function generateMessage() {
        const delay = Math.floor(Math.random() * maxTimeToBuy) + minTimeToBuy;
        let currentItems = currentCount;
        let countToBuy = Math.floor(Math.random() * maxSaleCount) +1;
        if(minCount < currentItems - countToBuy){
            const timeoutID = setTimeout(showMessages(countToBuy,currentItems), delay);
        }else{

            if(!reinitTimer) {

                reinitTimer = setInterval(reInitConfig, 10000);
            }
        }
    }

    const generateNames = function(sex, male, female){
        let name = '';
        switch (sex){
            case 0:{
                name = namesF[Math.floor(Math.random() * namesF.length)];
                break;
            }
            case 1:{
                name = namesM[Math.floor(Math.random() * namesM.length)];
                break;
            }
            case 2:{
                name = Math.floor(Math.random() * 2)==0?namesF[Math.floor(Math.random() * namesF.length)]:namesM[Math.floor(Math.random() * namesM.length)];
            }
        }
        return name;
    };
    const generateCity = function(item){
        const city = item[Math.floor(Math.random() * item.length)];
        return city;
    };
    

    const showMessages = function(countToBuy,currentItems){
        let userName = generateNames(productSex, namesF, namesM);
        let city = generateCity(cities); 
        let title = '';
        
        title = `${userName} - г. ${city}`;
        const text = `${textForBuy} ${countToBuy} ${itemCountable}`;
        const message = document.querySelector('.widget-notification__message');
        message.querySelector('.widget-notification__title').textContent = title;
        message.querySelector('.widget-notification__content').textContent = text;
        const newCount = currentItems - countToBuy;
        currentCount = newCount;
        Object(_services__WEBPACK_IMPORTED_MODULE_0__["dataToStorage"])(currentCount);
        
        showMessage();
    };
    
    generateMessage();
    
}

/* harmony default export */ __webpack_exports__["default"] = (lastOrderWidget);


/***/ }),

/***/ "./src/js/modules/services.js":
/*!************************************!*\
  !*** ./src/js/modules/services.js ***!
  \************************************/
/*! exports provided: getResource, dataFromStorage, dataToStorage, countSet, showMessage, generateMessage, generateCity, generateNames, dismissMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataFromStorage", function() { return dataFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataToStorage", function() { return dataToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSet", function() { return countSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMessage", function() { return generateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCity", function() { return generateCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateNames", function() { return generateNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dismissMessage", function() { return dismissMessage; });
let reinitTimer;

function dataFromStorage(startCount){
    let date = window.localStorage.getItem('date');
    if(date){
        if(date < (new Date()).toLocaleDateString()){
            dataToStorage(startCount);
            return startCount;
        }else{
            let storageData = window.localStorage.getItem('countOfProducts');
            if(storageData){
                return  storageData;
            }else{
                return startCount;
            }
        }
    } else {
        dataToStorage(startCount);
        return startCount;
    }
}

function dataToStorage(items){
    window.localStorage.setItem('date',(new Date()).toLocaleDateString());
    window.localStorage.setItem('countOfProducts',items);
}

const generateNames = function(sex, male, female){
    let name = '';
    switch (sex){
        case 0:{
            name = female[Math.floor(Math.random() * female.length)];
            break;
        }
        case 1:{
            name = male[Math.floor(Math.random() * male.length)];
            break;
        }
        case 2:{
            name = Math.floor(Math.random() * 2)==0?female[Math.floor(Math.random() * female.length)]:male[Math.floor(Math.random() * male.length)];
        }
    }
    return name;
};
const generateCity = function(item){
    const city = item[Math.floor(Math.random() * item.length)];
    return city;
};



function dismissMessage(item) {
    item.classList.remove('received');
    generateMessage();
}
function closeMessage(item) {
    item.classList.remove('received');
}

function countSet (buy, current){
    const newCount = current - buy;
    let currentCount = newCount;
    dataToStorage(currentCount);
}

function reInitConfig(startCount, currentCount){
    let date = window.localStorage.getItem('date');
    if(date){
        if(date < (new Date()).toLocaleDateString()){
            dataToStorage(startCount);
            currentCount = startCount;
            clearInterval(reinitTimer);
            generateMessage();
        }
    }
}

function generateMessage(maxTimeToBuy, minTimeToBuy, currentCount, maxSaleCount, minCount, showMsg) {
    const delay = Math.floor(Math.random() * maxTimeToBuy) + minTimeToBuy;
    let currentItems = currentCount;
    let countToBuy = Math.floor(Math.random() * maxSaleCount) +1;
    if(minCount < currentItems - countToBuy){
        const timeoutID = setTimeout(showMsg(countToBuy,currentItems), delay);
    }else{

        if(!reinitTimer) {

            reinitTimer = setInterval(reInitConfig, 10000);
        }
    }
}

function showMessage(item) {
    item.classList.add('received');
    const button = item.querySelector('.widget-notification__close');
    button.addEventListener('click', closeMessage, { once: true });
    setTimeout(function(){
        dismissMessage(item);
    }, 4000);
}


async function getResource(url){
    let res = await fetch(url);
    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}




/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_frozenPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/frozenPrice */ "./src/js/modules/frozenPrice.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_lastOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/lastOrder */ "./src/js/modules/lastOrder.js");
/* harmony import */ var _modules_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/services */ "./src/js/modules/services.js");







(function(){

	
	
	const body = document.querySelector('body');
	// const json
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
	let {startCount, productSex, itemCountable, minCount, maxSaleCount, maxTimeToBuy, minTimeToBuy, timerDeadline} = widgetList.config;
	let {namesF, namesM, cities, textForOrder, textForBuy} = widgetList.data;
	
	if(frozenPrice) {
		Object(_modules_frozenPrice__WEBPACK_IMPORTED_MODULE_0__["default"])(startCount, body);	
	}
	if(lastorder){
		Object(_modules_lastOrder__WEBPACK_IMPORTED_MODULE_2__["default"])(startCount, productSex, namesF, namesM, cities, itemCountable, maxSaleCount, maxTimeToBuy, minTimeToBuy, minCount, textForBuy);
	}
	Object(_modules_counter__WEBPACK_IMPORTED_MODULE_1__["default"])('.widget-counter', timerDeadline);


}());

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
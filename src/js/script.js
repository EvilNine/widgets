'use strict';

import frozenWidget from './modules/frozenPrice';
import timer from './modules/counter';
import lastOrderWidget from './modules/lastOrder';
import {getResource, generateCity} from './modules/services';

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
	

	let count = function(currentItem, buyItem){
		buyItem = Math.floor(Math.random() * buyItem) +1;
		let currentCount;
		if(window.localStorage.getItem('countOfProducts')){
			currentCount = window.localStorage.getItem('countOfProducts');
			currentCount = currentCount - buyItem;
			dataToStorage(currentCount);
		} else {
			currentCount = currentItem - buyItem;
			dataToStorage(currentCount);
		}
		return currentCount;
	};

	let time = function(maxTime, minTime){
		return Math.floor(Math.random() * maxTime) + minTime;
	}
	const interval = time(maxTimeToBuy, minTimeToBuy);	

	// 1
	function generate(selector, maxTime, minTime){
		const delay = Math.floor(Math.random() * maxTime) + minTime;
		let counter = count(startCount, maxSaleCount);
		console.log(delay, interval);
		if(counter > minCount ){
			const timeoutID = setTimeout(showMessages(counter, selector), interval);
			console.log('1')
		} else {
			console.log('2', counter, minCount)

			if(!reinitTimer) {
				console.log(reinitTimer)
                reinitTimer = setInterval(reInitConfig, 10000);
            }
		}
		
	}

	// 2
	function showMessages(count, selector){
		selector.querySelector('.widget-itemcounter__num').innerHTML = count;
		showMessage(selector);
	}

	// 3
	function showMessage(selector) {
        selector.classList.add('received');
		selector.addEventListener('click', (e) =>{
			let target = e.target;
        	if(target && target.classList.contains('widget-notification__close')){
				closeMessage(selector);
			}
		}, { once: true });
        setTimeout(function(){
            dismissMessage(selector);
        }, 4000);
	}
	
	// 4
	function dismissMessage(selector) {
		selector.classList.remove('received');
		generate(selector, maxTimeToBuy, minTimeToBuy);
	}

	// 5

	
	let reinitTimer;
	function reInitConfig(selector){
        let date = window.localStorage.getItem('date');
        if(date){
            if(date < (new Date()).toLocaleDateString()){
                clearInterval(reinitTimer);
                generate(selector, maxTimeToBuy, minTimeToBuy);
            }
        }
	}
	
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

	function closeMessage(selector) {
        selector.classList.remove('received');
    }


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
		generate(element, maxTimeToBuy, minTimeToBuy);

		setTimeout(function() {
			element.classList.add('show');
		}, 2000);
	}

	// function generateMessage() {
    //     const delay = Math.floor(Math.random() * maxTimeToBuy) + minTimeToBuy;
    //     let currentItems = currentCount;
    //     let countToBuy = Math.floor(Math.random() * maxSaleCount) +1;
    //     if(minCount < currentItems - countToBuy){
    //         const timeoutID = setTimeout(showMessages(countToBuy,currentItems), delay);
    //     }else{

    //         if(!reinitTimer) {

    //             reinitTimer = setInterval(reInitConfig, 10000);
    //         }
    //     }
    // }






	if(frozenPrice) {
		frozenWidget(startCount, body);	
	}
	if(lastorder){
		//lastOrderWidget(startCount, productSex, namesF, namesM, cities, itemCountable, maxSaleCount, maxTimeToBuy, minTimeToBuy, minCount, textForBuy);
	}
	//timer('.widget-counter', timerDeadline);


}());
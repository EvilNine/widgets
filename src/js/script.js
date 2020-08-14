'use strict';

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

			this.startCount = options.startCount;
			this.productSex = options.productSex;
			this.itemCountable = options.itemCountable;
			this.minCount = options.minCount;
			this.maxSaleCount = options.maxSaleCount;
			this.maxTimeToBuy = options.maxTimeToBuy;
			this.minTimeToBuy = options.minTimeToBuy;
			this.timerDeadline = options.timerDeadline;
			
			

			this.visitorsDelay = options.visitorsDelay;

			this.totalVisitors = options.totalVisitors;
			this.totalVisitorsText = options.totalVisitorsText;
			
			this.onlineVisitors = options.onlineVisitors;
			this.onlineVisitorsText = options.onlineVisitorsText;

			this.buyVisitors = options.buyVisitors;
			this.buyVisitorsText = options.buyVisitorsText;
			

			this.delay = 10000;
			this.male = options.namesM;
			this.female = options.namesF;
			this.cities = options.cities;
			this.textForBuy = options.textForBuy;
			
			
			
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
			
			element.classList.add('widget-visitors__item', 'widget-visitors__online');
			element.innerHTML = `
				<div class="widget-title">${this.onlineVisitorsText}</div>
				<div class="widget-count">${this.getCount(this.onlineVisitors, 'onlineVisitors')}</div>
			`;
			parent.append(element);
			
			const onlineVisitorsInterval = setInterval(() => {
				let count = this.getCount(this.onlineVisitors, 'onlineVisitors');
				element.querySelector('.widget-count').textContent = ++count;
			}, this.visitorsDelay);
		}

		getCount(item, localStorage){
			const hour = new Date().getHours();
			if( hour >= 0 && hour < 8 ) {
				let max = Math.round(item * .333);
				let min = Math.round(item * .1);
				item =  Math.floor(Math.random()*(max-min+1)+min);
			} else if (hour >= 8 && hour < 16) {
				let max = Math.round(item * .6);
				let min = Math.round(item * .3);
				item =  Math.floor(Math.random()*(max-min+1)+min);
			} else {
				let max = item;
				let min = Math.round(item * .666);
				item =  Math.floor(Math.random()*(max-min+1)+min);
			}
			window.localStorage.setItem(localStorage, item);	
			return item;
		}
		between(x, min, max) {
			return x >= min && x < max;
		}

		random(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		totalVisitorsWidget(){
			this.visitorContainer();
			
			// window.localStorage.setItem('onlineVisitors', item);	
			let count = this.getCount(this.totalVisitors, 'totalVisitors');
			const element = document.createElement('div');
			const parent = document.querySelector('.widget-visitors');
			element.classList.add('widget-visitors__item', 'widget-visitors__total');
			element.innerHTML = `
				<div class="widget-title">${this.totalVisitorsText}</div>
				<div class="widget-count">${count}</div>
			`;
			parent.append(element);


			const totalVisitorsInterval = setInterval(() => {
				count = ++count;
				element.querySelector('.widget-count').textContent = count;
				window.localStorage.setItem('totalVisitors', count);
			}, this.delay);
		}

		buyVisitorsWidget(){
			this.visitorContainer();
			let count = this.getCount(this.buyVisitors, 'buyVisitors');
			const element = document.createElement('div');
			const parent = document.querySelector('.widget-visitors');
			element.classList.add('widget-visitors__item', 'widget-visitors__today');
			element.innerHTML = `
				<div class="widget-title">${this.buyVisitorsText}</div>
				<div class="widget-count">${count}</div>
			`;
			parent.append(element);

			const buyVisitorsInterval = setInterval(() => {
				count = ++count;
				element.querySelector('.widget-count').textContent = count;
				window.localStorage.setItem('buyVisitors', count);
			}, this.delay);
		}

		visitorContainer(){
			if (!document.querySelector('.widget-visitors')) {
				const widgetContainer = document.createElement('div');
				widgetContainer.classList.add('widget-visitors');
				// widgetContainer.innerHTML = `
				// 	<div class="widget-visitors__close"><span></span></div>
				// `;
				const body = document.querySelector('body');
				body.append(widgetContainer);
			}
		}

		inStockWidget(){
			const element = document.querySelectorAll('.widget-itemcounter');
			element.forEach( (item)=>{
				let countSelector = item.querySelector('.widget-itemcounter__num');
				countSelector.textContent = window.localStorage.getItem('countOfProducts');
				const inStockInterval = setInterval(() => {
					let count = window.localStorage.getItem('countOfProducts');
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
			this.showPriceWidget(element);
			setTimeout( ()=> {
				element.classList.add('show');
			}, this.delay);
			
			
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
			setTimeout( ()=> {
				element.classList.add('received');
			}, this.delay);
			body.append(element);
			
			const orderInterval = setInterval(() => {
				
				let count =  window.localStorage.getItem('countOfProducts'),
					countBuy = window.localStorage.getItem('countToBuy'),
					title = `${this.generateCity()} - ${this.generateNames()}`,
					content = `${this.textForBuy} ${countBuy} ${this.itemCountable}`;
				console.log(count);
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
					window.localStorage.setItem('countToBuy', countToBuy);
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

	const fetchAll = files => new Promise((resolve, reject) =>
        Promise.all(Object.values(files).map(file => fetch(file)))
               .then(responses =>
                      Promise.all(responses.map(r => r.json()))
                             .then(jsons =>
                                 resolve(Object.keys(files).reduce((prev, curr, index) =>
                                     !(prev[curr] = jsons[index]) || prev, {}))
                             ))
               .catch(err => reject(err))
	);
	
	const getData = async () => {
        const {list, config, data} = await fetchAll({
            list: '/widgetList.json',
			config: '/widgetConfig.json',
			data: '/widgetData.json'
		});
		const allData = Object.assign( {}, list, config, data );
		const widget = new Widget(allData);        
    };
    getData();

	
}());
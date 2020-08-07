import {dataToStorage} from './services';

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
                dataToStorage(startCount);
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
        dataToStorage(currentCount);
        
        showMessage();
    };
    
    generateMessage();
    
}

export default lastOrderWidget;

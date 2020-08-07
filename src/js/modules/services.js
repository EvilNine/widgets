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

export {getResource, dataFromStorage, dataToStorage, countSet, showMessage, generateMessage, generateCity, generateNames, dismissMessage};

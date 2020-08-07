import {dataFromStorage, countSet} from './services';

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

export default frozenWidget;
var col1;
var cate_pop;
var menu;
var pop;
var slider;
var slider_item;
var slider_btn;
var slider_prev;
var slider_next;
var news_head_item;
var item_active;
var news_content;

window.onload = function() {
	col1 = $('.fs .fs-inner .col1')[0];
	cate_pop = $('.fs .fs-inner .col1 .cate .cate-pop')[0];
	menu = $('.fs .fs-inner .col1 .cate .menu .item');
	pop = $('.fs .fs-inner .col1 .cate .cate-pop .pop');
	slider = $('.fs .fs-inner .col2 .slider')[0];
	slider_item = $('.fs .fs-inner .col2 .slider .slider-list .slider-item');
	slider_btn = $('.fs .fs-inner .col2 .slider .indicator .indicator-btn');
	slider_prev = $('.fs .fs-inner .col2 .slider .slider-prev')[0];
	slider_next = $('.fs .fs-inner .col2 .slider .slider-next')[0];
	news_head_item = news_content = $('.fs .fs-inner .col3 .news .news-head .news-head-item');
	item_active = $('.fs .fs-inner .col3 .news .news-head .item-active')[0];
	news_content = $('.fs .fs-inner .col3 .news .news-content .content');
	
	news_head();
	menu_pop();
	slider_run();
}

function menu_pop() {
	if(menu.length != pop.length) {
		return;
	}
	for(let i = 0; i < menu.length; i++) {
		menu[i].id = i;
	}
	col1.onmouseover=function(){
		cate_pop.style.display = "block";
		for(let i =0;i<menu.length;i++){
			menu[i].onmouseover = function() {
				for(let j = 0; j < pop.length; j++) {
					pop[j].style.display = "none";
				}
				pop[this.id].style.display = "block";
			}
		}
	}
	col1.onmouseout=function(){
		cate_pop.style.display = "none";
	}
}
function slider_run() {
	if(slider_btn.length != slider_item.length) {
		return;
	}
	for(let i = 0; i < slider_btn.length; i++) {
		slider_btn[i].id = i;
	}
	for(let i = 0; i < slider_btn.length; i++) {
		slider_btn[i].onmouseover = function() {
			for(let j = 0; j < slider_btn.length; j++) {
				//slider_btn[j].style.backgroundColor="#fff";
				//slider_item[j].style.opacity="0";
				removeClass(slider_btn[j], 'indicator-btn-active');
				removeClass(slider_item[j], 'slider-item-active');
			}
			//this.style="background-color:#DC143C;transition-duration:0.3s;";
			//slider_item[this.id].style="opacity:1;transition-duration:0.3s;";
			addClass(this, 'indicator-btn-active');
			addClass(slider_item[this.id], 'slider-item-active');
		}
	}
	slider_next.onclick = next;
	slider_prev.onclick = prev;
	var si = setInterval(next, 3000);
	slider.onmouseover = function() {
		clearInterval(si);
	};
	slider.onmouseout = function() {
		si = setInterval(next, 3000);
	};
}

function prev() {
	var i = 0;
	for(let j = 0; j < slider_item.length; j++) {
		if(hasClass(slider_item[j], 'slider-item-active')) {
			i = j;
			break;
		}
	}
	i <= 0 ? i = slider_item.length - 1 : i--;
	for(let j = 0; j < slider_item.length; j++) {
		if(j == i) {
			addClass(slider_btn[j], 'indicator-btn-active');
			addClass(slider_item[j], 'slider-item-active');
			continue;
		}
		removeClass(slider_btn[j], 'indicator-btn-active');
		removeClass(slider_item[j], 'slider-item-active');
	}
}

function next() {
	var i = 0;
	for(let j = 0; j < slider_item.length; j++) {
		if(hasClass(slider_item[j], 'slider-item-active')) {
			i = j;
			break;
		}
	}
	i >= slider_item.length - 1 ? i = 0 : i++;
	for(let j = 0; j < slider_item.length; j++) {
		if(j == i) {
			addClass(slider_btn[j], 'indicator-btn-active');
			addClass(slider_item[j], 'slider-item-active');
			continue;
		}
		removeClass(slider_btn[j], 'indicator-btn-active');
		removeClass(slider_item[j], 'slider-item-active');
	}
}

function news_head() {
	news_head_item[0].onmouseover = function() {
		item_active.style = "transform:translateX(0px);";
		news_content[0].style.display = "block";
		news_content[1].style.display = "none";
	}
	news_head_item[1].onmouseover = function() {
		item_active.style = "transform:translateX(53px);";
		news_content[0].style.display = "none";
		news_content[1].style.display = "block";
	}
}

function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
	if(!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
	if(hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function toggleClass(obj, cls) {
	if(hasClass(obj, cls)) {
		removeClass(obj, cls);
	} else {
		addClass(obj, cls);
	}
}
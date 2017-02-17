window.onload = function() {
	var slider_item = document.getElementsByClassName('slider-item');
	var slider_btn = document.getElementsByClassName('indicator-btn');
	var slider_prev = document.getElementsByClassName('slider-prev')[0];
	var slider_next = document.getElementsByClassName('slider-next')[0];
	var news_head_item = document.getElementsByClassName('news-head-item');
	var item_active = document.getElementsByClassName('item-active')[0];
	var news_content = document.getElementsByClassName('content');
	
	slider(slider_btn,slider_item,slider_prev,slider_next);
	news_head(news_head_item,item_active,news_content);
	$('img').lazyload({
		threshold: 200;
	});
}
function slider(slider_btn,slider_item,slider_prev,slider_next){
	for(let i=0;i<slider_btn.length;i++){
		slider_btn[i].id=+i;
	}
	if(slider_btn.length!=slider_item.length){
		return;
	}
	slider_next.onclick=function(){
		var i=0;
		for(let j=0;j<slider_item.length;j++){
			if(hasClass(slider_item[j],'slider-item-active')){
				i=j;
				break;
			}
		}
		i>=slider_item.length-1?i=0:i++;
		for(let j=0;j<slider_item.length;j++){
			if(j==i){
				addClass(slider_btn[j],'indicator-btn-active');
				addClass(slider_item[j],'slider-item-active');
				continue;
			}
			removeClass(slider_btn[j],'indicator-btn-active');
			removeClass(slider_item[j],'slider-item-active');
		}
	}
	slider_prev.onclick=function(){
		var i=0;
		for(let j=0;j<slider_item.length;j++){
			if(hasClass(slider_item[j],'slider-item-active')){
				i=j;
				break;
			}
		}
		i<=0?i=slider_item.length-1:i--;
		for(let j=0;j<slider_item.length;j++){
			if(j==i){
				addClass(slider_btn[j],'indicator-btn-active');
				addClass(slider_item[j],'slider-item-active');
				continue;
			}
			removeClass(slider_btn[j],'indicator-btn-active');
			removeClass(slider_item[j],'slider-item-active');
		}
	}
	for(let i=0;i<slider_btn.length;i++){
		slider_btn[i].onmouseover=function(){
			for(let j=0;j<slider_btn.length;j++){
				//slider_btn[j].style.backgroundColor="#fff";
				//slider_item[j].style.opacity="0";
				removeClass(slider_btn[j],'indicator-btn-active');
				removeClass(slider_item[j],'slider-item-active');
			}
			//this.style="background-color:#DC143C;transition-duration:0.3s;";
			//slider_item[this.id].style="opacity:1;transition-duration:0.3s;";
			addClass(this,'indicator-btn-active');
			addClass(slider_item[this.id],'slider-item-active');
		}
	}
}
function news_head(news_head_item,item_active,news_content){
	news_head_item[0].onmouseover=function(){
		item_active.style="transform:translateX(0px);";
		news_content[0].style="display:block;";
		news_content[1].style="display:none;";
	}
	news_head_item[1].onmouseover=function(){
		item_active.style="transform:translateX(53px);";
		news_content[0].style="display:none;";
		news_content[1].style="display:block;";
	}
}


function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}
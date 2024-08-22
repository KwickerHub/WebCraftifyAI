//alert("connected");
//PROPOSED NAME = HASHGACHA GAMING LIBRARY aka the dark gaming library
var hashGacha = $;
//hashgacha_
// I am going to make it very easy for we to move from JQuery to this Gaming L
//first of all, I want people to know that it is not just a gaming library... It is more and still 
//an effective gaming library. 
//var JQuery = $; // I do not know if doing this is legal but we would be getting a great market from them

//var $ = {};
var $ = function(selector, category){
	"use strict";
	var specs = {};

	/*alert("beans");
	//var .get ={}
	function get(){
		alert("nice one");
	}*/
	//var get = {}

	/*if(!selector && !selector){
		alert("select gone");
	}*/
	//selector = (!selector)? "html" : selector;
	specs.selector = selector;
	/*specs.element = document.querySelector(specs.selector);*/


	//if(selector.index)
	if(!category){
		if( isFunction(selector)  ){
			window.onload = selector;
		}
		/*else if(specs.selector.indexOf(":") === 0){
			specs.selector = specs.selector.slice(1);
			//alert(specs.selector);
			specs.element = document.querySelectorAll(specs.selector);
			for (var i = specs.element.length - 1; i >= 0; i--) {
				specs.element = specs.element[i];
				return specs.element[i];
			}
			specs.element.forEach( query => {
				return query;
			});
			//return specs.element;
		}*/else if(specs.selector === "document" ){
			specs.element = document;
		}else if(specs.selector === "window" ){
			specs.element = window;
		}else if(specs.selector === "this" || specs.selector === this){
			specs.element = this;
		}
		else if(isString(selector)){
			specs.element = document.querySelector(specs.selector);
			/*specs.element = document.querySelectorAll(specs.selector);
			var elements = document.querySelector(specs.selector);
			for (var i = elements.length - 1; i >= 0; i--) {
				specs.element = elements[i];
				//specs.element.style.paddsing = "120px";
				//console.log(i);
				//console.log(specs.element);
				//$(specs.element);
				//return specs;
			}*/

		}else {
			specs.element = specs.selector;
		}
	}else if(category){
		if(category === "id"){
			specs.element = document.getElementById(specs.selector);
		}else if(category === "class"){
			specs.element = document.getElementsByClassName(specs.selector);
			/*for (var i = specs.element.length - 1; i >= 0; i--) {
				return specs.element[i];
			}*/
		}else if(category === "tag"){
			specs.element = document.getElementsByTagName(specs.selector);
			/*for (var i = specs.element.length - 1; i >= 0; i--) {
				return specs.element[i];
			}*/
		}else{
			specs.element = document.querySelector(specs.selector);
		}
	}
	/*function get(){
		alert("rice");
	}*/
	//making the commands that do not neccessary need an element...
	//if(!selector){
		
	//}
	
/*
	var get =  function(goto, callback, error, response) {
		var data, status;
		response = (!response)? "responseText" : response;
		error = (!error)? null : error;
		  if (window.XMLHttpRequest) {
		    // code for IE7+, Firefox, Chrome, Opera, Safari
		    xmlhttp=new XMLHttpRequest();
		  } else {  // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		    	data = xmlhttp.response;
		    	status = "successful";
		      	callback(data, status);
		    }else{
		    	status = "error";
		    	data = xmlhttp.readyState;
		    	//if (data == "1"){
		    		error(data, status);
		    	//}
		    }
		  }
		  //xmlhttp.open("GET","getrss.php?q="+str,true);
		  xmlhttp.open("GET",goto,true);
		  xmlhttp.send();
	}*/
	//specs.element = document.querySelector(specs.selector);
	specs.ready = function (callback){
		window.onload = callback;
		return specs;
	}
	
	//TODO ::: we would work with innerHTML against node
	specs.html = function (html_content){
		if(!html_content){
			//TODO needs to be worked on to collect everything within the tag
		   return specs;
		}else{
			specs.element.innerHTML = html_content;
		}
		return specs;
	}
	
	//TODO ::: getting the test using textContent, innerText against node
	//TODO ::: sending or displaying text with document.creatTextNode(" new text");
	//TODO ::: cloneNode()can be used to make a copy of the node ;
	//TODO ::: using elem.appendChild();
	//TODO ::: using elem.insertBefore();
	
	///const element = document.querySelector('.element')
	//pseudoElementStyle = getComputedStyle(element, '::before')
	//console.log(pseudoElementStyle.content) // Before pseudo element
	
	specs.text = function (text_content){
		if(!text_content){
			//TODO ::: not working, needs small addition here...
			specs.element.innerText;
		}else{
			text_content = document.creatTextNode = text_content;
			specs.element.innerText = text_content;
		}
		return specs;
	}
	
	specs.attr = function (attribute, value){
		if(!value){
			return specs.element.getAttribute(attribute);
		}
		else{
			specs.element.setAttribute(attribute, value);
		}
		return specs;
	}
	
	specs.val = function (value){
		if(!value){
			return specs.element.value;
		}else{
			specs.element.value = value;
		}
		
		return specs;
	}
	
	specs.height = function (){ return specs.element.offsetHeight; }
	specs.width = function (){ return specs.element.offsetWidth; }
	specs.parent = function (){ 
		specs.element = specs.element.parentNode; 
		return specs;
	}
	specs.children = function (key){ 
		if(!key) key = 0;
		specs.element = specs.element.childNodes[key]; 
		return specs;
	}

	//var elements = document.querySelectorAll("div");
	  //alert(elements);
	  //elements[2].setAttribute("style", ("display: none; " ));
	  
	specs.each = function (what_to_do){ 
		/*var elements;
		specs.element.forEach( query => {
			elements = specs.element[query]
			what_to_do;
		});*/

		for (var i = specs.element.length - 1; i >= 0; i--) {
		    console.log(specs.element[i]);
		    //specs.element[i].setAttribute("style", ("display: none; " ));
		    //$(specs.element[i]);
		    //specs.element[i] = this;
		    what_to_do;    
		}

		/*var element;
		for (var i = specs.element.length - 1; i >= 0; i--) {
			element = specs.element[i];
			what_to_do;
		}*/
		return specs;
	}
	
	//adding event listeners to carry out different actions
	specs.on = function (event, callback){
		specs.element["on"+event] = callback();	
		return specs;	
	}
	//From here you can get the double click and others
	specs.click = function(callback){
		specs.element.onclick = callback;
		return specs;
	}

	/*specs.append =function(elem) {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	}

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},*/
	
	specs.dblclick = function(callback){
		specs.element.ondblclick = callback;
		return specs;
	}

	specs.hide = function(){
		specs.element.setAttribute("style", ("display : none;"));
		return specs;
	}
	specs.show = function(){
		specs.element.setAttribute("style", ("display : block;"));
		return specs;
	}
	specs.toggle = function(value, view_display){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.element.setAttribute("style", ("display : "+view_display+";"));
		}else{
			specs.element.setAttribute("style", ("display : none;"));	
		}
		
		return specs;
	}
	specs.opacity = function(value, end_point){
		value = (!value) ? 3 : (value/1000);
		end_point = (!end_point)  ? 1 : end_point;
			//specs.element.setAttribute("style", ( " display: block;  " ));
			specs.element.setAttribute("style", ("display: block;  \
			transition: opacity "+value+"s ease-in; -webkit-transition: opacity "+value+"s ease-in; \
			-moz-transition: opacity "+value+"s ease-in; -o-transition: opacity "+value+"s ease-in; opacity: "+end_point+"; " ));

		return specs;
	}


	specs.visibility = function(value, vis, end_point){
		value = (!value) ? 1 : (value/1000);
		vis = (!vis) ? "visible" : (vis);
		end_point = (!end_point)  ? 1 : end_point;
			if(vis === "visible"){
				specs.element.setAttribute("style", ("display: block;  \
			transition: opacity "+value+"s ease-in; -webkit-transition: opacity "+value+"s ease-in; \
			-moz-transition: opacity "+value+"s ease-in; -o-transition: opacity "+value+"s ease-in; \
			visibility: "+vis+"; opacity: "+end_point+"; " ));
			}else{
				specs.element.setAttribute("style", ("display: block;  \
			transition: opacity "+value+"s ease-out; -webkit-transition: opacity "+value+"s ease-out; \
			-moz-transition: opacity "+value+"s ease-out; -o-transition: opacity "+value+"s ease-out; \
			visibility: "+vis+"; opacity: "+end_point+"; " ));
			}
			

		return specs;
	}


	//entrance 
	specs.fadeIn = function(value, dis_type){
		 	//if(!value){ value = 1.8; }
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}	
			specs.style("@keyframes fadeIn { from{ display: none; opacity: 0; visibility: hidden;  } \
					to{ display: "+dis_type+"; opacity: 1; visibility: visible; } } "+
					specs.selector + "{ animation-name: fadeIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
			specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1;" ));

		return specs;
	}
	specs.slideIn = function(value, dis_type){
		 specs.slideUp(value, dis_type);
	}
	specs.slideUp = function(value, dis_type){
		 	//if(!value){ value = 1.8; }
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}
		 	var height = (specs.css("height") === "") ? "auto" : specs.css("height");
			specs.style("@keyframes slideUp { from{ display: none; opacity: 0; height: 0; visibility: hidden; } \
					to{ display: "+dis_type+"; opacity: 1; height: "+height+"; visibility: visible; } } "+
					specs.selector + "{ animation-name: slideUp; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
			specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1;" ));

		return specs;
	}

	specs.wipeIn = function(value, dis_type){
		 	//if(!value){ value = 1.8; }
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}
		 	var width = (specs.css("width") === "") ? "auto" : specs.css("width");
			specs.style("@keyframes wipeIn { from{ display: none; opacity: 0; width: 0; visibility: hidden; } \
					to{ display: "+dis_type+"; opacity: 1; width: "+width+"; visibility: visible; } } "+
					specs.selector + "{ animation-name: wipeIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
			specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1;" ));

		return specs;
	}

	specs.zoomIn = function(value, dis_type, counts){
		 	
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes zoomIn { from{ display: none; opacity: 0; visibility: hidden; transform: scale(0.1, 0.1); } \
					to{ display: "+dis_type+"; opacity: 1; transform: scale(1, 1);  visibility: visible;} } "+
					specs.selector + "{ animation-name: zoomIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.rotateIn = function(value, dis_type, counts){
		 	
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes rotateIn { from{ display: none; opacity: 0; visibility: hidden; transform: rotateZ(0deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateZ(360deg);} } "+
					specs.selector + "{ animation-name: rotateIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.growTurnIn = function(value, dis_type, counts){
		
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes growTurnIn { from{ display: none; opacity: 0; visibility: hidden; transform: scale(0.01, 0.01) rotateZ(90deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: scale(1, 1) rotateZ(360deg);} } "+
					specs.selector + "{ animation-name: growTurnIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.swivelIn = function(value, dis_type, counts, deg){
		deg = (!deg) ? 180 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes swivelIn { from{ display: none; opacity: 0; visibility: hidden; transform: rotateY("+deg+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateY(360deg);} } "+
					specs.selector + "{ animation-name: swivelIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.flipIn = function(value, dis_type, counts, deg){
		deg = (!deg) ? 180 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes flipIn { from{ display: none; opacity: 0; visibility: hidden; transform: rotateX("+deg+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateX(360deg);} } "+
					specs.selector + "{ animation-name: flipIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.flyIn = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes flyIn { from{ display: none; opacity: 0; visibility: hidden; transform: skew("+deg+"deg, "+deg+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skew(360deg, 360deg);} } "+
					specs.selector + "{ animation-name: flyIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.slantIn = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes slantIn { from{ display: none; opacity: 0; visibility: hidden; transform: skewX("+deg+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skewX(360deg);} } "+
					specs.selector + "{ animation-name: slantIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.crawIn = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes crawIn { from{ display: none; opacity: 0; visibility: hidden; transform: skewY("+deg+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skewY(360deg);} } "+
					specs.selector + "{ animation-name: crawIn; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}




	//This part deals with exist animations....
	specs.fadeOut = function(value, dis_type){
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

		 	//specs.element.setAttribute("style", ("display: "+dis_type+"; " ));

			specs.style("@keyframes fadeOut { from{ display: "+dis_type+"; visibility: hidden; opacity: ;1} \
					to { display: none; visibility: visible; opacity: 0;} } "+
					specs.selector + "{ animation-name: fadeOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
			setTimeout(function(){
				//alert("jion");
				specs.element.setAttribute("style", ("display: none;" ));
			}, (value*1000));

		return specs;
	}

	specs.slideOut = function(value, dis_type){
		 specs.slideDown(value, dis_type);
	}
	specs.slideDown = function(value, dis_type){
		 	//if(!value){ value = 1.8; }
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}
		 	var height = (specs.css("height") === "") ? "auto" : specs.css("height");
			specs.style("@keyframes slideDown { from{ display: "+dis_type+"; opacity: 1; height: "+height+"; visibility: visible; } \
					to{ display: none; opacity: 0; height: 0; visibility: hidden; } } "+
					specs.selector + "{ animation-name: slideDown; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
			setTimeout(function(){
				specs.element.setAttribute("style", ("display: none; opacity: 0;" ));
			}, (value*1000));
			
		return specs;
	}

	specs.wipeOut = function(value, dis_type){
		 	//if(!value){ value = 1.8; }
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}
		 	var width = (specs.css("width") === "") ? "auto" : specs.css("width");
			specs.style("@keyframes wipeOut { from{ display: "+dis_type+"; opacity: 1; width: "+width+"; visibility: visible; } \
					to{ display: none; opacity: 0; width: 0; visibility: hidden; } } "+
					specs.selector + "{ animation-name: wipeOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
			setTimeout(function(){
				specs.element.setAttribute("style", ("display: none;" ));
			}, (value*1000));

		return specs;
	}

	specs.zoomOut = function(value, dis_type, counts){
		 	
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes zoomOut { from{ display: "+dis_type+"; opacity: 1; transform: scale(1, 1);  visibility: visible;}\
					to { display: none; opacity: 0; visibility: hidden; transform: scale(0.1, 0.1); } } "+
					specs.selector + "{ animation-name: zoomOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);

				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.rotateOut = function(value, dis_type, counts){
		 	
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes rotateOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateZ(360deg);} \
					to{ display: none; opacity: 0; visibility: hidden; transform: rotateZ(0deg); }} "+
					specs.selector + "{ animation-name: rotateOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.growTurnOut = function(value, dis_type, counts){
		
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes growTurnOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: scale(1, 1) rotateZ(360deg);} \
					to{ display: none; opacity: 0; visibility: hidden; transform: scale(0.01, 0.01) rotateZ(90deg); }} "+
					specs.selector + "{ animation-name: growTurnOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.swivelOut = function(value, dis_type, counts, deg){
		deg = (!deg) ? 180 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes swivelOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateY(360deg);}  \
					to{ display: none; opacity: 0; visibility: hidden; transform: rotateY("+deg+"deg); }} "+
					specs.selector + "{ animation-name: swivelOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.flipOut = function(value, dis_type, counts, deg){
		deg = (!deg) ? 180 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes flipOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: rotateX(360deg);}  \
					to{ display: none; opacity: 0; visibility: hidden; transform: rotateX("+deg+"deg); }} "+
					specs.selector + "{ animation-name: flipOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.flyOut = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes flyOut { from { display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skew(360deg, 360deg);} \
					to{ display: none; opacity: 0; visibility: hidden; transform: skew("+deg+"deg, "+deg+"deg); } } "+
					specs.selector + "{ animation-name: flyOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.slantOut = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes slantOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skewX(360deg);} \
					to{ display: none; opacity: 0; visibility: hidden; transform: skewX("+deg+"deg); } } "+
					specs.selector + "{ animation-name: slantOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.crawOut = function(value, dis_type, counts, deg){
		deg = (!deg) ? 0 : deg;
		counts = (!counts) ?  1 : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes crawOut { from{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: skewY(360deg);}  \
					to{ display: none; opacity: 0; visibility: hidden; transform: skewY("+deg+"deg); } } "+
					specs.selector + "{ animation-name: crawOut; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
				setTimeout(function(){
					specs.element.setAttribute("style", ("display: none; " ));
				}, (value*1000));

		return specs;
	}

	specs.fadeToggle = function(value, view_display){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.fadeIn(value, view_display);
			//specs.element.setAttribute("style", ("display : "+view_display+";"));
		}else{
			//specs.element.setAttribute("style", ("display : none;"));	
			specs.fadeOut(value, view_display);
		}
		
		return specs;
	}

	specs.slideToggle = function(value, view_display){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.slideIn(value, view_display);
			//specs.element.setAttribute("style", ("display : "+view_display+";"));
		}else{
			//specs.element.setAttribute("style", ("display : none;"));	
			specs.slideOut(value, view_display);
		}
		return specs;
	}

	specs.wipeToggle = function(value, view_display){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.wipeIn(value, view_display);
			//specs.element.setAttribute("style", ("display : "+view_display+";"));
		}else{
			//specs.element.setAttribute("style", ("display : none;"));	
			specs.wipeOut(value, view_display);
		}
		return specs;
	}

	specs.zoomToggle = function(value, view_display, counts){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.zoomIn(value, view_display, counts);
		}else{
			specs.zoomOut(value, view_display, counts);
		}
		return specs;
	}

	specs.rotateToggle = function(value, view_display, counts){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.rotateIn(value, view_display, counts);
		}else{
			specs.rotateOut(value, view_display, counts);
		}
		return specs;
	}

	specs.growTurnToggle = function(value, view_display, counts){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.growTurnIn(value, view_display, counts);
		}else{
			specs.growTurnOut(value, view_display, counts);
		}
		return specs;
	}

	specs.swivelToggle = function(value, view_display, counts, degs){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.swivelIn(value, view_display, counts, degs);
		}else{
			specs.swivelOut(value, view_display, counts, degs);
		}
		return specs;
	}

	specs.flipToggle = function(value, view_display, counts, degs){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.flipIn(value, view_display, counts, degs);
		}else{
			specs.flipOut(value, view_display, counts, degs);
		}
		return specs;
	}

	specs.flyToggle = function(value, view_display, counts, degs){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.flyIn(value, view_display, counts, degs);
		}else{
			specs.flyOut(value, view_display, counts, degs);
		}
		return specs;
	}

	specs.slantToggle = function(value, view_display, counts, degs){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.slantIn(value, view_display, counts, degs);
		}else{
			specs.slantOut(value, view_display, counts, degs);
		}
		return specs;
	}

	specs.crawToggle = function(value, view_display, counts, degs){
		view_display = (!view_display) ? "block" : view_display;
		if(specs.css("display").includes("none") || specs.css("display") === ("none")){
			specs.crawIn(value, view_display, counts, degs);
		}else{
			specs.crawOut(value, view_display, counts, degs);
		}
		return specs;
	}



	//specisl effects......
	specs.appear = function(value, dis_type){
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

		 	specs.element.setAttribute("style", ("display: "+dis_type+"; " ));

			specs.style("@keyframes appear { from{ display: "+dis_type+"; visibility: hidden; opacity: ;1} \
					to { display: none; visibility: visible; opacity: 0;} } "+
					specs.selector + "{ animation-name: appear; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: 1; animation-timing-function: ease-out; animation-direction: normal; }"																										
				);
			setTimeout(function(){
				//alert("jion");
				specs.element.setAttribute("style", ("display: none;" ));
			}, (value*1000));

		return specs;
	}



	specs.blink = function(value, dis_type){
		 	dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}	
			specs.style("@keyframes blink { from{ display: none; opacity: 0;} to{ display: "+dis_type+"; opacity: 1;} } "+
					specs.selector + "{ animation-name: blink; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: infinite; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
			specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 0;" ));

		return specs;
	}

	specs.spin = function(value, dis_type, counts){
		counts = (!counts) ?  "infinite" : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

				specs.style("@keyframes spin { from{ display: none; opacity: 0; visibility: hidden; transform: scale(0.01, 0.01) rotateZ("+0+"deg); } \
					to{ display: "+dis_type+"; opacity: 1;  visibility: visible; transform: scale(1, 1) rotateZ("+360+"deg);} } "+
					specs.selector + "{ animation-name: spin; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//this.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));
				//$(specs.element).attr("display", dis_type);
				//$(specs.element).attr("opacity", "1");
				//specs.attr("opacity", "1");
			//}, value*1000);

		return specs;
	}

	specs.pulse = function(value, dis_type, counts){
		specs.attention(value, dis_type, counts);
	}
	specs.attention = function(value, dis_type, counts){
		counts = (!counts) ?  "infinite" : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 1;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

			if(specs.css("display").includes("none") || specs.css("display") === ("none")){
				specs.element.setAttribute("style", ("display : "+dis_type+";"));
			}
				specs.style("@keyframes attention { from{ box-shadow: 0 0 0 0px rgba(0,0,0,0.5);} \
					to{ box-shadow: 0 0 0 30px rgba(0,0,0,0); } } "+
					specs.selector + "{ animation-name: attention; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}
	specs.lighten = function(value, dis_type, colors, counts){
		colors = (!colors) ? ["#000000", "#ffffff"] : colors;
		counts = (!counts) ?  "infinite" : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

		 	//alert(colors[0]);
			if(specs.css("display").includes("none") || specs.css("display") === ("none")){
				specs.element.setAttribute("style", ("display : "+dis_type+";"));
			}
				specs.style("@keyframes lighten { from{ color: "+colors[0]+";} \
					to{ color: "+colors[1]+" } } "+
					specs.selector + "{ animation-name: lighten; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}

	specs.fillColor = function(value, dis_type, colors, counts){
		colors = (!colors) ? ["#fed456", "#54cc09"] : colors;
		counts = (!counts) ?  "infinite" : counts;
		dis_type = (!dis_type) ? "block":dis_type;
		 	if (!value){ value = 2;}
		 	else if(value === "fast"){ value = 0.5;}
		 	else if(value === "medium"){ value = 1.5;}		
		 	else if(value === "slow"){ value = 2.5;}
		 	else { value = (value/1000);}

		 	//alert(colors[0]);
			if(specs.css("display").includes("none") || specs.css("display") === ("none")){
				specs.element.setAttribute("style", ("display : "+dis_type+";"));
			}
				specs.style("@keyframes fillColor { from{ background-color: "+colors[0]+";} \
					to{ background-color: "+colors[1]+" } } "+
					specs.selector + "{ animation-name: fillColor; animation-duration: "+value+"s; animation-fill-mode: forwards; \
				animation-iteration-count: "+counts+"; animation-timing-function: ease-in; animation-direction: normal; }"																										
				);
				//specs.element.setAttribute("style", ("display: "+dis_type+"; opacity: 1; " ));

		return specs;
	}
	//dealing with stylesheets and design stuffs
	/*specs.insertRule = function (name, value, position, stylesheet){
		if(!stylesheet) stylesheet = 0;
		if(!position) position = 0;
		
		//check for the specified style sheet
		if(document.styleSheets[stylesheet]){
			document.styleSheets[stylesheet].insertRule(self.selector)
		}
	}*/
	
	specs.addScript = function (script){
		var in_script = document.createElement('script');
		in_script.innerHTML = script.toString();
		var ref = document.querySelector('head');
		ref.appendChild(in_script, ref);
		return specs;
	}
	
	specs.addStyle = function (css_code){
		var style = document.createElement('style');
		css_code = obj_to_string (css_code);
		css_code = css_code.replace(/,/g, ";").replace(/"/g, "").toString();
		style.innerHTML = specs.selector + css_code;
		var ref = document.querySelector('head');
		ref.appendChild(style, ref);
		return specs;
	}

	specs.style = function (css_code, insertion_Area='head'){

		//check if style already exist...
		//alert(specs.selector);
		var styler_area = document.querySelector('style');
		//alert(styler_area);
		if (styler_area == null || styler_area == "" || styler_area == undefined){
			var style = document.createElement('style');
			style.innerHTML = css_code;
			var ref = document.querySelector(insertion_Area);
			ref.appendChild(style, ref);
			return specs;
		}else{
			styler_area.append(css_code);
		}
		
	}

/*	specs.styleBody = function (css_code){
		var style = document.createElement('style');
		//css_code = obj_to_string (css_code);
		//css_code = css_code.replace(/,/g, ";").replace(/"/g, "").toString();
		style.innerHTML = css_code;
		var ref = document.querySelector('body');
		ref.insertBefore(style, specs.element);
		return specs;
	}*/
	
	specs.css = function (property, value){
		if(!value){
			
			if(isString(property)){
				var css_value = specs.element.style.property;
				if(!css_value ){
					const style = getComputedStyle(specs.element);
					css_value = style.getPropertyValue(property); 

					if(!css_value){
						//getting the style value of a pseudoELEMENT
						//pseudoElementStyle = getComputedStyle(element, '::before');
						css_value = getComputedStyle(specs.element, property);
					}
				}
				//alert(css_value);
				return css_value;
			}else{
				//TODO - change the object to strings and add it one after the other;
				property = obj_to_string (property);
				//property = obj_to_string(property);
				property = property.replace(/,/g, ";").replace(/{|}|"/g, "").toString();
				specs.element.setAttribute("style", (property));
			}
			
			
			
			
			//style.innerHTML = 'div {' + 'color: green;' + ' }';
			//Get  the first script tag
			//var ref = document.querySelector('script');
			//Insert our new styles before the frist script tag
			//ref.parentNode.insertBefore(style, ref)
		}else{
			specs.element.setAttribute("style", (property + ":" + value+";"));
			return specs;
		}
		
		return specs;
	}
	
	return specs;

}

/*var $.get =  function(goto, callback, error, response) {
		var data, status;
		response = (!response)? "responseText" : response;
		error = (!error)? null : error;
		  if (window.XMLHttpRequest) {
		    // code for IE7+, Firefox, Chrome, Opera, Safari
		    xmlhttp=new XMLHttpRequest();
		  } else {  // code for IE6, IE5
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.onreadystatechange=function() {
		    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		    	data = xmlhttp.response;
		    	status = "successful";
		      	callback(data, status);
		    }else{
		    	status = "error";
		    	data = xmlhttp.readyState;
		    	//if (data == "1"){
		    		error(data, status);
		    	//}
		    }
		  }
		  //xmlhttp.open("GET","getrss.php?q="+str,true);
		  xmlhttp.open("GET",goto,true);
		  xmlhttp.send();
	}*/

$.post = function (url, parameters, callback, error, response){
	response = (!response)? "responseText" : response;
	err = null
	error = (!error)? err : error;
	
	if (window.XMLHttpRequest) {
	    // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp=new XMLHttpRequest();
	} else {  // code for IE6, IE5
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
		xmlhttp.onreadystatechange=function() {
		//if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		//var readySo = xmlhttp.readyState > 0 ? 4 : 0;
		//alert(xmlhttp.readyState + "::" + xmlhttp.status);
		isStatus = xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304;
		if (xmlhttp.readyState == 4 && isStatus) {
	      	data = xmlhttp.response;
	    	status = "successful";
	      	callback(data, status);
	    }/* else{
	    	status = "error";
	    	data = xmlhttp.response;
	    	if (isFunction(error) == false){
	    		callback(data, status);
	    	}else{
	    		error(data, status);
	    	}
	    } */
	  }
	xmlhttp.open("POST",url,true);
	//xmlhttp.setRequestHeader('Content-Type', 'application/json');
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
	//xmlhttp.send('pub_key=vagtyhyf&aces_tok=yhtgfrdeswa');
	//alert(json_to_url(parameters));
	xmlhttp.send(json_to_url(parameters));
}

$.get =  function(goto, callback, error, response) {
	var data, status;
	response = (!response)? "responseText" : response;
	err = null
	error = (!error)? null : error;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlhttp=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			data = xmlhttp.response;
			status = "successful";
			callback(data, status);
		}else{
			status = "error";
			//data = xmlhttp.readyState;
			if (isFunction(error) == false){
	    		callback(data, status);
	    	}else{
	    		error(data, status);
	    	}
		}
	}
	xmlhttp.open("GET",goto,true);
	xmlhttp.send();
}
//associative functions that are very helpful
function isString (property){
	if(typeof property === "string" ||  (property instanceof String) || property.constructor === String){
			return true;
		}else{
			return false;
		}
}

function isFunction (variable){
	if(variable instanceof Function){
		return true;
	}else{ return false; }
}
function obj_to_string (obj){
	obj = JSON.stringify(obj);
	return obj;
		/*if(!(obj = JSON.stringify(obj))){
				//const element = document.querySelector('.element')
				//pseudoElementStyle = getComputedStyle(element, '::before')
				//console.log(pseudoElementStyle.content) // Before pseudo element
				var string_val = "";
				for (var i in obj){
					string_val += i + ":" + obj[i]+ ";";
					//alert(string_val);
				}
				obj = string_val;
			}
			return obj;*/
	}
function addScript (script){
	var in_script = document.createElement('script');
	in_script.innerHTML = script.toString();
	var ref = document.querySelector('head');
	ref.appendChild(in_script, ref);
	return in_script;
}

//json_to_url({"maike": "jogn", "paul": "absm"})
function json_to_url(json){
	var _ret = param(json).toString();
	return _ret;
}

function param(json){
	//this would convert a JSON structure to a URL-search-param.
	var _the_params = new URLSearchParams(json);
	return _the_params
}

/*else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }*/



/*  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("rssOutput").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","getrss.php?q="+str,true);
  xmlhttp.send();*/



/*  var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}*/

/*function $() {
	var get = function (){
		alert("rice and beans");
	}
	// body...
}*/
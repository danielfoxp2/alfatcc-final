var obtenhaElemento = function(id){
		return document.getElementById(id) || document.getElementsByClassName(id);
	};

	var addClass = function(el, classe){
	    el.className += ' '+classe;   
	};

	var removeClass =function(el, classe){
	    var elClass = ' '+el.className+' ';
	    while(elClass.indexOf(' '+classe+' ') != -1)
	         elClass = elClass.replace(' '+classe+' ', '');
	    el.className = elClass;
	};

	var adicionarClassElementos = function(elementos, classe){
		var i = 0;
		while(elementos[i]){
			var elemento = elementos[i];
			addClass(elemento, classe);
			i++;
		};
	};

	var removerClassElementos = function(elementos, classe){
		var i = 0;
		while(elementos[i]){
			var elemento = elementos[i];
			removeClass(elemento, classe);
			i++;
		};
	};

	var ajustaCSSIE8 = function() {
		
		var larguraDaJanela = window.outerWidth | document.documentElement.clientWidth;
		
		var elementos = document.querySelectorAll(".linhaGridResultado");

		removerClassElementos(elementos, 'p-linhaGridResultado');
		removerClassElementos(elementos, 'm-linhaGridResultado');
		removerClassElementos(elementos, 'g-linhaGridResultado');

		if(larguraDaJanela > 0 && larguraDaJanela <= 450){
			adicionarClassElementos(elementos, 'p-linhaGridResultado');
		}else if(larguraDaJanela > 400 && larguraDaJanela <= 950){
			adicionarClassElementos(elementos, 'm-linhaGridResultado');
		}else if(larguraDaJanela > 950){
			adicionarClassElementos(elementos, 'g-linhaGridResultado');
		}

	};

	window.attachEvent("onresize", ajustaCSSIE8);
	window.attachEvent("onload", ajustaCSSIE8);
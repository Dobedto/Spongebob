'use strict';
function numeros()
{
	let numero;
	do
	{
		if(numero < 1 || numero > 10)
		{
			numero=+prompt("Error, vuelve a escribir un numero:");
		}					
		else
		{
			numero=+prompt("Escribe un numero:");
		}
	}
	while(numero < 1 || numero > 10 || isNaN(numero));
	return numero;
}

function modoVisualizacion()
{
	let modo;
	let valido = false;
	do
	{
		modo=prompt("Elija modo de visualizacion: LISTA, PARRAFO o TABLA");
		switch(modo)
		{
			case "LISTA":	
				valido = true;						
				break;
			case "PARRAFO":	
				valido = true;
				break;
			case "TABLA":
				valido = true;
				break;
			default:
				alert("Error vuelva a introducir modo");
				break;
		}
	}
	while(!valido);
	return modo;
}

function modoTabla(num1, num2)
{
	let mayor;
	let tabla;
	let tr, td1, td2, td3;
	if(num1 > num2)
	{
		mayor = num1;
	}
	else
	{
		mayor = num2;
	}
	tabla = document.createElement("table");
	tabla.style.border = "1px solid black";
	tabla.style.borderCollapse = "collapse";
	document.body.appendChild(tabla);
	for(let i = 1; i <= mayor; i++)
	{
		tr = document.createElement("tr");
		tr.style.border = "1px solid black";
		td1 = document.createElement("td");
		td1.style.border = "1px solid black";
		td2 = document.createElement("td");
		td2.style.border = "1px solid black";
		td3 = document.createElement("td");
		td3.style.border = "1px solid black";
		td1.innerText = num2 + " x " + i;
		tr.appendChild(td1);
		td2.innerText = " = ";
		tr.appendChild(td2);
		td3.innerText = num2*i;
		tr.appendChild(td3);
		tabla.appendChild(tr);
	}				
	tabla.addEventListener('click', function(){
		document.body.removeChild(tabla);		
		let botonCss, botonSin;
		botonCss = document.getElementsByTagName("input")[0];
		botonSin = document.getElementsByTagName("input")[1];
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoLista(num1, num2);
	});
	crearBotones();
	let botonCss, botonSin;
	botonCss = document.getElementsByTagName("input")[0];
	botonSin = document.getElementsByTagName("input")[1];
	botonCss.addEventListener('click', function(){
		let td = document.getElementsByTagName("td");
		botonSin.style.visibility = "visible";
		botonCss.style.visibility = "hidden";
		for(let i = 0; i < td.length; i++)
		{
			if(i % 2 == 0)
				td[i].style.backgroundColor = "green";
			else
				td[i].style.backgroundColor = "blue";
		}
		tabla.style.color = "white";		
	});
	botonSin.addEventListener('click', function(){
		document.body.removeChild(tabla);	
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoTabla(num1, num2);
	});
}

function modoParrafo(num1, num2)
{
	let mayor;
	let div;
	let par;
	if(num1 > num2)
	{
		mayor = num1;
	}
	else
	{
		mayor = num2;
	}
	div = document.createElement("div");
	div.style.border = "1px solid black"; 
	document.body.appendChild(div);
	for(let i = 1; i <= mayor; i++)
	{
		par = document.createElement("p");
		par.innerText = num2 + " x " + i + "=" + num2*i;
		div.appendChild(par);					
	}
	div.addEventListener('click', function(){
		document.body.removeChild(div);		
		let botonCss, botonSin;
		botonCss = document.getElementsByTagName("input")[0];
		botonSin = document.getElementsByTagName("input")[1];
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoTabla(num1, num2);
	});
	crearBotones();
	let botonCss, botonSin;
	botonCss = document.getElementsByTagName("input")[0];
	botonSin = document.getElementsByTagName("input")[1];
	botonCss.addEventListener('click', function(){
		let parr = document.getElementsByTagName("p");
		botonSin.style.visibility = "visible";
		botonCss.style.visibility = "hidden";
		for(let i = 0; i < parr.length; i++)
		{
			if(i%2==0)
				parr[i].style.backgroundColor = "orange";
			else
				parr[i].style.backgroundColor = "red";
		}
		div.style.backgroundColor = "black";
		div.style.color = "white";
		
	});
	botonSin.addEventListener('click', function(){
		document.body.removeChild(div);	
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoParrafo(num1, num2);
	});
}

function modoLista(num1, num2)
{
	let mayor;
	let lista;
	let li;
	if(num1 > num2)
	{
		mayor = num1;
	}
	else
	{
		mayor = num2;
	}
	lista = document.createElement("ul");
	document.body.appendChild(lista);
	for(let i = 1; i <= mayor; i++)
	{
		li = document.createElement("li");
		li.innerText = num2 + " x " + i + "=" + num2*i;
		lista.appendChild(li);
	}
	lista.addEventListener('click', function(){
		document.body.removeChild(lista);
		let botonCss, botonSin
		botonCss = document.getElementsByTagName("input")[0];
		botonSin = document.getElementsByTagName("input")[1];
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoParrafo(num1, num2);
		});
	crearBotones();
	let botonCss, botonSin;
	botonCss = document.getElementsByTagName("input")[0];
	botonSin = document.getElementsByTagName("input")[1];
	botonCss.addEventListener('click', function(){
		let lis = document.getElementsByTagName("li");
		botonSin.style.visibility = "visible";
		botonCss.style.visibility = "hidden";
		for(let i = 0; i < lis.length; i++)
		{
			if(i%2==0)
				lis[i].style.backgroundColor = "orange";
			else
				lis[i].style.backgroundColor = "green";
		}
		lista.style.color = "red";
		lista.style.listStyleType = "square";
	});
	botonSin.addEventListener('click', function(){
		document.body.removeChild(lista);
		document.body.removeChild(botonCss);
		document.body.removeChild(botonSin);
		modoLista(num1, num2);
	});
}

let num1, num2, modo;
num1 = numeros();
num2 = numeros();
modo = modoVisualizacion();
console.log(modo);

if(modo == "TABLA")
{
	modoTabla(num1, num2);
}
else if(modo == "PARRAFO")
{
	modoParrafo(num1, num2);
}
else if(modo == "LISTA")
{
	modoLista(num1, num2);
}
else
{
	alert("Error");
}
function crearBotones()
{
	let botonCss, botonSin;
	botonCss = document.createElement("input");
	botonSin = document.createElement("input");
	botonCss.type = "button";
	botonSin.type = "button";
	botonCss.value = "Con CSS";
	botonSin.value = "Sin CSS";
	botonSin.style.visibility = "hidden";
	document.body.appendChild(botonCss);
	document.body.appendChild(botonSin);
}


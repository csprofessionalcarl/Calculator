var int1 = 0;
var int2 = 0;
var op = ''
var sol = 0;


function Arithmetic(choice){
	var before2 = document.getElementById("displayer").innerHTML;
	int1 = parseFloat(before2);
	op = choice;
	document.getElementById("displayer").innerHTML = '';
}

function Display(num){

	if(num == 'AC'){
		document.getElementById("displayer").innerHTML = '';
	}else if (num == 'C'){
		var before1 = document.getElementById("displayer").innerHTML;
		var after = before1.slice(0, -1);
		document.getElementById("displayer").innerHTML = after;
	}else{
		document.getElementById("displayer").innerHTML = document.getElementById("displayer").innerHTML.concat(num);
	}	
}

function Negative(){
	var before4 = document.getElementById("displayer").innerHTML;
	var x = parseFloat(before4);
	console.log("X = " + before4);
	x = x * -1
	document.getElementById("displayer").innerHTML = x.toString();
}


function Solution(){
	var before3 = document.getElementById("displayer").innerHTML;
	console.log("RAW: " + document.getElementById("displayer").innerHTML);
	int2 = parseFloat(before3);
	document.getElementById("displayer").innerHTML = '';
	switch(op){
		case '+':
			sol = int1 + int2;
			document.getElementById("displayer").innerHTML = sol;
			console.log("Int1 = " + int1);
			console.log("Int2 = " + int2);
			console.log("op = " + op);
			console.log("Sol = " + sol);
			break;
		case '-':
			sol = int1 - int2;
			document.getElementById("displayer").innerHTML = sol;
			console.log("Int1 = " + int1);
			console.log("Int2 = " + int2);
			console.log("op = " + op);
			console.log("Sol = " + sol);
			break;
		case '*':
			sol = int1 * int2;
			document.getElementById("displayer").innerHTML = sol;
			console.log("Int1 = " + int1);
			console.log("Int2 = " + int2);
			console.log("op = " + op);
			console.log("Sol = " + sol);
			break;
		case '/':
			sol = int1 / int2;
			document.getElementById("displayer").innerHTML = sol;
			console.log("Int1 = " + int1);
			console.log("Int2 = " + int2);
			console.log("op = " + op);
			console.log("Sol = " + sol);
			break;
		case '^':
			sol = int1 ** int2;
			document.getElementById("displayer").innerHTML = sol;
			console.log("Int1 = " + int1);
			console.log("Int2 = " + int2);
			console.log("op = " + op);
			console.log("Sol = " + sol);
			break;
	}
	int1 = sol;
	int2 = 0;
	op = '';
}
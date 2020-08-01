function check_keypress()
{
	document.onkeydown = function(e)
	{

		if (window.event.keyCode == 8 // delete key
			||window.event.keyCode == 48 // number = 0
			|| window.event.keyCode == 49 // number = 1
			|| window.event.keyCode == 50 // number = 2
			|| window.event.keyCode == 51 // number = 3
			|| window.event.keyCode == 52 // number = 4
			|| window.event.keyCode == 53 // number = 5
			|| window.event.keyCode == 54 // number = 6
			|| window.event.keyCode == 55 // number = 7
			|| window.event.keyCode == 56 // number = 8
			|| window.event.keyCode == 57 // number = 9
			)
		{
			return true;
		}
		else
		{
			return false;
		}
	}	
}

function generate_number()
{
	number_01 = Math.floor(Math.random() * 100);
	number_02 = Math.floor(Math.random() * 100);
	arrary_number = [number_01, number_02];
	document.getElementById("calculate").innerHTML = number_01 + " + " + number_02;
	return arrary_number;
}

function check_answer()
{
	sum = Number(number_01) + Number(number_02);
	answer = document.getElementById("answer").value;
	question = document.getElementById("question").innerHTML;

	if(answer != null
		&& answer.toString().length
		== sum.toString().length)
	{
		if(Number(sum) == Number(answer))
		{
			document.getElementById("question").innerHTML = (Number(question) + 1).toString();
			document.getElementById("answer").value = "";
			generate_number();
		}
		else
		{
			alert("Game Over");
			document.getElementById("answer").value = "";
			document.getElementById("question").innerHTML = "1";
			generate_number();
		}
	}
}
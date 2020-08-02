function generate_number()
{
	number_01 = Math.floor(Math.random() * 100) + Number(document.getElementById("question").innerHTML);
	number_02 = Math.floor(Math.random() * 100) + Number(document.getElementById("question").innerHTML);
	
	document.getElementById("calculate_formula").innerHTML = number_01 + " + " + number_02;
	document.getElementById("show_answer").innerHTML = " = " + (Number(number_01) + Number(number_02));
}

function check_answer()
{
	sum = Number(number_01) + Number(number_02);
	answer = document.getElementById("insert_answer").value;
	question = document.getElementById("question").innerHTML;

	if(answer != null
		&& answer.toString().length
		== sum.toString().length)
	{
		if(Number(sum) == Number(answer))
		{
			document.getElementById("question").innerHTML = (Number(question) + 1).toString();
			document.getElementById("insert_answer").value = "";
		}
		else
		{
			alert("Game Over");
			document.getElementById("insert_answer").value = "";
			document.getElementById("question").innerHTML = "1";
		}

		reset_timing();
		generate_number();
	}
}
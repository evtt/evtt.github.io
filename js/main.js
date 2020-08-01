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
function choose_show_answer()
{
	if(document.getElementById("choose_show_answer").checked)
	{
		document.getElementById("show_answer").style.display = "initial";
	}
	else
	{
		document.getElementById("show_answer").style.display = "none";
	}
	document.getElementById("insert_answer").focus();
}
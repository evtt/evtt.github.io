function start_timing()
{
	start_time = setInterval(timing,1);
}

function reset_timing()
{
	document.getElementById("show_timer").innerHTML = 0;
}

function timing(order)
{
	document.getElementById("show_timer").innerHTML = Number(document.getElementById("show_timer").innerHTML) + 1;
}
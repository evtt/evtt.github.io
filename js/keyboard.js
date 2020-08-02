function limit_keypress()
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

	document.onwheel = function(e) // Disable mouse wheel
	{
		return false;
	}
}
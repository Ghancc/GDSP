/* GDavis JavaScript for Options menu in ToG.html
*/

/*
* The name function returns the id of the square that was moused over.
* The id is placed into the name text box for the players to see
*/
function name(areaName)
{
	var box = document.getElementById("namebox");
	box.value = areaName;
}

function toggleColors()
{	
	squares = document.getElementsByClassName("square");
	var currentSquare;
	for(var i = 0; i < squares.length; i++)
	{
		currentSquare = squares[i];
		
		//If square doesn't equal it's occupied color, change it to that color
		if(currentSquare.style.fill == "red")
		{
			currentSquare.style.fill = "silver";
		}
		else if(currentSquare.style.fill !== "red")
		{
			currentSquare.style.fill = "red";
		}
		
	}
}

function toggleCastles()
{
	castles = document.getElementsByClassName("castle");
	var currentCastle;
	for(var i = 0; i < castles.length; i++)
	{
		currentCastle = castles[i];
		if(currentCastle.style.visibility == "hidden")
		{
			currentCastle.style.visibility = "visible";
		}
		else
		{
			currentCastle.style.visibility = "hidden";
		}
		
	}
}

function toggleCrowns()
{
	crowns = document.getElementsByClassName("crown");
	var currentCrown;
	for(var i = 0; i < crowns.length; i++)
	{
		currentCrown = crowns[i];
		if(currentCrown.style.visibility == "hidden")
		{
			currentCrown.style.visibility = "visible";
		}
		else
		{
			currentCrown.style.visibility = "hidden";
		}
	}
}

function toggleBarrels()
{
	barrels = document.getElementsByClassName("barrel");
	var currentBarrel;
	for(var i = 0; i < barrels.length; i++)
	{
		currentBarrel = barrels[i];
		if(currentBarrel.style.visibility == "hidden")
		{
			currentBarrel.style.visibility = "visible";
		}
		else
		{
			currentBarrel.style.visibility = "hidden";
		}
		
	}
}
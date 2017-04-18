var cell1 = [];
var cell2 = [];
var cell3 = [];
var cell4 = [];
var cell5 = [];
var cell6 = [];
var cell7 = [];
var cell8 = [];
var cell9 = [];


var gameOver = false; 
var xTurn = true;

function posClick(posClicked)
{
	var gameStatus= document.getElementById("gameStatus");

	if (gameOver === false)
	{
		if(document.getElementById(posClicked).innerHTML === "")
		{
			if(xTurn === true)
			{
				document.getElementById(posClicked).innerHTML = "X";
				document.getElementById(posClicked).style.color = "red";
				gameStatus.innerHTML = "It is O's turn!";
				gameStatus.style.color = "blue";
				xTurn = false;
			}
			else if(xTurn === false)
			{
				document.getElementById(posClicked).innerHTML = "O";
				document.getElementById(posClicked).style.color = "blue";
				gameStatus.innerHTML = "It is X's turn!";
				gameStatus.style.color = "red";
				xTurn = true;
			}

			checkXwinner();
			checkOwinner();
		}
	}
}



function checkXwinner()
{
	var Row1 = document.getElementsByClassName("r1");
	var Row2 = document.getElementsByClassName("r2");
	var Row3 = document.getElementsByClassName("r3");
	var Column1 = document.getElementsByClassName("c1");
	var Column2 = document.getElementsByClassName("c2");
	var Column3 = document.getElementsByClassName("c3");
	var Slant1 = document.getElementsByClassName("s1");
	var Slant2 = document.getElementsByClassName("s2");
	
	if (gameOver === false)
	{
		if(Row1[0].innerHTML+ 
			Row1[1].innerHTML+
			Row1[2].innerHTML === "XXX"
			||
			Row2[0].innerHTML+
			Row2[1].innerHTML+
			Row2[2].innerHTML === "XXX"
			||
			Row3[0].innerHTML+
			Row3[1].innerHTML+
			Row3[2].innerHTML === "XXX"
			||
			Column1[0].innerHTML+
			Column1[1].innerHTML+
			Column1[2].innerHTML === "XXX"
			||
			Column2[0].innerHTML+
			Column2[1].innerHTML+
			Column2[2].innerHTML === "XXX"
			||
			Column3[0].innerHTML+
			Column3[1].innerHTML+
			Column3[2].innerHTML === "XXX"
			||
			Slant1[0].innerHTML+
			Slant1[1].innerHTML+
			Slant1[2].innerHTML === "XXX"
			||
			Slant2[0].innerHTML+
			Slant2[1].innerHTML+
			Slant2[2].innerHTML === "XXX")
		{
			gameStatus.innerHTML = "Player 1 Wins!";
			gameStatus.style.color = "red";
			gameOver = true;
		}
		else
		{
			return;
		}
	}
}

function checkOwinner()
{
	var Row1 = document.getElementsByClassName("r1");
	var Row2 = document.getElementsByClassName("r2");
	var Row3 = document.getElementsByClassName("r3");
	var Column1 = document.getElementsByClassName("c1");
	var Column2 = document.getElementsByClassName("c2");
	var Column3 = document.getElementsByClassName("c3");
	var Slant1 = document.getElementsByClassName("s1");
	var Slant2 = document.getElementsByClassName("s2");

	
	if(Row1[0].innerHTML+ 
		Row1[1].innerHTML+
		Row1[2].innerHTML === "OOO"
		||
		Row2[0].innerHTML+
		Row2[1].innerHTML+
		Row2[2].innerHTML === "OOO"
		||
		Row3[0].innerHTML+
		Row3[1].innerHTML+
		Row3[2].innerHTML === "OOO"
		||
		Column1[0].innerHTML+
		Column1[1].innerHTML+
		Column1[2].innerHTML === "OOO"
		||
		Column2[0].innerHTML+
		Column2[1].innerHTML+
		Column2[2].innerHTML === "OOO"
		||
		Column3[0].innerHTML+
		Column3[1].innerHTML+
		Column3[2].innerHTML === "OOO"
		||
		Slant1[0].innerHTML+
		Slant1[1].innerHTML+
		Slant1[2].innerHTML === "OOO"
		||
		Slant2[0].innerHTML+
		Slant2[1].innerHTML+
		Slant2[2].innerHTML === "OOO"
		)
	{
		gameStatus.innerHTML = "Player 2 Wins!";
		gameStatus.style.color = "blue";
		gameOver = true;
	}
	else
	{
		return;
	}
}	

function btnClear()
{
	var tableData = document.getElementsByTagName("td");

	for (i=0; i< tableData.length; i++)
	{
		tableData[i].innerHTML = ""; //sets all cells empty
		tableData[i].style.color = "black";
		document.getElementById("gameStatus").innerHTML = "It is X's Turn!"
	}
	xTurn = true;
	gameOver = false;

	document.getElementById("gameStatus").style.color = "red";
}
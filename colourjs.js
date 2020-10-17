var num=8;
var colors=getrandomcolours(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
{
h1.style.background="#B3B3B3";

easyBtn.classList.add("select");
hardBtn.classList.remove("select");
num=4;
colors=getrandomcolours(num);

pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
if(colors[i])
{
	squares[i].style.background=colors[i];
}
else
squares[i].style.display="none";

}




});

hardBtn.addEventListener("click",function()
{

h1.style.background="#B3B3B3";

hardBtn.classList.add("select");
easyBtn.classList.remove("select");
num= 8;
	colors = getrandomcolours(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}


})




resetButton.addEventListener("click",function()
{
	resetButton.textContent="New colour";
	messageDisplay.textContent = "";
colors=getrandomcolours(6);
pickedColor = pickColor();

	for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
}
colorDisplay.textContent = pickedColor;//we have to write this agin coz the line down below execute first before resetfunction

h1.style.background="#B3B3B3";


});

colorDisplay.textContent = pickedColor;


function pickColor()
{
	var ran=Math.floor(Math.random()*colors.length);
	return colors[ran];



}


for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
var clickedColor = this.style.background; //rgb something;

if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Congrats, That's Correct!";
			changeColors(clickedColor);//all box color chancnge
			h1.style.background = clickedColor;
			resetButton.textContent="Once More?";

		} else {
			this.style.background = "black";
			messageDisplay.textContent = "Sorry That's Incorrect! Try Again...";
		}



	});

}




function getrandomcolours(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}

		return arr;
}



function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}
var button = document.createElement("button");
button.innerHTML = "Start Auto Clicker"
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener ("click", function() {
  if(stop===0) {
	stop = 1
	button.innerHTML = "Start Auto Clicker"
	} else if(stop===1) {
	stop = 0
	button.innerHTML = "Stop Auto Clicker"
	}
});
var bttn = document.getElementById("bttnClick");
var stop = 1;
function click() {
if(stop===0) {
bttn.click();
}
};
setInterval("click()", 1);
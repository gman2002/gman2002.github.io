var debt;
function setup() {
	loadJSON('http://www.treasurydirect.gov/NP_WS/debt/current')
}

function gotData(data) {
	debt = data;
}

function call() {
	document.body.innerHTML = "<p2>"+debt+"</p2>";
}
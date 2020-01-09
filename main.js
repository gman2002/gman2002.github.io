var debt;
function setup() {
	loadJSON('http://www.treasurydirect.gov/NP_WS/debt/current')
}

function gotData(data) {
	debt = data;
}

function call() {
	if (debt) {
		document.body.innerHTML = debt;
	}
}
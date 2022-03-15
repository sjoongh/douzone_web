
function sub() {
	console.log(arguments)
	return arguments[0]
}

sub()

const hap = function(x, y) {
	if (x < 2) {
		return
	}
	return x + y;
}
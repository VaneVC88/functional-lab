/*function lowercaser (input) {
	return input.tolowerCase()
}*/

/**
* lowercaser recibe input y lo transformsa a lowercase
**/

const lowercaser = (input) => {
	if(typeof input !== 'string'){
		throw ('input is not a valid string')
	}

	return input.toLowerCase()
}

module.exports = lowercaser
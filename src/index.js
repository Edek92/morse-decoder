const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {


	function strToMatrix(string) {
		let arrMatrix = [];
		let subarray;

		for (let i = 0; i < string.length; i = i + 10) {
			subarray = [];
			for (let j = 0; j < 10; j++) {
				subarray.push(string[i + j])
			}
			arrMatrix.push(subarray.join(''))
		}

		return arrMatrix;
	}


	function MorseToLetter (element) {
		let morse = '';
		let letter;

		if (element === '**********') {
			return ' ';
		}

		for (let i = 0; i < element.length; i = i + 2) {
			if (element[i] + element[i + 1] === '10') {
				morse += '.';
			} else if ((`${element[i]}${element[i + 1]}` === '11')) {
				morse += '-';
			}
		}

		for (let i in MORSE_TABLE) {
			if (i === morse) {
				letter = MORSE_TABLE[i];
			}
		}

		return letter;
	}

	let result = '';

	strToMatrix(expr).forEach ((elem) => {
		result += MorseToLetter (elem);
	})

	return result;
}


module.exports = {
    decode
}
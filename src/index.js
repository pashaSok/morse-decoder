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
	'**********': ' ',
};

function decode(expr) {
	/*var word =[];
	word = expr.split('**********');
	var str = word.join('');*/
	let letters=[];
    for(let i = 0; i < expr.length; i = i + 10){
		letters.push(expr.slice(i, i + 10));
	}
	var newStr = letters.join(' ');
	var encodeStr = newStr.replace(/00/gi, '').replace(/10/gi,'.').replace(/11/gi,'-');
	let encoderArr = encodeStr.split(' ');

	var nenewStr='';

	let expMorse = {'**********' : " "};
    for (let name in MORSE_TABLE) {
        expMorse[Object.values(MORSE_TABLE[name])] = name;
	}
	for( let j=0; j <= encoderArr.length; j++){
		for(let key in expMorse){
			if(encoderArr[j] == expMorse[key]){
			
				nenewStr+=key;
			}
		}
	}

	return nenewStr;
}
module.exports = {
    decode
}
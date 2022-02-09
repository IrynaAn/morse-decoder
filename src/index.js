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
   
    let decoded = '';

    for (let i = 0; i < expr.length; i += 10) {
        let l = expr.substr(i, 10);
        decoded = decoded+ decodeLetter(l); 
    }
    function decodeLetter(l) {
        if (l === '**********') return ' ';
         let mCode = '';
        for (let i = 0; i < l.length; i += 2) {
            let code = l.substr(i, 2);
            if (code =='10') {mCode =mCode+ '.'};
            if (code =='11') {mCode =mCode+ '-'};
           
        }
        return MORSE_TABLE[mCode];
    }
    return decoded;

}

module.exports = {
    decode
}
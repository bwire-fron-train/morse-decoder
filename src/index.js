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
    const parseMorze = function(sl) {
        if (sl !== '') {
            const pair = sl.substr(0, 2);
            const token = (pair === '10') ? '.' : (pair === '11') ? '-' : '';
            return token + parseMorze(sl.substr(2));
        } else {
            return sl;
        }
    };
    const letter = function(part) {
        return part === '**********' ? ' ' : MORSE_TABLE[parseMorze(part)];
    };

    const step =  function(e, acc) {
        if (e !== '') {
            acc.push(letter(e.substr(0, 10)));
            return step(e.substr(10), acc);
        } else {
            return acc;
        }
    }

    return step(expr, []).join('');
}

module.exports = {
    decode
}
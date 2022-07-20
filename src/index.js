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
var result="";
for (var i=0; i<expr.length ; i+=10){
    var expr_part_1=expr.substr(i,10);
    if (expr_part_1=='**********') result+=" ";
    else {
        var result_part_2="";
        for (var v=0; v<expr_part_1.length; v+=2){
            var expr_part_2=expr_part_1.substr(v,2);
            if (expr_part_2=='00') continue;
            else if (expr_part_2=='10') result_part_2+=".";
            else if (expr_part_2=='11') result_part_2+='-';
        }
        result+=MORSE_TABLE[result_part_2]
    }
}
return result;

}

module.exports = {
    decode
}


var alphabet='abcdef';
var regex=/abc/i;
var al=alphabet.match(regex).length;
console.log(al);

var re=/[dfai]/g;
var alp=alphabet.match(re).length;
console.log(alp);
var ree=/bc/;
console.log(alphabet.search(ree));
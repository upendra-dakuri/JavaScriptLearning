//var userName=prompt('what is your name : ');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("What's your name:", (userName) => {
if(userName)
console.log( 'hello'+userName);
else
console.log('hello');

//var question=prompt('[please ask a question :');
readline.question('Please provide a questions', (userQuestion) => {


  readline.close();
var randomNumber=Math.floor(Math.random()*8);
var eightBall=' ';
switch (randomNumber){
    case 0:
      eightBall = 'Better not tell you now.';
      break;
    case 1:
      eightBall = 'Concentrate and ask again.';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Dont count on it';
      break;
    case 5:
      eightBall = 'My reply is no.';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }
  console.log('The question is : ' +userQuestion);
  console.log('The eight ball answer: ' + eightBall);
})
})
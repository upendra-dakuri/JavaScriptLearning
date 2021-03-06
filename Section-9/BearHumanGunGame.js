function user(userChoice)
{
userChoice=userChoice.toLowerCase();
if(userChoice==='bear' || userChoice === 'human' || userChoice === 'gun')
{
    return userChoice;
}
else{
    return 'please enter valid option';
}
}

function computerChoice()
{
    var number=Math.floor(Math.random()*3);
    if(number===0)
    return 'human';
    else if(number===1)
    return 'bear';
    else
    return 'gun';
}

function computeWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}

function playGame() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
    //var promptUsesChoice = window.prompt("Please choose bear, human or gun");
    readline.question("Please choose bear, human or gun", (promptUsesChoice) => {
    var userChoice = user(promptUsesChoice);
    var computerCho = computerChoice();
    console.log(userChoice);
    console.log(computerCho);
    console.log(computeWinner(userChoice, computerCho));
})
}

playGame();

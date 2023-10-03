const input = require('sync-input');

class HangmanGame {
    constructor() {
        this.wons = 0;
        this.losers = 0;
        this.gameSelection = "";
    }

    getRandomWord() {
        return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    }

    generateHiddenWord() {
        console.log("\n" + this.hiddenWord);
    }

    isEnglishAlphabetCharacterAndLowerCase(char) {
        return /^[a-z]$/.test(char);
    }

    showResult() {
        console.log(`You won: ${this.wons} times.
        You lost: ${this.losers} times.`);
    }

    game() {

        console.log(`H A N G M A N  // ${this.attempts} attempts`);

        while (this.gameSelection !== "exit") {
            process.stdout.write('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');
            this.gameSelection = input();

            if (this.gameSelection === "play") {
                this.play();
            } else if (this.gameSelection === "results") {
                this.showResult();
            }
        }

        process.exit();
    }

    play() {
        this.wordList = wordList;
        this.attempts = 8;
        this.answer = this.getRandomWord();
        this.answerAsArray = this.answer.split('');
        this.hiddenWord = '-'.repeat(this.answer.length);
        this.lettersGuessed = [];

        while (this.attempts > 0 && this.hiddenWord !== this.answer) {
            this.generateHiddenWord();
            process.stdout.write("Input a letter: ");
            let letterToName = input();

            if (letterToName.length !== 1) {
                console.log("Please, input a single letter.");

            } else if (!this.isEnglishAlphabetCharacterAndLowerCase(letterToName)) {
                console.log("Please, enter a lowercase letter from the English alphabet.")

            } else if (this.answerAsArray.includes(letterToName) && !this.lettersGuessed.includes(letterToName)) {
                for (let i = 0; i < this.answer.length; i++) {
                    if (this.answerAsArray[i] === letterToName) {
                        this.hiddenWord = this.hiddenWord.substring(0, i) + letterToName + this.hiddenWord.substring(i + 1);
                    }
                }

            } else if (this.lettersGuessed.includes(letterToName)) {
                console.log(`You've already guessed this letter.  // ${--this.attempts} attempt${this.attempts === 1 ? '' : 's'}`)

            } else {
                console.log(`That letter doesn't appear in the word.  // ${--this.attempts} attempt${this.attempts === 1 ? '' : 's'}`);
            }

            if (letterToName.length === 1) {
                this.lettersGuessed.push(letterToName);
            }
        }

        if (this.hiddenWord === this.answer) {
            this.wons++;
            console.log("\n" + this.hiddenWord);
            console.log(`You guessed the word ${this.answer}!`);
            console.log("You survived!");
        } else {
            this.losers++;
            console.log("\nYou lost!");
        }
    }
}

const wordList = ["python", "java", "swift", "javascript"];
const hangman = new HangmanGame(wordList);
hangman.game();

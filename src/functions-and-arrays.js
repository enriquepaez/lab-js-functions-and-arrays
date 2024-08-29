// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if (num1 === num2) {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {
    if (wordsArray.length === 0) {
        return null;
    }

    let longestWord = "";

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0;
    }

    let sum = sumNumbers(numbersArray);
    let avg = sum / numbersArray.length;

    return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) {
        return null;
    }

    let wordExist = false;

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray.includes(wordToSearch)) {
            wordExist = true;
        }
        break;
    }

    return wordExist;
}

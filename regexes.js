// test method

// it applies the test method on regex pattern and string goes in.

let myString = "Hello World";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// match method method

// it applies the match method onto string and regex is passed as a param.
//  it helps to extract the word we searched for
//  here global g flag is not needed because we are just finding one or first match
// global flag is only required if we want to find more than first matches of our regex pattern

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// global flag + ignore case of letter

let testStr = "Repeat, repeat, Repeat";
let ourRegex = /Repeat/gi;
let result = testStr.match(ourRegex);

// period . is also called as wild card character = which matches almost anything.
// this means it could be anything let say there is a word 'fun' we are searching for .un means before un whatever the letter or number or whatever it would match that.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = exampleStr.match(unRegex); // result would be fun.

// matching single character with multiple posibilities
// big , bag, bug, has first and last letter in common we can do /b[aiu]g/

let exampleStr = "I don't know where my bag was, until mom found it for me";
let unRegex = /b[aeiou]g/gi;
let result = exampleStr.match(unRegex); // result would be bag.

//  lets match range of letters

let exampleStr = "The quick brown fox jumps over the lazy dog.";
let alphaRegex = /[a-z]/gi;
let result = exampleStr.match(alphaRegex); // result would be every letter in string. .

// lets match range of numbers

let exampleStr = "Blueberry 3.5353535935943539s are delicious";
let alphaRegex = /[2-6h-s]/gi;
let result = exampleStr.match(alphaRegex); // result would be between 2 to 6 numbers and letters betweeen h to s.

// How to not to match character or shit that we dont wana match - Negated
// let say we dont wana match

let quoteSample = "3 blind mices";
let myRegex = /[^0-9aieou]/gi;
let result = quoteSample.match(myRegex); // now result would be : blnd mcs // this also includes spaces, punctations

// match character that occur one or more time

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
// result would be : ["ss", "ss"];  // the two ss's are because of + and second set of ss is because of global that everytime when it occurs.

// match character that occur zero or more time

let soccerWord = "goooooooooooal"; // returns gooooooooo
let gphrase = "gut feeling"; // return g
let ophrase = "over the moon"; //returns null // because first character is not matching even the second character is occuring zero or more time
let checkRegex = /go*/;

soccerWord.match(checkRegex);
gphrase.match(checkRegex);
ophrase.match(checkRegex);

let chewieQuote = "Aaaaaaaaaaaaaaaaaaaaaaaaaaaargh";
let checkShit = /Aa*/; // global flag is not needed here because * is covering the occurence zero or more

// Greedy vs Lazy Matching

// Greedy Match: finds the longest possible part of the string that fits the regex pattern and returns that.
// Lazy Match : finds the smallest possible part of the string that fits the regex pattern adn returns that.
// regex patterns are default to greedy.
// I am not sure what is the use case of the lazy matching

let string = "titanic";
let regex = /t[a-z]*?i/;
let result = string.match(regex); // result would be titani with greedy match but if we add ? result would be ti only because there is nothing that comes between ti zero or more time.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); // result would be the whole text but if we add ? then it would just <h1>

// criminal case exercise. // find one or more

// criminal is represented with C
// now this is happening one time already but we want more so here it is going to be +
let crowd = "P1P2PP2P3P3P4P5P5PCCCCCCP8P9";
let regexPattern = /C+/;
let result = crowd.match(regexPattern); //result is going to be [CCCCCC];

// Match Beginning String Pattern

// same carret character can be used outside of bracket to match only at the beggining of the string.

let string = "Mark Zuckerbeg, hello I am Facebook CEO";
let regex = /^Mark/;
let result = string.match(regex); // resul would be Mark

// Match at the ending string pattern

let caboose = "The last car on a train is the caboose.";
let regex = /caboobse$/;
let result = caboose.match(regex);

// match all letters and numbers

let quoteSample = "The Five boxing wizards jumps quickly";
let regex = /\w/g; // using short hand \w matches lower/capital cases letters 0-9 and also _ underscores
let reshult = quoteSample.match(regex).length; // will return 31 excluding the spaces just the number of characters

//opposite is \W no letter or numbers will be matched but only spaces, "", . will matched.

// match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length; // result would be 3

// d with uppercase \D will match all characters including dollar sign except 5 00;

// restrict possible username

// 1) if there are numbers, it must be at the end
// 2) letters can be lower or uppercase
// 3) username must be two letters long, two letter names cant have numbers
// 4) the only numbers that are gonna appear is going to be after two letters

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,} \d*$/;

// {2,} means how many times a previous thing in this case letters can match
let result = username.match(userCheck);

// white spaces can be searched by \s
// non white space \S

// lower and uppper number of pattern matches.
// quantity specifiers

let checkString = "Ohhh no";
let checkReg = /"Oh{3, 6} no/;
let result = checkString.match(checkReg); // only matches h's between 3 to 6 occurances.

// if we only want lower and upper could be inifited.
//  if we have to exact the  we can use quantity specifier {2} this elminiates lower and upper and restrict the
// search to just the defined number. example Timmmmber Tim{4}ber;

// check all or none
// previous element is optional

let favWord = "favorite";
let regexFav = /favou?rite/;
let result = favWord.match(regexFav); // it is saying it may or may not have a U

// positive and negative lookahead
let quit = "qu";
let notquit = "qt";
let quRegex = /q(?=u)/; // returns q it makes sure that the next letter is u
let notquitRegex = /q(?!u)/; // returns q it makes sure that next letter is not u

// lets create a use case
//  match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = sampleWord.match(pwRegex);

// reuse pattern using capture groups.

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
let result = repeatStr.match(repeatRegex); // ["regex regex", "regex"]  \1 means one more occurance and last regex means the group that was searched is itself returned

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // this carret and dollar sign ensures that returned result are just under three.

// User Capture Groups to Search and Replace

let sentence = "This course about programming is shit";
let replace = "dope";
let regex = /shit/;
let result = sentence.replace(regex, replace); // this simply replaces

// using capture groups now

"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"); // this returns Camp Code // this reverses the order

// remove white space at beginning and the end

let hello = "     Hello, World    ";
let result = hello.replace(/^\s+|\s+$/g, "");

// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;

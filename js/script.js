/*** 
 * `quotes` array 
 * 
***/

const quotes = [
  {
    quote: '"Nobody can make you feel inferior without your permission."',
    source: 'Eleanor Roosevelt'
   },
  {
    quote: '“You can never plan the future by the past.” ',
    source: 'Edmund Burke'
   },
  {
    quote: '“He who has a why to live can bear almost any how.”',
    source: 'Friedrich Nietzsche'
   },
  {
    quote: '“Take into account that great love and great achievements involve great risk.”',
    source: 'Dalai Lama'
   },
  {
    quote: '“Lost time is never found again.”',
    source: 'Benjamin Franklin'
   },
  {
    quote: '"Nobody can make you feel inferior without your permission."',
    source: 'Henry Wadsworth Longfellow'
   },
  {
    quote: '“Common sense is genius dressed in its working clothes.”',
    source: 'Ralph Waldo Emerson'
   },
];

// console.log(quotes[5].quote)


/***
 * `getRandomQuote` function
 * 
***/

function getRandomQuote() {
  randomQuote = Math.floor(Math.random() * quotes.length)
  // console.log(randomQuote)
  currentQuote = quotes[randomQuote].quote
  currentSource = quotes[randomQuote].source
  // console.log(currentQuote);
  // console.log(currentSource);
 }


/***
 * `printQuote` function
***/

function printQuote() {
  getRandomQuote();
  document.querySelector('.quote').innerText = `${currentQuote}`
  document.querySelector('.source').innerText = `${currentSource}`
}

console.log(printQuote);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
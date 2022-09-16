const quotes = [
  {
    quote: "blablabl",
    author: "chawoo",
  },
  {
    quote: "blablabl",
    author: "minwoo",
  },
  {
    quote: "blablabl",
    author: "munkeyong",
  },
  {
    quote: "blablabl",
    author: "hajin",
  },
  {
    quote: "blablabl",
    author: "happy",
  },
  {
    quote: "blablabl",
    author: "special",
  },
  {
    quote: "blablabl",
    author: "super",
  },
  {
    quote: "blablabl",
    author: "pray",
  },
  {
    quote: "blablabl",
    author: "hapyeof",
  },
  {
    quote: "blablabl",
    author: "hasdlfjalf",
  }
];

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const randomquote =  quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = randomquote.quote
author.innerHTML = randomquote.author
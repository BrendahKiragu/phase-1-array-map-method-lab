const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalizeString(str){
  let capitalizeStr = ""
  let words = str.split(" ")
  for (let i=0; i<words.length; i++){
  //turns all words to lowercase
    let word =words[i].toLowerCase()

    capitalizeStr += word.charAt(0).toUpperCase() + word.slice(1) + " "
  }
  return capitalizeStr.trim()
}

const titleCased = ()=> { return tutorials.map(capitalizeString)}

console.log(titleCased())
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

// list of words that should not be executed by the function
const specialWords = ["JSONP", "NaN", "OO", "Web", "API", "stopPropagation", "preventDefault"];

const titleCased = () => {
  return tutorials.map((str) => {

    //Iterates each word in each string
    const words = str.split(" ");

    //arrow function which capitalizes each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    //joins the words to form a new string
    const newTutorialList = capitalizedWords.join(" ");
    return newTutorialList;
  });
};
console.log(titleCased())
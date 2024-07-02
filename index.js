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

const specialWords = new Set(["JSONP", "NaN", "OO", "Web", "API", "stopPropagation", "preventDefault"]);

function titleCased() {
  return tutorials.map(title => {
    return title.split(' ')
      .map(word => {
        const lowerWord = word.toLowerCase();
        if (specialWords.has(lowerWord)) {
          return lowerWord.toUpperCase(); // Preserve special words in uppercase
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
}

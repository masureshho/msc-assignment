const apiMockFunction = require('./apiMockFunction');
const usernames = require('./common-usernames');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./dictionary-wordlist.txt')
});

lineReader.on('line', function (line) {
  const hasCombinations = usernames.some((name) => {
    const hasPassword = apiMockFunction(name, line);
    if (hasPassword) {
      console.log(`Username and password is ${name} and ${line}`);
      return true;
    }
    return false;
  })
  lineReader.close()
});

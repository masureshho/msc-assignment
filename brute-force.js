const usernames = require('./common-usernames');
const apiMockFunction = require('./apiMockFunction');
const wordlist = 'abcdrfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ1234567890~!@#$%^&*()_+=';
const wordListArray = wordlist.split('');

/**
 * Returns boolean to indicate authendation success
 * @param {number} depth length of string required for combination check.
 * @param {string} baseString base string, initially empty.
 * @param {arrLetters} baseString letter lists to form string
 * @return {string} String with total combination of words separated with comma
 */
function createCombinatinon(depth, baseString, arrLetters) {
	var returnValue = "";
	for (var i = 0; i < arrLetters.length; i++) {
		returnValue += (depth == 1 ? "," + baseString + arrLetters[i] :
      createCombinatinon(depth - 1, baseString + arrLetters[i], arrLetters));
	}
  return returnValue;
}

for (let i = 1; i < 6; i++){
  const variables = createCombinatinon(i, "", wordListArray);
  const hasCombinations = usernames.some((name) => {
    const password = variables.split(',').find((a) => apiMockFunction(name, a ));
    if (password) {
      console.log(`Username and password is ${name} and ${password}`);
      return true;
    }
    return false;
  })
  if(hasCombinations) break;
}

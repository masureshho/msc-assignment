/**
 * Returns boolean to indicate authendation success
 * @param {string} username The username.
 * @param {string} password The password.
 * @return {boolean} Is success message
 */
const apiMockFunction = (username, password) => {
  if (username === 'root' && password === 'admin') return true;
  return false;
}
module.exports = apiMockFunction;

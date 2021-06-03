// Sanitize cleans user input to avoid interpretation of code in input fields
const sanitizer = require('sanitizer');

const middleware = (request, response, next) => {
  // for each entries in form we escape characters
  for (const prop in request.body) {
    request.body[prop] = sanitizer.escape(request.body[prop]);
}
  // To the next middleware
  next();
};

module.exports = middleware;
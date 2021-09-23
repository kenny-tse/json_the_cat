const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

      if (error) {
        return callback(error, null);
      }

      const data = JSON.parse(body);

      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback(`Breed of ${breedName} does not exist!`, null);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
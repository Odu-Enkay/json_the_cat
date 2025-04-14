const needle = require('needle'); // Ensure you require needle

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (err, response) => {
    if (err) {
      callback(err, null);
      return; // Exit to prevent further execution
    }

    const data = response.body;

    if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
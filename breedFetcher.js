const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What breed would you want to search for? ", (answer) => {
  console.log("You are searching for breed:", answer);
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${answer}`, (error, response, body) => {

      const data = JSON.parse(body);

      if (data[0]) {
        console.log(data[0].description);
      } else {
        console.log(`Breed not found!`);
        console.log(error)
      }
    }
  );
  rl.close();
});


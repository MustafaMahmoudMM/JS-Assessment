"use strict";

// Create your function that takes url of required service to be consumed and return a promise. Make request using your function to consume the service of the following link “https://jsonplaceholder.typicode.com/users”.

function callService(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something wrong, try again");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/*---------- Testing ----------*/

callService("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

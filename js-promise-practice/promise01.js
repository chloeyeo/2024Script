let myPromise = new Promise((resolve, reject) => {
  let x = true;
  //   let x = false;
  /* when x=false we call reject
  so catch() will be called and it will print inside catch */
  if (x) {
    resolve("Ran successfully");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((text) => {
    console.log("Inside then, after: " + text);
  })
  .catch((text) => {
    console.log("Inside catch, after: " + text);
  });

/* promises are there to replace callback functions or callbacks */

/* this is the callback function example:*/

const hungry = true;
// const hungry = false;

// ()=>{} is an arrow function
function eatCerealCallback(successCallback, errorCallback) {
  if (hungry) {
    successCallback({
      action: "boil",
      item: "rice",
    });
  } else {
    errorCallback("Not hungry now. Come back later.");
  }
}

eatCerealCallback(
  (successObject) => {
    console.log(
      `Callback: You're hungry! You should ${successObject.action} some ${successObject.item}.`
    );
  },
  (text) => {
    console.log(`Callback: ${text}`);
  }
); //called function eatCerealCallback

/* promise that will replace the above callback functions */

function eatCerealPromise(hungry) {
  return new Promise((resolve, reject) => {
    if (hungry) {
      resolve({
        action: "boil",
        item: "rice",
      });
    } else {
      reject("Not hungry now. Come back later.");
    }
  });
}

// eatCerealPromise()
//   .then((successObject) => {
//     console.log(
//       `Promise: You're hungry! You should ${successObject.action} some ${successObject.item}.`
//     );
//   })
//   .catch((text) => {
//     console.log(`Promise: ${text}`);
//   });

// alternatively:
eatCerealPromise(false).then(
  // first function inside then() is the resolve function
  (successObject) => {
    console.log(
      `Promise: You're hungry! You should ${successObject.action} some ${successObject.item}.`
    );
  },
  // second function inside then() is the reject function
  (text) => {
    console.log(`Promise: ${text}`);
  }
);

/* to run functions in parallel: */
// promise can have just resolve or just reject function as both are optional
const parallelFuncOne = new Promise((resolve) => {
  resolve("parallel function one resolved");
});

const parallelFuncTwo = new Promise((resolve) => {
  resolve("parallel function two resolved");
});

const parallelFuncThree = new Promise((resolve) => {
  resolve("parallel function three resolved");
});

/* inside the array are all the promises that we want to run.
Promise.all will run every single one of these promises and
as soon as it is done it will call .then() or .catch() methods
depending on whether they (promises) resolved or failed. 

Promise.all will only call .then() or .catch() if ALL of the
promises in the array are resolved (i.e. finished executing). */
Promise.all([parallelFuncOne, parallelFuncTwo, parallelFuncThree]).then(
  (texts) => {
    console.log(texts);
  }
);

/* Promise.race will call .then() or .catch() as soon as the
FIRST promise in the array is resolved/completed, instead of waiting
for all promises to complete. Since it returns after just the FIRST
promise is resolved, only the parameter from the resolve() called inside
the first function will return. */
Promise.race([parallelFuncOne, parallelFuncTwo, parallelFuncThree]).then(
  (text) => {
    // notice 'text', not'texts'
    console.log(text);
  }
);

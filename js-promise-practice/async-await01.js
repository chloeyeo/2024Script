/* async and await keywords just make promises easier to work with. */

/* using promises */
function takeShower(time) {
  return new Promise((resolve) => {
    console.log("Taking a shower...");
    resolve(`shower taken in ${time}`);
  });
}

function eatBreakfast(action, food) {
  return new Promise((resolve) => {
    console.log("Preparing breakfast...");
    resolve(`just had ${food} for breakfast after ${action}`);
  });
}

// takeShower("30 minutes")
//   .then((response) => {
//     console.log("first promise resolved");
//     return eatBreakfast(response, "cereal");
//   })
//   .then((response) => {
//     console.log("second promise resolved");
//     console.log(response);
//   });

/* using async and await keywords to simplify the above process: */
async function takeShowerBeforeBreakfast(showerTime, breakfastFood) {
  //can add try {} catch (error) { console.log(error);} here if have reject function in Promise so catch() will be the reject
  // async ONLY returns return value from RESOLVE function, but not from reject function,
  // i.e. if anything goes wrong async does not return the result from reject function but instead just stops
  // because async only returns a RESOLVE i.e. a SUCCESS value
  // to solve for this, we add the try and catch block
  // this is why we add try and catch block so that if async function goes wrong
  // we CATCH the error and this way we can print out or deal with the return value of reject function indirectly
  // await can ONLY be used when async is present
  //'pending' these kind of messages mean that it is a promise!
  try {
    const firstResponse = await takeShower(showerTime);
    const secondResponse = await eatBreakfast(firstResponse, breakfastFood);
    console.log(secondResponse);
  } catch (error) {
    console.log(error);
  }
}

takeShowerBeforeBreakfast("1 hour", "banana");

/* .then() vs await:
then() calls in order they were placed
however does not wait for each other to finish
i.e. finishing is asynchronous

however await both calls in the order they were placed
AND also waits for one to finish
i.e. await = one();
await = two();
in this case two() will not be called if one() does not finish
so one() and two() will be promises so one() and two() themselves will be asynchronous
however the await itself is synchronous. */

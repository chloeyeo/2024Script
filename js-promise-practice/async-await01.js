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
  const firstResponse = await takeShower(showerTime);
  const secondResponse = await eatBreakfast(firstResponse, breakfastFood);
  console.log(secondResponse);
}

takeShowerBeforeBreakfast("1 hour", "banana");

/* this is how objects are stored in mongoDB; this is JSON (JavaScript Object Notation) data, which allows JS to read the data. 
use API to send/receive JSON data. but using API, different computers use different servers - JSON solves this data
by using the same language for the different servers. use 'stringify' to convert data to JSON format.
JSON data is not exactly the same as object data
below is the exact object data
however in JSON data the fields are all in strings
for example "name", "speed", etc - this is in JSON format
in object format the fields aren't in string, as below (name, speed, etc) */
var cars = [
  {
    name: "sonata",
    speed: 10,
    color: "white",
    door: 4,
    start: function () {
      /*start is the name of the method*/
      return this.speed;
    },
  },
  {
    name: "sonata-new",
    speed: 10,
    color: "red",
    door: 4,
    start: function () {
      return this.speed;
    },
  },
];

let text = "<tr><td>Name</td><td>Speed</td><td>Color</td></tr>";
for (let i = 0; i < cars.length; i++) {
  text += "<tr>";
  text += `<td>${cars[i].name}</td>`;
  text += `<td>${cars[i].speed}</td>`;
  text += `<td>${cars[i].color}</td>`;
  text += "</tr>";
}

document.querySelector(".table").innerHTML = text;

/*log + tab*/
// console.log(cars[1].start());

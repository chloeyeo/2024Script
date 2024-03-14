const listData = [
  {
    title: "스크립트",
    checked: true,
  },
  {
    title: "자바",
    checked: true,
  },
  {
    title: "웹기획",
    checked: false,
  },
  {
    title: "노드",
    checked: false,
  },
];

console.log(listData);

// document.getElementsByClassName('todo') is the same as $(".todo") in jquery where .todo is css class selector
// document.getElementsByClassName('todo')[0].value is the same as what user types into the input form
const todoElem = document.getElementsByClassName("todo")[0];
// or document.querySelector(".btn");
const btnElem = document.getElementsByClassName("btn")[0];
const delAllBtnElem = document.getElementsByClassName("del-all")[0];

let viewList = [];
const viewListElem = document.getElementsByClassName("viewList")[0];

const listItems = document.getElementsByTagName("li");
const checkItems = document.getElementsByTagName("a");

function listDataObjects() {
  let text = "";
  for (let i = 0; i < listData.length; i++) {
    /* <li class="active"> */
    text += `<li><div class='listed-item'>${listData[i].title}</div><a onClick="checkItem(${i})">`;
    if (listData[i].checked) {
      text += `<i class="fa-regular fa-square-check"></i>`;
    } else {
      text += `<i class="fa-regular fa-square"></i>`;
    }
    text += `</a><div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
  }
  viewListElem.innerHTML = text;
}

// we use windows.localStorage to store token
// when dealing with user authentication
// (otherwise we have to use database which will take some time to load
// whereas localStorage is fast), so localStorage is useful

function checkItem(index) {
  /* listData[index].checked = true;
  or more like:
  listData[index].checked = !listData[index].checked 
  // so when checked = true it becomes false and vice versa 
  
  // then need to re-update the database
  let valueData = JSON.stringify(listData);
  localStorage.setItem("todoData", valueData);
  
  // and re-update the view/ui based on updated database
  listDataObjects();
  */
  highlightItem(index);
  let classList = checkItems[index].children[0].classList;
  if (classList.contains("fa-square-check")) {
    classList.replace("fa-square-check", "fa-square");
  } else {
    classList.replace("fa-square", "fa-square-check");
  }
}

function highlightItem(index) {
  if (listItems[index].classList.contains("active")) {
    listItems[index].classList.remove("active");
  } else {
    listItems[index].classList.add("active");
  }
}

function listElements() {
  //  get data from localStorage and put it in viewList.
  // localData is JSON data but our data isn't
  // so we have to convert JSON data back to local data format
  // using JSON.parse (= opposite of JSON.stringify)
  // before we parse the data, our code won't recognise
  // the JSON and will just treat it as a string of text just text
  // only after JSON.parse it will convert JSON back to local data
  // and our code will recognise it as what it is, an object
  if (localStorage.length > 0) {
    let storedData = localStorage.getItem("todoData");
    console.log(`This is JSON todoData: ${storedData}`);
    viewList = JSON.parse(storedData);
    console.log(`This is parsed local todoData: ${viewList}`);
  }

  let textList = "";
  for (let i = 0; i < viewList.length; i++) {
    /* <li class="active"> */
    // console.log(
    //   `viewList[${i}].title: ${viewList[i].title}, viewList[${i}].checked: ${viewList[i].checked}`
    // );
    textList += `<li><div class='listed-item'>${viewList[i].title}</div><a onClick="checkItem(${i})">`;
    if (viewList[i].checked) {
      textList += `<i class="fa-regular fa-square-check"></i>`;
    } else {
      textList += `<i class="fa-regular fa-square"></i>`;
    }
    textList += `</a><div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
  }

  // for (item of viewList) {
  //   textList += `<li><div class='listed-item'>${viewList[i].title}</div> <div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
  // }
  if (viewList == []) {
    textList = `<li><div>Nothing to do today!</div></li>`;
  }
  viewListElem.innerHTML = textList;
}

function deleteAll() {
  // viewList=[];
  viewListElem.innerHTML = "";
  viewList = [];
}

// checkbox => check/uncheck is equivalent to modifying data

function addElement() {
  //todoElem = input val
  if (todoElem.value != "") {
    let value = { title: todoElem.value, checked: false };
    viewList.push(value);
    // we also have to put value into windows.localstorage as
    // JSON data using stringify
    // stringify will convert value = {} into JSON
    // so that we store the JSON in windows.localstorage

    // convert to JSON data. JSON data has fields as strings too.
    let valueData = JSON.stringify(viewList);
    console.log(
      `this is the stringified JSON data of viewList width added item: ${valueData}`
    );

    localStorage.setItem("todoData", valueData); // update localStorage

    // when reload page, the listed items in UI will disappear
    // but what we stored in localStorage will still remain

    // so then we get data from windows.localStorage
    // and put this data into viewList.

    // viewList.push(todoElem.value);
    todoElem.value = "";
  } else {
    alert("Please type in what to do today");
    todoElem.focus(); // = input bar 깜빡깜빡 effect
  } // The focused element is the element that will receive keyboard and similar events by default
  listElements(); //update ui/ show list in view
  // listDataObjects();
}

// function deleteElement() {
//   viewList.pop();
//   if (viewList.length > 0) {
//     listElements();
//   } else {
//     viewListElem.innerHTML = "";
//   }
// }

function deleteSpecificElement(index) {
  viewList.splice(index, 1); // splice removes 1 element in viewList at index
  let jsonData = JSON.stringify(viewList);
  localStorage.setItem("todoData", jsonData); // update database

  listElements(); // update view (from updated database)
}

// listDataObjects();

// addElement and deleteAll are callback functions
// i.e. they are only called 'on click'
btnElem.addEventListener("click", addElement);
delAllBtnElem.addEventListener("click", deleteAll);

let someText = "";
if (!someText) {
  // this is same as if (someText == "")
  console.log("this text is empty"); //this code gets run
}
// if (someText) is same as if (someText != "")

// crud - create, read, update, delete
// = post, get, put, delete

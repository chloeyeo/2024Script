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
    text += `<li><div class='listed-item' onClick="highlightItem(${i})">${listData[i].title}</div>`;
    if (listData[i].checked) {
      text += `<a onClick="checkItem(${i})"><i class="fa-regular fa-square-check"></i></a>`;
    } else {
      text += `<a onClick="checkItem(${i})"><i class="fa-regular fa-square"></i></a>`;
    }
    text += ` <div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
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
  /* get data from localStorage and put it in viewList.
  if (localStorage.length > 0){
    let localData = localStorage.getItem("todoData");
    console.log(localData);
    // localData is JSON data but our data isn't
    // so we have to convert JSON data back to local data format
    // using JSON.parse (= opposite of JSON.stringify)
    // before we parse the data, our code won't recognise
    // the JSON and will just treat it as a string of text just text
    // only after JSON.parse it will convert JSON back to local data
    // and our code will recognise it as what it is, an object
    console.log(JSON.parse(localData));
    viewList = JSON.parse(localData);
  }
  */
  let textList = "";
  if (viewList.length > 0) {
    for (let i = 0; i < viewList.length; i++) {
      textList += `<li><div class='listed-item'>${viewList[i].title}</div> <div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
    }
  } else {
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
  if (todoElem.value != "") {
    /* let value = { title: todoElem.value, check: false };
    viewList.push(value);
    we also have to put value into windows.localstorage as
    JSON data using stringify
    stringify will convert value = {} into JSON
    so that we store the JSON in windows.localstorage
    
    convert to JSON data. JSON data has fields as strings too.
    let valueData = JSON.stringify(viewList);
    console.log(valueData);

    localStorage.setItem("todoData", valueData); // update localStorage

    when reload page, the listed items in UI will disappear
    but what we stored in localStorage will still remain

    so then we get data from windows.localStorage
    and put this data into viewList.
    */

    viewList.push(todoElem.value);
    todoElem.value = "";
  }
  /*else {
    alert("오늘의 할일을 입력하세요");
    todoElem.focus(); // = input bar 깜빡깜빡 effect
  } */
  listElements();
  // listDataObjects();
}

function deleteElement() {
  viewList.pop();
  if (viewList.length > 0) {
    listElements();
  } else {
    viewListElem.innerHTML = "";
  }
}

function deleteSpecificElement(index) {
  listData.splice(index, 1); // splice removes 1 element in viewList at index
  /* let valueData = JSON.stringify(listData);
  localStorage.setItem("todoData", valueData); // update database
  
  listDataObjects(); // update view (from updated database)
  
  */
  console.log(listData);
  if (listData.length > 0) {
    listDataObjects(); // update view after deletion
  } else {
    viewListElem.innerHTML = "";
  }
}

listDataObjects();

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

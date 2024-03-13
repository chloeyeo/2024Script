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

function checkItem(index) {
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
  let textList = "";
  if (viewList.length > 0) {
    for (let i = 0; i < viewList.length; i++) {
      textList += `<li><div class='listed-item'>${viewList[i]}</div> <div class="del-btn" onclick="deleteSpecificElement(${i})"><i class="fa-solid fa-trash"></i></div></li>`;
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

function addElement() {
  if (todoElem.value != "") {
    viewList.push(todoElem.value);
    todoElem.value = "";
  }
  listElements();
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
  listData.splice(index, 1); // remove 1 element in viewList at index
  console.log(listData);
  if (listData.length > 0) {
    listDataObjects();
  } else {
    viewListElem.innerHTML = "";
  }
}

listDataObjects();

// addElement and deleteAll are callback functions
// i.e. they are only called 'on click'
btnElem.addEventListener("click", addElement);
delAllBtnElem.addEventListener("click", deleteAll);

// crud - create, read, update, delete
// = post, get, put, delete

const inputElem = document.getElementsByClassName("searchInput")[0];
const btnElem = document.getElementsByClassName("btn")[0];

const container = document.getElementsByClassName("container")[0];
const showSearchResult = async function () {
  try {
    if (inputElem.value != "") {
      const response = await axios.get("https://dapi.kakao.com/v2/search/web", {
        params: { query: inputElem.value, sort: "accuracy", size: 50 },
        headers: {
          Authorization: "KakaoAK 78506c1bd0985343833cdcf21b8d7517",
        },
      });

      var dataList = response.data.documents;
      if (dataList == []) {
        return;
      }

      dataList.forEach((result) => {
        //   console.log(result);
        // console.log(`title: ${result.title} contents: ${result.contents}`);
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = result.title;

        const body = document.createElement("p");
        body.textContent = result.contents;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
      });
      inputElem.value = "";
    } else {
      alert("Please type in what you want to search");
      inputElem.focus();
    }
  } catch (error) {
    console.error(error.message);
  }
};

btnElem.addEventListener("click", showSearchResult);
inputElem.addEventListener("keypress", function (event) {
  // on INPUT button, not the Click button!!
  if (event.key === "Enter") {
    showSearchResult();
  }
});

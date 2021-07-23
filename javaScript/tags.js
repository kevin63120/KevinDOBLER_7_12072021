const tagContainer = document.querySelector(".tag-container");
const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");

const dataSecondarySearch1 = document.querySelector(
  "#dataListSecondarySearch1"
);
const dataSecondarySearch2 = document.querySelector(
  "#dataListSecondarySearch2"
);
const dataSecondarySearch3 = document.querySelector(
  "#dataListSecondarySearch3"
);

tagsDisplay = [];

function tagAdd(value, array) {
  if (array.length < 4) {
    array.push(value);
    return array;
  } else {
    array.splice(0, 0, value);
    array.splice(4, 1);
    return array;
  }
}
function tagRemove() {}
const tagsBtnsClose = document.querySelector(".tags_Btn-Close");
const tags = document.querySelectorAll("button");
tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    if (e.tag.firstChild()) {
      tag.remove();
    }
  });
});

function createTag(array) {
  if (array.length != 0) {
    const result = array.map((tag) => {
      return (tagHTML = `<button type="button" class="tag btn btn-primary mt-3 mb-3">${tag}<img
    class="tags_Btn-Close ml-3 "
    src="./pictures/x-circle.svg"    width="20px"
    height="20px"
    alt=""
  /></button>`);
    });
    return (tagContainer.innerHTML = result.join(" "));
  }
}

const displayTag = (e) => {
  e.preventDefault();
  let value = e.target.value;
  if (e.key === "Enter" && value != "") {
    if (dataSecondarySearch1 || dataSecondarySearch2 || dataSecondarySearch3) {
      dataSecondarySearch1.value = "";
      dataSecondarySearch2.value = "";
      dataSecondarySearch3.value = "";
    }
    tagAdd(value, tagsDisplay);
    createTag(tagsDisplay);
  }
};

dataSecondarySearch1.addEventListener("keyup", displayTag);
dataSecondarySearch2.addEventListener("keyup", displayTag);
dataSecondarySearch3.addEventListener("keyup", displayTag);

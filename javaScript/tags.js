export function initTags() {
  const tagContainer = document.querySelector(".tag-container");
  const tagsBtnClose = document.querySelectorAll(".tags_Btn-Close");

  const inputSecondarySearchIngredient = document.querySelector(
    "#dataListSecondarySearch1"
  );
  const inputSecondarySearchAppliance = document.querySelector(
    "#dataListSecondarySearch2"
  );
  const inputSecondarySearchUstensil = document.querySelector(
    "#dataListSecondarySearch3"
  );

  let tagsDisplay = [];

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
  const displayTag = (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (e.key === "Enter" && value != "") {
      if (
        inputSecondarySearchIngredient ||
        inputSecondarySearchAppliance ||
        inputSecondarySearchUstensil
      ) {
        inputSecondarySearchIngredient.value = "";
        inputSecondarySearchAppliance.value = "";
        inputSecondarySearchUstensil.value = "";
      }
      tagAdd(value, tagsDisplay);
      createTag(tagsDisplay, tagContainer);
    }
  };

  function createTag(array, container) {
    if (array.length != 0) {
      const result = array.map((tag) => {
        return `<button type="button" class="tag btn btn-primary mt-3 mb-3">${tag}<img class="tags_Btn-Close ml-3 " src="./pictures/x-circle.svg" width="20px" height="20px" alt=""/>
        </button>`;
      });
      return (container.innerHTML = result.join(""));
    }
  }

  inputSecondarySearchIngredient.addEventListener("keyup", displayTag);
  inputSecondarySearchAppliance.addEventListener("keyup", displayTag);
  inputSecondarySearchUstensil.addEventListener("keyup", displayTag);
}

function tagRemove() {}
const tags = document.querySelectorAll("button");
tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    if (e.tag.firstChild()) {
      tag.remove();
    }
  });
});

const tagContainer = document.querySelector('.tag-container');
const tagsBtnClose = document.querySelectorAll('.tags_Btn-Close');

const dataSecondarySearch = document.querySelector('#dataListSecondarySearch1');

tagsDisplay = [];



function tagAdd (value , array) {
  if(array.length < 4){
    array.push(value);
    return array
  }else{
    array.splice(0,0,value);
    array.splice(4,1);
    return array
    
  }
};




function createTag(array){
  if(array.length != 0){
    const result = array.map(tag => {
    return tagHTML = `<button type="button" class="tag btn btn-primary mt-3 mb-3">${tag}<img
    class="tags_Btn-Close ml-3 "
    src="./pictures/x-circle.svg"    width="20px"
    height="20px"
    alt=""
  /></button>`;
 
  });
   return tagContainer.innerHTML=(result.join(" "));
  }
}

dataSecondarySearch.addEventListener("keyup",(e)=>{
  e.preventDefault()
  let value = e.target.value ;
  if(e.key === "Enter" && value != ""){ 
    dataSecondarySearch.value = ""
    tagAdd(value,tagsDisplay);
    createTag(tagsDisplay) 
    }

  console.log(tagsDisplay)
});







  // function qui teste si la valeur est contenut dans le tableau et si non l'insert dans le tableau.
  export function testvalue(value, array) {
    if (!array.includes(value)) {
      array.push(value);
    }
  }

  export function testValue2(value){
    let newArray=[]
    if (!newArray.includes(value)) {
     newArray.push(value);
    }
    return newArray
  }
  export function testArray(array){
    let newArray=[];
    array.array.forEach(element => {
      
    });((elm)=>{
      if(!newArray.includes(elm)){
        newArray.push(elm)
      }else
      return newArray         
    }
    )}
    
  export function warningMessageText(value , containerMessage, stringmessage) {
    let warningMessage ;
    if(value.length === 0){
         warningMessage = `<h2>${stringmessage}</h2>`;
        containerMessage.innerHTML= warningMessage
    }
    else{
      containerMessage.innerHTML = `` 
    }
  }


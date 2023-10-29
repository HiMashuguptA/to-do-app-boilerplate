// var inputText = document.getElementById("input")

// var subBtn = document.getElementById("button")

// var todoListTag = document.getElementById("todolist")

// var FinalValue = []

// subBtn.addEventListener("click", addItemToArray)

// inputText.addEventListener("keypress",(event)=>{
//     if(event.key=="Enter"){
//         addItemToArray()
//     }
// })
// function addItemToArray(){
//     if(inputText.value!=""){
//         FinalValue.push(inputText.value)
//     }
//     inputText.value=""
//     display()
// }
// function display(){
//     todoListTag.innerHTML = "";
//     FinalValue.map((curr,index)=>{
//         var listItem=`<li id="item${index}">
//         <div>${curr}</div>
//         <div>
//           <span onclick="deleteItem(${index})">&times;</span>
//           <span>|</span>
//           <span onclick="editItem(${index})">Edit</span>
//         </div>
//     </li> `
//     todoListTag.innerHTML+=listItem
//     })
// }
// function deleteItem(index){
//     FinalValue.splice(index,1)
//     display()
// }
// function editItem(index){
//     var newValue=prompt("enter value")
//     FinalValue.splice(index,1,newValue)
//     display()
// }
// var RestBtn = document.getElementById("reset")

// RestBtn.addEventListener("click",()=>{

//     FinalValue=[]
//     display()
// })

var inputText = document.getElementById("input")
var subBtn = document.getElementById("button")
var todoListTag = document.getElementById("todolist")
var todoArr = []

inputText.addEventListener("click", addvalue)

subBtn.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        addvalue()
    }
})
function addvalue(){
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }
    inputText.value=""
    display();
}
function display(){
    todoListTag.innerHTML=""
    todoArr.map((curr,i)=>{
        var listItem=`<li id="item${i}">
        <div>${curr}</div>
        <div>
        <span onclick="delItem(${i})">&times;</span>
        <span>|</span>
        <span onclick="eidtItem(${i})">Edit</span>
        </div>
    </li>`
    todoListTag.innerHTML += listItem
    })
}
function deleteItem(index){
    todoArr.splice(index,1)
    display();
}
function editItem(index){
    var newValue=prompt("Enter New Value")
    todoArr.splice(index,1,newValue)
    display();
}


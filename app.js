// input tag
var inputText = document.getElementById("input")

// add button tag 
var subBtn = document.getElementById("button")

// todo list
var todoListTag = document.getElementById("todolist")

// arry to store all todo elements, initially empty
// if(localStorage.getItem("todoArr")!=null){
//     todoArr = JSON.parse(localStorage.getItem("todoArr"))
// }else{
//         todoArr = []
//     }

var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []
display()
// When Add Button Is Clicked
subBtn.addEventListener("click", addItemToArray)

// if Input is on Focous and enter is clicked addItemtoArray should be called to add Element to array 
inputText.addEventListener("keypress",(event)=>{
    // console.log(event.key)

    // push the value to array if its not a empty string
    if(event.key=="Enter"){
        addItemToArray()
    }
})

function addItemToArray(){
    // console.log(event.targ.target.value)  #(same thing as below we done,.......this is a shortcut)

    // push the value To The Array
    if(inputText.value!=""){
        todoArr.push(inputText.value)
        localStorage.setItem("todoArr",JSON.stringify(todoArr))
    }
    // Reset the Value To The Empty String ""
    inputText.value=""
    display()
}

function display(){
    // clear out previuos old ones everytimes and add one item to array and display it
    todoListTag.innerHTML="";
    // map throught Array and display
    todoArr.map((curr,i)=>{
        // structure of li tag
        var listItem=`<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`
// insert it inside <ul id="todoList"> 
    todoListTag.innerHTML += listItem
    })
}

function deleteItem(index){
    console.log(index)

    // delete the element[index] from todoArr
    todoArr.splice(index,1)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
}

function editItem(index){
    // get new value from user
    var newValue=prompt("Please Edit")
    
    // insert the value to array at that index
    todoArr.splice(index,1,newValue)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
}
// reset the todo list
document.getElementById("reset").addEventListener("click",()=>{
    todoArr=[]
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
})
var arr = JSON.parse(localStorage.getItem("todoArr"))
console.log("todoArr:",todoArr)









// ??LocalStorage 
var cartArr = ["Book","Pen","Eraser"]

// in place of cart we can use any name
localStorage.setItem("cart",JSON.stringify(cartArr))


cartArr.push("scale")
localStorage.setItem("cart", JSON.stringify(cartArr))
console.log("cartArr:",cartArr)


var tempArr = JSON.parse(localStorage.getItem("cart"))
console.log("tempArrr:", tempArr);


// use of session storage --> used for jitne time ke liye webopen rahega tabtak value save rahega
var cartArr = ["Book","Pen","Eraser"]

// in place of cart we can use any name
sessionStorage.setItem("cart",JSON.stringify(cartArr))


cartArr.push("scale")
sessionStorage.setItem("cart", JSON.stringify(cartArr))
console.log("cartArr:",cartArr)


var tempArr = JSON.parse(sessionStorage.getItem("cart"))
console.log("tempArrr:", tempArr);






// 20 will be printed
var x= 20 || 30
console.log("x:", x);


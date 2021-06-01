const todo = [
    { text: 'Clean the office table',
     completed: true 
    },
    { text: 'Buy new pair of shocks', 
    completed: false 
},
    { text: 'Dental check up', 
    completed: true
 },
    { text: 'Course Complition',
     completed: false 
    },
    { text: 'Revision of Opps Concepts',
     completed: true
}
  ]
let completedTodo = 0
let unCompletedTodo  = 0 
const filters = {
    searchText : '' ,
    hideCompleted : false
}


const renderTodos = function(todos , filters ){
   let filtersTodo = todos.filter(function(note){
        return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('tbody').innerHTML = ""
    document.querySelector("#count-1").innerHTML = ""
        document.querySelector("#count-2").innerHTML = ""
            document.querySelector("#count-3").innerHTML = ""

    
filtersTodo = filtersTodo.filter(function (note) {
    if (filters.hideCompleted){
        return !note.completed
    }
    else {
        return true
    }
})
   filtersTodo.forEach(function(not) {
    
       const noteEl = document.createElement("tr")
       noteEl.textContent = not.text
       document.querySelector('tbody').appendChild(noteEl)

       if (not.completed) {
        noteEl.style.color = "green"
        completedTodo += 1 
   
       } 
       else {
           noteEl.style.color = 'red'
           unCompletedTodo += 1
       }
   })
   let count = filtersTodo.length
   let remainTodo = document.createElement("h4")
   remainTodo.textContent = `Total : ${count} ` 
   document.querySelector('#count-1').appendChild(remainTodo)

   let trueTodo = document.createElement("h4")
   trueTodo.textContent = `Completed : ${completedTodo} ` 
   document.querySelector('#count-2').appendChild(trueTodo)


   let falseTodo = document.createElement("h4")
   falseTodo.textContent = `UnCompleted: ${unCompletedTodo} ` 
   document.querySelector('#count-3').appendChild(falseTodo)
   completedTodo = 0
   unCompletedTodo = 0
   
}



//  listing the todo search 
document.querySelector('#searchTodo').addEventListener('input' , function(event) {

  filters.searchText = event.target.value
    renderTodos(todo , filters)

})

renderTodos(todo , filters)
document.querySelector('#newform').addEventListener('submit' , function(event){
    event.preventDefault()
 
   todo.push({
            text : event.target.elements.addTodo.value ,
        completed :event.target.elements.isChecked.checked
    
   })
   renderTodos( todo  , filters)
   event.target.elements.newTodo.value = ""  
} )

document.querySelector('#customControlInline').addEventListener('change' , function(event) {
 filters.hideCompleted = event.target.checked
renderTodos(todo , filters)
})

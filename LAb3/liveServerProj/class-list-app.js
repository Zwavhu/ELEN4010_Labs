//1.1-Creating class list filter

document.querySelector('#search-text').addEventListener('input', function(e){
    // DO SOMETHING
    })
  
    // Exercise 3
   //TASK 1-Dynamically add a a students list, add An entire list with one button click
  const studentNameButton= document.getElementById('add-student')
  
  studentNameButton.addEventListener(
    'click',
    function addStudent() {
      let ul = document.getElementById('dynamic-list') 
      let student = document.getElementById('new-student-text') 
      let li = document.createElement('li')
      li.setAttribute('id',student.value)
      let text = document.createTextNode(student.value)
      li.appendChild(text)
      ul.appendChild(li)
     
    //   document.body.appendChild(ul) // append <p> to body
    },
    false
  )
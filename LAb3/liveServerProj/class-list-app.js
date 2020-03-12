//1.1-Creating class list filter

  
    // Exercise 3
   //TASK 1-Dynamically add a a students list, add An entire list with one button click
  const studentNameButton= document.getElementById('add-student')
  
  studentNameButton.addEventListener(
    'click',
    function() {
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
 
  // document.querySelector('#search-text').addEventListener('input', function(e){
     
     
  // },false)

  const help = document.querySelector('#search-text')
  console.log(help)

 


//   TASK2: Filtering

// function filterStudent(){
//     let studentList = document.getElementById('dynamic-list')
//     let student = document.getElementById('new-student-text')
//     let studentName = document.getElementById(student.value)
//     var $myArray = $('dynamic-list').attr('id');

//     // converting Nolist into an array since filter does not work on non-arrays
//     let items = document.querySelectorAll('li')
//     let itemsArray = Array.from(items)

//     studentList.filter($myArray)
// }
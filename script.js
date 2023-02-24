// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //gets current day and appends day to html in order to display it 
  function displayToday() {
  var dayToDisplay = document.getElementById("currentDay")
  dayToDisplay.innerHTML = "";
  // Date obj referenced in "A Smarter Way to Learn JavaScript" textbook
  var rightNow = new Date();
  var theDay = rightNow.getDay();
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var nameOfToday = dayNames[theDay];
  dayToDisplay.append(nameOfToday)
  }
  displayToday();

  var currentHour= new Date().getHours();

  $(".time-block").each(function() {
    var calendarHours = parseInt($(this).attr("id").split("-")[1]);
    var children = this.children
  //  console.log(children.parentElement)
    children[2].addEventListener('click', function() {
    console.log(children[1].value)
    var scheduledEvent = localStorage.setItem(children[0].parentElement.getAttribute("id"), children[1].value)
    })
    if (calendarHours < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present future");
    }else if (calendarHours === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past future");
    }else {
      $(this).addClass("furture");
      $(this).removeClass("past present")
    }

    window.addEventListener('load', scheduledEvent) {
      scheduledEvent.preventDefault();
    }
   
  }):

 
  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
})

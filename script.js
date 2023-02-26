
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
    //gets the integer of the div id 
    var calendarHours = parseInt($(this).attr("id").split("-")[1]);
    
    var children = this.children

    //console.log(children.parentElement)
    //children[2] = button , function for when button is clicked localStorage saves content
    children[2].addEventListener('click', function() {
    console.log(children[1].value)
    localStorage.setItem(children[0].parentElement.getAttribute("id"), children[1].value)
    })

  //keeps content on the page with getItem + if statement 
  var scheduledEvent = localStorage.getItem(children[0].parentElement.getAttribute("id"));
  if (scheduledEvent) {
  children[1].value = scheduledEvent;
  }

  // if statements to color code / change classes of textareas 
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

  });


})

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  console.log('page has loaded');
  var hoursAr = [
    $('#hour-9'),
    $('#hour-10'),
    $('#hour-11'),
    $('#hour-12'),
    $('#hour-13'),
    $('#hour-14'),
    $('#hour-15'),
    $('#hour-16'),
    $('#hour-17')
  ]

  var dateEl = $('#currentDay');
  var now = dayjs().format('dddd, MMM D YYYY, h:mm A');
  
  
  


  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Delegate event listener to the parent element, <div id="buttons">
 buttonListEl.on('click', '.letter-button', function (event) {
   var displayLetterEl = $('<div>');
   displayLetterEl.addClass('letter');
   // get letter from clicked letter button's `data-letter` attribute and use it for display
   displayLetterEl.text($(event.target).attr('data-letter'));
   displayEl.append(displayLetterEl);
 });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // dayjs().hour()
  var currentHour = 13;
  currentHour-=9;
  console.log("current hour ", currentHour);

  for (let i = 0; i < hoursAr.length; i++) {
    var presentHour = i;
    var currentHourEl = hoursAr[i];
    

    if (presentHour === currentHour) {
      currentHourEl.attr('class', 'row time-block present')
     } 
     if (presentHour < currentHour) {
      currentHourEl.attr('class', 'row time-block past')
     }
     if (presentHour > currentHour) {
      currentHourEl.attr('class', 'row time-block future')
     }

}
  
    console.log("present hour ", presentHour);
    console.log("current element ", currentHourEl);


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.
  dateEl.text(now)
});

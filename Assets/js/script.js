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
  var saveItems = [];
  var dateEl = $('#currentDay');
  var now = dayjs().format('dddd, MMM D YYYY, h:mm A');

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  // dayjs().hour()
  var currentHour = 10;
  currentHour-=9;
  console.log("currentHour ", currentHour);

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

  // TODO: Add a listener for click events on the save button. 
  function clickButton(event) {
    event.preventDefault;
    var selectedButton = this;
    var buttonParent = $(selectedButton).parent();
    var buttonTextarea = $(selectedButton).siblings()[1].value;
    var buttonName = buttonParent[0].id;

    localStorage.setItem(JSON.stringify(buttonName), JSON.stringify(buttonTextarea))
    console.log($(selectedButton).siblings()[1]);
    
  }
  $('.btn').on('click', this, clickButton)



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.
  dateEl.text(now)
});

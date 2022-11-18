// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var hoursAr = [
    $("#hour-9"),
    $("#hour-10"),
    $("#hour-11"),
    $("#hour-12"),
    $("#hour-13"),
    $("#hour-14"),
    $("#hour-15"),
    $("#hour-16"),
    $("#hour-17"),
  ];
  //get current time
  var dateEl = $("#currentDay");
  var now = dayjs().format("dddd, MMM D YYYY, h:mm A");

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  var currentHour = 12;
  currentHour -= 9;

  for (let i = 0; i < hoursAr.length; i++) {
    var presentHour = i;
    var currentHourEl = hoursAr[i];
    if (presentHour === currentHour) {
      currentHourEl.attr("class", "row time-block present");
    }
    if (presentHour < currentHour) {
      currentHourEl.attr("class", "row time-block past");
    }
    if (presentHour > currentHour) {
      currentHourEl.attr("class", "row time-block future");
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var textareaKey = currentHourEl[0].dataset.name;
    var textareaEl = currentHourEl[0].children[1].dataset.text;
    var textInArea = window.localStorage.getItem(JSON.stringify(textareaEl));
    var textAreaElement = currentHourEl[0].children[1];
    console.log(textareaEl);
    if (textareaKey === textareaEl && textInArea !== null) {
      textAreaElement.append(JSON.parse(textInArea));
    }
  }
  // TODO: Add a listener for click events on the save button.
  function clickButton(event) {
    event.preventDefault;
    var selectedButton = this;
    var buttonParent = $(selectedButton).parent();
    var buttonTextarea = $(selectedButton).siblings()[1].value;
    var buttonName = buttonParent[0].id;

    localStorage.setItem(JSON.stringify(buttonName), JSON.stringify(buttonTextarea));
  }
  $(".btn").on("click", this, clickButton);

  // TODO: Add code to display the current date in the header of the page.
  dateEl.text(now);
});

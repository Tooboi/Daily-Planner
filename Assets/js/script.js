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
  //Add code to apply the past, present, or future class
  var currentHour = dayjs().hour(); //put in the hour you want to test here instead of dayjs().hour();
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
    //Add code to get any user input that was saved in localStorage
    var textareaKey = currentHourEl[0].dataset.name;
    var textareaEl = currentHourEl[0].children[1].dataset.text;
    var textInArea = window.localStorage.getItem(JSON.stringify(textareaEl));
    var textAreaElement = currentHourEl[0].children[1];
    if (textareaKey === textareaEl && textInArea !== null) {
      textAreaElement.append(JSON.parse(textInArea));
    }
  }
  //Add a listener for click events on the save button.
  function clickButton(event) {
    event.preventDefault;
    var selectedButton = this;
    var buttonParent = $(selectedButton).parent();
    var buttonTextarea = $(selectedButton).siblings()[1].value;
    var buttonName = buttonParent[0].id;

    localStorage.setItem(JSON.stringify(buttonName), JSON.stringify(buttonTextarea));
  }
  $(".btn").on("click", this, clickButton);
  //display the current date in the header of the page
  dateEl.text(now);
});

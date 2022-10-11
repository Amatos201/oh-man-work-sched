// Display today's day and date
var TodayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(TodayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get values 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save in local storage
        localStorage.setItem(time, text);
    })
   
    function timeFinder() {
        //get current hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add  class
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Gets the item from storage if its there
    $("#hr8 .description").val(localStorage.getItem("hour8"));
    $("#hr9 .description").val(localStorage.getItem("hour9"));
    $("#hr10 .description").val(localStorage.getItem("hour10"));
    $("#hr11 .description").val(localStorage.getItem("hour11"));
    $("#hr12 .description").val(localStorage.getItem("hour12"));
    $("#hr13 .description").val(localStorage.getItem("hour13"));
    $("#hr14 .description").val(localStorage.getItem("hour14"));
    $("#hr15 .description").val(localStorage.getItem("hour15"));
    $("#hr16 .description").val(localStorage.getItem("hour16"));
    $("#hr17 .description").val(localStorage.getItem("hour17"));

    timeFinder();
})
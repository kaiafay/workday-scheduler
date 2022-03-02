$(document).ready(function() {
    // save time and text input upon clicking 'save' button
    $(".saveBtn").on('click', function() {
        // save text input in a variable
        var textInput = $(this).siblings('.description').val();
        // save time stamp in a variable
        var timeStamp = $(this).parent().attr('id');
        // save key value pair to localstorage
        localStorage.setItem(timeStamp, textInput);

        // show user that their input was saved
        $(this).html("Saved!")
        setTimeout(function() {
            // switch back to 'save' text after 3 seconds
            $(".saveBtn").html("Save");
        }, 1500);
    });

    // check time and update colors accordingly
    var updateTime = function() {
        // save the current hour in a variable
        var currentHour = moment().hours();

        $('.time-block').each(function() {
            // convert the schedule hour to a number and save it in a variable
            var scheduleHour = parseInt($(this).attr("id"));

            // if statement to check if the current hour has passed
            if (scheduleHour < currentHour) {
                $(this).addClass("past");
            } else if (scheduleHour === currentHour) {
                // add and remove classes according to the time
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };

    // check localstorage for saved data and load it onto the page
    $('#9 .description').val(localStorage.getItem("9"));
    $('#10 .description').val(localStorage.getItem("10"));
    $('#11 .description').val(localStorage.getItem("11"));
    $('#12 .description').val(localStorage.getItem("12"));
    $('#13 .description').val(localStorage.getItem("13"));
    $('#14 .description').val(localStorage.getItem("14"));
    $('#15 .description').val(localStorage.getItem("15"));
    $('#16 .description').val(localStorage.getItem("16"));
    $('#17 .description').val(localStorage.getItem("17"));
  

    // call the updateTime function upon loading the page
    updateTime();
    // check current time every 10 seconds
    var checkTime = setInterval(updateTime, 10000);

    // display the day
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
});
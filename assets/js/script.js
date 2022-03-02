$(document).ready(function() {
    // save time and text input upon clicking 'save' button
    $(".saveBtn").on('click', function() {
        // save text input in a variable
        var textInput = $(this).siblings('.description').val();
        // save time stamp in a variable
        var timeStamp = $(this).parent().attr('id');
        // save key value pair to localstorage
        localStorage.setItem(timeStamp, textInput);
    });

    // check time and update colors accordingly
    var updateTime = function() {
        // save the current hour in a variable
        var currentHour = moment().hours();

        $('.time-block').each(function() {
            // save the schedule hour in a variable
            var scheduleHour = parseInt($(this).attr("id"));
            console.log(scheduleHour);

            // if statement to check if the current hour has passed
            if (scheduleHour < currentHour) {
                $(this).addClass("past");
            } else if (scheduleHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };

    updateTime();

    // display the day
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
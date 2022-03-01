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
});
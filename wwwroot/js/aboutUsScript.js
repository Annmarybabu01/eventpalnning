$(document).ready(function () {
    $(".flip").click(function () {
        // Find the next .panel element after the clicked .flip
        $(this).next(".panel").slideToggle("slow");
    });
});
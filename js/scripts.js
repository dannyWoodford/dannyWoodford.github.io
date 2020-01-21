$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $('.show_list').click(function() {
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeOut();
        $(".navTrigger").toggleClass('active');
    })
});

$(document).on("click", "ul li a", function () {
    $(this).closest("li").addClass("active").siblings().removeClass("active");
})

new fullpage("#scrollHolder", {
    autoScrolling: true,
})
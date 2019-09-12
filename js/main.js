function filter(x) {
    $(".img-item").addClass("hideImg")

    if (x == "*") {
        $(".img-items").removeClass("hideImg")
    } else {
        $("." + x).removeClass("hideImg")
    }
}
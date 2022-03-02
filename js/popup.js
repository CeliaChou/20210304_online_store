$(".popclose").click(function() {
    $('.popbox').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popbox').fadeOut(200);
});
$(".pop_Btn2").click(function() {
    $('.popbox').fadeOut(200);
});
$(".buy").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".already_buy").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".commodity_introduction").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".shopping").click(function() {
    alert("已加入購物車");
});
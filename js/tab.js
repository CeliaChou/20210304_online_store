jQuery(function($) {
    $('.tab').click(function() {
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表
        $('.panel').eq(index).addClass('is-show');
        $('.is-show2').removeClass('is-show2');
        $('.is-active2').removeClass('is-active2');
        $('.tab2:first').addClass('is-active2');
        $('.panel2:first').eq(index).addClass('is-show2');
        $('.tabs-stage>div').hide();
        $('.tab-active2').removeClass('tab-active2');
        $('.tab-active').removeClass('tab-active');
    });
});
jQuery(function($) {
    $('.tab2').click(function() {
        $('.is-active2').removeClass('is-active2');
        $(this).addClass('is-active2');
        $('.is-show2').removeClass('is-show2');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表
        $('.panel2').eq(index).addClass('is-show2');
        $('.tabs-stage>div').hide();
        $('.tab-active2').removeClass('tab-active2');
        $('.tab-active').removeClass('tab-active');
    });
});
jQuery(function($) {
    $('.tab3').click(function() {
        $('.is-active3').removeClass('is-active3');
        $(this).addClass('is-active3');
        $('.is-show3').removeClass('is-show3');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表
        $('.panel3').eq(index).addClass('is-show3');
    });
});
jQuery(function($) {
    $('.tab4').click(function() {
        $('.is-active4').removeClass('is-active4');
        $(this).addClass('is-active4');
        $('.is-show4').removeClass('is-show4');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表
        $('.panel4').eq(index).addClass('is-show4');
    });
});
// Show the first tab by default
$('.tabs-stage>div').hide();
// $('.tabs-stage div:first').show();
// $('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event) {
    event.preventDefault();
    $('.tab-active').removeClass('tab-active');
    $('.tab-active2').removeClass('tab-active2');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage>div').hide();
    $($(this).attr('href')).show();
    $('.is-show2').removeClass('is-show2');
});
$('.tabs-nav2 a').on('click', function(event) {
    event.preventDefault();
    $('.tab-active2').removeClass('tab-active2');
    $('.tab-active').removeClass('tab-active');
    $(this).parent().addClass('tab-active2');
    $('.tabs-stage>div').hide();
    $($(this).attr('href')).show();
    $('.is-show2').removeClass('is-show2');
});
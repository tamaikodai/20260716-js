$(function () {

    // 各<li>にキャプション用の<div>を追加
    $("li").append("<div></div>");

    // キャプションを設定
    $("li > div").each(function () {
        $(this).html(
            "<p>" + $(this).siblings("img").attr("alt") + "</p>"
        );
    });

    // ホバー時のキャプション表示
    $(document).on("mouseenter", "li", function () {
        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().animate({
            top: 0
        }, 300);
    });

    // ホバー終了時
    $(document).on("mouseleave", "li", function () {
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().animate({
            top: "10px"
        }, 300);
    });

    // 画像クリックで<li>を複製
    $(document).on("click", "li img", function () {
    $(this).closest("li").after($(this).closest("li").clone());
});

});

// ふわって入ってくるやつ
$(function() {
    $(window).scroll(function(){
        $(".block").each(function(){
            let Scroll = $(window).scrollTop();
            let Block = $(this).offset().top;
            let Height = $(window).height();
            if (Scroll > Block - Height + 100) {
                $(this).addClass("blockIn");
            }
        });
    });
});


//メニューを出す
$(function(){
    let i = 0;
    $(".spHeader").on("click",function(){
        i++;
        $(".tabArea").addClass("tabMove");
        $(".background").addClass("go");
        $(this).toggleClass('active');

        if(i % 2 ===0){
            $(".tabArea").removeClass("tabMove");
            $(".background").removeClass("go");
        }
    });
    $(".tabList").on("click",function(){
        i++;
        if(i % 2 ===0){
            $(".tabArea").removeClass("tabMove");
            $(".background").removeClass("go");
            $(".spHeader").toggleClass('active');
        }
    });
})
// $(function(){
//     $(window).resize(function(){
//     let wHeight = $(window).height();
//     let fHeight = $(".first").height();
//     let positionT = fHeight * 0.6;
//     let positionB = fHeight * 0.1;
//     let bottom = $(this).scrollTop() + wHeight;
//     if(wHeight > 950){
//             $(".policy").css({
//                 "top": 740,
//                 "bottom": 50
//             });
//             console.log("big");
//         }else if(wHeight <= 950){
//             $(".policy").css({
//                 "top": "80%",
//                 "bottom": 50
//             });
//             console.log("small");
//         }
//     });
// })

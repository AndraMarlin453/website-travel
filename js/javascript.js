let tombolGaris = $(".tombol-garis");
let menu = $("nav .menu ul");

function klikGaris(){

    tombolGaris.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });

}

$(document).ready(function(){

    let width = $(window).width();
    if(width < 990){
        klikGaris();
    }
})

// fix menu tidak tampil
$(window).resize(function(){
    let width = $(window).width();
    if(width > 989){
        menu.css("display", "block");
    }else{
        menu.css("display", "none");
    }
    klikGaris();
})

// Effect Scroll
$(document).ready(function(){
    let scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("salmon");
        }else{
            $("nav").removeClass("salmon");
        }
    })
})
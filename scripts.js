$isClicked = false;
$isHovered = false;

$(".__box > img").click(function(event){
    $(".__first_screen_container").css({
        "background-image" : "url(" + $(this).attr('src') + ")"
    });
});

$(".__full_screen_button").click(function(event){
    if ($isClicked) {
        $(".__main_title, .__slider, .__screen_toogler").css({
            "display" : "block"
        });

        $(".__full_screen_button").css({
            "background" : "none"
        });

        $(".__icon").css({
            "background-image" : "url('img/fullscreen_inverse.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
        $(".__first_screen_container_clear").removeClass('__first_screen_container_clear').toggleClass('__first_screen_container');
        $isClicked = false;
    }
    else {
        $(".__main_title, .__slider, .__screen_toogler").css({
            "display" : "none"
        });

        $(".__full_screen_button").css({
            "border": "1px solid whitesmoke",
            "background" : "none"
        });

        $(".__icon").css({
            "background-image" : "url('img/close_fullscreen_fin_inverse.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
        $(".__first_screen_container").removeClass('__first_screen_container').toggleClass('__first_screen_container_clear');
        $isClicked = true;
    }
});


$(".__full_screen_button").mouseenter(function() {
    if ($isClicked) {
        $(".__full_screen_button").css({
            "background" : "whitesmoke",
            "transition" : "200ms ease-out"
        });
        
        $(".__icon").css({
            "background-image" : "url('img/close_fullscreen_fin.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
    }
    else {
        $(".__full_screen_button").css({
            "background" : "whitesmoke",
            "transition" : "200ms ease-out"
        });
        
        $(".__icon").css({
            "background-image" : "url('img/fullscreen.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
    }
}).mouseleave(function() {
    if ($isClicked) {
        $(".__full_screen_button").css({
            "border": "1px solid whitesmoke",
            "background" : "none"
        });
        
        $(".__icon").css({
            "background-image" : "url('img/close_fullscreen_fin_inverse.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
    }
    else {
        $(".__full_screen_button").css({
            "border": "1px solid whitesmoke",
            "background" : "none",
        });
        
        $(".__icon").css({
            "background-image" : "url('img/fullscreen_inverse.png')",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "z-index" : "9999"
        });
    }
});
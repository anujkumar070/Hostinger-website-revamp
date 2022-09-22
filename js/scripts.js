$("document").ready(function () {
    $("#mycarousel").carousel({ interval: 3000 })
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')) {

            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        };

    });
    $("#reserve-button").click(function () {
        $("#reservemodal").modal("show");
    });
    $("#login-modal-button").click(function () {
        $("#loginModal").modal("show");
    });

});
$(document).ready(function () {
    $("#monthly").click(function () {
        $(this).addClass('active');
        $("#yearly").removeClass('active')

        $(".monthlyPriceList").removeClass('d-none');
        $(".monthlyPriceList").addClass('fadeIn');
        $(".yearlyPriceList").addClass('d-none');

        $(".indicator").css("left", "2px");
    })

    $("#yearly").click(function () {
        $(this).addClass('active');
        $("#monthly").removeClass('active');

        $(".yearlyPriceList").removeClass('d-none');
        $(".yearlyPriceList").addClass('fadeIn');
        $(".monthlyPriceList").addClass('d-none');

        $(".indicator").css("left", "163px");
    })
    $("#navbutton").click(function () {
        if ($("#Navbar").hasClass("show")) {
            $("#Navbar").removeClass("show")
        }
        else {
            $("#Navbar").addClass("show")
        }
    });
})

$("[data-toggle=tooltip").tooltip();


$(document).ready(function () {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");

    var highest = 0;
    var absoluteSide = "";

    for (var i = 0; i < front.length; i++) {
        if (front[i].offsetHeight > back[i].offsetHeight) {
            if (front[i].offsetHeight > highest) {
                highest = front[i].offsetHeight;
                absoluteSide = ".front";
            }
        } else if (back[i].offsetHeight > highest) {
            highest = back[i].offsetHeight;
            absoluteSide = ".back";
        }
    }
    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");
});


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 570 && scroll < 4270) {
            $(".black").css("background", "#1f0f46");
        }

        else {
            $(".black").css("background-image", "url(https://images.unsplash.com/photo-1552083940-86877723de7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
        }
    })
})



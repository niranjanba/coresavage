!(function ($) {
    "use strict";

    $(document).on(
        "click",
        ".nav-menu a, .mobile-nav a, .scrollto",
        function (e) {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                e.preventDefault();
                var target = $(this.hash);
                if (target.length) {
                    var scrollto = target.offset().top;

                    if ($("#header").length) {
                        scrollto -= $("#header").outerHeight();
                    }

                    if ($(this).attr("href") == "#header") {
                        scrollto = 0;
                    }

                    $("html, body").animate(
                        {
                            scrollTop: scrollto,
                        },
                        1500,
                        "easeInOutExpo"
                    );

                    if ($(this).parents(".nav-menu, .mobile-nav").length) {
                        $(".nav-menu .active, .mobile-nav .active").removeClass(
                            "active"
                        );
                        $(this).closest("li").addClass("active");
                    }

                    if ($("body").hasClass("mobile-nav-active")) {
                        $("body").removeClass("mobile-nav-active");
                        $(".mobile-nav-toggle i").toggleClass(
                            "icofont-navigation-menu icofont-close"
                        );
                        $(".mobile-nav-overly").fadeOut();
                    }
                    return false;
                }
            }
        }
    );

    //work image
    var width;
    window.onresize = window.onload = function () {
        const image = document.querySelector(".work-img");
        width = this.innerWidth;
        if (width < 500) {
            image.src = "assets/img/work-mobile2.png";
        } else if (width > 500 && width < 760) {
            image.src = "assets/img/work-mobile.png";
        } else if (width > 960) {
            image.src = "assets/img/work.png";
        }
    };
    // Mobile Navigation
    if ($(".nav-menu").length) {
        var $mobile_nav = $(".nav-menu").clone().prop({
            class: "mobile-nav d-lg-none",
        });
        $("body").append($mobile_nav);
        $("body").prepend(
            '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
        );
        $("body").append('<div class="mobile-nav-overly"></div>');

        $(document).on("click", ".mobile-nav-toggle", function (e) {
            $("body").toggleClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
                "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").toggle();
        });

        $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass("active");
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                    $(".mobile-nav-overly").fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // Porfolio isotope and filter
    $(window).on("load", function () {
        var portfolioIsotope = $(".portfolio-container").isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
        });

        $("#portfolio-flters li").on("click", function () {
            $("#portfolio-flters li").removeClass("filter-active");
            $(this).addClass("filter-active");

            portfolioIsotope.isotope({
                filter: $(this).data("filter"),
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $(".venobox").venobox();
        });
    });

    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            900: {
                items: 6,
            },
        },
    });

    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
    });
    $(document).ready(function () {
        $("#autoWidth").lightSlider({
            autoWidth: true,
            loop: true,
            onSliderLoad: function () {
                $("#autoWidth").removeClass("cS-hidden");
            },
        });
    });
})(jQuery);

//new range slider
const slider = document.querySelector(".range .slider");
const value = document.querySelector(".range-amount");
let pv;
let fv;
let r;
const n = 3;
let returnValue = 0;

const cs = document.querySelector(".cs-return");
const fd = document.querySelector(".fd-return");
const mf = document.querySelector(".mf-return");
const bs = document.querySelector(".bs-return");

slider.addEventListener("input", function () {
    const intrest = 11;
    let x = slider.value;
    let color = `linear-gradient(90deg, tomato ${x}%, rgb(214,214,214) ${x}%)`;
    slider.style.background = color;
    if (slider.value > 10 && slider.value < 30) {
        value.innerHTML = "20,000";
        pv = 20000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    } else if (x > 20 && x < 50) {
        value.innerHTML = "50,000";
        pv = 50000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    } else if (x > 40 && x < 70) {
        value.innerHTML = "75,000";
        pv = 75000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    } else if (x > 60 && x < 81) {
        value.innerHTML = "1,00,000";
        pv = 100000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    } else if (x > 80 && x == 100) {
        value.innerHTML = "2,00,000";
        returnAmount(200000, 21, 3);
        pv = 200000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    } else {
        value.innerHTML = "10,000";
        pv = 10000;
        csreturn(pv, intrest, n);
        fdreturn(pv, 5.4, n);
        mfreturn(pv, 7.4, n);
        bsreturn(pv, 9.2, n);
    }
    function returnAmount(pv, r, n) {
        fv = pv * Math.pow(1 + r / 100, n);
        const amount = formatNumber(fv);
        return amount;
    }
    function csreturn(pv, r, n) {
        returnValue = returnAmount(pv, r, n);
        cs.innerHTML = returnValue;
    }
    function fdreturn(pv, r, n) {
        returnValue = returnAmount(pv, r, n);
        fd.innerHTML = returnValue;
    }
    function mfreturn(pv, r, n) {
        returnValue = returnAmount(pv, r, n);
        mf.innerHTML = returnValue;
    }
    function bsreturn(pv, r, n) {
        returnValue = returnAmount(pv, r, n);
        bs.innerHTML = returnValue;
    }
});

//client card progress bar

const progressBar = document.querySelector(".progress-bar");
const progressPercentage = document.querySelector(".progress-percentage");
const amountRisedTxt = document.querySelector(".amount-rised span");
totalAmount = 210000;
const amountRised = 0;
const per = `${(amountRised / totalAmount) * 100}%`;
progressBar.style.width = per;
progressPercentage.innerHTML = parseInt(per) + "%";
amountRisedTxt.innerHTML = formatNumber(amountRised);

//Number formater
function formatNumber(num) {
    input = num;
    var n1, n2;
    num = num + "" || "";
    n1 = num.split(".");
    // n2 = n1[1] || null;
    n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    num = n2 ? n1 + "." + n2 : n1;
    return num;
}

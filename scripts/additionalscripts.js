$(function () {
    $(document).on('click','div.popup-login a.anonymous-template-sign-in',function ($event) { $event.preventDefault();})
    $(document).on('click','div.popup-login a.login-status',function ($event) { $event.stopPropagation(); })
})

$(function () {
    $(document).click(function ($event) {
        if (!($($event.target).hasClass('menu-line-middle')
            || $($event.target).hasClass('menu-button-icon')))
            return;
        window.setTimeout(function () {
            $('body').toggleClass('position-css', false);
            $('body').css('overflow', '');
            $('body').css('overflow-y', 'scroll');
            let opened = $('div.menu-button-mobile.w-nav-button').hasClass('w--open');
            if (opened) {
                $('body').toggleClass('position-css', true);
                $('body').css('overflow', 'hidden');
            }
        }, 1000);
    });
})

$(document).ready(function () {
    $(".dropbtn").click(function () {

        $(".dropdown-content").toggle()
    });
});


$(document).on("click", function (event) {

    var $trigger = $(".new-menu-drop");

    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-content").slideUp("fast");
    }

});

$(document).on("click", function (event) {
    $("#hyperLinkOrganizers").click(function () {

        $(".dropdown-content").slideUp("fast");
    });
    $("#hyperLinkSponsors").click(function () {

        $(".dropdown-content").slideUp("fast");
    });
    $("#hyperLinkSpeakers").click(function () {

        $(".dropdown-content").slideUp("fast");
    });
    $("#hyperLinkSuppliers").click(function () {

        $(".dropdown-content").slideUp("fast");
    });
});





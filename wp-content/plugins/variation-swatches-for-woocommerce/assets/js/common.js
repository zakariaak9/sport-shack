jQuery(document).ready(function ($) {
    'use strict';
    let $body = $('body');

    $body.on("click", "a.aovup-pro-upgrade-link", function (e) {
        e.preventDefault();
        let href = $(this).attr("href");
        window.open(href, "_blank");
    })

    $( '.aovup-core-install-notice' ).on( 'click', '.notice-dismiss', function( event, el ) {
        $.get(window.tawcvs.adminUrl+"?aovup-swatch-notice-dismiss=1");
    });
});
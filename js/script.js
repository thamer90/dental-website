/*
Script for Website
 Authors: Thamer Al-Merry
 Date: 28 June 2016
*/

// On document ready
$(document).ready(function() {

    // Click function for nav menu
    $('.js-mobile').click(function () {
        $('nav').toggleClass('active');
    });

    // Click function for tabbed data
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
   })

});

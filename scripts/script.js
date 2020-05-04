/*
Author Reference  : Surjith S M
URI               : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function() {
    "use strict";
  function menuscroll() {
    let $navbar = $('.navbar');
    let $logo = $('.logo');
    let $navTop= $('.nav-top');

    if ($(window).scrollTop() > 518) {
      $navbar.addClass('is-scrolling')
      $navbar.addClass('navbar-light')
      $navbar.removeClass('navbar-dark')
    } else {
      $navbar.removeClass('is-scrolling')
      $navbar.addClass('navbar-dark')
      $navbar.removeClass('navbar-light')
    }

    if ($(window).scrollTop() > 518) {
      $logo.addClass('blackLogo')
      $navTop.addClass('nav-link-top')
      // $logo.removeClass('whiteLogo')
    } else {
      // $logo.addClass('whiteLogo')
      $logo.removeClass('blackLogo')
      $navTop.removeClass('nav-link-top')
    }
  }
  menuscroll();
  $(window).on('scroll', function() {
      menuscroll();
  });
});

// ==UserScript==
// @name         Axxes timesheet
// @namespace    Axxes timesheet
// @version      0.1
// @description  Custom styling for the timesheet
// @author       Wim Vandevenne
// @match        https://timesheet.axxes.com/default.aspx
// @copyright    2016+, Wim Vandevenne
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    jQuery('.LogoImg').attr('src', 'https://axxes.com/wp-content/themes/axxes/img/layout/logo.png');
    jQuery('.LogoImg').css('height', 'auto');

    addCss('https://wiven.be/axxes/timesheet.css');
})();

function addCss(fileName) {

  var head = document.head,
      link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
}
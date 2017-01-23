// ==UserScript==
// @name         Axxes timesheet
// @namespace    Axxes timesheet
// @version      0.1
// @description  Custom styling for the timesheet
// @author       Wim Vandevenne
// @match        https://timesheet.axxes.com/default.aspx
// @copyright    2016+, Wim Vandevenne & Arno Chauveau
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    jQuery('.LogoImg').attr('src', 'https://wiven.github.io/axxes-timesheet/img/logo.png');
    jQuery('.LogoImg').css('height', 'auto');

    // append username to welcome message
    jQuery('#MainLabel').append(' '+jQuery('#LoginName').text());

    addCss('https://wiven.github.io/axxes-timesheet/custom-styles.css');
})();

function addCss(fileName) {

  var head = document.head,
      link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.appendChild(link);
}

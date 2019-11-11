// ==UserScript==
// @name         Remove Autocomplete=Off
// @namespace    https://github.com/RavenDT/remove-autocomplete-off
// @version      0.1
// @description  A Tampermonkey script to remove autocomplete="off" from form elements so your password manager can autofill.
// @author       RavenDT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @match        https?://*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  "use strict";
  /* global $ */

  $("[autocomplete=off]").removeAttr("autocomplete");
})();
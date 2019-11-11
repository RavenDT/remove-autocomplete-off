// ==UserScript==
// @name         Remove Autocomplete=Off
// @namespace    https://github.com/RavenDT/remove-autocomplete-off
// @version      0.2
// @description  A Tampermonkey script to remove autocomplete="off" from form elements so your password manager can autofill.
// @author       RavenDT
// @downloadURL  https://raw.githubusercontent.com/RavenDT/remove-autocomplete-off/master/Remove-Autocomplete-Off.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @include      /https?://.*/
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  "use strict";
  /* global $ */

  $("[autocomplete=off]").removeAttr("autocomplete");
})();


// ==UserScript==
// @name         Remove Autocomplete=Off
// @namespace    https://github.com/RavenDT/remove-autocomplete-off
// @version      0.3
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

  function addNameToFields() {
    if (!$("input[placeholder='username']").attr("name")) {
      $("input[placeholder='username']").attr("name","username");
    }
    if (!$("input[placeholder='password']").attr("name")) {
      $("input[placeholder='password']").attr("name","password");
    }
  }

  function removeAutocompleteOff() {
    $("[autocomplete='off']:not([type*='hidden']):not([style*='iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAA'])").removeAttr("autocomplete");
  }

  function _RemoveAutocompleteOff_bootstrap() {
    setTimeout(addNameToFields, 750);
    setTimeout(removeAutocompleteOff, 750);
  }

  // Start the script
  _RemoveAutocompleteOff_bootstrap();

})();

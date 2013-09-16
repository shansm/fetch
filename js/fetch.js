/*!
 * fetch.js - HTML5 Link Prefetching
 * (c) 2013 S.S.M
 * MIT Licensed.
 *
 * http://github.com/shansm/fetch
 */
var fetch = (function() {
    "use strict";
    return {
        init: function(userProvided, flagToScanDOM) {
            var userProvided = userProvided || [],
                flagToScanDOM = (flagToScanDOM === undefined) || (flagToScanDOM === true) ? true : false;
            if (userProvided.length >= 1) {
                this.doPrefetch(userProvided);
            }
            if (flagToScanDOM === true) {
                this.scanDOM();
            }
            this.hideObjects();
        },
        scanDOM: function() {
            var self = this;
            $(".fetch").each(function() {
                self.doPrefetch($(this).attr("href"));
            });
        },
        doPrefetch: function(assets) {
            var objectTagOpen = '<object height="1" width="1" class="completely_hide" data="',
                objectTagClose = '" />';
            if (typeof assets === "string") {
                $('body').append(objectTagOpen + assets + objectTagClose);
            } else if (typeof assets === "object") {
                for (var i = 0, max = assets.length; i < max; i++) {
                    $('body').append(objectTagOpen + assets[i] + objectTagClose);
                }
            }
        },
        hideObjects: function() {
            $("object.completely_hide").css("display", "none");
        }
    }
})();
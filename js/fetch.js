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
        totalAssetsToFetch: [],
        init: function(userProvided, flagToScanDOM) {
            //Default values
            var userProvided = userProvided || [],
                flagToScanDOM = (flagToScanDOM === undefined) || (flagToScanDOM === true) ? true : false;
            //Grab user given URL if provided...
            if (userProvided.length >= 1) {
                this.userProvidedAssets(userProvided);
            }
            //scan DOM
            if (flagToScanDOM === true) {
                this.doPrefetch(this.scanDOM());
            } else {
                this.doPrefetch(this.totalAssetsToFetch);
            }
        },
        userProvidedAssets: function(users) {
            this.totalAssetsToFetch = users.slice();
        },
        scanDOM: function() {
            var self = this;
            $(".fetch").each(function() {
                self.totalAssetsToFetch.push($(this).attr("href"));
            });
            return this.totalAssetsToFetch;
        },
        doPrefetch: function(assets) {
            $('.completely-hide').css('display', 'none');
            for (var i = 0, max = assets.length; i < max; i++) {
                $('body').append('<object height="1" width="1" class="completely-hide" data="' + assets[i] + '" />');
            }
        }
    }
})();
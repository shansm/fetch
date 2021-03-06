# fetch.js

A HTML5 link prefetching script that caches pages into your browser for faster loading when you visit those pages. This script should be fired when the page has fully loaded (window load) to prevent any delays in initial DOM manipulations, event bindings etc. during document load.

## Usage

You'll need to include fetch.js along with jQuery.js like so...

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="fetch.js"></script>

Once you have that done you'll want to initialize fetch.js. You can provide your own URLs to cache in array format in the first argument of fetch.init like so...

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/fetch.js"></script>
<script type="text/javascript">
$(window).load(function () {
    fetch.init(["http://www.SlickDeals.net", "http://www.ChicagoTribune.com", "and so on..."], true);
});
</script>
```

and/or you can add the class 'fetch' to any anchor link tag in the DOM and it will get picked up by the fetch script (by default this is set to true, but if you want to turn this off you can switch the second argument to false)...

```html
fetch.init(["http://www.SlickDeals.net", "http://www.ChicagoTribune.com"], false);
```
@@include('language/fancybox.js')

$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.backFocus = false;
$.fancybox.defaults.touch = false;

if ($.fn.datepicker) {
    @@include('language/datepicker.js')
};

@@include('partials/form.js')
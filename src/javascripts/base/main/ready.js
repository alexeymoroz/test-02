// DOM manipulations

// wrap table
$('.wysiwyg table').wrap('<div class="table-wrapper"><div class="table-inner"></div></div>');

// forms
$.fn.initFormListeners();

// lazy loading


// fancybox
$('a[href^="#modal"], .js-modal').fancybox();

$(document).on('click', '.js-close', function(e) {
    e.preventDefault();
    $.fancybox.close();
});

// tooltips
$('[data-tooltip]').each(function() {
    var text = $(this).attr('data-tooltip') || $(this).attr('aria-label');
    new tippy(this, {
        content: text,
        theme: 'light'
    });
});

// scrollbar
$('[data-scrollable]').each(function(i, item) {
    new SimpleBar(item, {
        timeout: 500
    });
});

$(window).on({
    resize: function() {

    },
    scroll: function() {

    }
}).trigger('resize');

// page preloader
$('body').preloader();

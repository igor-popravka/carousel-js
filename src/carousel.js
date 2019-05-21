(function ($) {
    var methods = {
        init: function () {
            $(this).wrap('<div class="crl-container"><div class="crl-source"></div></div>');

            $(".crl-container").prepend('<div class="crl-data-screen"><div class="crl-data-prev"></div><div class="crl-data-show"></div><div class="crl-data-next"></div></div>');

            $('.crl-data:first', this).addClass('active');

            $('.crl-source').on('click', methods.select.bind(this));
            $('.crl-data-prev').on('click', methods.prev.bind(this));
            $('.crl-data-next').on('click', methods.next.bind(this));

            methods.show.call(this);
        },

        select: function (e) {
            $('.crl-data.active', this).removeClass('active');
            $(e.target).parent('.crl-data').addClass('active');
            methods.show.call(this);
        },

        prev: function () {
            if ($('.crl-data.active', this).prev('.crl-data').length) {
                $('.crl-data.active', this).removeClass('active').prev('.crl-data').addClass('active');
                methods.show.call(this);
            }
        },

        next: function () {
            if ($('.crl-data.active', this).next('.crl-data').length) {
                $('.crl-data.active', this).removeClass('active').next('.crl-data').addClass('active');
                methods.show.call(this);
            }
        },

        show: function () {
            var link = $('.crl-data.active img', this).attr('src');

            $('.crl-data-show').css({
                'background-image': 'url(' + link + ')',
                'background-repeat': 'no-repeat'
            });
        }

    };

    $.fn.makeCarousel = function () {
        methods.init.call(this);
    };
}(jQuery));
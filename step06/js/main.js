$(function () {
    $('.gnb>ul>li>a').on('click', function (e) {

        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.subMenu').slideUp()
            $(this).next().stop().slideToggle();
        }

    })
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
        $('.subMenu').removeAttr('style')
    })

    $('.mclone').on('click', function () {
        var siteMap = $('.gnb>ul').clone().addClass('container');
        console.log(siteMap)
        siteMap.appendTo($('body')).wrap('<div class="sitemap"></div>');
        $('<i class="xi-close"></i>').appendTo(siteMap.parent())
    })
    $('.xi-close').on('click', function(){
        console.log('sitemap')
        $(siteMap).close()
    })
})
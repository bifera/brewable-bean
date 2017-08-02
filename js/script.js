$(function(){
    var headerButton = $('#header-button');
    var coffeeBean = $('#coffee-bean');
    var beanOffset = coffeeBean.offset().top;
    console.log(beanOffset);
    var initialWindowHeight = $(window).innerHeight();
    console.log(initialWindowHeight);

    var firstArticle = $('#part-one');

    headerButton.on('click', function(){
        $('main').addClass('main-flex');
        var initialOffset = $('main').offset().top;
        $('html, body').animate({scrollTop: initialOffset}, 1000, function(){
            firstArticle.find('h2').fadeIn(800, function(){
                firstArticle.find('div').fadeIn(1000);
            });
        }); 
    });

});
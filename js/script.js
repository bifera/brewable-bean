$(function(){
    var headerButton = $('#header-button');
    var coffeeBean = $('#coffee-bean');
    var container = $('#container');
    var firstSection = $('#part-one');
    var distance = firstSection.height(); // distance to scroll
    var sections = $('section');
    var counter = 0;
    var beanLayer = $("#bean-layer");
    var offsetLeft = container.offset().left;
    var offsetTop = container.offset().top;
    var containerWidth = container.width();
    var sectionHeight = sections.eq(0).height();
    
    var cssForBeanLayer = {
        "width": containerWidth,
        "height": sectionHeight,
        "top": offsetTop,
        "left": offsetLeft
    }
    
    beanLayer.css(cssForBeanLayer);

    // extra super powers next button navigating from one section to another
    var nextButton = $('<button>').addClass('button-next').attr('id', 'button-next').text('... and then what?');

    // super power animation triggered on both buttons events :)
    function showNextElement(){
        var currentArticle = sections.eq(counter).find('article');
        counter++;
        var amountToScroll = -distance*(counter);
        container.animate({top: amountToScroll}, 800, function(){
            currentArticle.find('h2').fadeIn(1000, function(){
                currentArticle.find('div').fadeIn(1000, function(){
                    nextButton.appendTo(currentArticle).fadeIn(1000);
                    beanLayer.fadeIn();
                });
            });  
        });
    }
    // initial scroll animation: header button event
    headerButton.on('click', function(){
        $('main').addClass('main-flex');
        showNextElement();
        
    });

    // next button event
    nextButton.on('click', function(){
        nextButton.detach();
        showNextElement();
        console.log(nextButton.parents());
    });

});
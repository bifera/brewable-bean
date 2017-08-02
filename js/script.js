$(function(){
    var headerButton = $('#header-button');
    var coffeeBean = $('#coffee-bean');


    // extra super powers next button
    var nextButton = $('<button>').addClass('button-next').attr('id', 'button-next').text('... and then what?');

    // initial animation: button on header
    headerButton.on('click', function(){
        $('main').addClass('main-flex');
        var firstSection = $('#part-one');
        var firstArticle = firstSection.find('article');
        firstSection.show();
        firstArticle.show();
        var initialOffset = $('main').offset().top;
        $('html, body').animate({scrollTop: initialOffset}, 1000, function(){
            firstArticle.find('h2').fadeIn(1000, function(){
                firstArticle.find('div').fadeIn(1000, function(){
                    nextButton.appendTo(firstArticle).fadeIn(1000);
                    var offsetTopForBean = $(window).height()/2;
                    var offsetLeftForBean = $(window).width()/2;
                    console.log(offsetLeftForBean, offsetTopForBean);

                    var position = {
                        "position" : "fixed",
                        "top" : offsetTopForBean,
                        "left" : offsetLeftForBean
                    }
                    coffeeBean.css(position).show();
                });
            });
        });

    });

    // animation showing next sections
    function showNextElement(currentElement){
        var parentArticle = currentElement.closest('article');
        var parentSection = parentArticle.parent();
        var nextSection = parentSection.next();
        var nextArticle = nextSection.find('article');
        var distance = nextSection.height();

        nextSection.show();
        nextArticle.show();
        
        currentElement.detach(); // detach 'next' button to use it in next section
        $('main').animate({scrollTop: distance}, 800, function(){
            parentSection.hide();
            nextArticle.find('h2').fadeIn(1000, function(){
                nextArticle.find('div').fadeIn(1000, function(){
                    currentElement.appendTo(nextArticle).fadeIn(1000);
                    
                });
            });
            
        });
    }

    nextButton.on('click', function(){
        showNextElement($(this));
    });

});
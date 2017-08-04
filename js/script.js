$(function(){
    var headerButton = $('#header-button');
    var coffeeBean = $('#coffee-bean');
    var container = $('#container');
    var firstSection = $('#part-one');
    var distance = firstSection.height(); // distance to scroll
    var sections = $('section');
    console.log(sections.length);
    var counter = 0;


    // extra super powers next button navigating from one section to another
    var nextButton = $('<button>').addClass('button-next').attr('id', 'button-next').text('... and then what?');

    // super power animation triggered on both buttons events :)
    function showNextElement(){
        sections.eq(counter).show();
        var currentArticle = sections.eq(counter).find('article');
        counter++;
        container.animate({top: -distance*(counter)}, 800, function(){
            currentArticle.find('h2').fadeIn(1000, function(){
                currentArticle.find('div').fadeIn(1000, function(){
                    nextButton.appendTo(currentArticle).fadeIn(1000);
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
    });

});
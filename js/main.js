$(function() {
    
    $('.burger__btn').on('click', function(){
        $(this).toggleClass('opened');
        $('.side-bar').toggleClass('_open');
    });

    $(window).on('click', function(e) {
        if(!$('.side-bar').is(e.target)
            && $('.side-bar').has(e.target).length === 0 &&
            !$('.burger__btn').is(e.target)
            && $('.burger__btn').has(e.target).length === 0 ) {
            $('.burger__btn').removeClass('opened');
            $('.side-bar').removeClass('_open');
        }
    });

    let headerLogo = $('.js-header__logo'),
        link = $('.js-link'),
        text = $('.js-text'),
        select = $('.js-select'),
        navText = $('.js-nav-text'),
        sectionTitle = $('.js-section-title'),
        sideBarText = $('.js-sidebar-text'),
        myName = $('.js-my-name');
    let localeLanguage = navigator.language || navigator.userLanguage;
    

    languageUpdate(localeLanguage, languages);

    select.on('change', function() {
        let val = $(this).val();
        setTimeout(function() {
            languageUpdate(val, languages);
        }, 500);
    });

    function languageUpdate(localLang, lang) {
        let lg = localLang.slice(0, 2);
        let currentLang;
        if(lg != 'ru' && lg != 'en' && lg != 'tr') {
            currentLang = 'ru';
        } else {
            currentLang = localLang.slice(0, 2);
        }

        myName.text(lang[currentLang]['my-name']);
        sideBarText.text(lang[currentLang]['contact']);
        headerLogo.text(lang[currentLang]['main-title']);
        headerLogo.next().text(lang[currentLang]['main-text']);
        $('title').text(lang[currentLang]['title']);
        $.each(link, function(i) {
            $(this).text(lang[currentLang]['link']);
            text.eq(i).text(lang[currentLang]['text'] + ' 0' + (i + 1));
            $('.js-nav-item[data-index="'+i+'"] .js-nav-text').text(lang[currentLang]['nav'][i]);
            sectionTitle.eq(i).text(lang[currentLang]['section-title'][i]);
            $('option').removeAttr('selected', 'selected');
            $('option[value="'+ localLang +'"]').attr('selected', 'selected');
        });
    }
    

    let navItem = $('.js-nav-item'),
        section = $('.js-section');
    navItem.on('click', function(){
        let i = $(this).attr('data-index');

        console.log(i);
        navItem.removeClass('_active');
         
        $('.js-nav-item[data-index="'+i+'"]').addClass('_active');
        setTimeout(function(){
            section.removeClass('_active');
            section.eq(i).addClass('_active'); 
        }, 700);
    });
    $('.js-tab-col').on('click', function() {
        $('.js-portfolio').removeClass('_row');
    });
    $('.js-tab-row').on('click', function() {
        $('.js-portfolio').addClass('_row');
    });
});
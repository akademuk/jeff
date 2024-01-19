// Слайдер
$(document).ready(function () {
    var touchStartX = 0;
    var touchStartY = 0;

    $('.hero__container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: true,
        appendDots: $('.hero__dots'),
    });

    // Добавление обработчика для начала свайпа
    $('.slider-container').on('touchstart', function (event) {
        touchStartX = event.originalEvent.touches[0].clientX;
        touchStartY = event.originalEvent.touches[0].clientY;
    });

    // Добавление обработчика для завершения свайпа
    $('.slider-container').on('touchend', function (event) {
        var touchEndX = event.originalEvent.changedTouches[0].clientX;
        var touchEndY = event.originalEvent.changedTouches[0].clientY;

        var deltaX = touchStartX - touchEndX;
        var deltaY = touchStartY - touchEndY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Если горизонтальное движение больше, чем вертикальное, выполните действия свайпа
            if (deltaX > 0) {
                $('.slider-container').slick('slickNext'); // Свайп влево
            } else {
                $('.slider-container').slick('slickPrev'); // Свайп вправо
            }
        }
    });
});
// --------------------------------------------------------------------


// Слайдер
$(document).ready(function () {
    if ($(window).width() < 1200) {
        var touchStartX = 0;
        var touchStartY = 0;

        $('.reviews__main').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            dots: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        variableWidth: true
                    }
                },
            ]
        });

        // Добавление обработчика для начала свайпа
        $('.slider-container').on('touchstart', function (event) {
            touchStartX = event.originalEvent.touches[0].clientX;
            touchStartY = event.originalEvent.touches[0].clientY;
        });

        // Добавление обработчика для завершения свайпа
        $('.slider-container').on('touchend', function (event) {
            var touchEndX = event.originalEvent.changedTouches[0].clientX;
            var touchEndY = event.originalEvent.changedTouches[0].clientY;

            var deltaX = touchStartX - touchEndX;
            var deltaY = touchStartY - touchEndY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Если горизонтальное движение больше, чем вертикальное, выполните действия свайпа
                if (deltaX > 0) {
                    $('.slider-container').slick('slickNext'); // Свайп влево
                } else {
                    $('.slider-container').slick('slickPrev'); // Свайп вправо
                }
            }
        });
    }

});
// --------------------------------------------------------------------

// Попап
// Попап
const openPopupButtons = document.getElementsByClassName('openPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popup = document.getElementById('popup');

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

// Iterate over each element with the class 'openPopupButton'
for (const button of openPopupButtons) {
    button.addEventListener('click', openPopup);
}

closePopupButton.addEventListener('click', closePopup);

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.style.display === 'block') {
        closePopup();
    }
});

// --------------------------------------------------------------------
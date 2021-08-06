// function hideLoader() {
//     var loader = document.getElementById('loader');

//     loader.style.opacity = '0';
//     loader.style.display = 'none';
// }

document.querySelectorAll('.model').forEach(layer => {
    layer.environmentImage = 'neutral'; 
});

// Full Page
// new fullpage('#fullpage', {
//     navigation: true,
//     anchors: ['home', 'about', 'post'],
//     navigationPosition: 'right',
//     navigationTooltips: ['Home', "About", "Posts"]
// });

// var before = $('.model').offset().top;

// function model () {
//     var top = $('.model').offset().top;
//     var model = $('.model');
//     if (top < 0) {
//         model.css('top', "210vh");
//         model.css('left', "0%");
//         model.css('z-index', "1");
//         model.css('opacity', "0.4");

//     } else if (top >  before +100) {
//         model.css('top', "0px");
//         model.css('left', "32%");
//         model.css('z-index', "1");
//         model.css('opacity', "1");

//     }
// }

// setInterval(model, 100)

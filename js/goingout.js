var app = new Framework7({
    root: '#app',
    name: 'Going out Bogota',
    id: 'com.goingout',
    panel: {
        swipe: 'left',
    },

    routes: [
        {
            path: '/reggaeton/',
            url: 'reggaeton.html',
      },
        
        {
            path: '/champeta/',
            url: 'champeta.html',
      },
        
        {
            path: '/salsa/',
            url: 'salsa.html',
      },
        
        {
            path: '/twerk/',
            url: 'twerk.html',
      },
        
        {
            path: '/andres/',
            url: 'andres.html',
      },
        
        {
            path: '/armando/',
            url: 'armando.html',
      },
        
        {
            path: '/bandida/',
            url: 'bandida.html',
      },
        
        {
            path: '/bungalow/',
            url: 'bungalow.html',
      },
        
        {
            path: '/fabuloso/',
            url: 'fabuloso.html',
      },
        
        {
            path: '/gocepagano/',
            url: 'gocepagano.html',
      },
        
        {
            path: '/theatron/',
            url: 'theatron.html',
      },

        {
            path: '/home/',
            url: 'index.html',
      },
        
        {
            path: '/form/',
            url: 'form.html',
      },
        
        {
            path: '/about/',
            url: 'about.html',
      },
        
        {
            path: '/pre-index/',
            url: 'pre-index.html',
      },
         {
            path: '/media/',
            url: 'mediaplayer.html',
      },

        {
            path: '/nastya/',
            url: 'nastya.html',
      },
    ]
});

var mainView = app.views.create('.view-main');

/*PANEL MENU*/

var app = new Framework7();

var $$ = Dom7;

// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// App Events
app.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});


/*sliders*/

var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();


var app = new Framework7();

var $ = Dom7;

$('.accordion-item').on('accordion:opened', function () {
  app.dialog.alert('Accordion item opened');
});

$('.accordion-item').on('accordion:closed', function (e) {
  app.dialog.alert('Accordion item closed');
});

app.on('accordionOpened', function (el) {
  console.log('The following element opened:');
  console.log(el);
});



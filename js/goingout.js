var app = new Framework7({
    root: '#app',
    name: 'Going out Bogota',
    id: 'com.goingout',


    routes: [
        
        {
            path: '/champeta/',
            url: 'champeta.html',
      },

        {
            path: '/champeta-niveles/',
            url: 'champeta-niveles.html',
      },

     {
            path: '/kevin/',
            url: 'kevin.html',
      },

     {
            path: '/mrblack/',
            url: 'mrblack.html',
      },

     {
            path: '/luis/',
            url: 'luis.html',
      },

     {
            path: '/papo/',
            url: 'papo.html',
      },

     {
            path: '/elio/',
            url: 'elio.html',
      },

    {
            path: '/champeta-begin/',
            url: 'champeta-begin.html',
      },

    {
            path: '/champeta-mid/',
            url: 'champeta-mid.html',
      },

    {
            path: '/champeta-ad/',
            url: 'champeta-ad.html',
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
            path: '/salsa/',
            url: 'salsa.html',
      },

        {
            path: '/marc/',
            url: 'marc.html',
      },

        {
            path: '/ruben/',
            url: 'ruben.html',
      },

        {
            path: '/celia/',
            url: 'celia.html',
      },

        {
            path: '/hector/',
            url: 'hector.html',
      },

        {
            path: '/gilberto/',
            url: 'gilberto.html',
      },
        {
            path: '/joe/',
            url: 'joe.html',
      },

        {
            path: '/niveles-salsa/',
            url: 'niveles-salsa.html',
      },

        {
            path: '/salsa-begginers/',
            url: 'salsa-begginers.html',
      },

        {
            path: '/salsa-middle/',
            url: 'salsa-middle.html',
      },

        {
            path: '/salsa-advanced/',
            url: 'salsa-advanced.html',
      },

         {
            path: '/reggaeton/',
            url: 'reggaeton.html',
      },

         {
            path: '/daddyyankee/',
            url: 'daddyyankee.html',
      },

         {
            path: '/badbunny/',
            url: 'badbunny.html',
      },

          {
            path: '/jbalvin/',
            url: 'jbalvin.html',
      },

        {
            path: '/ivyqueen/',
            url: 'ivyqueen.html',
      },

        {
            path: '/niveles-reggaeton/',
            url: 'niveles-reggaeton.html',
      },


         {
            path: '/reggaeton-begginers/',
            url: 'reggaeton-begginers.html',
      },

         {
            path: '/reggaeton-middle/',
            url: 'reggaeton-middle.html',
      },

        {
            path: '/reggaeton-advanced/',
            url: 'reggaeton-advanced.html',
      },



         {
            path: '/coreographys/',
            url: 'coreographys.html',
      },

        {
            path: '/twerk/',
            url: 'twerk.html',
      },

        {
            path: '/nastya/',
            url: 'nastya.html',
      },

         {
            path: '/fraules/',
            url: 'fraules.html',
      },

        {
            path: '/shoshina/',
            url: 'shoshina.html',
      },

        {
            path: '/lexy/',
            url: 'lexy.html',
      },

         {
            path: '/spanish/',
            url: 'spanish.html',
      },

             {
            path: '/niveles-twerk/',
            url: 'niveles-twerk.html',
      },
        {
            path: '/twerk-begginers/',
            url: 'twerk-begginers.html',
      },

            {
            path: '/twerk-begginers-dos/',
            url: 'twerk-begginers-dos.html',
      },
           {
            path: '/twerk-begginers-tres/',
            url: 'twerk-begginers-tres.html',
      },

         {
            path: '/twerk-middle/',
            url: 'twerk-middle.html',
      },

        {
            path: '/twerk-middle-dos/',
            url: 'twerk-middle-dos.html',
      },

      {
            path: '/twerk-middle-tres/',
            url: 'twerk-middle-tres.html',
      },

        {
            path: '/twerk-advanced/',
            url: 'twerk-advanced.html',
      },

       {
            path: '/twerk-advanced-dos/',
            url: 'twerk-advanced-dos.html',
      },

    {
            path: '/twerk-advanced-tres/',
            url: 'twerk-advanced-tres.html',
      },

        {
            path: '/niveles/',
            url: 'niveles.html',
      },


    ]
});

var mainView = app.views.create('.view-main');

/*PANEL MENU*/

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


/*   REPRODUCTOR    */

$$(document).on('page:init', '.page[data-name="mediaplayer"]', function (e) {
  var audio;

//Hide Pause
$('#pause').hide();

initAudio($('#playlist li:first-child'));

function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');

	//Create audio object
	audio = new Audio('media/'+ song);

	//Insert audio info
	$('.artist').text(artist);
	$('.title').text(title);

	//Insert song cover
	$('img.cover').attr('src','images/covers/'+cover);

	$('#playlist li').removeClass('active');
	element.addClass('active');
}

//Play button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
});

//Pause button
$('#pause').click(function(){
	audio.pause();
	$('#play').show();
	$('#pause').hide();
});

//Stop button
$('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
});

//Next button
$('#next').click(function(){
	audio.pause();
	var next = $('#playlist li.active').next();
	if(next.length == 0){
		next = $('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
});

//Prev button
$('#prev').click(function(){
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length == 0){
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist song click
$('#playlist li').click(function(){
	audio.pause();
	initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	audio.play();
	showDuration();
});

//Volume control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});

//Time/Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt(audio.currentTime / 60) % 60;
		if(s < 10){
			s = '0'+s;
		}
		$('#duration').html(m + ':'+ s);
		var value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}
})

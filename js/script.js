// // even pada saat link di klik
// $('.page-scroll').on ('click', function(e){

//   // ambil isi hreff
//   var href = $(this).attr('href')

//   // tangkap elemen ybs
//   var elemenTujuan = $(tujuan);


//   // pindahkan scroll
//   $('body').animate({
//     scrollTop: elemenTujuan.offset().top - 50
//   }, 1000, 'swing');

//   e.preventDefault();

// });

// parallax

// about
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
   $('.pKanan').addClass('pMuncul')
});



// untuk scroll
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  // jumbotron

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
  });


  // portofolio
  if( wScroll > $('.portofolio').offset().top - 250 ) { 
      $('.portofolio .thumbnail').each(function(i) {
        setTimeout(function() {
          $('.portofolio .thumbnail').eq(i).addClass('muncul')
        }, 300 * (i+1));
      });


  }



});








$(document).foundation();


// Page Transition


$(document).ready(function() {

  $('html').delay(400).removeClass('page-transition-animation');
  $('body').addClass('body-transition-animation');

  $('.page-transition').click(function(event) {

    event.preventDefault();

    redirectLink = this.href;

    $('html').addClass('page-transition-animation');

    setTimeout(function() {
      redirectToLink(redirectLink);
    }, 800);

  });

  function redirectToLink(url) {
    window.location = url;
  }

});



// TAILLE POLICE


// Je définie le texte de base dans une variable
var txtSize = 18;

$("p.paragraphe").css({"font-size": txtSize});


    $("#zoomPlus").click(function(){
      event.preventDefault();
      // À chaque fois que je clique sur #zoomPlus la variable s'agrandie de 4
      txtSize = txtSize + 2;
      // J'applique cette variable comme taille de texte au poème
      $("p.paragraphe").css({"font-size": txtSize});
      // Si la taille de la variable dépasse 38 alors le texte arrête de s'agrandir
      if (txtSize >= 45){

        txtSize = 45;

      }
    });



    $("#zoomMoins").click(function(){
      event.preventDefault();
      // À chaque fois que je clique sur #zoomPlus la variable diminue de 4
      txtSize = txtSize - 2;

      // J'applique cette variable comme taille de texte au poème
      $("p.paragraphe").css({"font-size": txtSize});

      // Si la taille de la variable est plus basse que 14 alors la taille de texte arrête de diminuer
      if (txtSize <= 14){

        txtSize = 14;

      }
    });


    $("#reset").click(function(){
      event.preventDefault();
      // Quand je clique sur #reset la variable de taille de texte revient à 22, sa taille d'origine
      txtSize = 18;

      // J'applique cette variable comme taille de texte au poème
      $("p.paragraphe").css({"font-size": txtSize});

  });





// Contact transition


$('.contact-transition').click(function(envent) {


  $('nav').removeClass('is-visible');
  $('#nav-overlay').removeClass('nav-is-visible');
  $('.overlay').addClass('is-active');

  var data = $('a.contact-transition').attr('data-subject');

  if (data == "recit") {
    $('.contact-form select option[value="recit"]').prop('selected', true);
  } else if (data == "relecture") {
    $('.contact-form select option[value="relecture"]').prop('selected', true);
  } else if (data == "renseignement") {
    $('.contact-form select option[value="renseignement"]').prop('selected', true);
  }
});

$('.contact-close').click(function(envent){
  $('.overlay').removeClass('is-active');
});


// Responsive nav

$('nav button.close-me').click(function(envent){
  $('nav').toggleClass('is-visible');
  $('.overlay#nav-overlay').toggleClass('nav-is-visible');
});


// Afficher plus

$(".more-button").click(function() {
  $(".more-wrapper").fadeIn(500);
});


// Auto height textarea

function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (o.scrollHeight)+"px";
}

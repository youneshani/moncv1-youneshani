import $ from "jquery";
window.$ = $;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './main.css';
$(document).ready(() => {
  console.log("it works!");
});
$(document).ready(function () {
  // au clic sur un lien
  $('a').on('click', function (evt) {

    // bloquer le comportement par défaut: on ne rechargera pas la page
    evt.preventDefault();
    // enregistre la valeur de l'attribut  href dans la variable target
    var target = $(this).attr('href');
    /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
    et safari (webkit) */
    $('html, body')
      /* on fait maintenant l'animation vers le haut (scrollTop) vers 
       notre ancre target */
      .animate({ scrollTop: $(target).offset().top - 60 }, 800);

  });
  function menuColor(i) {
    var list = document.getElementsByClassName("nav")[0];
    list.getElementsByClassName("normal")[0].style.backgroundColor = "black";
    list.getElementsByClassName("normal")[1].style.backgroundColor = "black";
    list.getElementsByClassName("normal")[2].style.backgroundColor = "black";
    list.getElementsByClassName("normal")[3].style.backgroundColor = "black";

    list.getElementsByClassName("normal")[0].style.color = "white";
    list.getElementsByClassName("normal")[1].style.color = "white";
    list.getElementsByClassName("normal")[2].style.color = "white";
    list.getElementsByClassName("normal")[3].style.color = "white";

    list.getElementsByClassName("normal")[i].style.backgroundColor = "#DBA901";
    list.getElementsByClassName("normal")[i].style.color = "black";
  }
  jQuery(
    function ($) {
      $(window).scroll(function () //  alert($('#div1').offset().top); position du div
      //scrollTop curente position
      // innerHeight current computed height
      // $(this)[0].scrollHeight) height of main bar
      // $(window).height() : taille de l'ecrant
      {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) + $(window).height() / 2;

        if ($('#accueil').offset().top <= top) {
          menuColor(0);
        }

        if ($('#parcours').offset().top <= top) {
          menuColor(1);
        }
        if ($('#competences').offset().top <= top) {
          menuColor(2);
        }
        if ($('#contact').offset().top <= top) {
          menuColor(3);
        }
      })
    }
  );
});
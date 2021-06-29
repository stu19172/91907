//Javascript for mobile view
$(document).ready(enableMobileMenu);

//Functions for mobile view
function enableMobileMenu(){

  //When screen falls under max width 700px, MENU icon appears floating on the top right
  var menuButton = $('.menu-button');
  var menu = $('header nav');

  //The centered navigation bar subheadings appear beneath the bar, if user clicks on MENU
  function toggleMenu(){
    menu.toggleClass('hide-on-mobile');
  }

  //When navigation bar subheadings are activated
  menuButton.click(toggleMenu);
}

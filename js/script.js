document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  $(function(){
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });

    
})

$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
});
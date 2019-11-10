$(document).ready(function() {
  var navLinks = document.querySelector('nav').querySelectorAll('li > a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.hash;
      if (!(typeof target === 'string' && target.length > 1 && target.includes('#'))) {
        return false;
      }
      document.getElementById(target.split('#')[1]).scrollIntoView({behavior:'smooth'});
    });
  }
});

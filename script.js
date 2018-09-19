$('#contact').on('click', function() {
  $('#contactModal').toggle();
});

// When the user clicks on <span> (x), close the modal
$('.closeModal').on('click', function() {
  $('#contactModal').css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
$(window).on('click', function(event) {
  if (event.target == $('#contactModal')[0]) {
    $('#contactModal').css('display', 'none');
  }
});

$(document).scroll(function() {
  if ($(document).scrollTop() >= 200) {
    $('.services').addClass('slide-in-right');
  }
});

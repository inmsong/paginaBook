/* EQUAL HEIGHT */

var heights = $(".equalHeight").map(function() {
    return $(this).height();
  }).get(),
  maxHeight = Math.max.apply(null, heights);

$(".equalHeight").height(maxHeight);

/* EQUAL ACERCA */

var heights = $(".equalHeightAlt").map(function() {
    return $(this).height();
  }).get(),
  maxHeight = Math.max.apply(null, heights);

$(".equalHeightAlt").height(maxHeight);

/* EQUAL TRABAJOS */

var heights = $(".itemTrabajo").map(function() {
    return $(this).height();
  }).get(),
  maxHeight = Math.max.apply(null, heights);

$(".itemTrabajo").height(maxHeight);

/* EQUAL GRID  */

var heights = $(".equalGrid").map(function() {
    return $(this).height();
  }).get(),
  maxHeight = Math.max.apply(null, heights);

$(".equalGrid").height(maxHeight);

/* FILTRAR CATEGORIAS TRABAJOS */
$(document).ready(function() {

  $('.btn-filter').on('click', function() {
    var $target = $(this).data('target');
    if ($target != 'all') {
      $('.table .filter').css('display', 'none');
      $('.table .filter[data-status="' + $target + '"]').fadeIn('slow');
    } else {
      $('.table .filter').css('display', 'none').fadeIn('slow');
    }
  });
});

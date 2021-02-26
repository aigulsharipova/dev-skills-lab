$('.btn-primary').click(function () {
  if ($('#skill_inp').val().trim() !== '')
  {
    $('.box_content').append(`
    <p class="box_item"><button class="btn btn-danger border">X</button> ${$('#skill_inp').val().trim()}</p>
   `);
    $('#skill_inp').val('');
  }
});

$(document).on('click', '.btn-danger', function () {
  $(this).parent().remove();
})
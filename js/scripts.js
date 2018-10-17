$(document).ready(function() {
  $('#formOne').submit(function(event) {
    var person1Input = $('input#person1').val();
    var person2Input = $('input#person2').val();
    var animalInput = $('input#animal').val();
    var exclamationInput = $('input#exclamation').val();
    var verbInput = $('input#verb').val();
    var nounInput = $('input#noun').val();
    var noun2Input = $('input#noun2').val();

    $('.person1').text(person1Input);
    $('.person2').text(person2Input);
    $('.animal').text(animalInput);
    $('.exclamation').text(exclamationInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput);
    $('.noun2').text(noun2Input);

    $('#story').show();

    event.preventDefault();
  });
});

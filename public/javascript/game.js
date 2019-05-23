winCount = 0
words = []
guessWord = "something"
hint1Text = "dsdsd"
hint2Text = "sdffv"
hint3Text = "fdsfdbf"
description = "ldjfdkhjf"

//jQuery wait for page load
$(document).ready(function() {

  //API call
  function getWords() {
  
    var options = {
      url: '/api/words'
    }
  
    function handleDone(res) {
      words.push(res)
    }
  
    $.ajax(options).done(handleDone)
  
  }

  $(window).on('load', getWords)

  // Indicate number of characters
  $('.num-char').text(guessWord.length)
  $('.input').keyup(function() {
    $('.num-char').text(guessWord.length - $('.input').val().length)
  })

  //Correct Answer
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})

      winCount += 1;

    }
  })

  //Hints
  $('.hint1').children('.hint-inner').children
  ('.hint-back').text(hint1Text)
  $('.hint2').children('.hint-inner').children('.hint-back').text(hint2Text)
  $('.hint3').children('.hint-inner').children('.hint-back').text(hint3Text)
  $('.hint1').on('click', function(e) {
    e.target.closest('.hint1').classList.add('reveal')
  })

  // Hints Events
  $('.hint1').on('click', function(e) {
    e.target.closest('.hint1').classList.add('reveal')
  })
  // Green for Correct Answer & Description
  $('.input').keyup(function() {
    if (guessWord === $('.input').val()) {
      $('.input').css({outline: "solid green"})
    }
  })
  
  $('.hint2').on('click', function(e) {
    e.target.closest('.hint2').classList.add('reveal')
  })

  $('.hint3').on('click', function(e) {
    e.target.closest('.hint3').classList.add('reveal')
  })

  $('.start-btn').on('click', function() {
    $(this).fadeOut("fast")
  })

})

if (guessWord.includes(" ")) {
  $('.input').css({height: '100px'})
}
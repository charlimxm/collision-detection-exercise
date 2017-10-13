$(function () {
  var $blue = $('.rec1')
  var $body = $('body')

  $body.on('keydown', function () {
    if (collisionCheck()) {
      alert('collided, dont move')
      return
    }

    // alert('moving blue')
    var bluePos = $blue.position()
    console.log(bluePos.left)

    $blue.css({
      left: `${bluePos.left + 10}px`
    })
  })

  function collisionCheck () {
    // alert('checking collision')

    // return true / false
  }
})

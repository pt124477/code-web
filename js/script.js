const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelector('#list-comment .item')
var translateY =0
var count = commentItem.length 

next.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 1) {
        //Xem het binh luan
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})
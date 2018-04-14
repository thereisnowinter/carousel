let $allButtons = $('#button > ul > li')
let $images = $('.images')
let n = 0
let size = $allButtons.length


for (let i = 0; i < $allButtons.length; i++) {
	$($allButtons[i]).on('click', function(event) {
		let index = $(event.target).index()

		let p = index * - 640
		$images.css({
			transform: 'translate(' + p + 'px)'
		})
		n = index
		activeButton($allButtons.eq(n))
	})
}


$allButtons.eq(n % size).trigger('click')

let timeId = setTimer()

$('.window').on('mouseenter', function() {
	clearInterval(timeId)
})

$('.window').on('mouseleave', function() {
	timeId = setTimer()
})

function activeButton($button) {
	$button
	.addClass('active')
	.siblings('.active').removeClass('active')
}

function setTimer() {
	return setInterval(() => {
		n += 1
		$allButtons.eq(n % size).trigger('click')
		}, 2000)
}




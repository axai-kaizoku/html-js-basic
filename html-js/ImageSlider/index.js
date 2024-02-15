let left = document.getElementById('left');
let right = document.getElementById('right');
let slide = document.getElementById('slide');

left.addEventListener('click', prevSlide);
right.addEventListener('click', nextSlide);

const imageWidth = document.getElementById('slide').offsetWidth;

let currentIndex = 0;

function nextSlide() {
	if (currentIndex < image.children.length - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
	updateSlider();
}

function prevSlide() {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = slider.children.length - 1;
	}
	updateSlider();
}

function updateSlider() {
	const newTransfromValue = -currentIndex * slideWidth + 'px';
	slider.style.transform = 'translateX(' + newTransfromValue + ')';
}

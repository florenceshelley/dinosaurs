'use strict';

// Event handlers
const handleCompareBtnClick = e => {
	e.preventDefault();

	// Form values
	const form = document.getElementById('dino-compare').parentElement;
	const name = form.querySelector('#name').value;
	const heightInFeet = form.querySelector('#feet').value;
	const heightInInches = form.querySelector('#feet').value;
	const weight = form.querySelector('#weight').value;
	const diet = form.querySelector('#diet').value;

	if (!!name && !!heightInFeet && !!heightInInches && !!weight && !!diet) {
		form.remove();
	}
};

// Initialize
(() => {
	const compareBtn = document.getElementById('compare');
	compareBtn.addEventListener('click', handleCompareBtnClick);
})();

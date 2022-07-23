'use strict';

const data = {
	"Dinos": [
		{
			"species": "Triceratops",
			"weight": 13000,
			"height": 114,
			"diet": "herbavor",
			"where": "North America",
			"when": "Late Cretaceous",
			"fact": "First discovered in 1889 by Othniel Charles Marsh"
		},
		{
			"species": "Tyrannosaurus Rex",
			"weight": 11905,
			"height": 144,
			"diet": "carnivor",
			"where": "North America",
			"when": "Late Cretaceous",
			"fact": "The largest known skull measures in at 5 feet long."
		},
		{
			"species": "Anklyosaurus",
			"weight": 10500,
			"height": 55,
			"diet": "herbavor",
			"where": "North America",
			"when": "Late Cretaceous",
			"fact": "Anklyosaurus survived for approximately 135 million years."
		},
		{
			"species": "Brachiosaurus",
			"weight": 70000,
			"height": "372",
			"diet": "herbavor",
			"where": "North America",
			"when": "Late Jurasic",
			"fact": "An asteroid was named 9954 Brachiosaurus in 1991."
		},
		{
			"species": "Stegosaurus",
			"weight": 11600,
			"height": 79,
			"diet": "herbavor",
			"where": "North America, Europe, Asia",
			"when": "Late Jurasic to Early Cretaceous",
			"fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
		},
		{
			"species": "Elasmosaurus",
			"weight": 16000,
			"height": 59,
			"diet": "carnivor",
			"where": "North America",
			"when": "Late Cretaceous",
			"fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
		},
		{
			"species": "Pteranodon",
			"weight": 44,
			"height": 20,
			"diet": "carnivor",
			"where": "North America",
			"when": "Late Cretaceous",
			"fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
		},
		{
			"species": "Pigeon",
			"weight": 0.5,
			"height": 9,
			"diet": "herbavor",
			"where": "World Wide",
			"when": "Holocene",
			"fact": "All birds are living dinosaurs."
		}
	]
};

// Templates
const colors = ['#009687f5', '#dc7657f5', '#4bb3c1fa', '#fac069f9', '#67a866f9', '#b94169fa', '#7f62b3fa', '#9fc376f9', '#677bcbfa'];

const gridItem = obj => {
	const {
		species = '',
		name = '',
		fact = ''
	} = obj;
	const image = (species || 'Human').toLowerCase();
	const randomNum = Math.floor(Math.random() * 8) + 1;
	const color = colors[randomNum];

	const info = `
		<div class="grid-item-info hidden" style="background: ${color}">
			<h3>${species || name}</h3>
			<p>${fact}</p>
		</div>
	`;

	const container = document.createElement('article');
	const handleMouseEnter = () => {
		const infoContainer = container.querySelector('.grid-item-info');
		infoContainer.classList.remove('hidden');
		infoContainer.classList.add('show');
	};
	const handleMouseLeave = () => {
		const infoContainer = container.querySelector('.grid-item-info');
		infoContainer.classList.remove('show');
		infoContainer.classList.add('hidden');
	};
	container.classList.add('grid-item');
	container.addEventListener('mouseenter', handleMouseEnter);
	container.addEventListener('mouseleave', handleMouseLeave);

	container.innerHTML = `
		<img src="./images/${image}.png" alt="${image}" style="border-color: ${color}" />
		<h3>${species || name}</h3>
		
		${info}
	`;

	return container;
};

// Structures
function Creature(type, image) {
	this.type = type;
	this.image = image;
	// Dino
	// species
	// image
	// fact

	// Human
	// name
	// image

	// Bird is a subclass of Dino
	// species
	// image
	// fact
}

const dinosaur = new Creature('dino', 'placeholder img');
const human = new Creature('human', 'placeholder img');
const bird = new Creature('bird', 'placeholder img');

// Comparison methods

// Event handlers
const handleCompareBtnClick = e => {
	e.preventDefault();
	const dinos = data.Dinos;
	const description = document.querySelector('header h3');

	// Form values
	const form = document.getElementById('dino-compare').parentElement;
	const name = form.querySelector('#name').value;
	const heightInFeet = form.querySelector('#feet').value;
	const heightInInches = form.querySelector('#feet').value;
	const weight = form.querySelector('#weight').value;
	const diet = form.querySelector('#diet').value;

	const grid = document.getElementById('grid');
	grid.removeAttribute('class');

	if (!!name && !!heightInFeet && !!heightInInches && !!weight && !!diet) {
		form.remove();
		description.innerText = 'Hover over a dino for some interesting facts!';

		// Create grid
		grid.appendChild(gridItem(dinos[1]));
		grid.appendChild(gridItem(dinos[5]));
		grid.appendChild(gridItem(dinos[7]));
		grid.appendChild(gridItem(dinos[3]));
		grid.appendChild(gridItem({name}));
		grid.appendChild(gridItem(dinos[6]));
		grid.appendChild(gridItem(dinos[0]));
		grid.appendChild(gridItem(dinos[4]));
		grid.appendChild(gridItem(dinos[2]));
	}
};

// Initialize
(() => {
	const compareBtn = document.getElementById('compare');
	compareBtn.addEventListener('click', handleCompareBtnClick);
})();

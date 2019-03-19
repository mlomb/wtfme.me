import MovingElementsPreset from '@presets/MovingElementsPreset';

const bills = [
	'https://media.giphy.com/media/xW2WAwn62qO6QV8Qbh/giphy.gif',
	'https://i.imgur.com/8LgCV7E.gif'
];
function makeBill() {
	let bill = document.createElement('img');
	bill.src = 'https://i.imgur.com/BgKTbAs.gif';
	bill.style.height = '90px';
	return bill;
}

export let Variants = [
	[new MovingElementsPreset({ // dollars raining
		max_rotation: 360,
		max_speed: 0.45,
		make: () => {
			let bill = document.createElement('img');
			bill.src = bills[Math.floor(Math.random() * bills.length)];
			bill.style.height = '90px';
			bill.style.opacity = Math.random() * 0.2 + 0.8;
			return bill;
		}
	}), new MovingElementsPreset({ // flying dollars left-right
		max_elements: 10,
		max_rotation: 50,
		max_speed: 0.2,
		axis: 'horizontal',
		make: makeBill
	}), new MovingElementsPreset({ // flying dollars right-left
		max_elements: 10,
		max_rotation: 50,
		max_speed: -0.2,
		axis: 'horizontal',
		make: makeBill
	})]
];

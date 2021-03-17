const onLoadGlobal = () => {
	const bg = document.querySelector('.bg');
	let actualBg = 1;

	const changeBackground = () => {
		actualBg++;
		bg.animate([{ opacity: 1 }, { opacity: 0.3 }], 1000);
		bg.className = `bg bg${actualBg}`;
		bg.animate([{ opacity: 0.3 }, { opacity: 1 }], 1000);
		if (actualBg === 6) {
			actualBg = 0;
			return;
		}
	}

	setInterval(() => changeBackground(), 5000);
}

onLoadGlobal();
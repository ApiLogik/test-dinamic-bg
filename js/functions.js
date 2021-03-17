const onLoadGlobal = () => {
	const bg = document.querySelector('.bg');
	let actualBg = 1;

	const changeBackground = () => {
		actualBg++;
		bg.className = `bg bg${actualBg}`;
		if (actualBg === 6) {
			actualBg = 0;
			return;
		}
	}

	setInterval(() => changeBackground(), 3000);
}

onLoadGlobal();
// alert(`hello`);

const cl = console.log;



function setZero(num){
	return (num < 10) ? (`0` + num) : (num);
};


function countClock(){
	
	const countDownClock = document.getElementById("countDownClock");
	
	let currentDate = new Date();
	// cl(currentDate);

	let futureDate = new Date(2030,0,01);
	// cl(futureDate);

	let diff = futureDate.getTime() - currentDate.getTime();
	// cl(diff);

	let days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
	// diff / 1 day = total days left
	// cl(days);

	let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// (diff % 1 day) / 1hrs = total hr left
	// cl(hrs);

	let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
	// (diff % 1 hr) / 1 min = total min left
	// cl(min);

	let sec = Math.floor((diff % (1000 * 60)) / (1000));
	// (diff % 1 min) / 1 sec = total sec left
	// cl(sec);
	
	days = setZero(days);
	hrs = setZero(hrs);
	min = setZero(min);
	sec = setZero(sec);
	
	let result = `
		<div class="clock-info">
				<p>days</p>
				<p>${days}</p>
			</div>
			
			<div class="clock-info">
				<p>hrs</p>
				<p>${hrs}</p>
			</div>
			
			<div class="clock-info">
				<p>min</p>
				<p>${min}</p>
			</div>
			
			<div class="clock-info">
				<p>sec</p>
				<p>${sec}</p>
			</div>
	`;
	
	countDownClock.innerHTML = result;
	setTimeout(countClock,1000);
};

countClock();


function countClock1(){
		const countDownClock1 = document.getElementById("countDownClock1");
	
		let currentDate = new Date();
		// cl(currentDate);

		let futureDate = new Date(2050,0,01);
		// cl(futureDate);

		let diff = futureDate.getTime() - currentDate.getTime();
		// cl(diff);
		
		let yrs = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
		// cl(yrs);

		let days = Math.floor(diff / (1000 * 60 * 60 * 24)); 
		// diff / 1 day = total days left
		// cl(days);

		let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		// (diff % 1 day) / 1hrs = total hr left
		// cl(hrs);

		let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 
		// (diff % 1 hr) / 1 min = total min left
		// cl(min);

		let sec = Math.floor((diff % (1000 * 60)) / (1000));
		// (diff % 1 min) / 1 sec = total sec left
		// cl(sec);
		
		yrs = setZero(yrs);
		days = setZero(days);
		hrs = setZero(hrs);
		min = setZero(min);
		sec = setZero(sec);
		
		let result = `
			<div class="clock-info">
				<p>years</p>
				<p>${yrs}</p>
			</div>
		
			<div class="clock-info">
				<p>days</p>
				<p>${days}</p>
			</div>
				
			<div class="clock-info">
				<p>hrs</p>
				<p>${hrs}</p>
			</div>
				
			<div class="clock-info">
				<p>min</p>
				<p>${min}</p>
			</div>
				
			<div class="clock-info">
				<p>sec</p>
				<p>${sec}</p>
			</div>
		`;
		
		countDownClock1.innerHTML = result;
		setTimeout(countClock1,1000);
};

countClock1();
"use strict";
///308
// setInterval(function(){console.log('meow')}, 3000)

///309

// let i = 100
// setInterval(()=> console.log(i--), 1000)

///310

// let i = 10;

// let timerId = setInterval(function() {
// 	console.log(i--);
	
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

//311
//1
// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 100;
	
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);
// });

//2
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
	
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);
//     this.removeEventListener('click', func);
// });

//312
//1
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function() {
// 	let i = 100;

// 	timerId = setInterval(function() {
//         console.log(i--)
//         if (i <= 0) {
//             clearInterval(timerId);
//         }
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//2

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId
// start.addEventListener('click', function() {
// 	    timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds()
// 			); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//3
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	    timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds()
// 			); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//4
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds()
// 			); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//5
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function() {
// 	    timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds()
// 			); 
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//6

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId;

// start.addEventListener('click', function func() {
// 	    timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds()
// 			); 
// 	}, 1000);
//     this.removeEventListener('click', func);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//???????????????? ???? ?????????????? ?? ???????????? ?? DOM ?? JavaScript


// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);

//1 
//?????????? ???????????????????? ?????? ????????????

//2
// let elem1 = document.querySelector('#elem1');
// setInterval(function() {
// 	elem1.value = Number(elem1.value) - 1;
// }, 1000);

//3
// let elem1 = document.querySelector('#elem1');

// let timerId = setInterval(function() {
// 	elem1.value = Number(elem1.value) - 1;
//     if(elem1.value <= 0){
//         clearInterval(timerId)
//     }
// }, 1000);

//314
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this
// 	setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });

//315

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this
// 	setInterval(function() {
// 		self.value--;
// 	}, 1000);
// });

//???????????????? ???? ?????????????? ?? ???????????? ?? DOM ?? JavaScript

//1
// let elem = document.querySelector('input')
// let p = document.querySelector('p')

// elem.addEventListener('click', function(){
//     setInterval(function(){
//         p.textContent++
//     }, 1000)
//  })

//2

// let btn = document.querySelector('input')
// let p = document.querySelector('p')

// btn.addEventListener('click', function(){
//     let timerId = setInterval(function(){
//         p.textContent--
//         if(p.textContent <= 0){
//             clearInterval(timerId)
//         }
//     }, 1000)

// })

//3

// let elem = document.querySelector('input')
// elem.addEventListener('blur', function(){
//     setInterval(function(){
//         elem.value = +elem.value * +elem.value
//     }, 1000)
// })

//4
// let elem = document.querySelector('input')

// elem.addEventListener('click', function(){
//     let timerId = setInterval(function(){
//         elem.value--
//         if(elem.value <= 0){
//             clearInterval(timerId)
//         }
//     }, 1000)

// })

//5
// let btn = document.querySelector('#btn')
// let p = document.querySelector('p')
// let elem = document.querySelector('#elem')

// btn.addEventListener('click', function(){
//     p.textContent = +elem.value
//     let timerId = setInterval(function(){
//         p.textContent--
//         if(p.textContent <= 0){
//             clearInterval(timerId)
//         }
//     }, 1000)
// })

//6
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let p = document.querySelector('p')
// let timerId

// btn1.addEventListener('click', function(){
//     timerId = setInterval(function(){
//         +p.textContent++
//     }, 1000)
// })

// btn2.addEventListener('click', function(){
//     clearInterval(timerId)
// })

//7
// let elem = document.querySelector('p')
// elem.style.color="red";

// setInterval(function(){
//  if(elem.style.color == "red"){
//     elem.style.color="green";
//  } else {
//     elem.style.color="red";
//  }
// },1000);

//8
// let elem = document.querySelector('p')
// setInterval(function(){
//     let date = new Date()
//     let hour = date.getHours()
//     if(+hour < 10){ hour = '0' + hour}
//     let minute = date.getMinutes()
//     if(+minute < 10){ minute = '0' + minute}
//     let seconds = date.getSeconds()
//     if(+seconds < 10){ seconds = '0' + seconds}
//     elem.textContent = hour + ':' + minute + ':' + seconds
// }, 1000)


//317
// let elem = document.querySelector('p')
// setTimeout(function(){elem.textContent = 'meow'}, 10000)


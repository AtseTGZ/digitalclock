// JavaScript Document
const getHour =document.getElementById("hour")
const getMin =document.getElementById("Minutes")
const getSeconds =document.getElementById("seconds")
const getAMPM = document.getElementById("ampm")


function updateclock () {
	let h = new Date ().getHours()
	let m = new Date ().getMinutes()
	let s = new Date ().getSeconds()
	let ampm = "AM"
	
	if (h > 12){
		h = h-12
		ampm= "PM"
		
	}
	
getHour.innerText=h;
getMin.innerText=m;
getSeconds.innerText = s;
getAMPM.innerText = ampm;

	setTimeout(()=> {
	updateclock()
		
		
	}, 1000
			  
			  
			  )
	
}

updateclock()
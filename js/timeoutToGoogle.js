//set time, in miliseconds. 
var timeoutLength = 10000

//makes sure it runs the first time the page is loaded
startTimeout()

//make js objects for each element so we can manipulate them.
var buttonLeave = document.getElementById('buttonLeave')
var buttonStay = document.getElementById('buttonStay')
var modalWindowDiv = document.getElementById('modalWindowDiv')

//starts the timeout countdown, calls displayModal when up.
function startTimeout(){
	window.setTimeout(function(){
		// alert('10 seconds')
		displayModal()
	}, timeoutLength)
}

function displayModal() {
	modalWindowDiv.className = 'modalWin modalVisible'
}

//add listener to the leave button, which redirects to google.com
buttonLeave.addEventListener('click', function(){
	window.location = 'https://www.google.com'
})

//add listener to the stay button, which hides the modal and starts the countdown again
buttonStay.addEventListener('click', function(){
	modalWindowDiv.className = 'modalWin modalHidden'
	startTimeout()
})


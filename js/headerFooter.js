/**
* Our assignment asked us to dynamically inject the header and footer into our page using Javascript. Kind of silly, but you do what you have to.
*/

//the first part of the header
var header = document.createElement('nav')

//get the uri, parse it, and then get the last element in the array
var uri = location.pathname
var splits = uri.split('/')
var last = splits.pop()

//create some li elements to place in the header
var li1 = document.createElement('li')
var li2 = document.createElement('li')

console.log(last)

//look at what the current page is, and add the class that makes it look nice in CSS
if(last == 'index.html' || last == ''){
	li1.className='currentPage'
	window.document.title = 'Django, an HTML5 example'
	var pageTitle = 'Django: A Python MVT Framework'
}
else{
	li2.className='currentPage'
	window.document.title = 'Playing w/ JQuery'
	var pageTitle = 'Doing silly things with JQuery'
}

//set the innerHTML for each li item
li1.innerHTML = '<a href="index.html">Django</a>'
li2.innerHTML = '<a href="jqueryPlaying.html">Playing w/ jQuery</a>	'

//put all of that together now
header.innerHTML = '<h1>Navigation</h1>	<ul>'+li1.outerHTML+li2.outerHTML+'</ul>'

//create the second part of the header
var header2 = document.createElement('header')
header2.className = 'pageHeader'
header2.innerHTML = '<h1>'+pageTitle+'</h1><h2>A. Frehner</h2>'

//insert them as the first parts of the body. 
document.body.insertBefore(header2, document.body.firstChild)
document.body.insertBefore(header, document.body.firstChild)

//add the footer
document.body.innerHTML = document.body.innerHTML + '<footer>This page was built to showcase some new HTML5 tags, which means that some browsers may not display this page correctly.</footer>'

$(document).ready(function(){
	//find all items of class toggleIt, then headers in those sections, and apply this code when they are clicked
	$(".toggleIt header").click(function(){
		//get the parent, then the child called section, and toggle it
		$(this).parent().children("section").slideToggle()
	})

	//whenever the class radioPlay is clicked, do this.
	$(".radioPlay").change(function(){
		if( $(".radioPlay:checked").val() == 3){
			//if the third radio button is selected, then check a different radio button.
			$("#r"+getRand()).prop("checked", true)
		}
	})

	//returns a random number between 1-5, but NOT 3.
	function getRand(){
		//get a random number between 1-5
		var newNum = Math.floor((Math.random()*5)+1)
		if (newNum == 3){
			//if that number is 3, use recursion to get a new number between 1-5
			newNum = getRand()
		}
		return newNum
	}

	$("#getNewWords").click(function(){
		var numWords = $('#numOfWords').val()
		var numMessage = $('#numberMessage')
		if(numWords > 6 || numWords < 1 || numWords != parseInt(numWords)){
			//can't work with this type of number
			numMessage.html("Sorry, that number doesn't work. Only integers between 1-6 allowed")
			numMessage.show()
		} else {
			numMessage.hide()
			var ajaxGif = $("#ajax-gif")
			ajaxGif.show()
			var ajaxUrl = "http://randomword.setgetgo.com/get.php"
			var listItems = []
			for (var i = 0; i < numWords; i++) {
				$.ajax({
					type: "GET",
					url: ajaxUrl,
					dataType: "jsonp",
				}).done(function(data){
					var listString = "<li class='listItems'>"+data.Word+"</li>"
					listItems.push(listString)
					if(listItems.length == numWords ){
						addItemsToList(listItems)
						$('#wordList').sortable()
						ajaxGif.hide()
					}
				}).fail(function(){
					numMessage.html("Sorry, something failed")
					numMessage.show()
					ajaxGif.hide()
				})
			}
		}
	})

	function addItemsToList(listArr){
		$("#wordList").append( listArr.join(''))
	}

	$('#clearWords').click(function(){
		var wordList = $('#wordList')
		wordList.html('')
	})

	$('#sentenceHelpers li').draggable({
		connectToSortable: '#wordList',
		helper:'clone',
		revertDuration: 0,
	})

	$('#removeWords').droppable({
		drop: function(event, ui){
			$(ui.draggable).remove()
		}
	})

});
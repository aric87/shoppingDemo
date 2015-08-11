$(document).ready(function(){

//user to be able to input text and save it
$('form').submit(function(event){
	event.preventDefault();
	//user text should not be empty
	var newItem = $('#itemInput').val().trim();
	if(newItem != ""){
		//user text should be added to list with delete button
	    $('#itemList').append('<li>'+newItem+' <button class="deleteButton">x</button></li>');
    } else{
    	alert('Your empty');
    }
});

//delete button should remove item
$('#itemList').on('click','.deleteButton', function(){
	$(this).closest('li').remove();
});
//dbl click should toggle check off item
$('#itemList').on('dblclick','li',function(){
	$(this).toggleClass('checked');
});
$('#itemList').on('dblclick','li',function(){
	if($(this).hasClass('checked')){
		$(this).removeClass('checked');	
	} else{
		$(this).addClass('checked');
	}
	
});


});
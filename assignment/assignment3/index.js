/*
 * Add your JavaScript to this file to complete the assignment.
 */


/*
 * Create Variables
 */


var removedTwits;
var currentTwitExample = document.getElementsByClassName('twit')[0];
var hiddenElements = document.getElementsByClassName('hidden');

/*
 * Add event listeners
 */

var createTwitButton = document.getElementById('create-twit-button');
createTwitButton.addEventListener('click', function (event) {
	showNewTwitModal();
});

var modalAcceptButton = document.getElementsByClassName('modal-accept-button')[0];
modalAcceptButton.addEventListener('click', function (event) {
	acceptModal();
});

var modalCancelButton = document.getElementsByClassName('modal-cancel-button')[0];
modalCancelButton.addEventListener('click', function (event) {
	hideNewTwitModal();
});

var modalCloseButton = document.getElementsByClassName('modal-close-button')[0];
modalCloseButton.addEventListener('click', function (event) {
	hideNewTwitModal();
});

var searchText = document.getElementById('navbar-search-input');
searchText.addEventListener('input', function (event) {
	searchPage(searchText.value);
	
});

/*
 * Functions
 */

function showNewTwitModal(){
	for (var i = 0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'inline';
	}
}

function hideNewTwitModal (){
	
	newTwitContent = document.getElementById('twit-text-input').value = '';
	newTwitAuthor = document.getElementById('twit-attribution-input').value = '';
	
	for (var i = 0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}	
}

function acceptModal(){
	
	newTwitContent = document.getElementById('twit-text-input').value;
	newTwitAuthor = document.getElementById('twit-attribution-input').value;
	
	if (newTwitContent === '' || newTwitAuthor === ''){
		alert("Incomplete Field(s). Fix Before Submitting!")
		return;
	}
	
	/*console.log("== Collected new tweet info\n  == Content:" + newTwitContent + "\n  == Author:" + newTwitAuthor);*/
	
	addNewTwit(newTwitContent, newTwitAuthor);
	hideNewTwitModal();
}

function addNewTwit(content, author){
	
	var currentTwitContainer = document.getElementsByClassName('twit-container')[0];
	
	var newTwit= currentTwitExample.cloneNode(true);
	
	//console.log("== New Author Attempt:" +newTwit.children[1].children[1].children[0])
	
	newTwit.children[1].children[0].textContent = content;
	newTwit.children[1].children[1].children[0].textContent = author;
	
	//console.log("== New Author Field:" +newTwit.children[1].children[1].children[0].textContent)

	currentTwitContainer.appendChild(newTwit);

}
	

function searchPage (searchTerm) {
	
	if (searchTerm === ''){
		
		location.reload();
		
	}
	
	var currentTwitContainer = document.getElementsByClassName('twit-container')[0];

	console.log("======== Search Term: ===========" + searchTerm + ":");
	
	var twitList = document.getElementsByClassName('twit');
	
	console.log("== Twit List:", twitList);
	
	for (var i = twitList.length - 1; i > -1; i--){
		
		console.log("== Checking twit:", twitList[i].textContent);
		console.log("== Contains text:", twitList[i].textContent.search(searchTerm));		
		
		if (twitList[i].textContent.search(searchTerm) === -1){
			
			twitList[i].remove();
			removedTwits += twitList[i];
			
		}
	}
	
	console.log("== Twit List Post Search:", twitList);
	
}

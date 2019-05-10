/*
 * Add your JavaScript to this file to complete the assignment.
 */

console.log("== Started.");
var originalTwitList = document.getElementsByClassName('twit');
var currentTwitExample = document.getElementsByClassName('twit')[0];

var hiddenElements = document.getElementsByClassName('hidden');


var createTwitButton = document.getElementById('create-twit-button');

createTwitButton.addEventListener('click', function (event) {
	console.log("==== Event Listener Triggered");
	showNewTwitModal();
});

var modalAcceptButton = document.getElementsByClassName('modal-accept-button')[0];

modalAcceptButton.addEventListener('click', function (event) {
	console.log("==== Event Listener Triggered");
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





function showNewTwitModal(){
	for (var i = 0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'inline';
	}
	console.log("== Show Modal");
}

function hideNewTwitModal (){
	
	newTwitContent = document.getElementById('twit-text-input').value = '';
	newTwitAuthor = document.getElementById('twit-attribution-input').value = '';
	
	for (var i = 0; i < hiddenElements.length; i++){
		hiddenElements[i].style.display = 'none';
	}
	console.log("== Hide Modal");
	
}

function acceptModal(){
	
	newTwitContent = document.getElementById('twit-text-input').value;
	newTwitAuthor = document.getElementById('twit-attribution-input').value;
	
	if (newTwitContent === '' || newTwitAuthor === ''){
		alert("Incomplete Field(s). Fix Before Submitting!")
		return;
	}
	
	console.log("== Collected new tweet info\n  == Content:" + newTwitContent + "\n  == Author:" + newTwitAuthor);
	
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
	originalTwitList += newTwit;
	
}

function emptyTwitContainer(){
	
	var container = document.getElementsByClassName('twit');
	
	for (var j = 0; j < container.length; j++){
		container[j].remove();
	}
	
	console.log("== Removed all from DOM");
}

function searchPage (searchTerm) {
	
	var currentTwitContainer = document.getElementsByClassName('twit-container')[0];
	
	emptyTwitContainer();

	console.log("Search Term:" + searchTerm + ":");
	console.log("TwitList:");
	console.log(originalTwitList);

	if (searchTerm === ''){
		
		for (var i = 0; i < originalTwitList.length; i++){
			currentTwitContainer.appendChild(originalTwitList[i]);
		}
		return;
		
	}
	
	for (var i = 0; i < originalTwitList.length; i++){
		
		
		if (originalTwitList[i].children[1].children[0].textContent.search(searchTerm) !== -1 ||
			originalTwitList[i].children[1].children[1].children[0].textContent.search(searchTerm) !== -1 ){
				
				console.log("Appending: " + i);
				currentTwitContainer.appendChild(originalTwitList[i]);
				
			}
	}
}
			
		
	
	

























var gameLocation = "/";

function goToGame(game){
	window.open(game + ".html", '_blank').focus();
}

function viewReleaseDetails(details) {
	sessionStorage.setItem('gameToSearch', details);
	/*window.open("releases.html").focus();*/
	window.location.replace("releases.html",);
}

function viewGamePage(game) {
	window.location.replace(game + ".html", );
}

function viewAllReleasesForGame(game){
	sessionStorage.setItem('gameToSearch', game);
	window.open("releases.html", '_blank').focus();
}

function searchGamePredetermined(){


	var game;
	if (sessionStorage.getItem('gameToSearch') != null){
		if (sessionStorage.getItem('gameToSearch') != "null"){
			game = sessionStorage.getItem('gameToSearch');
		}
	}


	if (sessionStorage.getItem('gameToSearch') == null || sessionStorage.getItem('gameToSearch') == "null"){
		game = '';
	}
	
	search(game);

}

function search(preSearch){
    // Declare variables
    var input, filter, ul, unfilteredli, a, i, searchesFound;
	searchesFound = 0;

	if (preSearch == ''){
		input = document.getElementById("releaseSearch");
		filter = input.value.toUpperCase();
	}
	else{
		sessionStorage.setItem('gameToSearch', "null");
		filter = preSearch.toUpperCase();
	}
   
    ul = document.getElementById("searchable");
    unfilteredli = ul.getElementsByTagName("li");
	
	const li = [];
	
	for (i = 0; i < unfilteredli.length; i++) {
		if (unfilteredli[i].getElementsByClassName("releaseSearchHeader")[0] != null){
			li.push(unfilteredli[i]);
			console.log(li);
		}
	}
	


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
		
		a = li[i].getElementsByClassName("releaseSearchHeader")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
			searchesFound+= 1;
		} 
		else {
			li[i].style.display = "none";
		}
    }

	if (preSearch == ''){
		document.getElementById("noResultMessage").innerHTML = "No results";
		if (searchesFound > 0)
		{
			document.getElementById("noResultMessage").innerHTML = "";
		}
	}
	else{
		document.getElementById("noResultMessage").innerHTML = "Showing results for " + preSearch;
	}
}
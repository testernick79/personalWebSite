$(document).ready(function () {
    $('.movement').hover(function () {
		$(this).css('font-size', '35px'),
		    $(this).css('padding', '3.5px');
		},
		function () {
		    $(this).css('font-size', '20px'),
		        $(this).css('padding', '10px');
    });
});
        
let gitResuest =  new XMLHttpRequest();
gitResuest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let gitObj = JSON.parse(this.responseText);
        document.getElementById("repo").innerHTML.repos_url;
    }
};
gitResuest.open("GET", "https://api.github.com/users/testernick79", true);
gitResuest.send(); 

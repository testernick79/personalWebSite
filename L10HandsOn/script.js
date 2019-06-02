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

/* function loadMyRepo() {

    let requestGitter = new XMLHttpRequest();
    requestGitter.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitObj = JSON.parse(this.responseText);
            for (var i = 0; i < gitObj.length; i++) {
                var ul = document.getElementById("repo");
                var li = document.createElement("li");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(gitObj[i].name));
                a.appendChild(li);
                a.setAttribute("href", gitObj[i].repos_url);
                ul.appendChild(a);
            }
        }
    }
};
requestGitter.open("GET", "https://api.github.com/users/testernick79", true);
requestGitter.send(); */

function loadRepo() {

    let gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let gitObject = JSON.parse(this.responseText);
            for (var i = 0; i < gitObject.length; i++) {
                var ul = document.getElementById("gitRepositories");
                var li = document.createElement("LI");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(gitObject[i].name));
                a.appendChild(li);
                a.setAttribute("href", gitObject[i].html_url);
                ul.appendChild(a);
            }
        }
    };
    gitHubRequest.open("GET", "https://api.github.com/users/testernick79/repos", true);
    gitHubRequest.send();
}
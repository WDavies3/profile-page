console.log("page loaded...");

var cardListItemArr = document.querySelectorAll(".card-list-item");
var connectionRequestCount = 2;
var connectionRequestCountText = document.querySelector("#conn-request-count");
var connectionCount = 500;
var connectionCountText = document.querySelector("#conn-count");

function changeName(name) {
    var elementToChange = document.querySelector(".card-body h1");
    elementToChange.innerText = name;
}

function deleteCardListItem(index){
    cardListItemArr[index].remove();
    connectionRequestCount--;
    connectionRequestCountText.innerText = connectionRequestCount;
}

function addConnection(){
    connectionCount++;
    connectionCountText.innerText = connectionCount + "+";
}
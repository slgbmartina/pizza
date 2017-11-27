function loadPizzas() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            var menu = document.getElementsByClassName("menu");
            for (var i = 0; i < myArr.length; i++) {
                var oldDiv = document.getElementsByClassName("menulist");

                var newDiv = document.createElement("div");

                var newImg = document.createElement("img");
                newImg.setAttribute("src", myArr[i]["imageUrl"]);
                newImg.setAttribute("alt", myArr[i]["name"]);

                var newP = document.createElement("p");
                newP.innerHTML = myArr[i]["name"];

                var newDiv2 = document.createElement("div");
                newDiv2.setAttribute("class", "price");
                newDiv2.innerHTML = myArr[i]["prize"];

                var newButton = document.createElement("button");
                newButton.setAttribute("onclick", "");
                newButton.innerHTML = "To Cart";
                newDiv2.appendChild(newButton);

                var newDiv3 = document.createElement("div");
                newDiv3.setAttribute("class", "ingredients");

                var newSmall = document.createElement("small");
                newSmall.innerHTML = myArr[i]["ingredients"];
                newDiv3.appendChild(newSmall);

                newDiv.appendChild(newImg);
                newDiv.appendChild(newP);
                newDiv.appendChild(newDiv2);
                newDiv.appendChild(newDiv3);
                oldDiv[0].appendChild(newDiv);


            }

        }
    };

}

function loadSalads() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/salads", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    doMagic(xhttp);
}

function loadDrinks() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/drinks", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    doMagic(xhttp);
}
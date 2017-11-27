function validateForm()
{
    var nameValid = checkName();
    var mailValid = checkEmail();
    var textValid = checkTextarea();
    return nameValid && mailValid && textValid;
}

function checkName()
{
    var fullName = document.forms["feedback"]["fullname"].value;
    var nameWarning = document.getElementById("nameValidation");
    return toggleWarning(nameWarning, fullName === "" || fullName === null);
}

function checkEmail()
{
    var email = document.forms["feedback"]["email"].value;
    var mailWarning = document.getElementById("mailValidation");
    return toggleWarning(mailWarning, !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || email === '' || email === null);
}

function checkTextarea()
{
    var textarea = document.forms["feedback"]["suggestion"].value;
    var textAreaWarning = document.getElementById("textAreaValidation");
    return toggleWarning(textAreaWarning, textarea.length < 50 || textarea === null);
}

function toggleWarning(warningElement, shouldShow)
{
    warningElement.style.display = shouldShow ? 'block' : 'none';
    return !shouldShow;
}

function loadPizzas() {
    var xhttp = request("https://tonyspizzafactory.herokuapp.com/api/pizzas");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            var menu = document.getElementsByClassName("menu");
            for (var i = 0; i < myArr.length; i++) {
                var oldDiv = document.getElementsByClassName("menulist");

                var newDiv = document.createElement("div");
                newDiv.setAttribute("class", "menu");

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
    var xhttp = request("https://tonyspizzafactory.herokuapp.com/api/salads");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            var menu = document.getElementsByClassName("menu");
            for (var i = 0; i < myArr.length; i++) {
                var oldDiv = document.getElementsByClassName("menulist");

                var newDiv = document.createElement("div");
                newDiv.setAttribute("class", "menu");

                var newImg = document.createElement("img");
                newImg.setAttribute("src", myArr[i]["imageUrl"]);
                newImg.setAttribute("alt", myArr[i]["name"]);

                var newP = document.createElement("p");
                newP.innerHTML = myArr[i]["name"];

                var newSelect = document.createElement("select");
                newSelect.setAttribute("class", "price");
                newSelect.setAttribute("name", "Dressing");

                var newOption = document.createElement("option");
                newOption.innerHTML = "French Dressing";
                newSelect.appendChild(newOption);

                var newOption2 = document.createElement("option");
                newOption2.innerHTML = "Italian Dressing";
                newSelect.appendChild(newOption2);

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
    }
}

function loadDrinks() {
    xhttp = request("https://tonyspizzafactory.herokuapp.com/api/softdrinks");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            var menu = document.getElementsByClassName("menu");
            for (var i = 0; i < myArr.length; i++) {
                var oldDiv = document.getElementsByClassName("menulist");

                var newDiv = document.createElement("div");
                newDiv.setAttribute("class", "menu");

                var newImg = document.createElement("img");
                newImg.setAttribute("src", myArr[i]["imageUrl"]);
                newImg.setAttribute("alt", myArr[i]["name"]);

                var newP = document.createElement("p");
                newP.innerHTML = myArr[i]["name"];

                var newP2 = document.createElement("p");
                newP2.setAttribute("class", "sauce");
                newP2.innerHTML = myArr[i]["volume"];

                var newDiv2 = document.createElement("div");
                newDiv2.setAttribute("class", "price");
                newDiv2.innerHTML = myArr[i]["prize"];

                var newButton = document.createElement("button");
                newButton.setAttribute("onclick", "");
                newButton.innerHTML = "To Cart";
                newDiv2.appendChild(newButton);

                newDiv.appendChild(newImg);
                newDiv.appendChild(newP);
                newDiv.appendChild(newP2);
                newDiv.appendChild(newDiv2);
                oldDiv[0].appendChild(newDiv);
            }
        }
    }
}

function request(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    return xhttp;
}
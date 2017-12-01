function validateForm()
{
    var nameValid = checkName();
    var mailValid = checkEmail();
    var textValid = checkTextarea();
    return nameValid && mailValid && textValid;
}

function checkName()
{
    var fullName = document.forms['feedback']['fullname'].value;
    var nameWarning = document.getElementById('nameValidation');
    return toggleWarning(nameWarning, fullName === '' || fullName === null);
}

function checkEmail()
{
    var email = document.forms['feedback']['email'].value;
    var mailWarning = document.getElementById('mailValidation');
    return toggleWarning(mailWarning, !/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || email === '' || email === null);
}

function checkTextarea()
{
    var textarea = document.forms['feedback']['suggestion'].value;
    var textAreaWarning = document.getElementById('textAreaValidation');
    return toggleWarning(textAreaWarning, textarea.length < 50 || textarea === null);
}

function toggleWarning(warningElement, shouldShow)
{
    warningElement.style.display = shouldShow ? 'block' : 'none';
    return !shouldShow;
}

function loadPizzas() {
    var xhttp = request('https://tonyspizzafactory.herokuapp.com/api/pizzas');
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            for (var i = 0; i < myArr.length; i++) {
                var pizzasBox = document.getElementsByClassName('menulist')[0];

                var newPizzaBox = addElement(pizzasBox, 'div', 'menu', null);
                var newPizzaImage = addElement(newPizzaBox, 'img', null, null);
                newPizzaImage.setAttribute('src', myArr[i]['imageUrl']);
                newPizzaImage.setAttribute('alt', myArr[i]['name']);
                var newPizzaName = addElement(newPizzaBox, 'p', null, myArr[i]['name']);
                var newPizzaPrice = addElement(newPizzaBox, 'div', 'price', myArr[i]['prize']);
                var newPizzaToCartButton = addElement(newPizzaPrice, 'button', null, 'To Cart');
                var newPizzaIngredientsBox = addElement(newPizzaBox, 'div', 'ingredients', null);
                var ingredients = myArr[i]['ingredients'].toString();
                var newPizzaIngredients = addElement(newPizzaIngredientsBox, 'small', null, ingredients.replace(/,/g, ', '));
            }
        }
    };

}

function loadSalads() {
    var xhttp = request('https://tonyspizzafactory.herokuapp.com/api/salads');
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            for (var i = 0; i < myArr.length; i++) {
                var saladsBox = document.getElementsByClassName('menulist')[0];

                var newSaladBox = addElement(saladsBox, 'div', 'menu', null);
                var newSaladImage = addElement(newSaladBox, 'img', null, null);
                newSaladImage.setAttribute('src', myArr[i]['imageUrl']);
                newSaladImage.setAttribute('alt', myArr[i]['name']);
                var newSaladName = addElement(newSaladBox, 'p', null, myArr[i]['name']);
                var newDressingSelection = addElement(newSaladBox, 'select', 'price', null);
                newDressingSelection.setAttribute('name', 'Dressing');
                var newDressingOptionFrench = addElement(newDressingSelection, 'option', null, 'French Dressing');
                var newDressingOptionItalian = addElement(newDressingSelection, 'option', null, 'Italian Dressing');
                var newSaladPrice = addElement(newSaladBox, 'div', 'price', myArr[i]['prize']);
                var newSaladToCartButton = addElement(newSaladPrice, 'button', null, 'To Cart');
                var newSaladIngredientsBox = addElement(newSaladBox, 'div', 'ingredients', null);
                var ingredients = myArr[i]['ingredients'].toString();
                var newSaladIngredients = addElement(newSaladIngredientsBox, 'small', null, ingredients.replace(/,/g, ', '));
            }
        }
    }
}

function loadDrinks() {
    var xhttp = request('https://tonyspizzafactory.herokuapp.com/api/softdrinks');
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var myArr = JSON.parse(xhttp.responseText);
            for (var i = 0; i < myArr.length; i++) {
                var drinksBox = document.getElementsByClassName('menulist')[0];

                var newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'menu');

                var newDrinkBox = addElement(drinksBox, 'div', 'menu', null);
                var newDrinkImage = addElement(newDrinkBox, 'img', null, null);
                newDrinkImage.setAttribute('src', myArr[i]['imageUrl']);
                newDrinkImage.setAttribute('alt', myArr[i]['name']);
                var newDrinkName = addElement(newDrinkBox, 'p', null, myArr[i]['name']);
                var newDrinkVolume = addElement(newDrinkBox, 'p', 'sauce', myArr[i]['volume']);
                var newDrinkPrice = addElement(newDrinkBox, 'div', 'price', myArr[i]['prize']);
                var newCartButton = addElement(newDrinkPrice, 'button', null, 'To Cart');
            }
        }
    }
}

function addElement(parentElement, elementTag, elementClass, elementContent)
{
    var newElement = document.createElement(elementTag);
    if (elementClass !== null && elementClass !== '') newElement.setAttribute('class', elementClass);
    if (elementContent !== null && elementContent !== '') newElement.innerHTML = elementContent;

    if (parentElement !== null) parentElement.appendChild(newElement);

    return newElement;
}

function request(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.setRequestHeader('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4');
    return xhttp;
}
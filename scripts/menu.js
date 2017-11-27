function doMagic(xhttp){
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //var myArr = xhttp.responseText;
            console.log(xhttp.responseText);
        }
    };
    console.log(xhttp.responseText);
    var lis = xhttp.parse()
    //console.log(myArr);
}
function loadPizzas() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    doMagic(xhttp);
}
function loadSalads(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/salads", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    doMagic(xhttp);
}
function loadDrinks(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/drinks", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    doMagic(xhttp);
}
// var item = document.createElement("div");
// var img = document.createElement("img");
// var title = document.createElement("p");
// var price = document.createElement("div"); //button + text
// var ingr = document.createElement("div");
// document.getElementsByClassName("menulist").appendChild(item);
// item.appendChild(img);
// item.appendChild(title);
// item.appendChild(price);
// item.appendChild(ingr);
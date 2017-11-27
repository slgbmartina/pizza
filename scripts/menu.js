function loadPizzas() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
    xhttp.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //var myArr = xhttp.responseText;
            console.log(xhttp.responseText);
        }
    };
    console.log(xhttp.responseText);
    //console.log(myArr);
}
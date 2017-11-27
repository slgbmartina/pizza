function loadPizzas() {




    var xhttp = new XMLHttpRequest();

    var url = "https://tonyspizzafactory.herokuapp.com/api/pizzas?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4";
    //authorization = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4";
    // password = "...";
    xhttp.open("GET", url, true);

    //var url = curl "https://tonyspizzafactory.herokuapp.com/api/pizzas -H Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4";
    //xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log("drin");
        }
    };
    xhttp.send();
    console.log(xhttp);
    console.log(JSON.parse.xhttp);
}
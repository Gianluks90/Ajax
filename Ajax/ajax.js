function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) { 
      var jsonObj = JSON.parse(this.responseText);
  
      for(var i = 0; i<this.responseText.length; i++){
        document.getElementById("Info").innerHTML += 
        "<b>Name: </b> <a data-userid=" + jsonObj[i].id + " href = ''>" + jsonObj[i].name + "</a><br><br>"; 
      }
    }
  };

  let Info = document.getElementById("Info");
  Info.addEventListener("click", function(evt){
  evt.preventDefault();
  let userId = parseInt(evt.target.getAttribute("data-userid"));
  showDetails(userId);

  });
   
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" , true);
  xhttp.send();

}

function showDetails(userId) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) { 
      var jsonObj = JSON.parse(this.responseText);
  
      document.getElementById("Details").innerHTML =
      "<b>Email: </b>" + jsonObj[userId-1].email + "<br>" +
      "<b>City: </b>" + jsonObj[userId-1].address.city + "<br>" +
      "<b>Company Name: </b>" + jsonObj[userId-1].company.name + "<br> <br>";
  
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" , true);
  xhttp.send();

}
// Js code goes here
var id=document.getElementById("current-question-id").value;
var link= `https://jsonmock.hackerrank.com/api/questions/${id}`;

 var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("loader-view").style.display="none";
    console.log(this.responseText);
  }
};
xhttp.open("GET", link, true);
xhttp.send();

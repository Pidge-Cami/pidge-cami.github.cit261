//---------------RESPONSIVE MENU SCRIPT--------------------


 /* Toggle between adding and removing te "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
	var x = document.getElementById("primaryNavigation");
	if (x.className === "show") {
		x.className = "hide";
	} else {
		x.className = "show";
	}
}


//--------------GET A WORK OUT-----------------------------------------


function loadWorkOut(){
	 
var index = ["legs.txt", "core.txt", "workout3.txt"];
requests=new Array(index.length);
for (let i = 0; i < index.length; i++) {
    var url = "https://raw.githubusercontent.com/Pidge-Cami/pidge-cami.github.io/master/JSON/" + index[i];
    requests[i] = new XMLHttpRequest();
    requests[i].open("GET", url);
    requests[i].onload = function() {
        //var myObj = JSON.parse(requests[i].responseText);
	    document.getElementById("demo").innerHTML = requests[i].responseText;
        //console.log(myObj);
    }
    requests[i].send();
}	
	
}	    
	    
//-----------ADD A RUN-----------------
	
function addRun() { 
	
	var date = document.getElementById("runDate");
	var distance = document.getElementById("runDistance");
	var time = document.getElementById("runTime");
    var location = document.getElementById("runLocation");
    
    var table = document.getElementById("runHistory");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= date.value;
    row.insertCell(1).innerHTML= time.value;
    row.insertCell(2).innerHTML= distance.value;
    row.insertCell(3).innerHTML= location.value;
    


	    
}

	    


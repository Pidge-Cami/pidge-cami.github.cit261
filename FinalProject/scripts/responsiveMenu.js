 /* Toggle between adding and removing te "responsive" class to topnav when the user clicks on the icon*/
function myFunction() {
	var x = document.getElementById("primaryNavigation");
	if (x.className === "show") {
		x.className = "hide";
	} else {
		x.className = "show";
	}
}
/*
   Tony Fu
   system.js
 */
(function() {
	window.onload = function ()
	{
		var CPUDrop = document.getElementById("CPU");
		var RAMDrop = document.getElementById("RAM");
		var driveDrop = document.getElementById("Drives");
		
		CPUDrop.onclick = list;
		RAMDrop.onclick = list;
		driveDrop.onclick = list;
	}
	
	function list() {
		this.style.backgroundColor = "ForestGreen";
	}
	
})();
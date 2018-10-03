/*
   Tony Fu
   system.js
 */
var coreUsage = [66, 47, 31, 85];
var coreTemperature = [90, 81, 88, 105];

var RAMUsage = [22, 46, 59];

var driveUsage = [55, 89];
var driveTemperature = [111, 73];

(function() {
	window.onload = function ()
	{
		var CPUDrop = document.getElementById("CPU");
		var RAMDrop = document.getElementById("RAM");
		var driveDrop = document.getElementById("Drives");
		
		CPUDrop.onclick = list;
		RAMDrop.onclick = list;
		driveDrop.onclick = list;
		console.log(hello);
	}
	
	function list() {
		
		document.getElementById("CPU").style.backgroundColor = "#303030";
		document.getElementById("RAM").style.backgroundColor = "#303030";
		document.getElementById("Drives").style.backgroundColor = "#303030";
		
		this.style.backgroundColor = "ForestGreen";
		
		data(this.innerHTML);
	}
	
	function graph(type)
	{
		var length;
		var dataArea = document.getElementById("dataArea");
		dataArea.innerHTML = "";
		if (type == "RAM")
		{
			length = RAMUsage.length;
			var table = document.createElement("table");
			
			dataArea.appendChild(table);
		}
		if (type == "Drives")
		{
			length = driveUsage.length;
			var table = document.createElement("table");
			
			dataArea.appendChild(table);
		}
		if (type == "CPU")
		{
			length = coreUsage.length;
			var table = document.createElement("table");
			
			dataArea.appendChild(table);
		}
		
	}
	
})();
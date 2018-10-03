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
	}
	
	function list() {
		
		document.getElementById("CPU").style.backgroundColor = "#303030";
		document.getElementById("RAM").style.backgroundColor = "#303030";
		document.getElementById("Drives").style.backgroundColor = "#303030";
		
		this.style.backgroundColor = "ForestGreen";
		
		data(this.innerHTML);
	}
	
	function data(type)
	{
		var length;
		var dataArea = document.getElementById("dataArea");
		dataArea.innerHTML = "";
		if (type == "RAM")
		{
			length = RAMUsage.length;
			
			var table = document.createElement("table");
			var th = document.createElement("tr");
			th.innerHTML = "<th>"+type+"</th>" + "<th>Usage %</th>";
			table.append(th);
			for (var i = 0; i < length; i++)
			{
				var tr = document.createElement("tr");
				tr.innerHTML = "<td>"+i+"</td>";
				tr.innerHTML += "<td>"+RAMUsage[i]+"</td>";
				/*tr.innerHTML += "<td>"+coreTemperature[i]+"</td>";*/
				table.append(tr);
			}
			dataArea.appendChild(table);
		}
		if (type == "Drives")
		{
			length = driveUsage.length;
			var table = document.createElement("table");
			var th = document.createElement("tr");
			th.innerHTML = "<th>"+type+"</th>" + "<th>Usage %</th>" + "<th>Temperature</th>";
			table.append(th);
			for (var i = 0; i < length; i++)
			{
				var tr = document.createElement("tr");
				tr.innerHTML = "<td>"+i+"</td>";
				tr.innerHTML += "<td>"+driveUsage[i]+"</td>";
				tr.innerHTML += "<td>"+driveTemperature[i]+"</td>";
				table.append(tr);
			}
			dataArea.appendChild(table);
		}
		if (type == "CPU")
		{
			length = coreUsage.length;
			var table = document.createElement("table");
			var th = document.createElement("tr");
			th.innerHTML = "<th>"+type+"</th>" + "<th>Usage %</th>" + "<th>Temperature</th>";
			table.append(th);
			for (var i = 0; i < length; i++)
			{
				var tr = document.createElement("tr");
				tr.innerHTML = "<td>"+i+"</td>";
				tr.innerHTML += "<td>"+coreUsage[i]+"</td>";
				tr.innerHTML += "<td>"+coreTemperature[i]+"</td>";
				table.append(tr);
			}
			dataArea.appendChild(table);
		}
		
	}
	
})();
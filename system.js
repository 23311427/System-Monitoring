/*
   Tony Fu
   system.js
 */
var coreUsage = [66, 47, 31, 85];
var coreTemperature = [90, 81, 88, 105];

var RAMUsage = [22, 46, 59];

var driveUsage = [55, 89];
var driveTemperature = [111, 73];

var ram = 0;
var cpu = 0;
var drive = 0;

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
	
	function clickFunction()
	{
		var list = document.getElementsByClassName("expand");
		for (var i = 0; i < list.length; i++)
		{
			list[i].style.backgroundColor = "#303030";
		}
		document.getElementById("CPU").style.backgroundColor = "#303030";
		document.getElementById("RAM").style.backgroundColor = "#303030";
		document.getElementById("Drives").style.backgroundColor = "#303030";
		this.style.backgroundColor = "ForestGreen";
	}
	
	// changes the background color of the sidebar navigation to green
	function list() {
		
		document.getElementById("CPU").style.backgroundColor = "#303030";
		document.getElementById("RAM").style.backgroundColor = "#303030";
		document.getElementById("Drives").style.backgroundColor = "#303030";
		var list = document.getElementsByClassName("expand");
		for (var i = 0; i < list.length; i++)
		{
			list[i].style.backgroundColor = "#303030";
		}
		this.style.backgroundColor = "ForestGreen";
		
		data(this.innerHTML);
	}
	
	function graph(idType)
	{
		
	}
	
	function makeTable(length, type)
	{
		var table = document.createElement("table");
		var th = document.createElement("tr");
		if (type == "RAM")
		{
			th.innerHTML = "<th>"+type+"</th>" + "<th>Usage %</th>";
		}
		else 
		{
			th.innerHTML = "<th>"+type+"</th>" + "<th>Usage %</th>" + "<th>Temperature</th>";
		}
		table.appendChild(th);
		
		for (var i = 0; i < length; i++)
		{
			var tr = document.createElement("tr");
			tr.innerHTML = "<td>"+i+"</td>";
			if (type == "RAM")
			{
				tr.innerHTML += "<td>"+RAMUsage[i]+"</td>";
			}
			if (type == "Drives")
			{
				tr.innerHTML += "<td>"+driveUsage[i]+"</td>";
				tr.innerHTML += "<td>"+driveTemperature[i]+"</td>";
			}
			if (type == "CPU")
			{
				tr.innerHTML += "<td>"+coreUsage[i]+"</td>";
				tr.innerHTML += "<td>"+coreTemperature[i]+"</td>";
			}
			table.appendChild(tr);
		}
		document.getElementById("dataArea").appendChild(table);
	}
	
	// displays the data in a table depending on which value is clicked
	function data(type)
	{
		var length;
		var dataArea = document.getElementById("dataArea");
		dataArea.innerHTML = "";
		var sidebar = document.getElementById("sidebar");
		
		if (type == "RAM")
		{
			length = RAMUsage.length;
			if (ram == 0)
			{
				ram = 1;
				
				// expand the sidebar when a choice is made
				for (var i = 0; i < length; i++)
				{
					var div = document.createElement("div");
					div.innerHTML = type + " " + (i+1);
					div.id = type + "" + (i+1);
					div.className = "expand";
					div.onclick = clickFunction;
					sidebar.insertBefore(div, document.getElementById("Drives"));
				}
				// table logic
				makeTable(length, type);
			}
			else 
			{
				ram++;
				if (ram % 2 == 1)
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "none";
					}
				}
				else 
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "block";
					}
				}
				
				makeTable(length, type);
			}
		}
		if (type == "Drives")
		{
			length = driveUsage.length;
			if (drive == 0)
			{
				drive = 1;
				// expand the sidebar when a choice is made
				for (var i = 0; i < length; i++)
				{
					var div = document.createElement("div");
					div.innerHTML = type + " " + (i+1);
					div.id = type + "" + (i+1);
					div.className = "expand";
					div.onclick = clickFunction;
					sidebar.insertBefore(div, document.getElementById("CPU"));
				}
				// table logic
				makeTable(length, type);
			}
			else 
			{
				drive++;
				if (drive % 2 == 1)
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "none";
					}
				}
				else 
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "block";
					}
				}
				
				makeTable(length, type);
			}
			
		}
		if (type == "CPU")
		{
			length = coreUsage.length;
			if (cpu == 0)
			{
				cpu = 1;
				
				// expand the sidebar when a choice is made
				for (var i = 0; i < length; i++)
				{
					var div = document.createElement("div");
					div.innerHTML = type + " " + (i+1);
					div.id = type + "" + (i+1);
					div.className = "expand";
					div.onclick = clickFunction;
					sidebar.appendChild(div);
				}
				// table logic
				makeTable(length, type);
			}
			else 
			{
				cpu++;
				if (cpu % 2 == 1)
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "none";
					}
				}
				else 
				{
					for (var i = 0; i < length; i++)
					{
						var idName = type + "" + (i+1);
						var div = document.getElementById(idName);
						div.style.display = "block";
					}
				}
				
				makeTable(length, type);
			}
		}
		
	}
	
})();
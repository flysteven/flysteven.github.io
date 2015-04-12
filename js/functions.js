window.onload = init;
function init(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","/dat/机枪兵.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	Engine=xmlDoc.getElementsByTagName("引擎");
	document.getElementById("makeNewTable").onclick = alertTest;
	document.getElementById("deleteNode").onclick = delNode;
}

function alertTest(){
	alert("hjha");
	reture false;
}

function makeTableTest(){
	var inText = "testtest";
	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);
	return false;
}

function makeEngineTable(){
	var nodeBox = document.getElementById("tablebox");
	var newTable = document.createElement("table");
	newTable.setAttribute("id","nntable");
	var newTr = document.createElement("tr");
	var newTd = document.createElement("td");
	newTd.appendChild(document.createTextNode("序号"))；
	newTr.appendChild(newTd);
	var newTd = document.createElement("td");
	newTd.appendChild(document.createTextNode("名称"))；
	newTr.appendChild(newTd);
	var newTd = document.createElement("td");
	newTd.appendChild(document.createTextNode("素质"))；
	newTr.appendChild(newTd);
	var newTd = document.createElement("td");
	newTd.appendChild(document.createTextNode("芯片"))；
	newTr.appendChild(newTd);
	newTable.appendChild(newTr);
	nodeBox.appendChild(newTable);
}

function makeTable(){
	document.write("<table border='0.5'>");
	document.write("<tr><td>序号</td><td>名称</td><td>素质</td><td>芯片</td><td>空间</td><td>负重</td><td>耐久</td><td>耗能</td><td>技能</td><td>效果</td></tr>");
	for (var i=0;i<Engine.length;i++){
		document.write("<tr><td>");
		document.write(Engine[i].getElementsByTagName("序号")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("名称")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("素质")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("芯片")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("空间")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("负重")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("耐久")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("耗能")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("技能")[0].childNodes[0].nodeValue);
		document.write("</td><td>");
		document.write(Engine[i].getElementsByTagName("效果")[0].childNodes[0].nodeValue);
		document.write("</td></tr>");
	}
	document.write("</table>");
}
function delNode(){
	var node = document.getElementById("showCD1");
	node.parentNode.removeChild(node);
	
}
window.onload = init;
function init(){
	document.getElementById("makeNewTable").onclick = addRowToTable;
}

function alertTest(){
	alert("this button works!");
}

function loadData(){
	
}

function addRowToTable(){
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
	var tab=document.getElementById("proc"); // 获得表格  
	var rows=tab.rows; // 表格ROW对象  
	var row1=tab.insertRow(rows.length); // 插入一行rows是一个数组，代表没一行，索引从0开始  
	var i=0;
	row1.insertCell(0).innerHTML=Engine[i].getElementsByTagName("素质")[0].childNodes[0].nodeValue; // insertCell插入列，从0开始  
	row1.insertCell(1).innerHTML=Engine[i].getElementsByTagName("芯片")[0].childNodes[0].nodeValue;  
	row1.insertCell(2).innerHTML=Engine[i].getElementsByTagName("空间")[0].childNodes[0].nodeValue;  
	row1.insertCell(3).innerHTML=Engine[i].getElementsByTagName("负重")[0].childNodes[0].nodeValue;
}
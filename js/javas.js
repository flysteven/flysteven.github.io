window.onload = init;
function init(){
	document.getElementById("jiqiangbing").onclick = addJQB;
}

function alertTest(){
	alert("this button works!");
}

function UnitClass(name){
		this.name = name;
}
	
	UnitClass.prototype.lData = loadData;
	
function loadData(){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","/dat/"+this.name+".xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	this.xmlDoc = xmlDoc;
	}
	

function addJQB(){
	
	var JQB = new UnitClass("机枪兵");
	JQB.lData();
	Engine=this.xmlDoc.getElementsByTagName("引擎");
	for(var i=0;i<Engine.length;i++){
		var tab=document.getElementById("proc"); // 获得表格  
		var rows=tab.rows; // 表格ROW对象  
		var row1=tab.insertRow(rows.length); // 插入一行rows是一个数组，代表没一行，索引从0开始  
		row1.insertCell(0).innerHTML=Engine[i].getElementsByTagName("序号")[0].childNodes[0].nodeValue; // insertCell插入列，从0开始  
		row1.insertCell(1).innerHTML=Engine[i].getElementsByTagName("名称")[0].childNodes[0].nodeValue;  
		row1.insertCell(2).innerHTML=Engine[i].getElementsByTagName("素质")[0].childNodes[0].nodeValue;  
		row1.insertCell(3).innerHTML=Engine[i].getElementsByTagName("芯片")[0].childNodes[0].nodeValue;
		row1.insertCell(4).innerHTML=Engine[i].getElementsByTagName("空间")[0].childNodes[0].nodeValue;
		row1.insertCell(5).innerHTML=Engine[i].getElementsByTagName("负重")[0].childNodes[0].nodeValue;
		row1.insertCell(6).innerHTML=Engine[i].getElementsByTagName("耐久")[0].childNodes[0].nodeValue;
		row1.insertCell(7).innerHTML=Engine[i].getElementsByTagName("耗能")[0].childNodes[0].nodeValue;
		row1.insertCell(8).innerHTML=Engine[i].getElementsByTagName("技能")[0].childNodes[0].nodeValue;
		row1.insertCell(9).innerHTML=Engine[i].getElementsByTagName("效果")[0].childNodes[0].nodeValue;
	}
}
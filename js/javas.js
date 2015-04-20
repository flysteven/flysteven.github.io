window.onload = init;
function init(){
	document.getElementById("makeNewTable").onclick = addRowToTable;
}

function alertTest(){
	alert("this button works!");
}

function addRowToTable(){
	var tab=document.getElementById("proc"); // 获得表格  
	var rows=tab.rows; // 表格ROW对象  
	var row1=tab.insertRow(rows.length); // 插入一行rows是一个数组，代表没一行，索引从0开始  
	row1.insertCell(0).innerHTML="0011"; // insertCell插入列，从0开始  
	row1.insertCell(1).innerHTML="0022";  
	row1.insertCell(2).innerHTML="0033";  
	row1.insertCell(3).innerHTML="0044";
}
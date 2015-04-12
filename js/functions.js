window.onload = init;
function init(){
	document.getElementById("makeNewTable").onclick = alertTest;
	document.getElementById("deleteNode").onclick = delNode;
	
}


function delNode(){
	var node = document.getElementById("showCD1");
	node.parentNode.removeChild(node);
	
}
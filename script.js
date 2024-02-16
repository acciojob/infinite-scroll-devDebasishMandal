//your code here!
let i=0;
let ol=document.getElementById("infi-list");
function createDefault(params) {
for( i=1;i<=10;i++){
	let li=document.createElement("li");
	li.textContent=`Item ${i}`;
	ol.append(li);
}
}
createDefault();

ol.addEventListener('scroll', function() {
  if (ol.scrollHeight - ol.scrollTop <= ol.clientHeight) {
	 for (let j = 0; j < 2; j++) {
	 	let li2=document.createElement("li");
	li2.textContent=`Item ${i}`;
	ol.append(li2);
	i=i+1;
	 }
  }	
});




var english=["The child liked the chocolate.", 
             "She was stopped by the bravest knight.",
             "Mary baked a cake for his birthday",
             "She decorated the cake carefully",
             "Mary wore a dress with polka dots."];

var hindi=["राम ने सीता के लिए फल तोड़ा।",
           "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
           "मेहनत का फल मीठा होता है।",
           "वाह! वह खूबसूरत है।",
           "पेड़ से पत्ते गिर गए।"]        


function language(){
	s=document.getElementById("language").value
	if(s=="english"){
		document.getElementById('Sen').style.display='initial';
		document.getElementById('a').innerHTML=english[0];
		document.getElementById('b').innerHTML=english[1];
		document.getElementById('c').innerHTML=english[2];
		document.getElementById('d').innerHTML=english[3];
		document.getElementById('e').innerHTML=english[4];
		
	}
	if(s=="hindi"){
		document.getElementById('Sen').style.display='initial';
		document.getElementById('a').innerHTML=hindi[0];
		document.getElementById('b').innerHTML=hindi[1];
		document.getElementById('c').innerHTML=hindi[2];
		document.getElementById('d').innerHTML=hindi[3];
		document.getElementById('e').innerHTML=hindi[4];
		
	}
	if(s=="select"){
		alert("Select a language");
	}
}
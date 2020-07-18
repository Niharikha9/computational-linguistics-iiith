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
	s=document.getElementById("language").value;
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
var w=[];



function table(){
	var sen="";
	var sent="";
	var tab="";
	var id=document.getElementById("language").value;
	console.log(id);
	sen = document.getElementById('Sen').value;
	console.log(sen);
    
	if(s == "english"){
		if (sen == "1"){
			sent=english[0];
		}
		if (sen == "2"){
			sent=english[1];
		}
		if (sen == "3"){
			sent=english[2];
		}
		if (sen == "4"){
			sent=english[3];
		}
		if (sen == "5"){
			sent=english[4];
		}
		document.getElementById('msg').innerHTML="<i><font color='blue'>Select the POS tag for Corresponding words<i></font>";
    w=sent.split(' ');
    console.log(w);
    for(i = 0 ; i<w.length ; i++){
		tab += "<tr><td>"+w[i]+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		}
	}
	if(id == "hindi"){
		if (sen == "1"){
			sent=hindi[0];
		}
		if (sen == "2"){
			sent=hindi[1];
		}
		if (sen == "3"){
			sent=hindi[2];
		}
		if (sen == "4"){
			sent=hindi[3];
		}
		if (sen == "5"){
			sent=hindi[4];
		}
		console.log(sent);
	document.getElementById('msg').innerHTML="<i><font color='blue'>Select the POS tag for Corresponding words<i></font>";
    w=sent.split(' ');
    console.log(w);
    for(i = 0 ; i<w.length ; i++){
		tab += "<tr><td>"+w[i]+"</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
		}
	}
	
    document.getElementById('table').innerHTML="<table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>"+tab+"</table>";
    document.getElementById('submit').innerHTML="<button style='font-size:20px'>Submit</button>";    
    
}
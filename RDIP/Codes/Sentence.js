var english = [["John ate an apple before afternoon",
                "before afternoon John ate an apple",
                "John before afternoon ate an apple"],
               ["some students like to study in the night",
                "at night some students like to study"],
               ["John and Mary went to church", 
                "Mary and John went to church"],
               ["John went to church after eating",
                "after eating John went to church", 
                "John after eating went to church"],
               ["did he go to market", 
                "he did go to market"],
               ["the woman who called my sister sells cosmetics", 
                "the woman who sells cosmetics called my sister", 
                "my sister who sells cosmetics called the woman", 
                "my sister who called the woman sells cosmetics"],
               ["John goes to the library and studies", 
               "John studies and goes to the library"],
               ["John ate an apple so did she", 
                "she ate an apple so did John"],
               ["the teacher returned the book after she noticed the error", 
                "the teacher noticed the error after she returned the book", 
                "after the teacher returned the book she noticed the error", 
                "after the teacher noticed the error she returned the book", 
                "she returned the book after the teacher noticed the error", 
                "she noticed the error after the teacher returned the book", 
                "after she returned the book the teacher noticed the error",
                "after she noticed the error the teacher returned the book"],
               ["I told her that I bought a book yesterday",
                "I told her yesterday that I bought a book", 
                "yesterday I told her that I bought a book", 
                "I bought a book that I told her yesterday", 
                "I bought a book yesterday that I told her", 
                "yesterday I bought a book that I told her"]];

// Hindi Sentences.

var hindi = [["राम और श्याम बाजार गयें", 
              "राम और श्याम गयें बाजार", 
              "बाजार गयें राम और श्याम", 
              "गयें बाजार राम और श्याम"],
             ["राम सोया और श्याम भी",
              "श्याम सोया और राम भी", 
              "सोया श्याम और राम भी", 
              "सोया राम और श्याम भी"],
             ["मैंने उसे बताया कि राम सो रहा है", 
              "मैंने उसे बताया कि सो रहा है राम", 
              "उसे मैंने बताया कि राम सो रहा है", 
              "उसे मैंने बताया कि सो रहा है राम", 
              "मैंने बताया उसे कि राम सो रहा है", 
              "मैंने बताया उसे कि सो रहा है राम", 
              "उसे बताया मैंने कि राम सो रहा है", 
              "उसे बताया मैंने कि सो रहा है राम", 
              "बताया मैंने उसे कि राम सो रहा है", 
              "बताया मैंने उसे कि सो रहा है राम", 
              "बताया उसे मैंने कि राम सो रहा है", 
              "बताया उसे मैंने कि सो रहा है राम"],
             ["राम खाकर सोया",
              "खाकर राम सोया", 
              "राम सोया खाकर", 
              "खाकर सोया राम", 
              "सोया राम खाकर",
              "सोया खाकर राम"],
             ["बिल्लियों को मारकर कुत्ता सो गया", 
              "मारकर बिल्लियों को कुत्ता सो गया", 
              "बिल्लियों को मारकर सो गया कुत्ता", 
              "मारकर बिल्लियों को सो गया कुत्ता", 
              "कुत्ता सो गया बिल्लियों को मारकर", 
              "कुत्ता सो गया मारकर बिल्लियों को", 
              "सो गया कुत्ता बिल्लियों को मारकर", 
              "सो गया कुत्ता मारकर बिल्लियों को"],
             ["एक लाल किताब वहाँ है", 
              "एक लाल किताब है वहाँ", 
              "वहाँ है एक लाल किताब", 
              "है वहाँ एक लाल किताब"],
             ["एक बड़ी सी किताब वहाँ है", 
              "एक बड़ी सी किताब है वहाँ", 
              "बड़ी सी एक किताब वहाँ है", 
              " बड़ी सी एक किताब है वहाँ", 
              "वहाँ है एक बड़ी सी किताब", 
              "वहाँ है बड़ी सी एक किताब", 
              " है वहाँ एक बड़ी सी किताब", 
              "है वहाँ बड़ी सी एक किताब"]];

var s;
var t;
var btnlen, click;
var word ="";
var rand;
var answers = document.getElementById("Correct-answers");
var listanswers = "";

function dropdown(){
    s = document.getElementById('language').value;
    if(s == 'english'){
		word = "";
		listanswers = "";
		answers.innerHTML = "";
		document.getElementById("cmp").innerHTML = "";
		document.getElementById("demo2").innerHTML = "";
		document.getElementById("sentence").innerHTML = "";
		document.getElementById("reform").innerHTML = "";
		document.getElementById("correctness").innerHTML = "";
		document.getElementById("demo1").innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br><i>(select the buttons in proper order)</i>";
	    rand = Math.floor(Math.random() * 9);
		var esen = english[rand][0];
		var wd = esen.split(" ");
	    x = wd.length;
	    t = wd.length-1;
	    var  temp, q;
		while(0!==x){
			q = Math.floor(Math.random()*x);
			x -= 1;
			temp = wd[x];
			wd[x] = wd[q];
			wd[q] = temp;
		}
		
		var finalbtns="";
		var btns="";
		var content;
		btnlen = 0;
		click = 0;
		for( var i=0;i<=wd.length-1;i++){
			content = wd[i];
			btns = "<button id='button"+i+"'onclick='formed(this.id,this.value)' value='"+content+"'>"+content+"</button> &nbsp;&nbsp;";
			finalbtns += btns;
			btnlen++;
		}
		
		document.getElementById("buttons").innerHTML = finalbtns;
		
		
	}
	else if(s == 'hindi'){
		word = "";
		listanswers = "";
		answers.innerHTML = "";
		document.getElementById("cmp").innerHTML = "";
		document.getElementById("correctness").innerHTML = "";
		document.getElementById("demo2").innerHTML = "";
		document.getElementById("sentence").innerHTML = "";
		document.getElementById("reform").innerHTML = "";
		document.getElementById("demo1").innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br><i>(select the buttons in proper order)</i>";
	    rand = Math.floor(Math.random() * 6);
		var hsen = hindi[rand][0];
		var wd = hsen.split(" ");
		x = wd.length;
		t = wd.length-1;
	    var  temp, q;
		while(0!==x){
			q = Math.floor(Math.random()*x);
			x -= 1;
			temp =wd[x];
			wd[x] = wd[q];
			wd[q] = temp;
		}
		var finalbtns="";
		var btns="";
		var content;
		btnlen = 0;
		click = 0;
		for(var i=0;i<=wd.length-1;i++){
			content = wd[i];
			btns = "<button id='button"+i+"' onclick='formed(this.id,this.value)' value='"+content+"'>"+content+"</button> &nbsp;&nbsp;";
			finalbtns += btns;
			btnlen++;
		}
		
		document.getElementById("buttons").innerHTML = finalbtns;			
	}
else if(s="select"){
	alert("Select language");
}
}
function formed(id,value){
	
	document.getElementById("demo2").innerHTML = "<b>Formed Sentence</b><i>(after selecting words)</i>:";
	word += value ;
	word += " ";
	document.getElementById("sentence").innerHTML = word;
	document.getElementById(id).style.display = "none";
	document.getElementById("reform").innerHTML = "<button id='re' onclick='reform();'>Re-form the Sentence</button>";
	click ++;
	if(click == btnlen){
		document.getElementById("correctness").innerHTML = "<button id='crct' onclick='check();'>Check the correctness of the sentence</button>";
	}
}

function reform(){
	for(var i=0;i<=t;i++){
		document.getElementById('button'+i).style.display = "";
	}
	word = "";
	document.getElementById("sentence").innerHTML = word;
	document.getElementById("reform").innerHTML = "";
	document.getElementById("demo2").innerHTML = "";
	document.getElementById("correctness").innerHTML = "";
	document.getElementById("cmp").innerHTML = "";
	click = 0;
	listanswers = "";
	answers.innerHTML = "";
}


function check(){
	var p = word.trim();
	var check;
	if(s=='english'){
		check = english[rand].includes(p);		
	}
	else if(s=='hindi'){
		check = hindi[rand].includes(p);
	}
	if(check)
		document.getElementById("cmp").innerHTML = "<font color ='green'>Right Answer!!!</font><br>";
	else
		document.getElementById("cmp").innerHTML = "<font color ='red'>Wrong Answer!!!</font><br><br><br><button id='correctbut'>Get Correct Sentence</button>";
}

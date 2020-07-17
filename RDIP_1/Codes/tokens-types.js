var passage1='A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.';

var passage2='A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.';

var passage3='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.';

var s=document.getElementById("corpus").value;
var x;
var y;
var z;
var corp="";
var b;


//functionality of dropdown
function dropdown(){
	var s=document.getElementById("corpus").value;
	document.getElementById("demo2").innerHTML="Enter the number of tokens and types for the above corpus:"
	document.getElementById("demo3").innerHTML="<table><tr><td>#tokens</td><td><input type ='text' id='token'></td></tr><tr><td>#types</td><td><input type ='text' id='type'></td></tr></table>";
	document.getElementById("demo4").innerHTML="<button onclick='calculate()'>Submit</button>";
	document.getElementById("demo5").innerHTML="";
	document.getElementById("demo6").innerHTML="";
	document.getElementById('demo7').innerHTML="";
    corp="";
	if(s=="corpus1"){
        document.getElementById("demo1").innerHTML=passage1; 
	    corp=passage1;
	} else if(s=="corpus2"){
        document.getElementById("demo1").innerHTML=passage2;
       corp=passage2;
	} else if(s=="corpus3"){
        document.getElementById("demo1").innerHTML=passage3;
       corp=passage3;
	}else if(s=="select"){
		alert("Select a corpus");
	}
}
//to find number of tokens and types
function calculate(){
	var tokens;
	var types;
	y=corp.replace(/[^a-zA-Z ]/g, "");
	z=y.toLowerCase();
	x= z.split(' ');
	tokens= x.length;
	b=[];
	for(var i=0;i<x.length;i++){
         if(b.indexOf(x[i])===-1){
         	b.push(x[i]);
         }
         }
         types= b.length;
    var t1 = parseInt(document.getElementById("token").value);
	var t2 = parseInt(document.getElementById("type").value);
	if(tokens===t1)
		document.getElementById("token").style.backgroundColor = "green";
	else {

		document.getElementById("token").style.backgroundColor = "red";
	}
	if(types===t2)
		document.getElementById("type").style.backgroundColor = "green";
	else  	{	
		document.getElementById("type").style.backgroundColor = "red";
	}
	if(tokens==t1 && types==t2){
		document.getElementById("demo5").innerHTML="<font color='green'>Right Answer</font>"+"<br><br><button onclick='newtype()'>Continue</button>"
	}else{
		document.getElementById("demo5").innerHTML="<font color='red'>Wrong Answer</font>"
	}
	    
}

function newtype(){
	document.getElementById("demo4").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
	document.getElementById("demo5").innerHTML="#new types<br><input type='text' id='new'>";
	document.getElementById("demo6").innerHTML="<br><button onclick='reduce()'>Submit</button>";
}
var stemmer = new Snowball('English'); 
//Calculate number new types using stemming
function reduce(){
var ne=[];
var nt=[];
var len="";
s1=corp.replace(/[^a-zA-Z ]/g, "");
	s2=s1.toLowerCase();
	s3= s2.split(' ');
var k=0;
for(i=0;i<s3.length;i++){
if(s3[i]=='found')
	s3[i]='find';
if(s3[i]=='ate')
	s3[i]='eat';
if(s3[i]=='not')
	s3[i]='no';
if(s3[i]=='this')
	s3[i]='that';
if(s3[i]=='grown' || s3[i]=='grew')
	s3[i]='grow';
if(s3[i]=='was'|| s3[i]=='are')
	s3[i]='is';
if(s3[i]=='did'|| s3[i]=='done' || s3[i]=='does')
	s3[i]='do';
if(s3[i]=='ran')
	s3[i]='run';
if(s3[i]=='me')
	s3[i]='i';
if(s3[i]=='said')
	s3[i]='say';
if(s3[i]=='heard')
	s3[i]='hear';
if(s3[i]=='played')
	s3[i]='play';
if(s3[i]=='it' || s3[i]=='himself' || s3[i]=='his' || s3[i]=='him')
			s3[i]='he';
if(s3[i]=='would')
	s3[i]='will';
if(s3[i]=='had')
	s3[i]='have';
stemmer.setCurrent(s3[i]);     
stemmer.stem();
ne.push(stemmer.getCurrent());
 
for(var i=0;i<ne.length;i++){
         if(nt.indexOf(ne[i])===-1){
            nt.push(ne[i]);
         }
         }
     }
         len=nt.length;
         //console.log(len);
         
var n=document.getElementById('new').value;
if(n==len){
	document.getElementById('new').style.backgroundColor="green";
	document.getElementById('demo7').innerHTML="<font color='green'>Right Answer</font>";
}else{
	document.getElementById('new').style.backgroundColor="red";
	document.getElementById('demo7').innerHTML="<font color='red'>Wrong Answer</font>";
}

}
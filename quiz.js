const questions= [
       ['Question 1', 'goes'],
       ['Question 2', 'go'],
       ['Question 3', 'going'],
       ['Question 4', 'to go']
                 
 
];

 let correctAnswer= 0; 
for ( i=0;  i< questions.length; i++) {
 let question  = questions [i] [0];
 let answer = questions [i] [1];
 let response = prompt (question);
  
  if (response===answer){
    correctAnswer +=1;
  }
  
}

let html = `<h1>You got ${correctAnswer} question(s)correct </H1>`

document.querySelector('main').innerHTML=html;

  

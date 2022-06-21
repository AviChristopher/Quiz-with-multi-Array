const questions= [
       ['Question 1', 'goes'],
       ['Question 2', 'go'],
       ['Question 3', 'going'],
       ['Question 4', 'to go']


];


 const correct= [];
 const incorrect=[];
 let correctAnswer= 0; 


for ( i=0;  i< questions.length; i++) {
 let question  = questions [i] [0];
 let answer = questions [i] [1];
 let response = prompt (question);

  if (response===answer){
    correctAnswer +=1;
    correct.push(question);
    
  }else {
    incorrect.push(question);
  }

}


  function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
   return items ;

}


let html = `<h1>You got ${correctAnswer} question(s)correct </H1>

            <h2> You got these questions right: </h2>
            <ol> ${ createListItems(correct)} </ol>
            
            <h2> You got these questions wrong: </h2>
            <ol>${createListItems(incorrect)} </ol> `;

document.querySelector('main').innerHTML=html;

  

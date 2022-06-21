const questions= [
       {question: 'She _____ to the store.', answer:'goes'},
       {question: 'I _____  to sleep at 10pm.', answer:'go'},
       {question:'We are ______ to the theatre.', answer:'going'},
       {question:'Would you like ______ to the mall?', answer: 'to go'}


];


 const correct= [];
 const incorrect=[];
 let correctAnswer= 0; 


for ( i=0;  i< questions.length; i++) {
 let question  = questions[i].question;
 let answer = questions[i].answer;
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

  

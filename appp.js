const {readFileSync, writeFileSync} = require('fs'); //imports the readFileSync and writeFileSync functions from the Node.js fs (file system) module. These functions are used for reading and writing files synchronously.




const fs = require('fs'); //imports the entire fs module into the variable fs. This is not necessary since the required functions are already imported in the previous line, so it can be removed.


const first = readFileSync('./content/first.txt','utf8') //reads the contents of the file named "first.txt" located in the "./content" directory synchronously. The file is read using the UTF-8 encoding, and the contents are stored in the variable first.
const second = readFileSync('./content/second.txt','utf8') // same but for var second


console.log(first, second); //logs the values of the variables


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`); //adds content to the .txt file invoked


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});



////////////////////////////////

const {readFile, writeFile} = require('fs');
console.log('start');  // logs 'start' to represent the initiation of code
readFile('./content/first.txt','utf8', (err, result)=> { // Reads content of 'first.txt' file, UTF8 details what encoding to use
   if (err) { 
       console.log(err);// if an err is returned the console will log it
       return 
   }
   const first = result; // assigns the content of the text.file stored in the variable result to the variable first
   console.log(result);
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => { //console logs the template literal values of 'first' and 'second'
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');// when program is complete logs "done with the task"
       }
       );

    })
});


console.log('starting next task');

///////////////////////////////////

const getTodos = () => { // declares a function getTodos with an arrow function
    const request = new XMLHttpRequest(); // XMLHtt Object
   
   
   request.addEventListener('readystatechange', ()=>{ // Event listener added
   
   
    if(request.readyState === 4 && request.status ===200){ // if request is successful and the status is 200/'ok' then respone text will be logged
      console.log(request.responseText)
       }
      else if (request.readyState === 4){ // if request went through but status code wasnt matched then log "couldnt fetch data"
        console.log('could not fetch the data');
      }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   request.send();
   }
   
   
   getTodos();
   getTodos();
   
   ///////////////////////////////////
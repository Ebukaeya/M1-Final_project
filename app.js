
    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

    window.onload = function () {
      // HINTS
      // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
      // For each question, create a container for wrapping it; then create a radio button
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
      // with, as options, both the correct answer and the incorrect ones
      // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
      //
      // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
      // Display the first question with the text and the radio buttons
      // when the user selects an answer, pick the next question from the array and replace the old one with it
      // saving the user's choice in a variable

      // get a random questions from question array

      const getQuestion = ()=>{
                
                let index = Math.floor(Math.random()*questions.length)
                let question = questions[index]
                
                return question

      }
      

       // create elements in the div
       count = 1   // counting question number
       let displayedQuestions= []

       let point = 0

       // creating a function to evaluate answer
       // increase question number count
       //add points to if answe is correct
       //call disQuestion again

       const evaluate = (value,fetcgedQuestion)=>{
           count++
           console.log(fetcgedQuestion);
           if (fetcgedQuestion.correct_answer===value){
                point++
               document.getElementById("displayQuestions").remove()
               let flash = document.getElementById("flash")
               flash.style.color= "Green"
               flash.innerHTML= "Correct: " + " "+ "Your point is " + point 
               flash.hidden=false
             
                disQuestion()
           }
           else {
            document.getElementById("displayQuestions").remove()
               console.log("incorrect");
               let flash = document.getElementById("flash")
               flash.style.color= "red"
               flash.innerHTML= "Wrong: " + " "+ "Your point is " + point 
               flash.hidden=false
               
               disQuestion()
           }
             console.log(point);




       }



  // display question in the page
      const disQuestion = ()=>{
             let fetcgedQuestion = getQuestion()  // returns an object with keys: Category, type, difficulty, question, 
                                          //       correct_answer, incorrect_answers
            console.log(fetcgedQuestion);

            // check if fetched question is in the displayedQuestion array. 

        

            let displayDiv = document.createElement("div")
            displayDiv.id = "displayQuestions"
            
            let body = document.getElementsByTagName("body")[0]
            body.appendChild(displayDiv)



            displayedQuestions.push(fetcgedQuestion)
             console.log(fetcgedQuestion.difficulty);

             let correctAnswer = fetcgedQuestion.correct_answer

             let questionOptions = fetcgedQuestion.incorrect_answers
             questionOptions.push(correctAnswer)
             console.log(questionOptions);
            
            

             let divNode = document.createElement("div")
             divNode.classList.add("questions")

             let heading= document.createElement("h5")
             heading.innerHTML= "Question"+ " " + count
            
             
             let questionNode = document.createElement("p")
             questionNode.innerHTML= fetcgedQuestion.question

             let optionLength = fetcgedQuestion.incorrect_answers.length + 1
             console.log(optionLength);


            // appending to question to div
            divNode.appendChild(heading)
            divNode.appendChild(questionNode)


             for(let i = 0; i <optionLength; i++   ){
                let option= document.createElement("input")
                let label = document.createElement("label")
                

                option.type="radio"  // option is a radio button
                option.id = "1d"+i
                label.for = "1d"+i
            
                label.innerHTML = questionOptions[i]
                
                option.name =  "name"
                option.value = questionOptions[i]
                console.log(option.value);
                
                
                option.addEventListener("click", ()=>{ 
                    
                    evaluate(option.value, fetcgedQuestion)
                })
                
                
                divNode.appendChild(option)
                divNode.appendChild(label)
             }


        

            
             displayDiv.appendChild(divNode)
            

         //    for (let question = 0; question<= length.questions; question++){
//
  //              let divNode = document.createElement("div")
    //            divNode.classList.add("questions")
      //          divNode.innerHTML= "h1"
//
  //              let displayDiv = document.getElementById("displayQuestions")
    //            displayDiv.appendChild(divNode)
      //          displayDiv.innerHTML="hi"
        //     }
            





      }
      disQuestion()
    };

    // How to calculate the result? You can do it in 2 ways:
    // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
    // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
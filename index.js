
    var chalk = require("chalk");
    var topper = "";

    const wrong = chalk.bold.red;
    const quesCol = chalk.bold.blue;
    const right = chalk.green;

    var readlineSync = require("readline-sync");
    var score = 0;

    var userName = readlineSync.question(chalk.underline.blue("Enter your name: "));

    console.log(quesCol("Welcome "+userName+" to the Quiz about me."));
    console.log("Let's get this bread");

    var questions = [{
      question:"1. What is my nickName? ",
      answer:"Mili"
    },{
      question:"2. Name my favourite kpop band. ",
      answer:"BTS"
    },{
      question:"3. Do I like watching kdramas? ",
      answer:"yes"
    },{
      question:"4. What genre movies I like? ",
      answer:"Thriller"
    },{
      question:"5. Who is my favourite youtuber? ",
      answer:"Yoora Jung"
    }]

    function quizQuestion(question,answer){
      var userAnswer = readlineSync.question(chalk.blue.bold(question));

      if(userAnswer.toLowerCase() === answer.toLowerCase()){
        console.log(right("Bingo!!You're absolutely right."));
        score = score + 1;
      }else{
        console.log(wrong("Sorry!You're wrong."));
        console.log(chalk.yellow("The correct answer is "+answer));
        score = score + 0;
      }
    }

    for(var i=0;i<questions.length;i++){

      var currentQuestion = questions[i];
      quizQuestion(currentQuestion.question, currentQuestion.answer);

    }
    console.log(chalk.bgRed("Your score is "+score));
    if(score==3 || score == 4){
      
      console.log("Good job!You know me very well");
      
    }else if(score==5){
      console.log("Excellent! You're my best friend.");
    }else{
      console.log("It's Ok buddy");
    }

    var highscorers = [{
      name:"Drikpriya Sharma",
      score:5
    },{
      name:"Kriti Dhiman",
      score:4
    }];

    console.log("Let's check the ranks....");
    
    
      function highRanker(userName,userScore){
       var topperScore = 0;
       for(var i=0;i<highscorers.length;i++){
          var currentRanker = highscorers[i];
          if(currentRanker.score>userScore){
            topper = currentRanker.name;
            userScore = currentRanker.score;
            userName = currentRanker.name;
          }else{
            topper = userName;
          }
           
        }
        return topper;
      }
        var str = highRanker(userName,score);
        console.log(chalk.underline.bold.yellow(str)+chalk.underline.red(" has the highest rank "));

      

    





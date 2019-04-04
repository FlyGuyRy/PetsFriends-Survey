// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyCbq8leWlS9t1LMEP48mIKBgEY1PjVwJro",
  authDomain: "petsfriends-survey.firebaseapp.com",
  databaseURL: "https://petsfriends-survey.firebaseio.com",
  projectId: "petsfriends-survey",
  storageBucket: "petsfriends-survey.appspot.com",
  messagingSenderId: "621413194718"
};
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding survey
  $("#add-survey-response").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var question1 = $("#title-question").val().trim();
    var question2 = $("#font-question").val().trim();
    var question3 = $("#background-question").val().trim();
    var question4 = $("#form-question").val().trim();
    var question5 = $("#results-question").val().trim();
    var question6 = $("#use-question").val().trim();
    var question7 = $("#rate-question").val().trim();
    var input1 = $("#rate-input").val().trim();
    
    // Creates local "temporary" object for holding employee data
    var newSurvey = {
      ques1: question1,
      ques2: question2,
      ques3: question3,
      ques4: question4,
      ques5: question5,
      ques6: question6,
      ques7: question7,
      inp1: input1
    };
  
    // Uploads employee data to the database
    database.ref().push(newSurvey);
  
    // Logs everything to console
    console.log(newSurvey.ques1);
    console.log(newSurvey.ques2);
    console.log(newSurvey.ques3);
    console.log(newSurvey.ques4);
    console.log(newSurvey.ques5);
    console.log(newSurvey.ques6);
    console.log(newSurvey.ques7);
    console.log(newSurvey.inp1);
  
    alert("Thank you for your input!");
  
    // Clears all of the text-boxes
    $("#title-question").val("");
    $("#front-question").val("");
    $("#background-question").val("");
    $("#form-question").val("");
    $("#results-question").val("");
    $("#use-question").val("");
    $("#rate-question").val("");
    $("#rate-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var question1 = childSnapshot.val().ques1;
    var question2 = childSnapshot.val().ques2;
    var question3 = childSnapshot.val().ques3;
    var question4 = childSnapshot.val().ques4;
    var question5 = childSnapshot.val().ques5;
    var question6 = childSnapshot.val().ques6;
    var question7 = childSnapshot.val().ques7;
    var input1 = childSnapshot.val().inp1;
  
    // Employee Info
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);
    console.log(question6);
    console.log(question7);
    console.log(input1);
   
    // Create the new row
    // var newRow = $("<tr>").append(
    //   $("<td>").text(question1),
    //   $("<td>").text(question2),
    //   $("<td>").text(question3),
    //   $("<td>").text(question4),
    //   $("<td>").text(question5),
    //   $("<td>").text(question6),
    //   $("<td>").text(question7),
    //   $("<td>").text(input1)
    // );
  
    // Append the new row to the table
    // $(".card-body").append(newRow);
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  
$(document).ready(function() {

  index = 0;
  console.log(questions[0]);
  setQuestion(questions[index]);
  //$("#correctAnswer").hide();

  $(".nav li").on("click", function() {
    console.log("clicked on item");
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $(".nav li").removeClass("active");
    return false;
  });

  // function showAnswer() {
  //   $(".answers").fadeOut(1000);
  //   setTimeout(function() {
  //     $("#correctAnswer").fadeIn(1000);
  //   }, 1100);
  //
  // }

  $("#nextQuestion").click(function() {

    //$("#correctAnswer").fadeOut(1000);
    // setTimeout(function() {
    //   $(".answers").fadeIn(1000);
    // }, 1100);
    $("#correctAnswer").css("background-color", "transparent");
    $("#answerSpace").text("ΠΑΡΑΚΑΛΩ ΑΠΑΝΤΗΣΤΕ");
    index++;
    if (index == questions.length) {
      index = 0;
      console.log("looping questions over");
    }
    setQuestion(questions[index]);
    console.log("index: " + index);
  });

  function setQuestion(questions) {
    $("#theQuestion").html("<h3>" + questions.question + "</h3>");
    $("#answerOne").html("<h4>" + questions.first + "</h4>");
    $("#answerTwo").html("<h4>" + questions.two + "</h4>");
    $("#answerThree").html("<h4>" + questions.three + "</h4>");
    $("#answerFour").html("<h4>" + questions.four + "</h4>");
    console.log("this works");
  }

  $("#answerOne").click(function() {
    if (questions[index].first == questions[index].correct) {
      $("#correctAnswer").css("background-color", "#33660fb3");
    } else {
      $("#correctAnswer").css("background-color", "#9e1212b3");
    }
    $("#answerSpace").text(questions[index].correct);
    //showAnswer();
  });

  $("#answerTwo").click(function() {
    if (questions[index].two == questions[index].correct) {
      $("#correctAnswer").css("background-color", "#33660fb3");
    } else {
      $("#correctAnswer").css("background-color", "#9e1212b3");
    }
    $("#answerSpace").text(questions[index].correct);
    //showAnswer();
  });

  $("#answerThree").click(function() {
    if (questions[index].three == questions[index].correct) {
      $("#correctAnswer").css("background-color", "#33660fb3");
    } else {
      $("#correctAnswer").css("background-color", "#9e1212b3");
    }
    $("#answerSpace").text(questions[index].correct);
    //showAnswer();
  });

  $("#answerFour").click(function() {
    if (questions[index].four == questions[index].correct) {
      $("#correctAnswer").css("background-color", "#33660fb3");
    } else {
      $("#correctAnswer").css("background-color", "#9e1212b3");
    }
    $("#answerSpace").text(questions[index].correct);
    //showAnswer();
  });



});

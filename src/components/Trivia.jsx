import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Trivia = () => {
  // state for all trivia objects
  const [allTriviaQuestions, setAllTriviaQuestions] = useState([]);
  //  state for loader
  const [loading, setLoading] = useState(true);

  // state for current trivia questions being asked
  const [currentTriviaQuestion, setCurrentTriviaQuestion] = useState([]);

  //get randomQuestion
  const randomTriviaQuestion = (triviaArray) => {
    const randomIndex = Math.floor(Math.random() * triviaArray.length);
    return triviaArray[randomIndex];
  };

  const randomQuestion = randomTriviaQuestion(allTriviaQuestions);

  const setAnswers = (incorrectAnswersArray, correctAnswerStr) => {
    // combine array with string into new array
    const arrayOfAllAnswerChoices = [
      ...incorrectAnswersArray,
      correctAnswerStr,
    ];
    // Shuffle the array to randomize the order
    arrayOfAllAnswerChoices.sort(() => Math.random() - 0.5);

    return arrayOfAllAnswerChoices;
  };

  // modal for Incorrect Answer
  const handleCorrectAnswer = () => {
    Swal.fire({
      icon: "success",
      title: "Correct Answer!",
      text: "You can now proceed with your attack.",
      timer: 2000, // Auto close after 2 seconds
      showConfirmButton: false,
    });
  };

  // modal for Incorrect Answer
  const handleIncorrectAnswer = () => {
    Swal.fire({
      icon: "error",
      title: "Incorrect Answer!",
      text: "Your turn is skipped. The other fleet will attack now.",
      timer: 2000, // Auto close after 2 seconds
      showConfirmButton: false,
    }).then(() => {
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // we need logic here to switch player's turn and change the state between player 1 & 2
      //setCurrentPlayer(CURRENT_PLAYER.computer); // Skip player's turn
    });
  };

  // LOGIC FOR THE ALERT MESSAGE THAT PROMPTS USER TO ANSWER QUESTION ------> Radio selection
  //   const askQuestion = (question, correctAnswer, answerChoices) => {
  //     return Swal.fire({
  //       title: "Answer this question to proceed",
  //       text: question,
  //       inputOptions: answerChoices.reduce((obj, choice, index) => {
  //         obj[index] = choice;
  //         return obj;
  //       }, {}),
  //       input: "radio",
  //       //set timer
  //       timer: 10000,
  //       // cool progression bar that helps players vizualize timer
  //       timerProgressBar: true,
  //       inputPlaceholder: "Select an answer",
  //       showCancelButton: true,
  //       confirmButtonText: "Submit",
  //       cancelButtonText: "Cancel",
  //       preConfirm: (selectedValue) => {
  //         const answer = answerChoices[selectedValue];
  //         if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
  //           handleCorrectAnswer();
  //           return true;
  //         } else {
  //           handleIncorrectAnswer();
  //           return false;
  //         }
  //       },
  //     });
  //   };

  // LOGIC FOR THE ALERT MESSAGE THAT PROMPTS USER TO ANSWER QUESTION ----------> dropdown selection
  const askQuestion = (question, correctAnswer, answerChoices) => {
    return Swal.fire({
      title: "Answer this question to proceed",
      text: question,
      inputOptions: answerChoices.reduce((obj, choice, index) => {
        obj[index] = choice;
        return obj;
      }, {}),
      input: "select", // Change this to "select" for multiple choice buttons
      timer: 10000,
      timerProgressBar: true,
      inputPlaceholder: "Select an answer",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      preConfirm: (selectedValue) => {
        const answer = answerChoices[selectedValue];
        if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
          handleCorrectAnswer();
          return true;
        } else {
          handleIncorrectAnswer();
          return false;
        }
      },
    });
  };

  // fetch for all trivia objects
  useEffect(() => {
    fetch("http://localhost:4444/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllTriviaQuestions(data);
        setLoading(false);
        const randomQuestion = randomTriviaQuestion(data);
        const answerChoices = setAnswers(
          randomQuestion.incorrect_answers,
          randomQuestion.correct_answer
        );

        askQuestion(
          randomQuestion.question,
          randomQuestion.correct_answer,
          answerChoices
        );
      })
      .catch((error) => {
        console.error("Error fetching trivia questions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!allTriviaQuestions.length) {
    return <div>No trivia questions available</div>;
  }

  // log to check if every time randomTrivia is called a different question is returned
  console.log(
    "This is a random trivia question",
    randomTriviaQuestion(allTriviaQuestions)
  );

  // we return null because SweetAlert2 will render our alerts/modals seperately
  return null;
};

export default Trivia;

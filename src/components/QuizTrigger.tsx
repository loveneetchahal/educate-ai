import Link from 'next/link';
import { useState } from 'react';

export default function QuizTrigger() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    // Redirect to the quiz page, this could be a route change or a state change
    // For now, we'll assume a route change to '/take-quiz'
    // router.push('/take-quiz');
  };

  if (quizStarted) {
    return null; // or a loading indicator until the redirect happens
  }

  return (
    <div>
      <p>You've reached the end of the lesson. Ready to start the quiz?</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

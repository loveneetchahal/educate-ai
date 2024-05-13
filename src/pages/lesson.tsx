import Link from 'next/link';
import { useState, useEffect } from 'react';
import Chat from '../components/Chat';
import QuizTrigger from '../components/QuizTrigger';


export default function LessonPage() {
  // Placeholder for state and logic to fetch and display lesson content
  // For the demo, we'll use static data

  const [lessonContent, setLessonContent] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showQuizTrigger, setShowQuizTrigger] = useState(false);

  useEffect(() => {
    // TODO: Fetch lesson content from the backend
    async function fetchLessonContent() {
      // Placeholder for backend API call to fetch content
      const content = await getLessonContent();
      setLessonContent(content);
      // Determine when to show the quiz trigger
      setShowQuizTrigger(true);
    }
    fetchLessonContent();
  }, []);

  return (
    <div>
      <h1>Lesson Content</h1>
      <p>{lessonContent}</p>
      {/* Quiz Trigger */}
      {showQuizTrigger && <QuizTrigger />}
      {/* Interactive Chat */}
      <Chat />
      {/* Generate Questions */}
      {/* Placeholder for generate questions feature */}
      {/* This will be replaced with actual implementation when backend is ready */}
      <div>Question generation feature will be here.</div>
      <Link href="/student-dashboard">Back to Dashboard</Link>
    </div>
  );
}


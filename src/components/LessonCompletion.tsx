import Link from 'next/link';

export default function LessonCompletion() {
  // Placeholder for lesson completion data
  const lessonCompletionData = {
    score: 80, // Example score
    feedback: 'Great job! You have a good understanding of the material.',
  };

  return (
    <div>
      <h1>Lesson Completed</h1>
      <p>Your score: {lessonCompletionData.score}%</p>
      <p>{lessonCompletionData.feedback}</p>
      <Link href="/student-dashboard">Return to Dashboard</Link>
    </div>
  );
}

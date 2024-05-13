import Link from 'next/link';

export default function UpcomingLessons() {
  // Placeholder for state and logic to fetch and display upcoming lessons
  // For the demo, we'll use static data

  const mockUpcomingLessons = [
    { date: '2023-04-10', topic: 'Algebra Basics' },
    { date: '2023-04-12', topic: 'Introduction to Geometry' },
    { date: '2023-04-15', topic: 'Trigonometry Fundamentals' },
    // Add more mock data as needed
  ];

  return (
    <div>
      <h1>Upcoming Lessons</h1>
      <ul>
        {mockUpcomingLessons.map((lesson) => (
          <li key={lesson.date}>
            {lesson.date}: {lesson.topic}
          </li>
        ))}
      </ul>
      <Link href="/teacher-dashboard"><p>Back to Dashboard</p></Link>
    </div>
  );
}

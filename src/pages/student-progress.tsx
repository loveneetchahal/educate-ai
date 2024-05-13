import Link from 'next/link';
import { useEffect } from 'react';

export default function StudentProgress() {
  // Placeholder for state and logic to fetch and display student progress
  // For the demo, we'll use static data
  useEffect(() => {
    // Fetch student progress data from the backend
    async function fetchStudentProgress() {
      // Placeholder for backend API call to fetch progress data
      //const progressData = await getStudentProgress();
      // Update state with fetched data
    }
    fetchStudentProgress();
  }, []);

  const mockStudentProgress = [
    { name: 'Student A', progress: 75 },
    { name: 'Student B', progress: 60 },
    { name: 'Student C', progress: 90 },
    // Add more mock data as needed
  ];

  return (
    <div>
      <h1>Student Progress</h1>
      <ul>
        {mockStudentProgress.map((student) => (
          <li key={student.name}>
            {student.name}: {student.progress}%
          </li>
        ))}
      </ul>
      <Link href="/teacher-dashboard"><p>Back to Dashboard</p></Link>
    </div>
  );
}

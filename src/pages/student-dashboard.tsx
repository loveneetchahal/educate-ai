import { mockApiService } from '@/mocks/mockApiService';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function StudentDashboard() {
  // Enhanced content for the student dashboard with progress tracking
  const [progress, setProgress] = useState([]);
  useEffect(() => {
    async function fetchProgress() {
      const data = await mockApiService.getProgress();
      setProgress(data);
    }
    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/courses">View Courses</Link></li>
          <li><Link href="/assignments">View Assignments</Link></li>
          <li><Link href="/progress">View Progress</Link></li>
          <li><Link href="/announcements">Announcements</Link></li>
        </ul>
      </nav>
      {/* Display progress */}
      <ul>
        {progress.map(item => (
          <li key={item.courseId}>Course: {item.courseName}, Progress: {item.percentage}%</li>
        ))}
      </ul>
    </div>
  );
}

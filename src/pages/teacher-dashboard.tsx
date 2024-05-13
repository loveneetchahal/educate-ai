import { mockApiService } from '@/mocks/mockApiService';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TeacherDashboard() {
  // Enhanced content for the teacher dashboard with asynchronous data loading
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function fetchCourses() {
      const data = await mockApiService.getCourses();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/create-course"><p>Create Course</p></Link></li>
          <li><Link href="/manage-courses"><p>Manage Courses</p></Link></li>
          <li><Link href="/student-progress"><p>View Student Progress</p></Link></li>
          <li><Link href="/upcoming-lessons"><p>View Upcoming Lessons</p></Link></li>
        </ul>
      </nav>
      {/* Display list of courses */}
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

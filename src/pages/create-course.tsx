import { useState } from 'react';
import Link from 'next/link';
import { mockApiService } from '../mocks/mockApiService';

export default function CreateCourse() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  // Add more state variables as needed for course creation form

  const handleCreateCourse = async (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate sending course data to the backend to create a new course
    try {
      const newCourse = await mockApiService.createCourse(courseName, courseDescription);
      console.log('Course created:', newCourse);
      // Redirect to manage courses or show success message
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Course</h1>
      <form onSubmit={handleCreateCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
        {/* Add more form fields as needed */}
        <button type="submit">Create Course</button>
      </form>
      <Link href="/teacher-dashboard">Back to Dashboard</Link>
    </div>
  );
}

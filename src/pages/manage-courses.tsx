import Link from 'next/link';

export default function ManageCourses() {
  // Placeholder for state and logic to manage courses
  // This should fetch and display a list of courses that the teacher can edit or delete

  return (
    <div>
      <h1>Manage Courses</h1>
      {/* Placeholder for course list */}
      <p>List of courses will be displayed here.</p>
      {/* Add functionality to edit and delete courses */}
      <Link href="/teacher-dashboard"><p>Back to Dashboard</p></Link>
    </div>
  );
}

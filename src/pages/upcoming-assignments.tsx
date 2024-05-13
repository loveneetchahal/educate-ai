import Link from 'next/link';

export default function UpcomingAssignments() {
  // Placeholder for state and logic to fetch and display upcoming assignments
  // For the demo, we'll use static data

  const mockUpcomingAssignments = [
    { dueDate: '2023-04-20', assignment: 'Algebra Homework' },
    { dueDate: '2023-04-22', assignment: 'Science Project' },
    { dueDate: '2023-04-25', assignment: 'History Essay' },
    // Add more mock data as needed
  ];

  return (
    <div>
      <h1>Upcoming Assignments</h1>
      <ul>
        {mockUpcomingAssignments.map((assignment) => (
          <li key={assignment.assignment}>
            {assignment.dueDate}: {assignment.assignment}
          </li>
        ))}
      </ul>
      <Link href="/student-dashboard"><p>Back to Dashboard</p></Link>
    </div>
  );
}

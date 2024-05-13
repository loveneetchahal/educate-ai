import Link from 'next/link';

export default function LearningOverview() {
  // Placeholder for state and logic to fetch and display learning overview
  // For the demo, we'll use static data
  useEffect(() => {
    // Fetch learning overview data from the backend
    async function fetchLearningOverview() {
      // Placeholder for backend API call to fetch learning data
      const overviewData = await getLearningOverview();
      // Update state with fetched data
    }
    fetchLearningOverview();
  }, []);

  const mockLearningOverview = [
    { course: 'Mathematics', progress: 80 },
    { course: 'Science', progress: 70 },
    { course: 'History', progress: 85 },
    // Add more mock data as needed
  ];

  return (
    <div>
      <h1>Learning Overview</h1>
      <ul>
        {mockLearningOverview.map((course) => (
          <li key={course.course}>
            {course.course}: {course.progress}%
          </li>
        ))}
      </ul>
      <Link href="/student-dashboard">Back to Dashboard</Link>
    </div>
  );
}

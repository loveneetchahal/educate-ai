// This is a mock API service to simulate backend responses for RBAC

export const mockApiService = {
  authenticate: async (username: string, password: string) => {
    // Simulate authentication by checking if the username includes 'teacher' or 'student'
    if (username.includes('teacher')) {
      return { userType: 'teacher' };
    } else if (username.includes('student')) {
      return { userType: 'student' };
    } else {
      throw new Error('Authentication failed');
    }
  },
  getCourses: async () => {
    // Simulate fetching courses
    return [
      { id: 'course-1', name: 'Algebra I' },
      { id: 'course-2', name: 'Biology 101' },
      { id: 'course-3', name: 'World History' },
    ];
  },
  getUpcomingAssignments: async () => {
    // Simulate fetching upcoming assignments
    return [
      { dueDate: '2023-04-20', assignment: 'Algebra Homework' },
      { dueDate: '2023-04-22', assignment: 'Biology Lab Report' },
      { dueDate: '2023-04-25', assignment: 'History Essay' },
    ];
  },
  getProgress: async () => {
    // Simulate fetching progress data
    return [
      { courseId: 'course-1', courseName: 'Algebra I', percentage: 75 },
      { courseId: 'course-2', courseName: 'Biology 101', percentage: 80 },
      { courseId: 'course-3', courseName: 'World History', percentage: 90 },
    ];
  },
  getQuizQuestions: async () => {
    // Simulate fetching quiz questions
    return [
      { question: 'What is the quadratic formula?', options: ['Option A', 'Option B', 'Option C'], correctOption: 'Option B' },
      { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome'], correctOption: 'Mitochondria' },
      { question: 'Who was the first president of the United States?', options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson'], correctOption: 'George Washington' },
    ];
  },
  createCourse: async (courseName: string, courseDescription: string) => {
    // Simulate course creation
    console.log('Course created:', courseName, courseDescription);
    return { id: 'course-4', name: courseName, description: courseDescription };
  },
  submitAssignment: async (assignmentId: string, studentId: string, content: string) => {
    // Simulate assignment submission
    console.log('Assignment submitted:', assignmentId, studentId, content);
    return { success: true, message: 'Assignment submitted successfully' };
  },
  getAnnouncements: async () => {
    // Simulate fetching announcements
    return [
      { id: 'announcement-1', content: 'Midterm exams next week.' },
      { id: 'announcement-2', content: 'School science fair dates announced.' },
      { id: 'announcement-3', content: 'New library books have arrived.' },
    ];
  },
  connectToChat: async (lessonId: string) => {
    // Simulate connecting to a chat WebSocket
    console.log('Connected to chat for lesson:', lessonId);
    // This is a placeholder, in a real application you would return a WebSocket connection
    return { success: true, message: 'Connected to chat' };
  },
  submitQuizAnswers: async (quizId: string, studentId: string, answers: Array<{ questionId: string, answer: string }>) => {
    // Simulate quiz answer submission
    console.log('Quiz answers submitted:', quizId, studentId, answers);
    return { success: true, score: 80 }; // Simulate a score calculation
  },
  getAnalytics: async (teacherId: string) => {
    // Simulate fetching progress and performance analytics
    return [
      { courseId: 'course-1', averageScore: 75 },
      { courseId: 'course-2', averageScore: 82 },
      { courseId: 'course-3', averageScore: 78 },
    ];
  },
  getLearningMaterials: async (courseId: string) => {
    // Simulate fetching learning materials
    return [
      { materialId: 'material-1', title: 'Introduction to Algebra', content: 'Algebra is...' },
      { materialId: 'material-2', title: 'Biology Basics', content: 'Biology is the study of...' },
      { materialId: 'material-3', title: 'World War II', content: 'World War II was...' },
    ];
  },
  // Add more mock API methods as needed
};

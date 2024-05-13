import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [userType, setUserType] = useState(null);

  const handleLogin = (type: 'teacher' | 'student') => {
    setUserType(type);
    // Placeholder for authentication logic
    // After successful login, redirect to the appropriate dashboard
    router.push(`/${type}-dashboard`);
  };

  return (
    <div>
      <button onClick={() => handleLogin('teacher')}>Login as Teacher</button>
      <button onClick={() => handleLogin('student')}>Login as Student</button>
    </div>
  );
}

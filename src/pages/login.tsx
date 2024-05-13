import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement actual authentication logic with backend
    // Ensure secure communication with HTTPS
    try {
      const userType = await authenticateUser(username, password);
      if (userType === 'teacher') {
        router.push('/teacher-dashboard');
      } else if (userType === 'student') {
        router.push('/student-dashboard');
      } else {
        console.error('Login failed: Invalid user type');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  async function authenticateUser(username: string, password: string): Promise<'teacher' | 'student' | null> {
    // Replace with a call to the backend authentication service
    // For now, we simulate the authentication
    if (username.startsWith('teacher')) {
      return 'teacher';
    } else if (username.startsWith('student')) {
      return 'student';
    }
    return null;
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}


import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      console.log('Logging in:', { name, password });
  
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          name,
          password,
        });
  
        const jwtToken = response.data.token;
        Cookies.set('token', jwtToken, { expires: 7 });
        console.log('Login successful, JWT Token stored in cookies:', jwtToken);
        
        navigate('/', { replace: true });
      } catch (error) {
        if (error.response) {
          console.error('Error during login:', error.response.data);
        } else {
          console.error('Error message:', error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm 360:p-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Login
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

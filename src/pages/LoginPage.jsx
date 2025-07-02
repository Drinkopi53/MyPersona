import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  updateProfile 
} from 'firebase/auth'; // Import Firebase Auth methods

export default function MyPersonaPortfolio() {
  // State for navigation and dark mode
  const [view, setView] = useState('login'); // login | register | portfolio
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false); // New loading state
  
  // State for form data and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  
  // State for Firebase Authentication user
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // If user is logged in, navigate to portfolio view
      if (currentUser) {
        setView('portfolio');
      } else {
        // If user logs out or is not logged in, stay on login/register view
        setView('login'); // Or 'register' depending on initial state
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to handle login with Firebase
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged listener will handle setting user and view
    } catch (firebaseError) {
      setError(firebaseError.message);
    }
  };

  // Function to handle registration with Firebase
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Set loading to true on submission

    if (!email || !password || !confirmPassword || !username) {
      setError('Please fill in all fields');
      return;
    }

    if (!selectedFile) {
      setError('Please select a profile image');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // 1. Create Firebase user first to get UID
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      const userId = firebaseUser.uid;

      // Ensure Google Drive folder exists BEFORE uploading image
      await fetch('http://localhost:5000/ensure-user-folder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
      });

      // Upload image using the obtained userId
      const formData = new FormData();
      formData.append('profileImage', selectedFile);

      const uploadResponse = await fetch(`http://localhost:5000/upload-profile-image?username=${encodeURIComponent(username)}&userId=${userId}`, {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.message || 'Failed to upload image');
      }

      const uploadData = await uploadResponse.json();
      const uploadedImageUrl = uploadData.photoURL; // Backend now returns the photoURL directly

      // Update user profile with displayName and the photoURL from backend
      await updateProfile(firebaseUser, {
        displayName: username,
        photoURL: uploadedImageUrl
      });

      // Manually update the user state to reflect the new displayName and photoURL immediately
      setUser({
        ...firebaseUser,
        displayName: username,
        photoURL: uploadedImageUrl
      });

      alert('Registration successful! Your portfolio space is ready.');
      setView('portfolio'); // Redirect to portfolio after successful registration and profile update
      setSelectedFile(null); // Clear the selected file after successful registration
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // onAuthStateChanged listener will handle setting user to null and view to 'login'
      setEmail(''); // Clear form fields on logout
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (firebaseError) {
      console.error("Logout Error:", firebaseError);
      // Optionally set an error state for logout errors
    }
  };

  // If user is logged in, show HomePage and a logout button
  if (user) {
    // Function to get initials from display name or email
    const getInitials = (name, email) => {
      if (name) {
        const parts = name.split(' ');
        if (parts.length > 1) {
          return parts[0][0] + parts[1][0];
        } else if (parts[0]) {
          return parts[0][0];
        }
      } else if (email) {
        return email[0];
      }
      return ''; // Default if no name or email
    };

    const userInitials = getInitials(user.displayName, user.email).toUpperCase();

    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        {/* Header with Logout Button and Profile Image */}
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <svg 
              className="w-10 h-10 cursor-pointer transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-110"
              viewBox="0 0 80 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle with Gradient */}
              <circle 
                cx="40" 
                cy="40" 
                r="38" 
                className="transition-all duration-300 dark:fill-indigo-900/30 fill-indigo-100" 
                stroke="url(#logoGradient)" 
                strokeWidth="2"
              />
              
              {/* Abstract Face Elements */}
              <path 
                d="M25 30C25 30 30 25 40 25C50 25 55 30 55 30" 
                className="stroke-indigo-600 dark:stroke-indigo-400" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <circle 
                cx="32" 
                cy="38" 
                r="3" 
                className="fill-indigo-600 dark:fill-indigo-400 transition-all duration-300" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <circle 
                cx="48" 
                cy="38" 
                r="3" 
                className="fill-indigo-600 dark:fill-indigo-400 transition-all duration-300" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <path 
                d="M30 50C30 50 35 55 40 55C45 55 50 50 50 50" 
                className="stroke-indigo-600 dark:stroke-indigo-400" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Tech Elements - Animated Code Brackets */}
              <g className="opacity-70 group-hover:opacity-100 transition-opacity">
                <path 
                  d="M15 20L20 15L25 10" 
                  className="stroke-indigo-500 dark:stroke-indigo-300" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="5,2"
                  strokeDashoffset="0"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="10;0;10" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
                <path 
                  d="M65 60L60 65L55 70" 
                  className="stroke-indigo-500 dark:stroke-indigo-300" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="5,2"
                  strokeDashoffset="0"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="0;10;0" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Dynamic Gradient */}
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>
                
                {/* Glowing Effect on Hover */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">MyPersona</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Portfolio</a>
              <a href="#cv" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">CV</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              {/* Profile Image/Initials */}
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      userInitials
                    )}
                  </div>
                </button>
              </div>
              
              {/* Logout Button */}
              <button 
                onClick={handleLogout}
                className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <HomePage user={user} />
      </div>
    );
  }

  // If not logged in, show Login/Register forms
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header (without logout button) */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <svg 
              className="w-10 h-10 cursor-pointer transition-transform duration-500 ease-in-out transform hover:rotate-12 hover:scale-110"
              viewBox="0 0 80 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle with Gradient */}
              <circle 
                cx="40" 
                cy="40" 
                r="38" 
                className="transition-all duration-300 dark:fill-indigo-900/30 fill-indigo-100" 
                stroke="url(#logoGradient)" 
                strokeWidth="2"
              />
              
              {/* Abstract Face Elements */}
              <path 
                d="M25 30C25 30 30 25 40 25C50 25 55 30 55 30" 
                className="stroke-indigo-600 dark:stroke-indigo-400" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <circle 
                cx="32" 
                cy="38" 
                r="3" 
                className="fill-indigo-600 dark:fill-indigo-400 transition-all duration-300" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <circle 
                cx="48" 
                cy="38" 
                r="3" 
                className="fill-indigo-600 dark:fill-indigo-400 transition-all duration-300" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <path 
                d="M30 50C30 50 35 55 40 55C45 55 50 50 50 50" 
                className="stroke-indigo-600 dark:stroke-indigo-400" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Tech Elements - Animated Code Brackets */}
              <g className="opacity-70 group-hover:opacity-100 transition-opacity">
                <path 
                  d="M15 20L20 15L25 10" 
                  className="stroke-indigo-500 dark:stroke-indigo-300" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="5,2"
                  strokeDashoffset="0"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="10;0;10" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
                <path 
                  d="M65 60L60 65L55 70" 
                  className="stroke-indigo-500 dark:stroke-indigo-300" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="5,2"
                  strokeDashoffset="0"
                >
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="0;10;0" 
                    dur="4s" 
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Dynamic Gradient */}
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
                </linearGradient>
                
                {/* Glowing Effect on Hover */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">MyPersona</span>
          </div>
        </div>
      </header>

      {/* Login / Register Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
        {view === 'login' ? (
          <LoginForm 
            darkMode={darkMode}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            handleLogin={handleLogin}
            setView={setView}
          />
        ) : (
          <RegisterForm
            darkMode={darkMode}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            username={username}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setUsername={setUsername}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            error={error}
            handleRegister={handleRegister}
            setView={setView}
            loading={loading} // Pass loading state
          />
        )}
      </main>
    </div>
  );
}

// Halaman Login
function LoginForm({ darkMode, email, password, setEmail, setPassword, error, handleLogin, setView }) {
  return (
    <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login to MyPersona</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome back!</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="••••••••"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{' '}
          <button type="button" onClick={() => setView('register')} className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

// Halaman Register
function RegisterForm({ darkMode, email, password, confirmPassword, username, setEmail, setPassword, setConfirmPassword, setUsername, selectedFile, setSelectedFile, error, handleRegister, setView, loading }) {
  return (
    <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Start building your portfolio</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="drinkopi"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`mt-1 block w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Image</label>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className={`mt-1 block w-full text-sm text-gray-700 dark:text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100
              ${darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'}`}
            required
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Selected file: {selectedFile.name}</p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{' '}
          <button type="button" onClick={() => setView('login')} className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

// Halaman Utama Portfolio
function MainPortfolio({ darkMode, setView, setIsLoggedIn }) {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">MyPersona</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                setIsLoggedIn(false);
                setView('login');
              }}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      {/* Konten Utama */}
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Welcome to Your Portfolio Dashboard</h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          You're now logged in. You can manage your portfolio, download your CV, and more.
        </p>
      </main>
    </div>
  );
}

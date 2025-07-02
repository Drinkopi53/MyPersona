import { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, setDoc, collection, addDoc, deleteDoc, query, where, getDocs } from 'firebase/firestore';

export default function MyPersonaPortfolio({ user }) {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [fullScreenPreview, setFullScreenPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState('image'); // Default to image
  const [shareLink, setShareLink] = useState('');
  const [isEditingCV, setIsEditingCV] = useState(false);
  const [skillsInputValue, setSkillsInputValue] = useState('');
  const [userData, setUserData] = useState({
    name: user?.displayName || (user?.email ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1) : ''),
    email: user?.email || ''
  });
  // State for portfolio item form inputs
  const [portfolioTitle, setPortfolioTitle] = useState('');
  const [portfolioDescription, setPortfolioDescription] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('web'); // New state for category
  const [heroDescription, setHeroDescription] = useState('Creative Frontend Developer crafting modern and intuitive web experiences with React, Next.js, and Tailwind CSS.');
  const [isEditingHeroDescription, setIsEditingHeroDescription] = useState(false);
  const [localPhotoURL, setLocalPhotoURL] = useState(user?.photoURL || "https://placehold.co/600x600?text=Upload+Image");

  // Listen for authentication state changes
  // Removed internal onAuthStateChanged listener as user prop is passed from parent

  // Load CV data from Firestore when user logs in
  useEffect(() => {
    const loadCvData = async () => {
      if (user) {
        console.log(`[HomePage] Attempting to load CV data for user.uid: ${user.uid}`);
        const cvDocRef = doc(db, 'cvData', user.uid);
        const cvDocSnap = await getDoc(cvDocRef);
        if (cvDocSnap.exists()) {
          const data = cvDocSnap.data();
          console.log(`[HomePage] CV data loaded for ${user.uid}:`, data);
          setCvData(prevCvData => ({
            ...prevCvData, // Retain existing state
            ...data,       // Merge fetched data, overwriting if present
          }));
          // Update heroDescription state if it exists in Firestore data
          if (data.heroDescription) {
            setHeroDescription(data.heroDescription);
          }
        } else {
          console.log(`[HomePage] No CV data document found for user.uid: ${user.uid}. Initializing with defaults.`);
          // If no CV data exists, initialize with default or user's basic info
          setCvData(prev => ({
            ...prev,
            name: user.displayName || user.email.split('@')[0],
            email: user.email
          }));
          // Also ensure heroDescription is set to its default if no data exists
          setHeroDescription('Creative Frontend Developer crafting modern and intuitive web experiences with React, Next.js, and Tailwind CSS.');
        }
      }
    };

    if (user) {
      loadCvData();
    }
  }, [user]); // Depend on 'user' prop

  // Update CV data when user data changes (for initial sync from auth)
  // Update CV data when user prop changes
  useEffect(() => {
    if (user) {
      setUserData({
        name: user.displayName || (user.email ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1) : ''),
        email: user.email
      });
      setCvData(prev => ({
        ...prev,
        name: user.displayName || (user.email ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1) : ''),
        email: user.email
      }));
      setLocalPhotoURL(user.photoURL || "https://placehold.co/600x600?text=Upload+Image");
    }
  }, [user]);

  // CV Data with state for editing
  const [cvData, setCvData] = useState({
    name: 'John Doe',
    title: 'Frontend Developer',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    summary: 'Creative and innovative frontend developer with 5+ years of experience building modern web applications.',
    profileImage: null,
    experience: [
      {
        company: 'Tech Corp',
        role: 'Senior Frontend Developer',
        duration: '2020 - Present',
        startDate: '2020-01',
        endDate: '',
        description: 'Led frontend development team and implemented modern React applications.',
        location: 'San Francisco, CA'
      },
      {
        company: 'Digital Solutions',
        role: 'Frontend Developer',
        duration: '2017 - 2020',
        startDate: '2017-06',
        endDate: '2020-01',
        description: 'Developed responsive web applications using React and modern JavaScript.',
        location: 'New York, NY'
      }
    ],
    education: [
      {
        institution: 'University of Tech',
        degree: 'BS in Computer Science',
        duration: '2013 - 2017',
        fieldOfStudy: 'Computer Science',
        graduationDate: '2017-05',
        gpa: '3.8',
        location: 'Boston, MA'
      }
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'GraphQL']
  });

  // Initialize skills input value when CV data changes
  useEffect(() => {
    if (cvData.skills && Array.isArray(cvData.skills)) {
      setSkillsInputValue(cvData.skills.join(', '));
    }
  }, [cvData.skills]);

  // Portfolio items state
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Load portfolio items from Firestore
  useEffect(() => {
    const loadPortfolioItems = async () => {
      if (user) {
        const q = query(collection(db, 'portfolioItems'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.docs.forEach(async (docSnap) => {
          const itemData = docSnap.data();
          if (!itemData.userId) {
            // Migrate old document by adding userId
            const itemRef = doc(db, 'portfolioItems', docSnap.id);
            await setDoc(itemRef, { userId: user.uid }, { merge: true });
            items.push({ id: docSnap.id, ...itemData, userId: user.uid });
          } else {
            items.push({ id: docSnap.id, ...itemData });
          }
        });
        setPortfolioItems(items);
      } else {
        console.log('User is not available, not loading portfolio items.');
        setPortfolioItems([]); // Clear portfolio items if user logs out
      }
    };

    if (user) {
      loadPortfolioItems();
    }
  }, [user]);

  const filteredItems = activeTab === 'all'
    ? (portfolioItems || [])
    : (portfolioItems || []).filter(item => item.category === activeTab);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle portfolio upload (add or update)
  const handleUpload = async (e) => {
    e.preventDefault();
    // const category = e.target.category.value; // No longer needed, use selectedCategory state
    const itemId = editingItem?.id;

    let itemUrl = portfolioUrl; // Use state for URL
    let uploadedFileId = null; // Declare at higher scope
    let uploadedMimeType = null; // Declare at higher scope

    if (!portfolioTitle || !portfolioDescription || !selectedType || !selectedCategory) {
      alert('Title, Description, Type, and Category are required.');
      return;
    }

    try {
      if (selectedType === 'link') {
        if (!itemUrl) {
          alert('URL is required for External Link type.');
          return;
        }
      } else {
        // Image, Video, PDF Document types
        if (selectedFile) {
          const uploadFormData = new FormData();
          uploadFormData.append('file', selectedFile);

          // Use user.displayName (username) for the folder name (backend will sanitize)
const uploadResponse = await fetch(`http://localhost:5000/upload-portfolio-item?username=${encodeURIComponent(user.displayName)}`, {
            method: 'POST',
            body: uploadFormData,
          });


          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json();
            throw new Error(errorData.message || 'File upload failed.');
          }

          const uploadResult = await uploadResponse.json();
          uploadedFileId = uploadResult.fileId; // Assign value
          uploadedMimeType = uploadResult.mimeType; // Assign value
          // itemUrl will now be constructed on the frontend for display
          // For Firestore, we store fileId and mimeType
        } else if (editingItem && editingItem.fileId && editingItem.type !== 'link') {
          // If editing and no new file selected, keep the existing fileId and mimeType
          uploadedFileId = editingItem.fileId; // Use existing
          uploadedMimeType = editingItem.mimeType; // Use existing
        } else {
          alert('Please select a file to upload.');
          return;
        }
      }

      const itemData = {
        title: portfolioTitle,
        description: portfolioDescription,
        type: selectedType,
        // Store fileId and mimeType instead of url for non-link types
        ...(selectedType !== 'link' && { fileId: uploadedFileId, mimeType: uploadedMimeType }), // Use directly
        // For link type, store the URL
        ...(selectedType === 'link' && { url: portfolioUrl }),
        category: selectedCategory,
        date: new Date().toISOString().split('T')[0],
        userId: user.uid
      };

      if (itemId) {
        const itemRef = doc(db, 'portfolioItems', itemId);
        await setDoc(itemRef, itemData, { merge: true });
        setPortfolioItems(prev => prev.map(item => item.id === itemId ? { id: itemId, ...itemData } : item));
        alert('Portfolio item updated successfully!');
      } else {
        const docRef = await addDoc(collection(db, 'portfolioItems'), itemData);
        setPortfolioItems(prev => [...prev, { id: docRef.id, ...itemData }]);
        alert('Portfolio item added successfully!');
      }
      setShowUploadModal(false);
      setEditingItem(null);
      setSelectedFile(null); // Clear selected file after successful upload
      setSelectedType('image'); // Reset type to default
      // Reset form fields after successful submission
      setPortfolioTitle('');
      setPortfolioDescription('');
      setPortfolioUrl('');
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      alert(`Failed to save portfolio item. Please try again. Error: ${error.message}`);
    }
  };

  // Handle edit portfolio item
  const handleEdit = (item) => {
    setEditingItem(item);
    setPortfolioTitle(item.title);
    setPortfolioDescription(item.description);
    setSelectedType(item.type);
    setSelectedCategory(item.category); // Set category when editing
    if (item.type === 'link') {
      setPortfolioUrl(item.url);
    } else {
      // For non-link types, clear URL and rely on fileId/mimeType
      setPortfolioUrl('');
      // If editing an old item that only has 'url', we might need to parse it or handle migration
      // For now, assume new uploads will have fileId/mimeType
    }
    setShowUploadModal(true);
  };

  // Update form states when editingItem changes or modal is opened for new item
  useEffect(() => {
    if (editingItem) {
      setPortfolioTitle(editingItem.title);
      setPortfolioDescription(editingItem.description);
      setSelectedType(editingItem.type);
      setSelectedCategory(editingItem.category); // Set category when editing
      if (editingItem.type === 'link') {
        setPortfolioUrl(editingItem.url);
      } else {
        setPortfolioUrl(''); // Clear URL if not a link type, rely on fileId/mimeType
      }
    } else {
      // Reset form fields when adding a new item
      setPortfolioTitle('');
      setPortfolioDescription('');
      setPortfolioUrl('');
      setSelectedType('image'); // Reset type to default
      setSelectedCategory('web'); // Reset category to default
    }
  }, [editingItem, showUploadModal]); // Depend on editingItem and showUploadModal

  // Handle delete portfolio item
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this portfolio item?')) {
      try {
        await deleteDoc(doc(db, 'portfolioItems', id));
        setPortfolioItems(prev => prev.filter(item => item.id !== id));
        alert('Portfolio item deleted successfully!');
      } catch (error) {
        console.error('Error deleting portfolio item:', error);
        alert('Failed to delete portfolio item. Please try again.');
      }
    }
  };

  // Generate share link
  const generateShareLink = () => {
    if (!user || !user.uid) {
      alert('User not logged in. Cannot generate share link.');
      return;
    }
    // Construct the dynamic share link using the user's UID
    // For production, replace window.location.origin with your actual domain (e.g., 'https://yourportfolioapp.com')
    const newShareLink = `${window.location.origin}/portfolio/${user.uid}`;
    setShareLink(newShareLink);
    navigator.clipboard.writeText(newShareLink);
    alert(`Shareable link copied to clipboard: ${newShareLink}`);
  };

  // Download CV
  const handleDownloadCv = async () => {
    if (!user || !user.uid) {
      alert('User not logged in. Cannot download CV.');
      return;
    }

    try {
const response = await fetch(`http://localhost:5000/api/download-cv/${user.uid}`);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${cvData.name.replace(/\s/g, '_')}_CV.pdf`; // Dynamic filename
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        const errorData = await response.text(); // Get error as text
        alert(`Failed to download CV. Server response: ${errorData}`);
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('An error occurred while downloading CV.');
    }
  };

  // Handle CV edit
  const handleCVEdit = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [section, index, field] = name.split('.');

      if (section === 'experience' || section === 'education') {
        const updatedSection = [...cvData[section]];
        updatedSection[parseInt(index)][field] = value;
        setCvData(prev => ({ ...prev, [section]: updatedSection }));
      }
    } else if (name === 'skills') {
      // Just update the input value, don't process it yet
      setSkillsInputValue(value);
    } else {
      setCvData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle skills input blur (when user finishes editing)
  const handleSkillsBlur = () => {
    const skillsArray = skillsInputValue
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);

    setCvData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };


  // Add new experience entry
  const addExperienceEntry = () => {
    const newExperience = {
      company: '',
      role: '',
      duration: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    };
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  // Remove experience entry
  const removeExperienceEntry = (index) => {
    if (cvData.experience.length > 1) {
      setCvData(prev => ({
        ...prev,
        experience: prev.experience.filter((_, i) => i !== index)
      }));
    } else {
      alert('You must have at least one work experience entry.');
    }
  };

  // Add new education entry
  const addEducationEntry = () => {
    const newEducation = {
      institution: '',
      degree: '',
      duration: '',
      fieldOfStudy: '',
      graduationDate: '',
      gpa: '',
      location: ''
    };
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  // Remove education entry
  const removeEducationEntry = (index) => {
    if (cvData.education.length > 1) {
      setCvData(prev => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    } else {
      alert('You must have at least one education entry.');
    }
  };

  // Save edited CV to Firestore
  const saveCV = async () => {
    if (user) {
      try {
        // Process skills before saving
        const skillsArray = skillsInputValue
          .split(',')
          .map(skill => skill.trim())
          .filter(skill => skill.length > 0);

        const dataToSave = {
          ...cvData,
          skills: skillsArray,
        };

        const cvDocRef = doc(db, 'cvData', user.uid);
        await setDoc(cvDocRef, dataToSave, { merge: true });

        // Update local state with processed skills
        setCvData(prev => ({ ...prev, skills: skillsArray }));

        setIsEditingCV(false);
        alert('CV data updated successfully!');
      } catch (error) {
        console.error('Error saving CV data:', error); // Log the full error object
        alert('Failed to save CV data. Please try again. Check console for details.');
      }
    } else {
      alert('You must be logged in to save your CV.');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent dark:from-gray-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  {userData.name || 'Loading...'}
                </span>
              </h1>
              {isEditingHeroDescription ? (
                <textarea
                  name="heroDescription"
                  value={heroDescription}
                  onChange={(e) => setHeroDescription(e.target.value)}
                  onBlur={async () => {
                    setIsEditingHeroDescription(false);
                    // Save to Firestore on blur
                    if (user) {
                      try {
                        const cvDocRef = doc(db, 'cvData', user.uid);
                        await setDoc(cvDocRef, { heroDescription: heroDescription }, { merge: true });
                      } catch (error) {
                        console.error('Error updating hero description on blur:', error);
                      }
                    }
                  }}
                  onKeyDown={async (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) { // Save on Enter, but not Shift+Enter
                      e.preventDefault(); // Prevent new line
                      setIsEditingHeroDescription(false);
                      if (user) {
                        try {
                          const cvDocRef = doc(db, 'cvData', user.uid);
                          await setDoc(cvDocRef, { heroDescription: heroDescription }, { merge: true });
                        } catch (error) {
                          console.error('Error updating hero description on Enter:', error);
                        }
                      }
                    }
                  }}
                  rows="3"
                  className="mt-6 w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-xl md:text-2xl"
                  autoFocus // Focus on the textarea when it appears
                />
              ) : (
                <p
                  className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg cursor-pointer"
                  onClick={() => setIsEditingHeroDescription(true)}
                >
                  {heroDescription}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={generateShareLink}
                  className="px-6 py-3 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30 transform hover:-translate-y-0.5 transition-transform"
                >
                  Share My Portfolio
                </button>
                <button
                  onClick={handleDownloadCv}
                  className="px-6 py-3 rounded-md text-base font-medium text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800/30 transform hover:-translate-y-0.5 transition-transform"
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <label htmlFor="profile-upload" className="cursor-pointer">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform rotate-3">
                    <img
                      src={localPhotoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay for upload icon */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A1 1 0 0011.586 3H8.414a1 1 0 00-.707.293L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file && user) {
                      const formData = new FormData();
                      formData.append('profileImage', file);

                      try {
                        const uploadResponse = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/upload-profile-image?username=${encodeURIComponent(user.displayName || user.email.split('@')[0])}&userId=${user.uid}`, {
                          method: 'POST',
                          body: formData,
                        });

                        if (!uploadResponse.ok) {
                          const errorData = await uploadResponse.json();
                          throw new Error(errorData.message || 'Profile image upload failed.');
                        }

                        const uploadResult = await uploadResponse.json();
                        // Update local state with the new photoURL
                        setLocalPhotoURL(uploadResult.photoURL);
                        alert('Profile image updated successfully!');
                      } catch (error) {
                        console.error('Error uploading profile image:', error);
                        alert(`Failed to upload profile image. Error: ${error.message}`);
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Work</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Explore my latest projects and creative work</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button
                onClick={() => setShowUploadModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add New Work
              </button>
              <div className="flex rounded-md shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-l-md text-sm font-medium ${
                    viewMode === 'grid'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-r-md text-sm font-medium ${
                    viewMode === 'list'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'web'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'design'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              UI/UX Design
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'video'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Video
            </button>
            <button
              onClick={() => setActiveTab('document')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'document'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Documents
            </button>
          </div>

          {/* Portfolio Grid/List */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  viewMode === 'list' ? 'flex items-center bg-white dark:bg-gray-800' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <div
                  className={`relative cursor-pointer ${
                    viewMode === 'list' ? 'w-1/3 h-40' : 'h-64 w-full'
                  }`}
                  onClick={() => setFullScreenPreview(item)}
                >
                  {/* Determine the URL to use for display */}
                  {(() => {
                    let displayUrl = '';
                    if (item.type === 'link') {
                      displayUrl = item.url; // External links use their own URL
                    } else if (item.fileId && item.mimeType) {
                      // Use the backend proxy for files stored in Google Drive
displayUrl = `http://localhost:5000/get-drive-file?fileId=${item.fileId}&mimeType=${encodeURIComponent(item.mimeType)}`;

                    } else if (item.url) {
                      // Fallback for old items that might still have a direct Google Drive URL
                      // Attempt to parse fileId and mimeType if it's a Google Drive link
                      const driveFileIdMatch = item.url.match(/\/d\/([a-zA-Z0-9_-]+)/);
                      if (driveFileIdMatch && driveFileIdMatch[1]) {
                        const inferredMimeType = item.type === 'image' ? 'image/jpeg' : item.type === 'video' ? 'video/mp4' : item.type === 'pdf' ? 'application/pdf' : '';
                        if (inferredMimeType) {
displayUrl = `http://localhost:5000/get-drive-file?fileId=${driveFileIdMatch[1]}&mimeType=${encodeURIComponent(inferredMimeType)}`;

                        }
                      } else {
                        displayUrl = item.url; // Use as is if not a recognizable Drive link
                      }
                    }

                    if (item.type === 'image' && displayUrl) {
                      return (
                        <img
                          src={displayUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      );
                    } else if (item.type === 'video' && displayUrl) {
                      return (
                        <video
                          src={displayUrl}
                          title={item.title}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      );
                    } else if (item.type === 'pdf' && displayUrl) {
                      return (
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center">
                          <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
                            <svg className="w-12 h-12 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">PDF Document</p>
                        </div>
                      );
                    } else if (item.type === 'link' && displayUrl) {
                      return (
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center p-4 text-center">
                          <svg className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">External Link</p>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Preview not available due to security restrictions.
                          </p>
                          <a
                            href={displayUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900"
                          >
                            Open Link
                            <svg className="ml-1 -mr-0.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2a1 1 0 10-2 0v2H5V7h2a1 1 0 000-2H5z" />
                            </svg>
                          </a>
                        </div>
                      );
                    }
                    return null; // Or a placeholder if no valid displayUrl
                  })()}
                </div>
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-1 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2h10.618l-.724 1.447A1 1 0 0011 8h8a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 009 2zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    <button
                      onClick={() => setFullScreenPreview(item)}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Full
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <svg className="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No portfolio items</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new portfolio item.</p>
              <div className="mt-6">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add New Work
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CV Section with Edit Functionality */}
      <section id="cv" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My CV</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Download or view my resume below</p>
              </div>
              <button
                onClick={() => setIsEditingCV(!isEditingCV)}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                {isEditingCV ? 'Cancel Edit' : 'Edit CV'}
              </button>
            </div>

            <div id="cv-section" className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* CV Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between">
                  <div>
                    {isEditingCV ? (
                      <input
                        type="text"
                        name="name"
                        value={cvData.name}
                        onChange={handleCVEdit}
                        className="text-2xl font-bold text-white bg-transparent border-b border-white/50 w-full"
                      />
                    ) : (
                      <h3 className="text-2xl font-bold text-white">{cvData.name}</h3>
                    )}
                    {isEditingCV ? (
                      <input
                        type="text"
                        name="title"
                        value={cvData.title}
                        onChange={handleCVEdit}
                        className="text-indigo-100 bg-transparent border-b border-white/50 w-full mt-1"
                      />
                    ) : (
                      <p className="text-indigo-100">{cvData.title}</p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 text-white">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {isEditingCV ? (
                        <input
                          type="email"
                          name="email"
                          value={cvData.email}
                          onChange={handleCVEdit}
                          className="bg-transparent border-b border-white/50 w-full"
                        />
                      ) : (
                        cvData.email
                      )}
                    </p>
                    <p className="flex items-center mt-2">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {isEditingCV ? (
                        <input
                          type="tel"
                          name="phone"
                          value={cvData.phone}
                          onChange={handleCVEdit}
                          className="bg-transparent border-b border-white/50 w-full"
                        />
                      ) : (
                        cvData.phone
                      )}
                    </p>
                  </div>
                </div>
              </div>
{/* Summary */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Summary</h4>
                {isEditingCV ? (
                  <textarea
                    name="summary"
                    value={cvData.summary}
                    onChange={handleCVEdit}
                    rows="4"
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">{cvData.summary}</p>
                )}
              </div>

              {/* Skills */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Skills</h4>
                {isEditingCV ? (
                  <div>
                    <input
                      type="text"
                      name="skills"
                      value={skillsInputValue}
                      onChange={handleCVEdit}
                      onBlur={handleSkillsBlur}
                      placeholder="e.g., React, JavaScript, TypeScript, Tailwind CSS"
                      className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                    />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Separate skills with commas (e.g., "React, JavaScript, TypeScript"). Changes are applied when you click outside the field.
                    </p>
                    {/* Live preview of skills as you type */}
                    {skillsInputValue && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Preview:</p>
                        <div className="flex flex-wrap gap-2">
                          {skillsInputValue
                            .split(',')
                            .map(skill => skill.trim())
                            .filter(skill => skill.length > 0)
                            .map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs border"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>


              {/* Experience */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Work Experience</h4>
                  {isEditingCV && (
                    <button
                      onClick={addExperienceEntry}
                      className="flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Add Experience
                    </button>
                  )}
                </div>
                {isEditingCV ? (
                  <div className="space-y-6">
                    {cvData.experience.map((exp, index) => (
                      <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="text-lg font-medium text-gray-900 dark:text-white">Experience #{index + 1}</h5>
                          <button
                            onClick={() => removeExperienceEntry(index)}
                            className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            title="Remove this experience"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Job Title/Position *</label>
                            <input
                              type="text"
                              name={`experience.${index}.role`}
                              value={exp.role || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., Senior Frontend Developer"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Company Name *</label>
                            <input
                              type="text"
                              name={`experience.${index}.company`}
                              value={exp.company || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., Tech Corp"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Start Date</label>
                            <input
                              type="month"
                              name={`experience.${index}.startDate`}
                              value={exp.startDate || ''}
                              onChange={handleCVEdit}
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">End Date</label>
                            <input
                              type="month"
                              name={`experience.${index}.endDate`}
                              value={exp.endDate || ''}
                              onChange={handleCVEdit}
                              placeholder="Leave empty if current"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Location</label>
                            <input
                              type="text"
                              name={`experience.${index}.location`}
                              value={exp.location || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., San Francisco, CA"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Job Description/Responsibilities</label>
                          <textarea
                            name={`experience.${index}.description`}
                            value={exp.description || ''}
                            onChange={handleCVEdit}
                            rows="3"
                            placeholder="Describe your key responsibilities and achievements..."
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Duration (Display Format)</label>
                          <input
                            type="text"
                            name={`experience.${index}.duration`}
                            value={exp.duration || ''}
                            onChange={handleCVEdit}
                            placeholder="e.g., 2020 - Present or Jan 2020 - Dec 2022"
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                          />
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">This is how the duration will be displayed on your CV</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cvData.experience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-indigo-500 pl-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 dark:text-white">{exp.role}</h5>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                            {exp.location && (
                              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                            )}
                            {exp.description && (
                              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{exp.description}</p>
                            )}
                          </div>
                          <div className="mt-2 md:mt-0 md:ml-4 text-right">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Education */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  {isEditingCV && (
                    <button
                      onClick={addEducationEntry}
                      className="flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Add Education
                    </button>
                  )}
                </div>
                {isEditingCV ? (
                  <div className="space-y-6">
                    {cvData.education.map((edu, index) => (
                      <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="text-lg font-medium text-gray-900 dark:text-white">Education #{index + 1}</h5>
                          <button
                            onClick={() => removeEducationEntry(index)}
                            className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            title="Remove this education entry"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Degree/Qualification *</label>
                            <input
                              type="text"
                              name={`education.${index}.degree`}
                              value={edu.degree || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., Bachelor of Science, Master's Degree"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Institution Name *</label>
                            <input
                              type="text"
                              name={`education.${index}.institution`}
                              value={edu.institution || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., University of Technology"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Field of Study/Major</label>
                            <input
                              type="text"
                              name={`education.${index}.fieldOfStudy`}
                              value={edu.fieldOfStudy || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., Computer Science, Business Administration"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Graduation Date</label>
                            <input
                              type="month"
                              name={`education.${index}.graduationDate`}
                              value={edu.graduationDate || ''}
                              onChange={handleCVEdit}
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">GPA/Grade (Optional)</label>
                            <input
                              type="text"
                              name={`education.${index}.gpa`}
                              value={edu.gpa || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., 3.8/4.0, First Class Honours"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Location</label>
                            <input
                              type="text"
                              name={`education.${index}.location`}
                              value={edu.location || ''}
                              onChange={handleCVEdit}
                              placeholder="e.g., Boston, MA"
                              className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Duration (Display Format)</label>
                          <input
                            type="text"
                            name={`education.${index}.duration`}
                            value={edu.duration || ''}
                            onChange={handleCVEdit}
                            placeholder="e.g., 2013 - 2017 or Sep 2013 - May 2017"
                            className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                          />
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">This is how the duration will be displayed on your CV</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cvData.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900 dark:text-white">{edu.degree}</h5>
                            <p className="text-green-600 dark:text-green-400 font-medium">{edu.institution}</p>
                            {edu.fieldOfStudy && (
                              <p className="text-sm text-gray-600 dark:text-gray-300">Major: {edu.fieldOfStudy}</p>
                            )}
                            {edu.location && (
                              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                            )}
                            {edu.gpa && (
                              <p className="text-sm text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>
                            )}
                          </div>
                          <div className="mt-2 md:mt-0 md:ml-4 text-right">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{edu.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {isEditingCV && (
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditingCV(false)}
                  className="px-4 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCV}
                  className="px-4 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Learn more about who I am and what I do</p>
            <div className="mt-8 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
                <p className="text-gray-600 dark:text-gray-300">{cvData.summary}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Work With Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Modern Technologies</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">I stay up-to-date with the latest web technologies and design trends.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Client Focused</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">I prioritize understanding client needs and delivering solutions that exceed expectations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v10M12 22V12M4 12h10M20 12H12" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Fast Delivery</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">I deliver high-quality work within agreed timelines while maintaining flexibility for changes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Personalized Approach</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">I tailor my approach to each project to ensure it meets your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss how I can help</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">Malang, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81A2 2 0 019.82 9.52a2 2 0 011.72 1.28c.09.14.18.29.26.44a16.97 16.97 0 005.06 5.06c.14.08.29.17.44.26h.01a2 2 0 011.28 1.72 2 2 0 01.19 1.92z" />
                          <path d="M14.05 9.55a2.5 2.5 0 01-.28.5 10.84 10.84 0 01-5.01 5.01 2.5 2.5 0 01-.5.28 8.28 8.28 0 002.16.35c7.44.35 12.84-6.95 13.06-6.95.3-.11 1.4-1.26.5-2.86v-.04c.02-.21.02-.44.02-.66 0-1.1-.1-2.04-.27-2.9.02-.05.28-.33.74-.63-1.58-.6-5.06-1.8-7.06-2.6-2.01-.8-3.7-1.97-4.3-2.4-.1-.09-.17-.17-.22-.25a1.72 1.72 0 01-.52-.9 2.44 2.44 0 01.08-1.4 8.06 8.06 0 00-2.78 7.63z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">081331744758</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start mt-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">yosafatisme@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleUpload} method="post" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <span className="text-xl font-bold text-gray-900 dark:text-white">MyPersona</span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                Professional portfolio platform for showcasing your best work, sharing your profile with recruiters, and downloading your CV.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Portfolio</a></li>
                <li><a href="#cv" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">CV</a></li>
                <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357-.646 4.108 4.108 0 001.804-2.27 8.224 8.224 0 01-2.605-.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.277 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.769z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682.275.682.483 0 .237-.008.414-.012.595a8.95 8.95 0 01-3.01.07 4.107 4.107 0 002.807 1.148 8.22 8.22 0 01-2.49.963c-.41-.042-.82-.063-1.23-.063-.82 0-1.64.114-2.42.33a11.65 11.65 0 008.307 2.416c6.613 0 12.015-4.91 12.015-10.933C23.11 6.095 19.109 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} MyPersona. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Portfolio Upload Modal (remains for portfolio items, not profile image) */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowUploadModal(false)}></div>
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white" id="modal-title">
                      {editingItem ? 'Edit Portfolio Item' : 'Add New Work'}
                    </h3>
                    <div className="mt-4">
                      <form onSubmit={handleUpload} className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={portfolioTitle} // Controlled component
                            onChange={(e) => setPortfolioTitle(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                          <textarea
                            id="description"
                            rows="3"
                            name="description"
                            value={portfolioDescription} // Controlled component
                            onChange={(e) => setPortfolioDescription(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          ></textarea>
                        </div>
                        <div>
                          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                          <select
                            id="type"
                            name="type"
                            value={selectedType} // Controlled component
                            onChange={(e) => {
                              setSelectedType(e.target.value);
                              setSelectedFile(null); // Clear selected file when type changes
                              setPortfolioUrl(''); // Clear URL when type changes
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          >
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="pdf">PDF Document</option>
                            <option value="link">External Link</option>
                          </select>
                        </div>

                        {selectedType === 'link' ? (
                          <div>
                            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL</label>
                            <input
                              type="text"
                              id="url"
                              name="url"
                              value={portfolioUrl} // Controlled component
                              onChange={(e) => setPortfolioUrl(e.target.value)}
                              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                            />
                          </div>
                        ) : (
                          <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload File</label>
                            <input
                              type="file"
                              id="file"
                              name="file"
                              onChange={(e) => setSelectedFile(e.target.files[0])}
                              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-gray-600 dark:file:text-white dark:hover:file:bg-gray-500"
                            />
                            {editingItem && !selectedFile && editingItem.url && (
                              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Current file: <a href={editingItem.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">View</a></p>
                            )}
                          </div>
                        )}
                        <div>
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                          <select
                            id="category"
                            name="category"
                            value={selectedCategory} // Controlled component
                            onChange={(e) => {
                              setSelectedCategory(e.target.value); // Update selectedCategory state
                              // When category changes, if it's not a link, clear the URL state
                              if (e.target.value !== 'link') {
                                setPortfolioUrl('');
                              }
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          >
                            <option value="web">Web Development</option>
                            <option value="design">UI/UX Design</option>
                            <option value="video">Video</option>
                            <option value="document">Documents</option>
                          </select>
                        </div>
                        <div className="flex justify-end space-x-3 pt-4">
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setShowUploadModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {editingItem ? 'Update' : 'Add'} Portfolio Item
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Preview Modal */}
      {fullScreenPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-90" onClick={() => setFullScreenPreview(null)}></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
            <button
              onClick={() => setFullScreenPreview(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.293 6.707a1 1 0 0 1 1.414 0L10 8.414l1.293-1.293a1 1 0 0 1 1.414 1.414L10 10l1.293 1.293a1 1 0 0 1-1.414 1.414L10 10.414 8.707 12.707a1 1 0 0 1-1.414-1.414L10 10 8.707 8.707a1 1 0 0 1 0-1.414L10 9.586 11.293 8.293a1 1 0 0 1 1.414 1.414z" />
              </svg>
            </button>
            <div className="relative w-full h-[80vh]">
              {/* Full Screen Preview - Use proxy URL for files, direct URL for links */}
              {(() => {
                let previewUrl = '';
                if (fullScreenPreview.type === 'link') {
                  previewUrl = fullScreenPreview.url;
                } else if (fullScreenPreview.fileId && fullScreenPreview.mimeType) {
previewUrl = `http://localhost:5000/get-drive-file?fileId=${fullScreenPreview.fileId}&mimeType=${encodeURIComponent(fullScreenPreview.mimeType)}`;

                } else if (fullScreenPreview.url) {
                  // Fallback for old items that might still have a direct Google Drive URL
                  const driveFileIdMatch = fullScreenPreview.url.match(/\/d\/([a-zA-Z0-9_-]+)/);
                  if (driveFileIdMatch && driveFileIdMatch[1]) {
                    const inferredMimeType = fullScreenPreview.type === 'image' ? 'image/jpeg' : fullScreenPreview.type === 'video' ? 'video/mp4' : fullScreenPreview.type === 'pdf' ? 'application/pdf' : '';
                    if (inferredMimeType) {
previewUrl = `http://localhost:5000/get-drive-file?fileId=${driveFileIdMatch[1]}&mimeType=${encodeURIComponent(inferredMimeType)}`;

                    }
                  } else {
                    previewUrl = fullScreenPreview.url;
                  }
                }

                if (fullScreenPreview.type === 'image' && previewUrl) {
                  return (
                    <img
                      src={previewUrl}
                      alt={fullScreenPreview.title}
                      className="w-full h-full object-contain"
                    />
                  );
                } else if (fullScreenPreview.type === 'video' && previewUrl) {
                  return (
                    <div className="w-full h-full flex items-center justify-center">
                      <iframe
                        className="w-full h-full"
                        src={previewUrl}
                        title={fullScreenPreview.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                } else if (fullScreenPreview.type === 'pdf' && previewUrl) {
                  return (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <div className="text-center">
                        <svg className="mx-auto h-20 w-20 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 10-9.9-9.9zm9.9 2.1a1 1 0 011 1 4.11 4.11 0 01-1.07 1.05 4.1 4.1 0 01-1.05-1.07 1 1 0 011.05-1.07 4.1 4.1 0 011.07 1.05 1 1 0 010 1.41 4.1 4.1 0 01-1.05 1.07 1 1 0 01-1.41 0 4.1 4.1 0 01-1.05-1.07 1 1 0 010-1.41z" />
                          <path d="M12 2.02a1 1 0 011 1 4.1 4.1 0 01-1 1 1 1 0 01-1-1 4.1 4.1 0 011-1z" />
                        </svg>
                        <p className="mt-4 text-xl font-medium text-gray-900 dark:text-white">PDF Document</p>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">Preview not available for PDF documents.</p>
                        <a
                          href={previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block px-4 py-2 border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  );
                } else if (fullScreenPreview.type === 'link' && previewUrl) {
                  return (
                    <div className="w-full h-full flex items-center justify-center">
                      <iframe
                        className="w-full h-full border-0"
                        src={previewUrl}
                        title={fullScreenPreview.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Minimal sandbox for security
                      ></iframe>
                    </div>
                  );
                }
                return null; // Or a placeholder if no valid previewUrl
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import PostEditor from '../components/post/PostEditor';
import PostList from '../components/post/PostList';
import { getImageUrl } from '../utils/dummyData'; 
import { Home, Search, Bell, Mail, User, MoreHorizontal, PenSquare } from 'lucide-react';

// Sample trending posts data
const SAMPLE_POSTS = Array.from({ length: 10 }, (_, i) => ({
  id: `post-${i}`,
  content: [
    "Just wrapped up an amazing photoshoot! Can't wait to share more 📸 ✨",
    "Beach vibes today! Perfect weather for some fun in the sun 🌊 🌞",
    "New video coming soon! Stay tuned for something special 🎥 💫",
    "Thank you for all the love and support! You guys are amazing ❤️",
    "Getting ready for tonight's live stream! Don't miss it 🎉",
  ][i % 5],
  image_url: getImageUrl('content', i),
  user_id: `user-${i}`,
  created_at: new Date(Date.now() - i * 3600000).toISOString(),
  likes_count: Math.floor(Math.random() * 1000) + 100,
  comments_count: Math.floor(Math.random() * 100) + 10,
  shares_count: Math.floor(Math.random() * 50) + 5,
  user: {
    username: `creator${i + 1}`,
    avatar_url: getImageUrl('profiles', i)
  }
}));

export default function TrendingPost() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [postContent, setPostContent] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('popular');
  const [showPostEditor, setShowPostEditor] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setUploadPreview(URL.createObjectURL(file));
      setIsUploading(true);
    }
  };

  const handlePost = async () => {
    if (!currentUser || (!selectedFile && !postContent)) return;

    const newPost = {
      id: `post-${Date.now()}`,
      content: postContent,
      image_url: uploadPreview,
      user_id: currentUser.uid,
      created_at: new Date().toISOString(),
      likes_count: 0,
      comments_count: 0,
      shares_count: 0,
      user: {
        username: currentUser.email?.split('@')[0] || 'anonymous',
        avatar_url: currentUser.photoURL || getImageUrl('profiles', 0)
      }
    };

    setPosts([newPost, ...posts]);
    setIsUploading(false);
    setUploadPreview(null);
    setSelectedFile(null);
    setPostContent('');
  };

  const handleLike = async (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes_count: post.likes_count + 1 }
        : post
    ));
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.likes_count - a.likes_count;
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20 flex">
      {/* Sidebar Navigation */}
      <div className="w-12 fixed left-0 top-20 h-[calc(100vh-5rem)] p-2 border-r border-white/10">
        <nav className="flex flex-col h-full">
          <div className="space-y-2 flex flex-col items-center">
            <button 
              onClick={() => handleNavigation('/profiles')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <Home className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleNavigation('/explore')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleNavigation('/notifications')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <Bell className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleNavigation('/chats')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <Mail className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleNavigation('/profile')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <User className="w-6 h-6" />
            </button>
            <button 
              className="flex items-center gap-3 w-full px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors text-left"
            >
              <MoreHorizontal className="w-6 h-6" /> 
            </button>
          </div>

          {/* Post Button */}
          <button
            onClick={() => setShowPostEditor(true)}
            className="mt-auto p-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors"
          >
            <PenSquare className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Trending Posts</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('recent')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === 'recent'
                    ? 'bg-pink-500 text-white'
                    : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                }`}
              >
                Recent
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  sortBy === 'popular'
                    ? 'bg-pink-500 text-white'
                    : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                }`}
              >
                Popular
              </button>
            </div>
          </div>
        
        {(currentUser && showPostEditor) && (
          <PostEditor
            content={postContent}
            setContent={setPostContent}
            handlePost={handlePost}
            handleFileSelect={handleFileSelect}
            uploadPreview={uploadPreview}
            setUploadPreview={setUploadPreview}
            isUploading={isUploading}
            setIsUploading={setIsUploading}
          />
        )}

        <PostList
          posts={sortedPosts}
          handleLike={handleLike}
        />
        </div>
      </div>
    </div>
  );
}
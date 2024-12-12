import React, { useState } from 'react';
import { Home, Bell, MessageCircle, Settings, Image, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContentTabsLayoutProps {
  children: React.ReactNode;
  activeView: 'pics' | 'videos';
  setActiveView: (view: 'pics' | 'videos') => void;
}

export default function ContentTabsLayout({ children, activeView, setActiveView }: ContentTabsLayoutProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-12 border-r border-white/10 p-2">
        <nav className="space-y-2">
          <button 
            onClick={() => handleNavigation('/profiles')}
            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <Home className="w-6 h-6" />
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
            <MessageCircle className="w-6 h-6" />
          </button>
          <button 
            onClick={() => handleNavigation('/settings')}
            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <Settings className="w-6 h-6" />
          </button>
        </nav>

        {/* Content Type Toggle */}
        <div className="mt-8">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveView('pics')}
              className={`p-2 rounded-xl transition-colors ${
                activeView === 'pics' ? 'bg-pink-500 text-white' : 'text-white hover:bg-white/10'
              }`}
            >
              <Image className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveView('videos')}
              className={`p-2 rounded-xl transition-colors ${
                activeView === 'videos' ? 'bg-pink-500 text-white' : 'text-white hover:bg-white/10'
              }`}
            >
              <Video className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ml-12">
        {children}
      </div>
    </div>
  );
}
import React from 'react';
import { Heart, MessageCircle, Star, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/dummyData';

// Generate dummy notifications
const notifications = [
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `like-${i}`,
    type: 'like',
    user: {
      name: `User ${i + 1}`,
      avatar: getImageUrl('profiles', i)
    },
    content: 'liked your photo',
    timestamp: new Date(Date.now() - Math.random() * 86400000),
    contentPreview: getImageUrl('content', i)
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `comment-${i}`,
    type: 'comment',
    user: {
      name: `User ${i + 5}`,
      avatar: getImageUrl('profiles', i + 5)
    },
    content: 'commented: "Amazing content! Keep it up! 🔥"',
    timestamp: new Date(Date.now() - Math.random() * 86400000),
    contentPreview: getImageUrl('content', i + 5)
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `subscription-${i}`,
    type: 'subscription',
    user: {
      name: `User ${i + 10}`,
      avatar: getImageUrl('profiles', i + 10)
    },
    content: 'subscribed to your profile',
    timestamp: new Date(Date.now() - Math.random() * 86400000)
  }))
].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Notifications</h1>
          <button className="text-purple-200 hover:text-white">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-4 hover:bg-purple-700/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Link to={`/profile/${notification.user.name}`}>
                  <img
                    src={notification.user.avatar}
                    alt={notification.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </Link>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <Link 
                      to={`/profile/${notification.user.name}`}
                      className="font-medium text-white hover:text-pink-400"
                    >
                      {notification.user.name}
                    </Link>
                    <span className="text-purple-200">{notification.content}</span>
                  </div>
                  
                  <span className="text-sm text-purple-300">
                    {notification.timestamp.toLocaleDateString()} at{' '}
                    {notification.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {notification.type === 'like' && (
                  <Heart className="w-5 h-5 text-pink-500" />
                )}
                {notification.type === 'comment' && (
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                )}
                {notification.type === 'subscription' && (
                  <Star className="w-5 h-5 text-yellow-500" />
                )}
              </div>

              {notification.contentPreview && (
                <div className="mt-4 ml-16">
                  <Link to="#">
                    <img
                      src={notification.contentPreview}
                      alt="Content preview"
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { lazy } from 'react';

// Pages
export const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.default })));
export const Profiles = lazy(() => import('../pages/Profiles').then(module => ({ default: module.default })));
export const ProfilePage = lazy(() => import('../pages/ProfilePage').then(module => ({ default: module.default })));
export const Settings = lazy(() => import('../pages/Settings').then(module => ({ default: module.default })));
export const About = lazy(() => import('../pages/About').then(module => ({ default: module.default })));
export const Careers = lazy(() => import('../pages/Careers').then(module => ({ default: module.default })));
export const Press = lazy(() => import('../pages/Press').then(module => ({ default: module.default })));
export const HelpCenter = lazy(() => import('../pages/HelpCenter').then(module => ({ default: module.default })));
export const SafetyCenter = lazy(() => import('../pages/SafetyCenter').then(module => ({ default: module.default })));
export const CommunityGuidelines = lazy(() => import('../pages/CommunityGuidelines').then(module => ({ default: module.default })));
export const Privacy = lazy(() => import('../pages/Privacy').then(module => ({ default: module.default })));
export const Terms = lazy(() => import('../pages/Terms').then(module => ({ default: module.default })));
export const Cookie = lazy(() => import('../pages/Cookie').then(module => ({ default: module.default })));
export const TrendingPost = lazy(() => import('../pages/TrendingPost').then(module => ({ default: module.default })));
export const WatchHistory = lazy(() => import('../pages/WatchHistory').then(module => ({ default: module.default })));
export const PrivateChats = lazy(() => import('../pages/PrivateChats').then(module => ({ default: module.default })));
export const Merch = lazy(() => import('../pages/Merch').then(module => ({ default: module.default })));
export const Notifications = lazy(() => import('../pages/Notifications').then(module => ({ default: module.default })));
export const Sitemap = lazy(() => import('../pages/Sitemap').then(module => ({ default: module.default })));
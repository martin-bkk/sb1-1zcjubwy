# Only4U Design System

## Color Palette

### Primary Colors
- Pink: `#EC4899` (pink-500)
- Purple: `#4C1D95` (purple-900)
- Indigo: `#312E81` (indigo-900)

### Secondary Colors
- Light Purple: `#8B5CF6` (purple-500)
- Dark Purple: `#581C87` (purple-950)
- Light Pink: `#F472B6` (pink-400)

### Accent Colors
- Green: `#10B981` (success)
- Red: `#EF4444` (error)
- Yellow: `#F59E0B` (warning)
- Blue: `#3B82F6` (info)

### Text Colors
- White: `#FFFFFF`
- Purple Light: `#E9D5FF` (purple-200)
- Gray Light: `#9CA3AF` (gray-400)

## Gradients

### Background Gradients
```css
/* Main Background */
background: linear-gradient(to bottom, #4c1d95, #4338ca, #312e81);

/* Card Background */
background: linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1));

/* Feature Card Hover */
background: linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2));
```

### Button Gradients
```css
/* Primary Button */
background: linear-gradient(to right, #EC4899, #8B5CF6);

/* Secondary Button */
background: linear-gradient(to right, #4C1D95, #312E81);
```

## Typography

### Font Families
- Primary Font: System default sans-serif stack
- Accent Font: 'Dancing Script' (for special headings and slogans)

### Font Sizes
- Headings:
  - h1: `text-4xl` (36px)
  - h2: `text-3xl` (30px)
  - h3: `text-2xl` (24px)
  - h4: `text-xl` (20px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)

### Font Weights
- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

## Components

### Cards
```css
/* Base Card */
background-color: rgba(88, 28, 135, 0.3); /* purple-900/30 */
backdrop-filter: blur(8px);
border-radius: 0.75rem; /* rounded-xl */
```

### Buttons
```css
/* Primary Button */
background-color: #EC4899; /* pink-500 */
hover: #DB2777; /* pink-600 */
padding: 0.5rem 1rem;
border-radius: 0.5rem;

/* Secondary Button */
background-color: rgba(255, 255, 255, 0.1);
hover: rgba(255, 255, 255, 0.2);
```

### Inputs
```css
/* Base Input */
background-color: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 0.75rem;
padding: 0.5rem 1rem;
```

## Effects

### Backdrop Blur
- Light: `backdrop-blur-sm` (4px)
- Medium: `backdrop-blur` (8px)
- Heavy: `backdrop-blur-lg` (12px)

### Shadows
```css
/* Card Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Hover Shadow */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
```

### Animations
```css
/* Gradient Circle Animation */
@keyframes moveCircle {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(10%, 10%) scale(1.1); }
  50% { transform: translate(-5%, 5%) scale(0.9); }
  75% { transform: translate(5%, -10%) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
}

/* Floating Emoji Animation */
@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

/* Fade In Animation */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mouse Follower Effect */
.mouse-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent);
  border-radius: 50%;
  filter: blur(30px);
  pointer-events: none;
  transition: transform 0.15s ease-out;
  mix-blend-mode: screen;
}

/* Animated Background Circles */
.gradient-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  mix-blend-mode: soft-light;
  animation: moveCircle 20s infinite;
  opacity: 0.3;
}

.circle-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #ff1b6b, #45caff);
  top: -100px;
  left: -100px;
  animation-delay: -2s;
}

.circle-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #4158D0, #C850C0);
  bottom: -100px;
  right: -100px;
  animation-delay: -4s;
}

.circle-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #0093E9, #80D0C7);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -6s;
}

.circle-4 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #8EC5FC, #E0C3FC);
  top: 20%;
  right: 20%;
  animation-delay: -8s;
}

/* Noise Overlay */
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

## Layout

### Container Sizes
- Max Width: `max-w-7xl`
- Content Width: `max-w-3xl`
- Card Width: `max-w-md`

### Spacing
- Page Padding: `px-4 sm:px-6 lg:px-8`
- Section Spacing: `py-12`
- Component Spacing: `space-y-6`
- Grid Gap: `gap-4` or `gap-6`

### Z-Index Scale
- Background: `-1`
- Base Content: `0`
- Dropdowns: `10`
- Sticky Header: `20`
- Modals: `30`
- Tooltips: `40`
- Notifications: `50`

## Responsive Design

### Breakpoints
```css
/* Tailwind Default Breakpoints */
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

### Mobile-First Approach
- Default styles for mobile
- Use responsive classes for larger screens
- Example: `text-sm md:text-base lg:text-lg`

## Accessibility

### Focus States
```css
/* Focus Ring */
focus:ring-2
focus:ring-pink-500
focus:ring-offset-2
focus:outline-none
```

### ARIA Labels
- Use descriptive aria-labels for interactive elements
- Ensure proper heading hierarchy
- Implement keyboard navigation support

## Dark Mode Optimized
- Design system is optimized for dark mode by default
- Uses dark backgrounds with light text
- Implements proper contrast ratios for accessibility
- Utilizes semi-transparent overlays for depth
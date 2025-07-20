# 🚀 foo-rum - Social Media Feed App

A modern, responsive social media feed application built with React, TypeScript, and Tailwind CSS. Features authentication, post creation, and a clean, interactive user interface.

## ✨ Features
### 🔐 Authentication System
- **Modal-based Sign In/Sign Up** with smooth animations
- **Persistent user sessions** using localStorage
- **Test accounts** included for easy testing
- **New user registration** with permanent account storage

### 📝 Post Management
- **Rich text editor** with formatting toolbar
- **Real-time post publishing** to feed
- **Interactive post elements** (like, comment, share) 
- **Authentication-gated interactions**

### 🎨 Modern UI/UX
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Clean, modern interface** inspired by popular social platforms
- **Consistent design system** with indigo accent colors

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd foo-rum
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:5173\`

## 🧪 Test Accounts

Use these pre-configured accounts to test the application:

| Email | Password | User |
|-------|----------|------|
| \`demo@example.com\` | \`password123\` | Demo User |
| \`test@user.com\` | \`testpass\` | Test User |

You can also create new accounts that will persist for future logins!

## 📁 Project Structure

\`\`\`
foo-rum/
├── src/
├── app/
|   ├── page.tsx
│   ├── components/          # React components
│   │   ├── Header.tsx       # App header with login/logout
│   │   ├── AuthModal.tsx    # Sign in/up modal
│   │   ├── PostEditor.tsx   # Post creation interface
│   │   ├── PostFeed.tsx     # Feed container
│   │   └── PostCard.tsx     # Individual post component
│   ├── hooks/
│   │   └── useAuth.tsx      # Authentication logic
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main app component
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── README.md               # This file
\`\`\`

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| \`npm run dev\` | Start development server |
| \`npm run build\` | Build for production |
| \`npm run preview\` | Preview production build |
| \`npm run lint\` | Run ESLint |

## 🚀 Deployment

### Vercel Deployment (Completed ✅)

This project has been successfully deployed to Vercel! 

**Live Demo**: [https://atlys-foo-fun.vercel.app/]

#### Deployment Steps Completed:
1. ✅ Built the project for production
2. ✅ Connected GitHub repository to Vercel
3. ✅ Configured build settings
4. ✅ Deployed successfully

#### To deploy your own version:

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Vercel**
   \`\`\`bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   \`\`\`

3. **Or deploy via Vercel Dashboard**
   - Connect your GitHub repository
   - Import the project
   - Deploy automatically


### Environment Variables
No environment variables required - the app uses localStorage for data persistence.

### Customization
- **Colors**: Modify Tailwind classes in components
- **Test Accounts**: Update \`DEFAULT_TEST_ACCOUNTS\` in \`useAuth.tsx\`
- **Styling**: Customize CSS in \`index.html\` or component files

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Flexible layouts that adapt to screen size
- Touch-friendly interactive elements

### Animations
- Smooth modal transitions
- Hover effects on interactive elements
- Loading states for better UX

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## 🧩 Component Architecture

### Authentication Flow
1. **Unauthenticated users** see login prompts on interaction
2. **Modal system** handles sign in/up without page refresh
3. **Persistent sessions** maintain login state
4. **New registrations** are saved permanently

### Post System
1. **Rich editor** with formatting options (UI only)
2. **Functional publishing** adds posts to feed
3. **Interactive elements** require authentication
4. **Real-time updates** show new posts immediately

## 🐛 Known Limitations

- **Rich text formatting**: Toolbar buttons show "not implemented" alerts
- **Post interactions**: Like/comment/share show placeholder alerts
- **Data persistence**: Uses localStorage (not a real database)
- **User profiles**: No profile pages or user management

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 What Was Fun/Challenging

### Fun Parts ✨
- **Designing the modal system** with smooth animations
- **Creating the authentication flow** that feels natural
- **Building responsive components** that work everywhere
- **Implementing persistent user registration**

### Challenging Parts 🧠
- **Managing authentication state** across components
- **Creating realistic post interactions** without a backend
- **Balancing functionality** with the "not implemented" requirements
- **Ensuring responsive design** works on all screen sizes

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

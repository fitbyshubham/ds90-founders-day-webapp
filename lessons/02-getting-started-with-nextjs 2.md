# Introduction to Next.js: Getting Started

## What is Next.js

Next.js is a React-based framework for building hybrid applications. It enables you to create anything from static websites to fully dynamic web apps at scale—or any combination of the two. Built and maintained by Vercel, Next.js comes packed with a set of simple, opinionated conventions designed to streamline development and make sophisticated React features easier to adopt.

### 🚀 Getting Started: Setting up your Development Environment

Let's get your development environment ready! Follow these steps to set up the project:

1. **Install Node.js 20+:**

   - Ensure you have Node.js version 20 or higher installed. You can check your version by running `node -v` in your terminal.
   - If you need to install or upgrade Node.js, you can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository:**

   - Clone the project repository to your local machine using Git. Replace `[repo]` with the actual repository URL provided for this lesson.
     ```bash
     git clone [repo]
     cd [your-repo-name]
     ```

3. **Install Dependencies:**

   - Navigate into the cloned repository directory in your terminal.
   - Install project dependencies using npm:
     ```bash
     npm install
     ```
     or the shorthand:
     ```bash
     npm i
     ```
4. **Start Development Server (Optional):**
   - While not strictly necessary for setup, you can start the development server to verify everything is working:
     ```bash
     npm run dev
     ```
     Then, open your browser and navigate to `http://localhost:3000`.

  # Project Structure and Configuration

## Next.js App Directory Structure

Next.js 13+ introduced the App Router with a new `app/` directory structure. Let's explore the file and folder organization in a Next.js project:

> **Important Note**: Next.js only enforces conventions for the `app/`, `public/`, and `api/` directories. Everything else is up to you.

### Next.js Enforced Conventions

- **`app/`**: The main directory for your application code using the App Router

  - **`page.tsx`**: Defines the UI for a route
  - **`layout.tsx`**: Shared UI wrapper for a segment and its children
  - **`loading.tsx`**: Loading UI for a segment
  - **`error.tsx`**: Error handling UI for a segment
  - **`not-found.tsx`**: 404 UI for a segment

- **`app/api/`**: API routes for creating endpoints

  - Example: `app/api/users/route.ts`

- **`public/`**: Static assets like images, fonts, and files
  - Served at the root path (e.g., `/logo.svg`)
  - Not processed by the build system

### Common Organizational Patterns (Not Enforced)

The following are common patterns but are **not required** by Next.js:

- **Component Organization**

  - `app/components/`: Reusable UI components
  - `app/ui/`: Basic UI elements

- **Route Organization**

  - `app/(group)/`: Route groups for organizational purposes (doesn't affect URL)

- **Other Common Folders**
  - `app/lib/` or `lib/`: Utility functions and shared code
  - `app/styles/`: Component or page-specific styles
  - `app/hooks/`: Custom React hooks
  - `app/context/`: React context providers
  - `app/types/` or `types/`: TypeScript type definitions

### File Placement Flexibility

Next.js gives you freedom in where you place most files. For example:

- You can put components directly in route folders or in a central components directory
- Utility functions can live in the route where they're used or in a shared directory
- Styles can be colocated with components or centralized

## Summary

Next.js only cares about:

1. **`app/`**: For App Router pages and routing
2. **`public/`**: For static assets
3. **`app/api/`**: For API routes

Everything else—how you organize components, utilities, styles, and other code—is entirely up to you. Choose a structure that makes sense for your project and team.
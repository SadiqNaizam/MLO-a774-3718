import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';
import { cn } from '@/lib/utils';

/**
 * LoginPage
 * 
 * This component renders the main login page for the application.
 * It utilizes the MainAppLayout for the overall page structure (centered card on a background)
 * and includes the LoginForm component for user authentication.
 * 
 * Project Requirements:
 * - Project Info: {"name": "Login Page UI", "description": "Simple login page structure and design for authentication entry.", "targetPage": "Login Page"}
 * - Page Name: "LoginPage" (as per Component Hierarchy)
 * - Template: "SimpleCardLayout" (realized by MainAppLayout)
 * 
 * Layout Requirements:
 * - Overall: Centered card on full-screen dark background. Card is max-w-sm, w-full, p-6.
 *   (Handled by MainAppLayout)
 * - Main Content (inside card): Vertical layout with heading, input fields, button, secondary link, with gap-4.
 *   (This page component structures the heading and LoginForm with gap-4)
 */
const LoginPage: React.FC = () => {
  // const handleLoginSubmit = async (data: { username: string; password: string }) => {
  //   console.log('Attempting login with:', data);
  //   // Simulate API call
  //   return new Promise<void>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (data.username === 'admin' && data.password === 'password') {
  //         alert('Login successful (simulated)!');
  //         resolve();
  //       } else {
  //         alert('Login failed: Invalid credentials (simulated).');
  //         // Example of how LoginForm can receive and display server errors:
  //         // throw new Error("Invalid credentials"); // This would be caught in LoginForm's onSubmit
  //         reject(new Error('Invalid credentials from page handler')); 
  //       }
  //     }, 1500);
  //   });
  // };

  return (
    <MainAppLayout>
      {/* 
        Layout Requirements.mainContent:
        - layout: "flex flex-col gap-4"
        - container: "w-full"
        This div ensures the title and the LoginForm are stacked vertically with a gap.
      */}
      <div className={cn(
        "flex flex-col w-full",
        "gap-4" // Matches Layout Requirements.mainContent.layout & LoginForm internal gap 
      )}>
        <h1 className="text-2xl font-bold text-card-foreground">
          Log in
        </h1>
        <LoginForm 
          // onLoginSubmit={handleLoginSubmit} // Optional: wire up a login handler if needed
        />
      </div>
    </MainAppLayout>
  );
};

export default LoginPage;

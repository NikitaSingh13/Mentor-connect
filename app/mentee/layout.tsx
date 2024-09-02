import React, { ReactNode } from 'react';
import Header from '@/components/shared/Mentee/Header';
import Footer from '@/components/shared/Mentee/Footer';

const MenteeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Main content in the middle, taking up available space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MenteeLayout;

import React from 'react';

import { Header, HeroContent, ActionButtons, Footer, HeroImage } from './components';

export default function Home() {
  const actionButtons = [
    {
      text: 'Get Started',
      variant: 'primary' as const,
      href: '/signup',
    },
    {
      text: 'Log In',
      variant: 'outline' as const,
      href: '/login',
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col max-h-[600px] max-w-[600px] lg:w-[40%] lg:bg-amber-50 lg:bg-none bg-[url('/worldImg.png')] h-screen bg-cover bg-center w-screen min-h-screen bg-black text-white">
        <Header />
        <main className="flex mt-56 flex-col text-start justify-center">
          <HeroContent />
          <ActionButtons buttons={actionButtons} />
        </main>
        <Footer />
      </div>
      <HeroImage />
    </div>
  );
}
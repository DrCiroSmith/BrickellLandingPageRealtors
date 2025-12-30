import React, { useState } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { RecruitmentForm } from './components/RecruitmentForm';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <PhoneFrame>
      <Header />
      <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-[#121212] relative">
        {isSubmitted ? (
          <ThankYou />
        ) : (
          <>
            <Hero />
            <Benefits />
            <RecruitmentForm onSuccess={() => setIsSubmitted(true)} />
            <Gallery />
          </>
        )}
        <Footer />
      </main>
    </PhoneFrame>
  );
};

export default App;
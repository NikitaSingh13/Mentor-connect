import React from 'react';
import Layout from './layout';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/Features';
import TestimonialsSection from './components/Testimonials';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

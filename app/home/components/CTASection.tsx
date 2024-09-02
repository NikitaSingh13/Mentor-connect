import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-[#344E41] text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Make a Connection?</h2>
      <p className="text-lg mb-8">Join us today and start your journey towards personal and professional growth.</p>
      <Link href="/auth/login">
      <button className="bg-[#A3B18A] text-[#344E41] py-3 px-8 rounded-full">Sign Up Now</button>
      </Link>
    </section>
  );
};

export default CTASection;

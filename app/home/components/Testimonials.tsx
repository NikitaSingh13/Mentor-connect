import React from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'This platform has helped me tremendously in my career growth.' },
  { name: 'Jane Smith', feedback: 'The connection I have with my mentor is amazing.' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[#3A5A40] text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#588157] p-8 rounded-lg">
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

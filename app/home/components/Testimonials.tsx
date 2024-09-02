import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This platform has helped me tremendously in my career growth.',
    image: '/path/to/john-image.jpg',
  },
  {
    name: 'Jane Smith',
    feedback: 'The connection I have with my mentor is amazing.',
    image: '/path/to/jane-image.jpg',
  },
  {
    name: 'Alice Johnson',
    feedback: 'My mentor provided valuable insights that have been instrumental in my professional journey.',
    image: '/path/to/alice-image.jpg',
  },
  {
    name: 'Michael Brown',
    feedback: 'The mentoring program has been a game-changer for my career.',
    image: '/path/to/michael-image.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[#3A5A40] text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <Carousel className="relative" itemsToShow={1} infiniteLoop>
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex-shrink-0 flex flex-col items-center bg-[#588157] p-8 rounded-lg w-80">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s image`}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white absolute top-1/2 left-0 transform -translate-y-1/2" />
          <CarouselNext className="text-white absolute top-1/2 right-0 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;

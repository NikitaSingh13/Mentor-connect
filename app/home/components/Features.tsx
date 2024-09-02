import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

const features = [
  { title: 'Chat', description: 'Instant messaging with mentors and mentees.' },
  { title: 'Video Call', description: 'Connect face-to-face with video calls.' },
  { title: 'Automated Booking', description: 'Schedule meetings effortlessly.' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#A3B18A] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#344E41] mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

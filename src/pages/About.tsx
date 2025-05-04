
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Campus Bite</h1>

          <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Campus Bite team"
              className="w-full h-full object-cover"
            />
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Campus Bite was founded in 2020 by a group of college students who were frustrated with the limited food options available on campus.
                We started as a small delivery service connecting students to local restaurants, and have since grown into the premier food delivery
                platform serving university campuses nationwide.
              </p>
              <p className="text-muted-foreground">
                Our mission is to make delicious, diverse food accessible to busy students and faculty, while supporting local restaurants and
                providing flexible employment opportunities for student delivery partners.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Our Values</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Student-first approach</li>
                  <li>• Supporting local businesses</li>
                  <li>• Sustainability and reduced waste</li>
                  <li>• Convenience and reliability</li>
                  <li>• Inclusive food options for all dietary needs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">How We Work</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Order from 50+ restaurants near campus</li>
                  <li>• Fast delivery by fellow students</li>
                  <li>• Special discounts for meal plans</li>
                  <li>• Easy group ordering for study sessions</li>
                  <li>• Eco-friendly packaging options</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="mb-4 text-muted-foreground">
                Our diverse team consists of students, tech enthusiasts, and food lovers who are passionate about connecting campus communities with great food.
                Many of our team members started as delivery drivers or restaurant partners, bringing valuable first-hand experience to our operations.
              </p>
              <p className="text-muted-foreground">
                We're always looking for passionate people to join our growing team. If you're interested in working with us, check out our careers page!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;

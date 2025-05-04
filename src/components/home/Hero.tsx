
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-food-light py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-food-primary/10 px-3 py-1 text-sm text-food-primary">
              #1 Food Delivery App
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Delicious Food <span className="text-food-primary">Delivered</span> To Your Door
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Order food from the best local restaurants. Fast delivery, easy payment, and a wide selection of cuisines to choose from.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={() => navigate('/#campuscanteen')}
                size="lg"
                className="bg-food-primary hover:bg-food-dark text-white"
              >
                Order Now
              </Button>
              <Button
                onClick={() => navigate('/menu')}
                variant="outline"
                size="lg"
              >
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative lg:pl-10">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious pizza"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="hidden lg:block absolute -top-6 -left-6">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-food-primary"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
    ),
    title: 'Browse Restaurants',
    description: 'Browse our selection of restaurants and cuisines to find your favorite dishes.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-food-primary"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
    ),
    title: 'Add to Cart',
    description: 'Select your favorite items and add them to your cart with just a click.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-food-primary"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
    ),
    title: 'Checkout',
    description: 'Review your order, choose your payment method and complete your purchase.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-food-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ),
    title: 'Wait for Delivery',
    description: 'Track your order in real-time and get your food delivered to your doorstep.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-food-primary/10 px-3 py-1 text-sm text-food-primary">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Ordering food with us is quick and easy. Just follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-food-light flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-food-primary text-white flex items-center justify-center font-medium text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

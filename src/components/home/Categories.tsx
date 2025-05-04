
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 86
  },
  {
    id: 'burger',
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 120
  },
  {
    id: 'sushi',
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 64
  },
  {
    id: 'pasta',
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 92
  },
  {
    id: 'dessert',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 75
  },
  {
    id: 'drinks',
    name: 'Drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    count: 53
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse By Category</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our wide variety of cuisines and dishes
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer rounded-xl overflow-hidden bg-card shadow-sm transition-all hover:shadow-md"
              onClick={() => navigate(`/menu?category=Rs.{category.id}`)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.count} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

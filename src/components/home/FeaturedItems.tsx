
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';

const featuredItems = [
  {
    id: '101',
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
    price: 12.99,
    restaurantId: '1',
    restaurantName: 'Pizza Paradise',
    tags: ['Bestseller', 'Veg']
  },
  {
    id: '102',
    name: 'Double Cheese Burger',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Two beef patties with cheddar cheese, lettuce, tomato, and our special sauce',
    price: 9.99,
    restaurantId: '2',
    restaurantName: 'Burger Bliss',
    tags: ['Popular', '20% Off']
  },
  {
    id: '103',
    name: 'California Roll',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Inside out roll with crab, avocado, and cucumber',
    price: 8.49,
    restaurantId: '3',
    restaurantName: 'Sushi Spot',
    tags: ['New', 'Recommended']
  },
  {
    id: '104',
    name: 'Street Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Three authentic street tacos with your choice of meat, onions, cilantro',
    price: 7.99,
    restaurantId: '4',
    restaurantName: 'Taco Temple',
    tags: ['Spicy', 'Staff Pick']
  },
  {
    id: '105',
    name: 'Pad Thai',
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Rice noodles stir-fried with eggs, tofu, bean sprouts and peanuts',
    price: 11.99,
    restaurantId: '5',
    restaurantName: 'Thai Delight',
    tags: ['Gluten-free', 'Veg Option']
  },
  {
    id: '106',
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Crisp romaine lettuce with caesar dressing, croutons, and parmesan cheese',
    price: 8.99,
    restaurantId: '6',
    restaurantName: 'Green Eats',
    tags: ['Healthy', 'Quick Serve']
  }
];

const FeaturedItems = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurantId: item.restaurantId,
      restaurantName: item.restaurantName
    });
  };

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Dishes</h2>
            <p className="text-muted-foreground md:text-lg">
              Popular dishes from top restaurants
            </p>
          </div>
          <Button
            onClick={() => navigate('/menu')}
            variant="outline"
            className="mt-4 md:mt-0"
          >
            View Full Menu
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow food-item-card"
              onClick={() => navigate(`/item/Rs.{item.id}`)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-item-image h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[70%]">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.restaurantName}</p>
                  </div>
                  <span className="font-semibold text-food-primary">Rs.{item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Button
                    onClick={(e) => handleAddToCart(e, item)}
                    className="bg-food-primary hover:bg-food-dark text-white"
                    size="sm"
                  >
                    <Plus className="mr-1 h-4 w-4" /> Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;

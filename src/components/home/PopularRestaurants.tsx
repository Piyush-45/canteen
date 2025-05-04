
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const restaurants = [
  {
    id: '1',
    name: 'Campus Pizza Palace',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviewCount: 124,
    cuisine: 'Italian',
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    distance: '0.2 miles',
    featured: true,
    tags: ['Campus Favorite', 'Free Delivery']
  },
  {
    id: '2',
    name: 'Burger Blitz',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviewCount: 86,
    cuisine: 'American',
    deliveryTime: '25-35 min',
    deliveryFee: 1.99,
    distance: '0.5 miles',
    featured: false,
    tags: ['20% Off']
  },
  {
    id: '3',
    name: 'Wok & Roll Express',
    image: 'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 215,
    cuisine: 'Asian',
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    distance: '0.7 miles',
    featured: true,
    tags: ['Premium']
  },
  {
    id: '4',
    name: 'Taco Tiempo',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviewCount: 67,
    cuisine: 'Mexican',
    deliveryTime: '15-25 min',
    deliveryFee: 2.49,
    distance: '0.3 miles',
    featured: false,
    tags: ['New']
  },
  {
    id: '5',
    name: 'Green Machine Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviewCount: 92,
    cuisine: 'Healthy',
    deliveryTime: '20-30 min',
    deliveryFee: 0,
    distance: '0.4 miles',
    featured: false,
    tags: ['Vegan Options', 'Free Delivery']
  },
  {
    id: '6',
    name: 'Ramen Republic',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviewCount: 78,
    cuisine: 'Asian',
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    distance: '0.6 miles',
    featured: false,
    tags: ['Student Discount']
  },
  {
    id: '7',
    name: 'Sugar Rush Bakery',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 103,
    cuisine: 'Desserts',
    deliveryTime: '15-25 min',
    deliveryFee: 1.99,
    distance: '0.3 miles',
    featured: false,
    tags: ['Late Night']
  },
  {
    id: '8',
    name: 'Smoothie Sanctuary',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviewCount: 64,
    cuisine: 'Healthy',
    deliveryTime: '10-20 min',
    deliveryFee: 0,
    distance: '0.2 miles',
    featured: false,
    tags: ['Organic', 'Free Delivery']
  }
];

const PopularRestaurants = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-muted/50" id='campuscanteen'>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Campus Canteen</h2>
            <p className="text-muted-foreground md:text-lg">
              The most popular restaurants near your campus
            </p>
          </div>
          <Button
            onClick={() => navigate('/#campuscanteen')}
            variant="outline"
            className="mt-4 md:mt-0"
          >
            See All Restaurants
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.slice(0, 4).map((restaurant) => (
            <Card
              key={restaurant.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/restaurant/Rs.{restaurant.id}`)}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                />
                {restaurant.featured && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-food-primary hover:bg-food-primary">Featured</Badge>
                  </div>
                )}
                <div className="absolute top-2 right-2 flex space-x-1">
                  {restaurant.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg line-clamp-1">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.distance}</span>
                  </div>
                  <div>
                    {restaurant.deliveryFee === 0 ? (
                      <span className="text-green-600 font-medium">Free Delivery</span>
                    ) : (
                      <span>Rs.{restaurant.deliveryFee.toFixed(2)} delivery</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;

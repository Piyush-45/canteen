
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Star, Clock, MapPin, Heart, Info, Phone, Globe, ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';

// Mock data for restaurant
const restaurant = {
  id: '1',
  name: 'Pizza Paradise',
  description: 'Authentic Italian pizzas made with traditional techniques and the freshest ingredients. Our wood-fired ovens bring the taste of Naples right to your doorstep.',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  coverImage: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  rating: 4.8,
  reviewCount: 124,
  cuisine: 'Italian',
  priceRange: 'Rs.Rs.',
  address: '123 Main Street, Anytown, CA 90210',
  phone: '(555) 123-4567',
  website: 'www.pizzaparadise.example',
  openingHours: '10:00 AM - 10:00 PM',
  deliveryTime: '20-30 min',
  deliveryFee: 2.99,
  distance: '1.2 miles',
  featured: true,
  tags: ['Bestseller', 'Free Delivery'],
  categories: [
    {
      id: 'bestsellers',
      name: 'Bestsellers'
    },
    {
      id: 'pizza',
      name: 'Pizzas'
    },
    {
      id: 'pasta',
      name: 'Pasta'
    },
    {
      id: 'sides',
      name: 'Sides'
    },
    {
      id: 'desserts',
      name: 'Desserts'
    },
    {
      id: 'drinks',
      name: 'Drinks'
    }
  ],
  menu: [
    {
      id: '101',
      name: 'Margherita Pizza',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
      price: 12.99,
      category: 'pizza',
      tags: ['Bestseller', 'Veg'],
      options: [
        {
          name: 'Size',
          choices: ['Small', 'Medium', 'Large']
        },
        {
          name: 'Crust',
          choices: ['Thin', 'Regular', 'Thick']
        }
      ]
    },
    {
      id: '102',
      name: 'Pepperoni Pizza',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and pepperoni',
      price: 14.99,
      category: 'pizza',
      tags: ['Popular'],
      options: [
        {
          name: 'Size',
          choices: ['Small', 'Medium', 'Large']
        },
        {
          name: 'Crust',
          choices: ['Thin', 'Regular', 'Thick']
        }
      ]
    },
    {
      id: '103',
      name: 'Vegetarian Pizza',
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fresh vegetables including bell peppers, onions, mushrooms, olives on our signature sauce',
      price: 13.99,
      category: 'pizza',
      tags: ['Veg', 'Healthy'],
      options: [
        {
          name: 'Size',
          choices: ['Small', 'Medium', 'Large']
        },
        {
          name: 'Crust',
          choices: ['Thin', 'Regular', 'Thick']
        }
      ]
    },
    {
      id: '104',
      name: 'Spaghetti Bolognese',
      image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spaghetti with rich meat sauce and parmesan cheese',
      price: 11.99,
      category: 'pasta',
      tags: ['Classic'],
      options: [
        {
          name: 'Size',
          choices: ['Regular', 'Large']
        },
        {
          name: 'Add-ons',
          choices: ['Extra Cheese', 'Meatballs', 'None']
        }
      ]
    },
    {
      id: '105',
      name: 'Garlic Bread',
      image: 'https://images.unsplash.com/photo-1619894991209-08e9c7a1e456?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Freshly baked bread with garlic butter and herbs',
      price: 4.99,
      category: 'sides',
      tags: ['Popular'],
      options: [
        {
          name: 'Size',
          choices: ['4 pieces', '8 pieces']
        },
        {
          name: 'Add-ons',
          choices: ['Cheese', 'None']
        }
      ]
    },
    {
      id: '106',
      name: 'Tiramisu',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cheese',
      price: 6.99,
      category: 'desserts',
      tags: ['Bestseller'],
      options: [
        {
          name: 'Size',
          choices: ['Individual', 'Shareable']
        }
      ]
    },
    {
      id: '107',
      name: 'Italian Soda',
      image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Refreshing soda with your choice of fruit syrup',
      price: 3.49,
      category: 'drinks',
      tags: ['Refreshing'],
      options: [
        {
          name: 'Flavor',
          choices: ['Cherry', 'Raspberry', 'Blueberry', 'Lime']
        },
        {
          name: 'Size',
          choices: ['Regular', 'Large']
        }
      ]
    }
  ]
};

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('bestsellers');

  const filteredMenuItems = restaurant.menu.filter((item) => {
    // For bestsellers, show items with bestseller tag
    if (activeCategory === 'bestsellers') {
      return item.tags.includes('Bestseller') &&
        (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // For other categories, filter by category and search term
    return item.category === activeCategory &&
      (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name
    });
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6">
        <div className="relative mb-6">
          <div className="h-64 md:h-80 rounded-xl overflow-hidden">
            <img
              src={restaurant.coverImage}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 left-6 flex items-center gap-4">
            <div className="h-24 w-24 rounded-xl overflow-hidden border-4 border-background bg-white">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-8 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="bg-food-primary/10 text-food-primary border-food-primary/30">
                {restaurant.cuisine}
              </Badge>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{restaurant.priceRange}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{restaurant.distance}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span>{restaurant.rating}</span>
                <span className="text-muted-foreground ml-1">({restaurant.reviewCount} reviews)</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2">
            <div className="mb-6 sticky top-20 bg-background pt-2 z-10">
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search menu items"
                  className="pl-8 bg-muted/50"
                />
              </div>
              <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="flex overflow-x-auto pb-2 w-full h-auto">
                  {restaurant.categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex-shrink-0"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {restaurant.categories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredMenuItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex">
                              <div className="flex-1 p-4">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                  {item.description}
                                </p>
                                <div className="flex mt-1 mb-2">
                                  {item.tags.map((tag, index) => (
                                    <span key={index} className="text-xs text-muted-foreground mr-2">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                  <span className="font-medium">Rs.{item.price.toFixed(2)}</span>
                                  <Button
                                    size="sm"
                                    onClick={() => handleAddToCart(item)}
                                    className="bg-food-primary hover:bg-food-dark text-white"
                                  >
                                    <Plus className="h-4 w-4 mr-1" /> Add
                                  </Button>
                                </div>
                              </div>
                              <div className="h-32 w-32 relative overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {filteredMenuItems.length === 0 && (
                      <div className="text-center py-16">
                        <p className="text-lg font-medium">No items found</p>
                        <p className="text-muted-foreground">Try a different search term or category</p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div>
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Restaurant Info</h3>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Address</h4>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{restaurant.address}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Hours</h4>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{restaurant.openingHours}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Contact</h4>
                    <div className="flex items-start mb-1">
                      <Phone className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{restaurant.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{restaurant.website}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Delivery Info</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Delivery Time:</div>
                      <div className="text-right">{restaurant.deliveryTime}</div>
                      <div>Delivery Fee:</div>
                      <div className="text-right">
                        {restaurant.deliveryFee === 0 ? 'Free' : '30'}
                      </div>
                      <div>Minimum Order:</div>
                      <div className="text-right">Rs.100.00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <div className="mt-4">
                <Button
                  onClick={() => navigate('/restaurants')}
                  variant="outline"
                  className="w-full"
                >
                  Rs.staurants
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RestaurantDetail;

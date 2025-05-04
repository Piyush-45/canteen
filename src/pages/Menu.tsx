
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Filter } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

const menuItems = [
  {
    id: '201',
    name: 'Pepperoni Pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and pepperoni',
    price: 9.99,
    category: 'pizza',
    tags: ['Popular', 'Spicy'],
    restaurantId: '1',
    restaurantName: 'Campus Pizza'
  },
  {
    id: '202',
    name: 'Veggie Burger',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Plant-based patty with lettuce, tomato, and vegan mayo on a whole wheat bun',
    price: 8.49,
    category: 'burger',
    tags: ['Vegan', 'Healthy'],
    restaurantId: '2',
    restaurantName: 'Burger Junction'
  },
  {
    id: '203',
    name: 'Chicken Curry Bowl',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Aromatic curry with tender chicken pieces served over steamed rice',
    price: 10.99,
    category: 'bowls',
    tags: ['Spicy', 'Protein-rich'],
    restaurantId: '3',
    restaurantName: 'Asian Fusion'
  },
  {
    id: '204',
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Crisp romaine lettuce with caesar dressing, croutons, and parmesan cheese',
    price: 7.99,
    category: 'salad',
    tags: ['Healthy', 'Classic'],
    restaurantId: '4',
    restaurantName: 'Fresh Greens'
  },
  {
    id: '205',
    name: 'Beef Burrito',
    image: 'https://images.unsplash.com/photo-1584031651118-4a588a83179e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Flour tortilla filled with seasoned ground beef, rice, beans, and cheese',
    price: 9.49,
    category: 'mexican',
    tags: ['Filling', 'Protein'],
    restaurantId: '5',
    restaurantName: 'Taco Haven'
  },
  {
    id: '206',
    name: 'Mango Smoothie',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Refreshing blend of ripe mango, yogurt, and honey',
    price: 4.99,
    category: 'drinks',
    tags: ['Refreshing', 'Sweet'],
    restaurantId: '6',
    restaurantName: 'Juice Bar'
  },
  {
    id: '207',
    name: 'Chocolate Brownie',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Rich and fudgy chocolate brownie with walnuts',
    price: 3.99,
    category: 'desserts',
    tags: ['Sweet', 'Indulgent'],
    restaurantId: '7',
    restaurantName: 'Sweet Treats'
  },
  {
    id: '208',
    name: 'Spicy Ramen',
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Japanese noodle soup with spicy broth, soft-boiled egg, and pork belly',
    price: 11.99,
    category: 'noodles',
    tags: ['Spicy', 'Hot'],
    restaurantId: '8',
    restaurantName: 'Noodle House'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'burger', name: 'Burgers' },
  { id: 'bowls', name: 'Bowls' },
  { id: 'salad', name: 'Salads' },
  { id: 'mexican', name: 'Mexican' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'desserts', name: 'Desserts' }
];

const Menu = () => {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMenuItems = menuItems.filter((item) => {
    // First, filter by category
    const categoryMatch =
      activeCategory === 'all' ||
      item.category === activeCategory;

    // Then, filter by search query
    const searchMatch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.restaurantName.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (item: any) => {
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
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Campus Menu</h1>
          <p className="text-muted-foreground">Explore our wide selection of delicious meals</p>
        </div>

        <div className="sticky top-16 pt-4 bg-background z-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu items, restaurants..."
                className="pl-8 bg-muted/50"
              />
            </div> */}
            {/* <Button variant="outline" className="flex gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button> */}
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex overflow-x-auto pb-1 w-full h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex-shrink-0"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredMenuItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.restaurantName}</p>
                  </div>
                  <span className="font-semibold">Rs.{item.price.toFixed(2)}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    className="bg-food-primary hover:bg-food-dark text-white"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
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
      </div>
    </MainLayout>
  );
};

export default Menu;

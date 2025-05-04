
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="mr-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-food-primary">Campus Bite</span>
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-food-primary transition-colors">Home</Link>
            <Link to="/#campuscanteen" className="text-foreground hover:text-food-primary transition-colors">Restaurants</Link>
            <Link to="/menu" className="text-foreground hover:text-food-primary transition-colors">Menu</Link>
            <Link to="/about" className="text-foreground hover:text-food-primary transition-colors">About</Link>
          </div>
        )}

        <div className="hidden md:flex relative max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for food, restaurants..."
            className="pl-8 w-[300px] bg-muted/50"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-food-primary">
                {totalItems}
              </Badge>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/profile')}
          >
            <User size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 border-t">
          <div className="container p-4">
            <div className="relative mb-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for food, restaurants..."
                className="pl-8 w-full bg-muted/50"
              />
            </div>
            <nav className="space-y-4">
              <Link
                to="/"
                className="block py-2 text-lg font-medium text-foreground hover:text-food-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#campuscanteen"
                className="block py-2 text-lg font-medium text-foreground hover:text-food-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Restaurants
              </Link>
              <Link
                to="/menu"
                className="block py-2 text-lg font-medium text-foreground hover:text-food-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="block py-2 text-lg font-medium text-foreground hover:text-food-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { toast } from 'sonner';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
  options?: {
    name: string;
    choice: string;
  }[];
};

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to parse stored cart:', error);
      }
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      // Check if we're adding an item from a different restaurant
      const existingRestaurant = currentItems.length > 0 ? currentItems[0].restaurantId : null;

      if (existingRestaurant && existingRestaurant !== item.restaurantId) {
        // Ask the user if they want to start a new cart
        if (confirm('Adding items from a different restaurant will clear your current cart. Continue?')) {
          toast.success(`Added Rs.{item.name} to your cart`);
          return [{ ...item, quantity: 1 }];
        } else {
          return currentItems;
        }
      }

      // Check if the item is already in the cart
      const existingItemIndex = currentItems.findIndex(i => i.id === item.id);

      if (existingItemIndex > -1) {
        // If item exists, increment its quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        toast.success(`Added another Rs.{item.name} to your cart`);
        return updatedItems;
      } else {
        // Otherwise add the new item
        toast.success(`Added Rs.{item.name} to your cart`);
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems(currentItems => {
      const updatedItems = currentItems.filter(item => item.id !== id);
      toast.info('Item removed from cart');
      return updatedItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared');
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

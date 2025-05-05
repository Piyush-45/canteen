
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MainLayout from "@/components/layout/MainLayout";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const deliveryFee = 2.99;
  const serviceFee = subtotal > 0 ? 1.99 : 0;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setIsPromoApplied(true);
      toast.success("Promo code applied! 10% off your order.");
    } else {
      toast.error("Invalid promo code. Please try another code.");
    }
  };

  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/payement");
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-6 md:py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add items to your cart to proceed with your order.
            </p>
            <Button
              onClick={() => navigate("/restaurants")}
              className="bg-food-primary hover:bg-food-dark text-white"
            >
              Browse Restaurants
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            From {item.restaurantName}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            {item.options &&
                              item.options.map((option, index) => (
                                <div
                                  key={index}
                                  className="text-xs bg-secondary px-2 py-0.5 rounded-full"
                                >
                                  {option.name}: {option.choice}
                                </div>
                              ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="font-medium text-right min-w-[80px]">
                            Rs.{(item.price * item.quantity).toFixed(2)}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button
                      variant="outline"
                      className="text-muted-foreground"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Add Special Instructions</h3>
                  <textarea
                    className="min-h-[100px] w-full border rounded-md p-3 text-sm"
                    placeholder="Add notes for the restaurant or delivery person..."
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>Rs.{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>Rs.{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span>Rs.{serviceFee.toFixed(2)}</span>
                    </div>

                    {isPromoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-Rs.{discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-semibold text-lg mb-6">
                    <span>Total</span>
                    <span>Rs.{total.toFixed(2)}</span>
                  </div>

                  {!isPromoApplied && (
                    <div className="mb-6">
                      <p className="text-sm font-medium mb-2">Promo Code</p>
                      <div className="flex gap-2">
                        <Input
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter promo code"
                        />
                        <Button onClick={handlePromoCode}>Apply</Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Try "SAVE10" for 10% off
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-food-primary hover:bg-food-dark text-white"
                    disabled={items.length === 0}

                  >
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;

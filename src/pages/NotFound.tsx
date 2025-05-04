
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-7xl font-bold text-food-primary mb-6">404</h1>
          <p className="text-2xl font-semibold mb-2">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/")}
              className="bg-food-primary hover:bg-food-dark text-white"
            >
              Go to Homepage
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;

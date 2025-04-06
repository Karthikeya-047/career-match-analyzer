
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full py-4 bg-white border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">RR</span>
          </div>
          <h1 className="text-xl font-bold text-primary">ResumeReviewer</h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-gray-900 hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="font-medium text-gray-900 hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="font-medium text-gray-900 hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 z-50 bg-white shadow-lg rounded-lg py-4 px-6 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

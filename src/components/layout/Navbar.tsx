
import React, { useState, useEffect } from "react";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "py-3 glass shadow-sm border-b border-zahabi-gold/10"
          : "py-4 bg-white"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="mr-2 text-zahabi-gold">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 3L4 9V21H20V9L12 3ZM12 5.17L18 9.6V19H6V9.6L12 5.17Z" />
              <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10C9.79086 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" />
            </svg>
          </span>
          <span className="text-2xl font-semibold tracking-tighter">
            Zahabi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
        <a 
            href="#how-it-works" 
            className="text-sm font-medium text-foreground hover:text-zahabi-gold transition-colors duration-200"
          >
            How It Works
          </a>
          
          <a 
            href="#for-borrowers" 
            className="text-sm font-medium text-foreground hover:text-zahabi-gold transition-colors duration-200"
          >
            For Borrowers
          </a>
          <a 
            href="#for-investors" 
            className="text-sm font-medium text-foreground hover:text-zahabi-gold transition-colors duration-200"
          >
            For Investors
          </a>
         
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <CustomButton variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 hover:text-purple-700">
           Let's connect 
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-out",
                menuOpen ? "top-2 rotate-45" : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full top-2 transition-all duration-300 ease-out",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-foreground rounded-full transition-all duration-300 ease-out",
                menuOpen ? "top-2 -rotate-45" : "top-4"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed top-[60px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <a 
              href="#how-it-works" 
              className="text-lg font-medium hover:text-zahabi-gold transition-colors"
              onClick={toggleMenu}
            >
              How It Works
            </a>
           
            <a 
              href="#for-borrowers" 
              className="text-lg font-medium hover:text-zahabi-gold transition-colors"
              onClick={toggleMenu}
            >
              For Borrowers
            </a>
            <a 
              href="#for-investors" 
              className="text-lg font-medium hover:text-zahabi-gold transition-colors"
              onClick={toggleMenu}
            >
              For Investors
            </a>
            
      
            <CustomButton size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 hover:text-purple-700" onClick={toggleMenu}>
             Let's connect
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

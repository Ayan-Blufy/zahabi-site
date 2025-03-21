
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
          ? "py-3 glass shadow-sm border-b border-purple/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-semibold tracking-tighter text-gradient">
            elegance
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-foreground hover:text-purple transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#products" 
            className="text-sm font-medium text-foreground hover:text-purple transition-colors duration-200"
          >
            Products
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-foreground hover:text-purple transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-foreground hover:text-purple transition-colors duration-200"
          >
            About
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CustomButton>Get Started</CustomButton>
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
            "fixed top-[72px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden glass-dark",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            <a 
              href="#features" 
              className="text-lg font-medium hover:text-purple transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#products" 
              className="text-lg font-medium hover:text-purple transition-colors"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium hover:text-purple transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium hover:text-purple transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <CustomButton size="lg" onClick={toggleMenu}>
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

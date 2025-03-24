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
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.0352V7.72076V6.9441C0 5.83584 0.460322 4.77775 1.27189 4.02291L4.68394 0.853014C5.27297 0.305428 6.04963 0 6.85465 0H20.6992C21.5479 0 22.3682 0.301065 23.0139 0.84647L26.5198 3.80911C27.327 4.49196 27.7917 5.49332 27.7917 6.54923V13.0352L18.5634 21.3297L12.3502 21.4737L21.3646 7.46769H6.46196L0 13.0352Z"
                fill="#CC9900"
              />
              <path
                d="M27.7939 18.9648V24.2792V25.0558C27.7939 26.1641 27.3335 27.2222 26.522 27.977L23.1099 31.1469C22.5209 31.6945 21.7442 31.9999 20.9392 31.9999H7.09465C6.246 31.9999 5.4257 31.6989 4.77994 31.1535L1.27408 28.1908C0.466883 27.508 0.00219727 26.5066 0.00219727 25.4507V18.9648L9.23045 10.6702L15.4437 10.5262L6.42925 24.5322H21.3319L27.7939 18.9648Z"
                fill="#CC9900"
              />
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
            className="text-sm font-medium text-foreground hover:text-gold transition-colors duration-200"
          >
            How It Works
          </a>

          <a
            href="#for-borrowers"
            className="text-sm font-medium text-foreground hover:text-gold transition-colors duration-200"
          >
            For Borrowers
          </a>
          <a
            href="#for-investors"
            className="text-sm font-medium text-foreground hover:text-gold transition-colors duration-200"
          >
            For Investors
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <CustomButton
            href="mailto:modakaryan11@gmail.com"
            variant="outline"
            size="sm"
            className="border-gold-200 hover:bg-gold-400 hover:text-gold-700"
          >
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
            <CustomButton
              size="lg"
              variant="outline"
              className="border-gold-200 hover:bg-gold-50 hover:text-gold-700"
              onClick={toggleMenu}
            >
              Let's connect
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

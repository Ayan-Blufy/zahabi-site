
import React, { useEffect, useRef } from "react";
import { CustomButton } from "../ui/CustomButton";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>

      {/* Colored circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center px-3 py-1.5 bg-purple/10 rounded-full">
              <span className="text-xs font-medium text-purple">Introducing Our Latest Innovation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              Design with <span className="text-gradient">Elegance</span> and Clarity
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Discover a product that combines minimalist aesthetics with intuitive functionality.
              Crafted for those who appreciate simplicity, quality, and thoughtful design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton size="lg">
                Start Your Journey
              </CustomButton>
              <CustomButton size="lg" variant="outline">
                Learn More
              </CustomButton>
            </div>
            
            <div className="pt-4 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">100k+</p>
                <p className="text-sm text-muted-foreground">Happy Users</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div 
            ref={imageRef}
            className="aspect-square w-full max-w-md mx-auto lg:max-w-full relative animate-float"
          >
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-xl border border-white/20 glass">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light/30 via-transparent to-purple/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-purple/5 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-purple/10 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-purple/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-purple pulse-animation"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute w-32 h-32 top-10 -right-10 rounded-full glass-dark animate-float"></div>
            <div className="absolute w-24 h-24 bottom-16 -left-10 rounded-full glass animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute w-16 h-16 top-1/4 -left-12 rounded-full glass-dark animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

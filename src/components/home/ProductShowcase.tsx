
import React, { useRef, useEffect } from "react";
import { CustomButton } from "../ui/CustomButton";

const ProductShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const productImageRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll for the product image
  useEffect(() => {
    const handleScroll = () => {
      if (!showcaseRef.current || !productImageRef.current) return;
      
      const showcaseRect = showcaseRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (showcaseRect.top < windowHeight && showcaseRect.bottom > 0) {
        const scrollPercentage = (windowHeight - showcaseRect.top) / (windowHeight + showcaseRect.height);
        const translateY = Math.min(50, Math.max(-50, (scrollPercentage - 0.5) * 100));
        
        productImageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="products" ref={showcaseRef} className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-light/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center px-3 py-1.5 bg-purple/10 rounded-full mb-6">
            <span className="text-xs font-medium text-purple">Product Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted with Precision</h2>
          <p className="text-muted-foreground">
            Our product embodies the perfect balance of form and function, delivering an experience that feels both familiar and revolutionary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div ref={productImageRef} className="order-2 lg:order-1 animate-fade-up">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto rounded-3xl glass overflow-hidden shadow-xl border border-purple/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-light/20 via-transparent to-purple/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-purple animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 -right-6 w-32 h-32 rounded-2xl glass rotate-12 animate-float"></div>
              <div className="absolute -bottom-6 left-10 w-24 h-24 rounded-full glass-dark -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 rounded-lg glass rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-8 order-1 lg:order-2 animate-fade-up">
            <h3 className="text-3xl font-bold">Experience Pure Simplicity</h3>
            <p className="text-muted-foreground leading-relaxed">
              The product embodies our belief that true elegance comes from simplicity. Every detail has been meticulously considered to create an experience that feels natural and intuitive.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Thoughtful Materials",
                  description: "Crafted from sustainable, premium-grade materials that feel substantial and lasting."
                },
                {
                  title: "Intuitive Interactions",
                  description: "Every touch, swipe, and tap has been optimized to feel responsive and natural."
                },
                {
                  title: "Timeless Aesthetic",
                  description: "A design that transcends trends, focusing on what truly matters."
                }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xl font-medium">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <CustomButton size="lg">
                Explore Product
              </CustomButton>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "99%",
              label: "Customer Satisfaction",
              description: "Our users consistently rate their experience as exceptional."
            },
            {
              number: "5.0",
              label: "Average Rating",
              description: "Perfect scores across all major review platforms."
            },
            {
              number: "24/7",
              label: "Dedicated Support",
              description: "Our team is always available to assist with any questions."
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl border border-purple/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-lg font-medium mb-4">{stat.label}</div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

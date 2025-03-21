
import React from "react";
import { CheckCircle, Zap, Shield, Sparkles } from "lucide-react";

const featuresData = [
  {
    icon: <Sparkles className="h-6 w-6 text-purple" />,
    title: "Intuitive Design",
    description: "Every element is crafted with simplicity and clarity, ensuring an effortless user experience."
  },
  {
    icon: <Zap className="h-6 w-6 text-purple" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance, providing instant responses to user interactions."
  },
  {
    icon: <Shield className="h-6 w-6 text-purple" />,
    title: "Secure & Private",
    description: "Your data is protected with the highest security standards, ensuring complete privacy."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-purple" />,
    title: "Quality Assurance",
    description: "Rigorously tested to ensure reliability and consistency across all platforms."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -left-20 top-1/4 w-64 h-64 bg-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center px-3 py-1.5 bg-purple/10 rounded-full mb-6">
            <span className="text-xs font-medium text-purple">Innovative Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed with Precision & Purpose</h2>
          <p className="text-muted-foreground">
            Our product combines elegance with functionality, creating a seamless experience that elevates everyday tasks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-2xl border border-purple/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-purple/5 rounded-xl inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-light/20 via-purple/10 to-purple-dark/20 rounded-3xl transform -skew-y-1"></div>
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-bold">Focus on What Matters</h3>
                <p className="text-muted-foreground">
                  Our design philosophy is centered around removing distractions and letting users focus on what truly matters.
                  By eliminating unnecessary elements, we create a space where clarity and purpose thrive.
                </p>
                <div className="space-y-4">
                  {[
                    "Clutter-free interface", 
                    "Purpose-driven interactions", 
                    "Meaningful animations", 
                    "Thoughtful feature integration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-72 md:h-96 animate-fade-up">
                <div className="absolute inset-0 rounded-2xl bg-purple/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-light/20 via-transparent to-purple/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 aspect-square rounded-full bg-white/50 backdrop-blur-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

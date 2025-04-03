import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton";
import { 
  CheckCircle2, 
  Lock, 
  Shield, 
  Mail, 
  Phone, 
  Home, 
  CreditCard, 
  HelpCircle, 
  FileText, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white relative">
      <div className="bg-zahabi-cream/60 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zahabi-dark">Ready to start your investment journey?</h3>
              <p className="text-gray-600 mb-6">Join Zahabi today and discover a world of opportunities in gold investments.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton variant="gold" size="lg" href="mailto:ayan@zahabi.in">  
                Get Started
              </CustomButton>
              <CustomButton variant="outline" size="lg" href="#app-video">
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: About */}
          <div>
            <p className="text-gray-600 mb-6">
              Zahabi is a modern platform that makes gold investment accessible, 
              secure, and rewarding for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/oxby7e/" aria-label="Instagram" className="text-gray-400 hover:text-zahabi-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ayan-modak-201aab226/" aria-label="LinkedIn" className="text-gray-400 hover:text-zahabi-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zahabi-dark">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="flex items-center text-gray-600 hover:text-zahabi-gold transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#for-borrowers" className="flex items-center text-gray-600 hover:text-zahabi-gold transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  <span>For Borrowers</span>
                </a>
              </li>
              <li>
                <a href="#for-investors" className="flex items-center text-gray-600 hover:text-zahabi-gold transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  <span>For Investors</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-zahabi-gold transition-colors">
                  <ChevronRight size={16} className="mr-2" />
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zahabi-dark">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600">
                <Mail size={18} className="mr-3 mt-1 text-zahabi-gold" />
                <span>ayan@zahabi.in</span>
              </li>
              <li className="flex items-start text-gray-600">
                <Phone size={18} className="mr-3 mt-1 text-zahabi-gold" />
                <span>+91 8208390973</span>
              </li>
              <li className="flex items-start text-gray-600">
                <Home size={18} className="mr-3 mt-1 text-zahabi-gold" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and certificates section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-zahabi-gold text-sm md:text-left order-2 md:order-1">
              © 2025 Zahabi.in All rights reserved.
            </p>
            <div className="flex items-center space-x-6 order-1 md:order-2">
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-xs">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-xs">Verified Partner</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="h-4 w-4 text-green-500" />
                <span className="text-xs">256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
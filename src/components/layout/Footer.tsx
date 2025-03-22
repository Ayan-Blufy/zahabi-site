
import { CheckCircle2, Lock, Shield } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-zahabi-cream/50 relative overflow-hidden">
      {/* Background gradients */}
   
      <div className="border-t pt-6 pb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6">
              <p className="text-center text-zahabi-gold leading-loose text-muted-foreground md:text-left">
                © 2025 Zahabi.in All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
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

    </footer>
  );
};

export default Footer;

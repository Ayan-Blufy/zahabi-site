
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 relative overflow-hidden">
      {/* Background gradients */}
   
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Elegance. All rights reserved.
          </p>
        </div>

    </footer>
  );
};

export default Footer;

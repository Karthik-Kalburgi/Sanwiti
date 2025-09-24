import { Link } from "react-router-dom";
import { Brain, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">MindCare</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing compassionate mental health care and psychological services 
              to help you achieve emotional wellness and personal growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary-foreground/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-foreground/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-primary-foreground/80 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-primary-foreground/80 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Individual Therapy</li>
              <li className="text-primary-foreground/80">Couples Counseling</li>
              <li className="text-primary-foreground/80">Group Therapy</li>
              <li className="text-primary-foreground/80">Child Psychology</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">contact@mindcare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">123 Wellness St, Health City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 MindCare. All rights reserved. Professional mental health services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
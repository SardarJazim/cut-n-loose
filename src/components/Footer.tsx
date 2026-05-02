import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-inky text-brand-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Scissors className="w-6 h-6 text-brand-gold" />
              <span className="font-serif text-xl uppercase tracking-widest">Cut N Loose</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Longview's premier salon for modern styles and classic techniques. We believe in beauty through precision and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest text-brand-gold">Menu</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/booking" className="hover:opacity-100 transition-opacity">Booking</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest text-brand-gold">Hours</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10am - 5pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-widest text-brand-gold">Location</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-brand-gold" />
                <span>Longview, TX 75604</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold" />
                <span>hello@cutnloose.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs opacity-40">
          <p>&copy; {new Date().getFullYear()} Cut N Loose Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

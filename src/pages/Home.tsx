import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-brand-inky flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" 
            alt="Salon atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-6 font-medium"
            >
              Excellence in Haircare
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-cream text-6xl md:text-8xl font-serif leading-[0.9] mb-8"
            >
              Style that <br /> Speaks for <br /> Itself.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/booking" className="px-10 py-5 bg-brand-gold text-brand-inky font-sans uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors">
                Book Appointment
              </Link>
              <Link to="/services" className="px-10 py-5 border border-white/30 text-white font-sans uppercase tracking-widest text-sm font-semibold hover:bg-white/10 transition-colors">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <Scissors className="w-10 h-10 text-brand-gold" />
              <h3 className="text-3xl font-serif">Expert Precision</h3>
              <p className="text-brand-inky/70 leading-relaxed font-light">
                Our stylists are trained in the latest techniques to ensure your cut is exactly what you envision, with a sharp attention to detail.
              </p>
            </div>
            <div className="space-y-6">
              <Sparkles className="w-10 h-10 text-brand-gold" />
              <h3 className="text-3xl font-serif">Premium Products</h3>
              <p className="text-brand-inky/70 leading-relaxed font-light">
                We only use the highest quality salon-exclusive products that nourish your hair while delivering long-lasting results.
              </p>
            </div>
            <div className="space-y-6">
              <Heart className="w-10 h-10 text-brand-gold" />
              <h3 className="text-3xl font-serif">Personal Care</h3>
              <p className="text-brand-inky/70 leading-relaxed font-light">
                Every client is unique. We take the time to understand your lifestyle and hair goals to provide a tailored experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 border-t border-brand-inky/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Interior" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-brand-gold hidden md:block" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-serif leading-tight">A Modern Sanctuary <br /> located in Longview.</h2>
              <p className="text-brand-inky/70 text-lg leading-relaxed font-light">
                Nestled in the heart of Longview, TX 75604, Cut N Loose is more than just a hair salon—it's an escape. Our minimalist design and serene atmosphere provide the perfect backdrop for your transformation.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-brand-gold">10+</h4>
                  <p className="text-xs uppercase tracking-widest font-semibold opacity-60">Expert Stylists</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2 text-brand-gold">15K+</h4>
                  <p className="text-xs uppercase tracking-widest font-semibold opacity-60">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-4">Our Craft</p>
          <h2 className="text-5xl font-serif">Featured Services</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            { title: "Precision Cut", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800" },
            { title: "Artistic Color", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
            { title: "Bridal Styling", img: "https://images.unsplash.com/photo-1595475243692-3b2d20b85d38?auto=format&fit=crop&q=80&w=800" },
            { title: "Luxe Treatment", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -10 }}
              className="group relative h-96 overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-bottom p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="mt-auto">
                  <h4 className="text-2xl font-serif text-white mb-2">{item.title}</h4>
                  <p className="text-brand-gold text-xs uppercase tracking-widest">Learn More &rarr;</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-sm uppercase tracking-widest font-semibold border-b border-brand-inky py-2 hover:text-brand-gold hover:border-brand-gold transition-all">View All Services</Link>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-24 bg-brand-inky text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-4">Curated Packages</h2>
            <p className="opacity-60 font-light">Exclusive experiences designed for your self-care journey.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-white/10 p-12 space-y-8 hover:border-brand-gold transition-colors group">
              <div className="space-y-2">
                <p className="text-brand-gold text-xs uppercase tracking-[0.2em]">The Total Refresh</p>
                <h3 className="text-4xl font-serif">$185</h3>
              </div>
              <ul className="space-y-4 text-sm opacity-70">
                <li>• Designer Haircut & Style</li>
                <li>• Full Gloss Treatment</li>
                <li>• Scalp Detox Ritual</li>
                <li>• Designer Product Gift</li>
              </ul>
              <Link to="/booking" className="block w-full text-center py-4 border border-white/20 text-xs uppercase tracking-[0.3em] font-semibold group-hover:bg-brand-gold group-hover:text-brand-inky transition-all">Book Package</Link>
            </div>

            <div className="border-2 border-brand-gold p-12 space-y-8 bg-white/5 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-inky px-4 py-1 text-[10px] uppercase font-bold tracking-widest">Most Requested</div>
              <div className="space-y-2">
                <p className="text-brand-gold text-xs uppercase tracking-[0.2em]">The Balayage Luxe</p>
                <h3 className="text-4xl font-serif">$245</h3>
              </div>
              <ul className="space-y-4 text-sm opacity-70">
                <li>• Hand-Painted Highlights</li>
                <li>• Root Smudge & Toning</li>
                <li>• Deep Moisture Masque</li>
                <li>• Signature Blowout</li>
              </ul>
              <Link to="/booking" className="block w-full text-center py-4 bg-brand-gold text-brand-inky text-xs uppercase tracking-[0.3em] font-semibold hover:bg-white transition-all">Book Package</Link>
            </div>

            <div className="border border-white/10 p-12 space-y-8 hover:border-brand-gold transition-colors group">
              <div className="space-y-2">
                <p className="text-brand-gold text-xs uppercase tracking-[0.2em]">First Visit Special</p>
                <h3 className="text-4xl font-serif">$95</h3>
              </div>
              <ul className="space-y-4 text-sm opacity-70">
                <li>• Consultation & Cut</li>
                <li>• Hydration Treatment</li>
                <li>• Style Out</li>
                <li>• 10% Off Home Care</li>
              </ul>
              <Link to="/booking" className="block w-full text-center py-4 border border-white/20 text-xs uppercase tracking-[0.3em] font-semibold group-hover:bg-brand-gold group-hover:text-brand-inky transition-all">Book Package</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-serif leading-tight">What our clients <br /> are saying.</h2>
              <div className="flex space-x-2 mt-8">
                {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 text-brand-gold" />)}
              </div>
              <p className="mt-4 text-brand-inky/50 text-sm italic">"consistently rated 5 stars in Longview"</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 shadow-sm border border-brand-inky/5 space-y-6">
                <p className="text-lg font-serif italic text-brand-inky/80">"The best hair experience I've had in East Texas. The attention to detail is unmatched, and I always leave feeling like a new person."</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full" />
                  <div>
                    <h5 className="font-semibold text-sm">Amanda R.</h5>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Client since 2021</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 shadow-sm border border-brand-inky/5 space-y-6 mt-8 md:mt-24">
                <p className="text-lg font-serif italic text-brand-inky/80">"Cut N Loose is the only place I trust with my blonde. They understand color chemistry perfectly and prioritize hair health."</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full" />
                  <div>
                    <h5 className="font-semibold text-sm">Jessica M.</h5>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">Loyal Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-gold uppercase tracking-widest text-sm mb-4"
            >
              Our Story
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-8"
            >
              Passion for <br /> Perfection.
            </motion.h1>
            <div className="space-y-6 text-brand-inky/70 leading-relaxed font-light text-lg">
              <p>
                Founded in Longview, TX, Cut N Loose Salon was born from a vision to create a space where art and hair converge. We are a collection of passon-driven stylists dedicated to the craft of beauty.
              </p>
              <p>
                Our philosophy is simple: we treat every guest like a canvas. Whether you're looking for a bold new color or a subtle trim, we approach every service with the same level of dedication and technical skill.
              </p>
              <p>
                Located in the 75604 area, we pride ourselves on being a cornerstone of the local community, offering a luxury experience without pretension.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" 
              alt="Stylist work" 
              className="w-full aspect-[3/4] object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600" 
              alt="Stylist work" 
              className="w-full aspect-[3/4] object-cover mt-12"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-inky text-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 uppercase tracking-widest">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Members */}
            {[
              { name: "Sarah Jenkins", role: "Master Stylist", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
              { name: "Marcus Thorne", role: "Colorist", img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=800" },
              { name: "Elena Rossi", role: "Texture Specialist", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800" },
              { name: "David Wu", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" }
            ].map(member => (
              <div key={member.name} className="group">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif mb-1">{member.name}</h4>
                <p className="text-sm opacity-50 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

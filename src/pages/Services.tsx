import { motion } from "motion/react";
import { Scissors, Palette, Sparkles, Wind, Users, Zap } from "lucide-react";

export default function Services() {
  const serviceGroups = [
    {
      title: "Cuts & Styling",
      icon: <Scissors className="w-6 h-6" />,
      services: [
        { name: "Women's Haircut", price: "$65+", duration: "60 mins" },
        { name: "Men's Haircut", price: "$45+", duration: "45 mins" },
        { name: "Blowouts", price: "$40+", duration: "45 mins" },
        { name: "Updos/Formal Styling", price: "$85+", duration: "75 mins" },
      ]
    },
    {
      title: "Color Artistry",
      icon: <Palette className="w-6 h-6" />,
      services: [
        { name: "Full Color", price: "$120+", duration: "120 mins" },
        { name: "Partial Highlights", price: "$150+", duration: "150 mins" },
        { name: "Balayage", price: "$200+", duration: "180 mins" },
        { name: "Color Correction", price: "By Quote", duration: "Variable" },
      ]
    },
    {
      title: "Treatments",
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        { name: "Deep Conditioning", price: "$35+", duration: "30 mins" },
        { name: "Keratin Treatment", price: "$250+", duration: "180 mins" },
        { name: "Scalp Detox", price: "$50+", duration: "45 mins" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-brand-inky text-brand-cream text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mb-8"
          >
            Services.
          </motion.h1>
          <p className="text-xl opacity-60 font-light max-w-2xl mx-auto">
            A curated menu of hair services designed for modern life. All services include a personalized consultation and relaxation wash.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {serviceGroups.map((group, i) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-3 mb-10 border-b border-brand-inky pb-4">
                  <div className="text-brand-gold">{group.icon}</div>
                  <h2 className="text-3xl font-serif uppercase tracking-widest">{group.title}</h2>
                </div>
                <div className="space-y-8">
                  {group.services.map(service => (
                    <div key={service.name} className="flex justify-between items-end border-b border-brand-inky/5 pb-4">
                      <div>
                        <h4 className="text-xl font-serif group-hover:text-brand-gold transition-colors">{service.name}</h4>
                        <p className="text-xs uppercase opacity-40 tracking-widest mt-1">{service.duration}</p>
                      </div>
                      <span className="font-serif text-lg text-brand-gold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-24 border-t border-brand-inky/10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif uppercase tracking-widest">Special Packages</h2>
                <p className="text-brand-inky/50 mt-4">Bundled services for the ultimate salon experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { name: "The Total Refresh", price: "$185", desc: "Cut, Style, Gloss, Scalp Detox & Product Gift" },
                    { name: "The Balayage Luxe", price: "$245", desc: "Balayage, Toning, Treatment & Blowout" },
                    { name: "Bridal Full Trial", price: "$150", desc: "Updo Design, Veil Placement & Consult" }
                ].map((pkg, i) => (
                    <motion.div 
                        key={pkg.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-brand-cream/30 p-10 text-center border border-brand-inky/5 flex flex-col h-full"
                    >
                        <h4 className="text-2xl font-serif mb-2">{pkg.name}</h4>
                        <p className="text-brand-gold font-serif text-3xl mb-6">{pkg.price}</p>
                        <p className="text-sm opacity-60 mb-8 flex-grow leading-relaxed">{pkg.desc}</p>
                        <a href="/booking" className="block py-4 border border-brand-inky text-[10px] uppercase tracking-widest font-bold hover:bg-brand-inky hover:text-white transition-all">Select Package</a>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-gold text-brand-inky py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8 leading-tight">Ready for your transformation?</h2>
          <a href="/booking" className="inline-block px-12 py-5 bg-brand-inky text-brand-cream uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-brand-inky transition-all shadow-xl">
            Secure Your Spot
          </a>
        </div>
      </section>
    </div>
  );
}

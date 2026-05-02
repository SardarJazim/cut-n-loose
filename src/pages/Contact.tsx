import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-20 bg-brand-cream min-h-screen">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif mb-12"
            >
              Get In <br /> Touch.
            </motion.h1>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-brand-inky/10 text-brand-gold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Our Salon</h4>
                  <p className="text-brand-inky/60 leading-relaxed">
                    Longview, TX 75604 <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-brand-inky/10 text-brand-gold shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Phone</h4>
                  <p className="text-brand-inky/60 font-light text-2xl tracking-tighter">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-brand-inky/10 text-brand-gold shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Email</h4>
                  <p className="text-brand-inky/60 font-light text-xl">hello@cutnloose.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brand-inky p-8 md:p-16">
            <h3 className="text-3xl font-serif text-brand-cream mb-10 text-center uppercase tracking-widest">Send a Message</h3>
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20 text-brand-cream space-y-6"
              >
                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="text-brand-inky w-10 h-10" />
                </div>
                <h4 className="text-3xl font-serif">Message Received</h4>
                <p className="opacity-60 max-w-sm mx-auto">We've received your message and will respond as soon as possible. Usually within 24 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold pt-10 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-brand-cream/40 text-xs uppercase tracking-widest">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-brand-cream/40 text-xs uppercase tracking-widest">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-brand-cream/40 text-xs uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full bg-transparent border border-white/10 p-4 mt-2 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-brand-gold text-brand-inky py-5 font-bold uppercase tracking-[0.3em] text-sm hover:bg-white transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Submit Message"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center italic">An error occurred. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-brand-inky/10 relative overflow-hidden grayscale">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" 
          alt="Map background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-cream p-8 shadow-2xl text-center border border-brand-inky/10">
                <h4 className="font-serif text-2xl mb-2">Cut N Loose Salon</h4>
                <p className="text-brand-inky/60 text-sm">Longview, TX 75604</p>
                <p className="text-brand-gold mt-4 font-semibold uppercase tracking-widest text-xs">Directions &rarr;</p>
            </div>
        </div>
      </section>
    </div>
  );
}

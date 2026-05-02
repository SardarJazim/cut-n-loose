import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Mail, Scissors } from "lucide-react";

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", date: "", time: "", service: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const services = [
    "Women's Haircut", "Men's Haircut", "Blowout", "Color - Full", 
    "Color - Highlights", "Balayage", "Keratin Treatment", "Conditioning"
  ];

  return (
    <div className="pt-20 min-h-screen bg-brand-cream">
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif mb-6"
          >
            Reservation.
          </motion.h1>
          <p className="text-brand-inky/60 text-lg font-light">
            Book your visit at our Longview location. <br /> We'll confirm your appointment via email or phone.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-inky text-brand-cream p-12 text-center space-y-6"
          >
            <Scissors className="w-16 h-16 mx-auto text-brand-gold animate-bounce" />
            <h2 className="text-4xl font-serif">Thank You!</h2>
            <p className="opacity-70 text-lg">Your booking request has been sent. We'll be in touch shortly to confirm your stylist and time.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="px-10 py-4 border border-white/20 uppercase tracking-widest text-sm hover:bg-white hover:text-brand-inky transition-all"
            >
              Book Another Visit
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl space-y-8 border border-brand-inky/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="hello@example.com"
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 000-0000"
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Requested Service</label>
                <div className="relative">
                  <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <select 
                    required
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold opacity-60">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gold" />
                  <input 
                    required
                    type="time" 
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-brand-cream/30 border border-brand-inky/10 py-4 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-brand-inky text-brand-cream py-5 uppercase tracking-[0.3em] font-bold text-sm hover:bg-brand-gold hover:text-brand-inky transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Processing..." : "Request Appointment"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm mt-4 text-center italic">Something went wrong. Please try again or call us directly.</p>
              )}
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

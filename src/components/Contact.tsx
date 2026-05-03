import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Simulation mode if keys are missing or placeholders
      if (!publicKey || publicKey === "public_key" || !serviceId || !templateId) {
        console.log("SIMULATED EMAIL DATA:", {
          from_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          message: formData.message,
          variables: ["first_name", "last_name", "user_email", "message"]
        });
        console.warn("EmailJS configuration incomplete. Simulation mode active. Check your .env setup for real delivery.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        return;
      }

      // Sending all variables to EmailJS
      // IMPORTANT: You must use these exact variable names in your EmailJS Template:
      // {{first_name}}, {{last_name}}, {{user_email}}, {{message}}
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`, // Used for the "display name"
          from_email: formData.email, // Visitor's email
          reply_to: formData.email,   // VERY IMPORTANT: Allows you to reply directly to the visitor
          first_name: formData.firstName,
          last_name: formData.lastName,
          user_email: formData.email,
          message: formData.message,
          to_email: "harshithchinnu1079@gmail.com"
        },
        publicKey
      );

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      const errorText = error?.text || "";
      console.error("Error text from EmailJS:", errorText);

      // Handle the specific 412 Gmail Scopes error
      if (errorText.includes("insufficient authentication scopes") || error?.status === 412) {
        setStatus("auth_error" as any);
      } else {
        setStatus("error");
      }
      
      setTimeout(() => setStatus("idle"), 10000);
    }
  };

  const isAuthError = status === ("auth_error" as any);
  const isGenericError = status === "error";

  return (
    <motion.section 
      id="contact" 
      className="py-32 px-6 bg-brand-surface/30"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/50">Contact</h2>
              <p className="text-6xl text-white font-display tracking-tight leading-none">
                LET'S <span className="text-gradient">CONNECT.</span>
              </p>
            </div>

            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              Open for new opportunities, collaborations, or just a coffee chat 
              about data systems and analytics.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-600">Email Me</p>
                  <p className="text-white text-lg font-display tracking-wide">harshithchinnu1079@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-600">Location</p>
                  <p className="text-white text-lg font-display tracking-wide">Hyderabad, IN</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-brand-border bg-brand-surface relative overflow-hidden"
          >
            {status === "success" && (
              <div className="absolute inset-0 z-50 bg-brand-surface/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 text-center p-6">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-500">
                  <CheckCircle size={64} />
                </motion.div>
                <h3 className="text-2xl font-display text-white">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  Send another
                </button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest pl-2">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50" 
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest pl-2">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50" 
                    disabled={status === "loading"}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest pl-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50" 
                  disabled={status === "loading"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-gray-500 tracking-widest pl-2">Your Message</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="How can I help you?" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-bg border border-brand-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none disabled:opacity-50" 
                  disabled={status === "loading"}
                />
              </div>
              
              {isAuthError && (
                <div className="flex flex-col gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl animate-shake">
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <AlertCircle size={16} />
                    <span>Gmail API: Permission Required</span>
                  </div>
                  <p className="text-[11px] text-red-400/80 leading-relaxed">
                    EmailJS needs permission to send on your behalf. Go to EmailJS Dashboard → Email Services → [Your Gmail Service] → Edit → Re-connect and ensure "Send email on your behalf" is checked.
                  </p>
                </div>
              )}

              {isGenericError && (
                <div className="flex flex-col gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <AlertCircle size={16} />
                    <span>Submission Failed</span>
                  </div>
                  <p className="text-[11px] text-red-400/80 leading-relaxed">
                    Something went wrong. Please check your network connection or try again later.
                  </p>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

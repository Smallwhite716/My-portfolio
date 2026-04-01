import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

interface ContactIconProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactIcon({ icon, label, value }: ContactIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-white border border-[#1A1A1A]/5 flex items-center justify-center shadow-sm cursor-pointer transition-colors hover:border-[#5A5A40]/30 hover:shadow-md"
      >
        <div className="text-[#1A1A1A]/60 hover:text-[#5A5A40] transition-colors">
          {icon}
        </div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full mb-4 px-4 py-2 bg-[#1A1A1A] text-[#F5F2ED] rounded-lg shadow-xl whitespace-nowrap z-50"
          >
            <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{label}</div>
            <div className="text-sm font-medium">{value}</div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1A1A1A]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#F5F2ED] py-16 px-6 overflow-hidden border-t border-[#1A1A1A]/5">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[20vw] font-serif italic leading-none">CONTACT</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#5A5A40]" />
            <span className="text-[#5A5A40] text-[10px] font-black uppercase tracking-[0.5em]">Get in Touch</span>
            <div className="h-px w-8 bg-[#5A5A40]" />
          </div>

          <h2 className="text-5xl md:text-6xl font-serif italic text-[#1A1A1A] mb-12">
            Contact Me
          </h2>

          <div className="flex items-center gap-12">
            <ContactIcon 
              icon={<Phone className="w-6 h-6" />} 
              label="Phone Number" 
              value="15577426716" 
            />
            <ContactIcon 
              icon={<Mail className="w-6 h-6" />} 
              label="QQ Email" 
              value="2642632439@qq.com" 
            />
          </div>

          <div className="mt-20 pt-8 border-t border-[#1A1A1A]/5 w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/30 font-bold">
              © 2026 LUCY · All Rights Reserved
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/30 font-bold">
              Built with Love & Code
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

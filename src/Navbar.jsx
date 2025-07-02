import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 tracking-tight">MiLotV</a>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative group transition-all duration-300"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white px-6 pb-4 pt-2 text-gray-700 font-medium text-lg shadow-inner space-y-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setIsOpen(false)} className="block transition-colors duration-200 hover:text-blue-600">
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

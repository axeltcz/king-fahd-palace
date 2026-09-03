import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Le Palais', href: '#palais' },
    { label: 'Chambres', href: '/chambres' },
    { label: 'Teranga', href: '/teranga' },
    { label: 'Restauration', href: '/restauration' },
    { label: 'Bien-être', href: '#bien-etre' },
    { label: 'Diplomatie', href: '/diplomatie' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-royal-gold to-yellow-600 rounded-full flex items-center justify-center">
              <span className="font-display text-xs font-bold text-obsidian">KF</span>
            </div>
            <div className="hidden sm:block font-display text-base font-light tracking-wide text-foreground">
              King Fahd Palace<span className="text-muted-foreground text-xs ml-2">· Dakar · Sénégal</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="eyebrow hover:text-royal-gold transition-colors text-muted-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Reserve Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#reserver')}
              className="hidden lg:block px-6 py-2 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-medium text-sm rounded-sm hover:opacity-90 transition-opacity"
            >
              Réserver
            </button>
            <button
              className="lg:hidden text-foreground hover:text-royal-gold transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-obsidian border-b border-border z-40 lg:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-2xl text-left text-foreground hover:text-royal-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#reserver')}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-royal-gold to-yellow-600 text-obsidian font-medium rounded-sm hover:opacity-90 transition-opacity w-full"
              >
                Réserver
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
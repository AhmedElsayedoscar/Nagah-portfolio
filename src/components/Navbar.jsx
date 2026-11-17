import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home', key: 'home' },
  { label: 'About', href: '#about', key: 'about' },
  { label: 'Work', href: '#video', key: 'work' },
  { label: 'Contact', href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'video', 'design', 'fitness', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const activeKey = active === 'home' || active === 'about' || active === 'contact' ? active : 'work';
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ahmed Nagah, home">
          <span className="brand-mark">AN<span>.</span></span>
          <span className="brand-name">AHMED NAGAH<span>CREATIVE PORTFOLIO</span></span>
        </a>

        <div className="nav-links" aria-label="Primary links">
          {links.map((link) => (
            <a className={activeKey === link.key ? 'nav-link active' : 'nav-link'} href={link.href} key={link.key}>
              {link.label}
              {activeKey === link.key && <motion.span className="nav-indicator" layoutId="nav-indicator" />}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <span>0{index + 1}</span>{link.label}<ArrowUpRight size={17} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

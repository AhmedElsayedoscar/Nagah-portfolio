import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile';

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 560);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return undefined;

    const updateFooterVisibility = () => {
      const bounds = footer.getBoundingClientRect();
      setFooterVisible(bounds.top < window.innerHeight && bounds.bottom > 0);
    };
    updateFooterVisibility();

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`floating-actions${footerVisible ? ' is-footer-visible' : ''}`} aria-hidden={footerVisible}>
      {showTop && <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={17} /></button>}
      <a className="floating-whatsapp" href={profile.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Ahmed on WhatsApp"><MessageCircle size={19} /><span>LET’S TALK</span></a>
    </div>
  );
}

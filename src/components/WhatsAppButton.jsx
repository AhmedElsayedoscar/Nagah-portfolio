import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { profile } from '../data/profile';

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 560);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="floating-actions">
      {showTop && <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={17} /></button>}
      <a className="floating-whatsapp" href={profile.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Ahmed on WhatsApp"><MessageCircle size={19} /><span>LET’S TALK</span></a>
    </div>
  );
}

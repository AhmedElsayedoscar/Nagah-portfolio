import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home" aria-label="Ahmed Nagah, back to top"><span className="brand-mark">AN<span>.</span></span><span className="brand-name">AHMED NAGAH<span>CREATIVE PORTFOLIO</span></span></a>
        <p>Turning ideas into<br /><em>visual experiences.</em></p>
        <a className="footer-contact" href={profile.whatsappUrl} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={15} /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} AHMED NAGAH</span><a className="footer-credit" href="https://wa.me/201018761843" target="_blank" rel="noreferrer" aria-label="Contact Eng. Ahmed El-Sayed on WhatsApp">Designed &amp; Developed by <strong>Eng. Ahmed El-Sayed</strong></a><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  );
}

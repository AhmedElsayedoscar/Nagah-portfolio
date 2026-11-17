import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    const text = `Hello Ahmed, I'm ${name}.\nMy email: ${email}\n\n${message}`;
    const url = `${profile.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setNotice('WhatsApp opened with your message draft. Press Send there to deliver it.');
  }

  return (
    <section id="contact" className="contact-section section-shell">
      <div className="container">
        <div className="contact-topline"><span>LET’S MAKE IT HAPPEN</span><span>CONTACT / 04</span></div>
        <div className="contact-heading-grid">
          <div><p className="section-kicker"><span>04</span> / OPEN FOR OPPORTUNITY</p><h2>Have a good<br /><em>idea in mind?</em></h2></div>
          <p className="contact-lede">If you have a project, collaboration, or opportunity in mind, I’d be glad to hear about it.</p>
        </div>

        <div className="contact-layout">
          <motion.div className="contact-direct" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="contact-direct-label"><span className="eyebrow-dot" /> DIRECT LINE</span>
            <h3>Start a<br /><em>conversation.</em></h3>
            <p>Choose the easiest way to reach me.</p>
            <a className="contact-method" href={`tel:${profile.phoneE164}`}><span className="contact-method-icon"><Phone size={18} /></span><span><small>CALL ME</small><strong>{profile.phoneDisplay}</strong></span><ArrowUpRight size={17} /></a>
            <a className="contact-method" href={profile.whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-method-icon whatsapp-icon"><MessageCircle size={18} /></span><span><small>WHATSAPP</small><strong>+20 113 215 7542</strong></span><ArrowUpRight size={17} /></a>
            <div className="social-placeholder"><span className="social-placeholder-icon"><Mail size={15} /></span><p>{profile.socialLinks.length ? 'Follow along' : 'Social profiles can be added here when available.'}</p>{profile.socialLinks.length ? profile.socialLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={13} /></a>) : <span className="social-setup">CONFIGURABLE PLACEHOLDER</span>}</div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
            <div className="form-heading"><span>01—03</span><div><h3>Tell me about it.</h3><p>This opens a WhatsApp draft—your message is sent only when you press Send there.</p></div></div>
            <label htmlFor="contact-name">YOUR NAME</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="What should I call you?" required />
            <label htmlFor="contact-email">EMAIL ADDRESS</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            <label htmlFor="contact-message">YOUR MESSAGE</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="A little context goes a long way…" required />
            <button className="button button-primary form-submit" type="submit">Continue in WhatsApp <Send size={16} /></button>
            <p className="form-notice" aria-live="polite">{notice || 'No message is stored or delivered by this website.'}</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

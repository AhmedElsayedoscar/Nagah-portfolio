import { motion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const portraitUrl = `${import.meta.env.BASE_URL}images/ahmed-nagah-profile.webp`;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid container">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div className="eyebrow" variants={fadeUp}><span className="eyebrow-dot" /> MULTI-DISCIPLINARY CREATIVE <span className="eyebrow-line" /></motion.div>
          <motion.p className="hero-name" variants={fadeUp}>{profile.name} <span dir="rtl" lang="ar">({profile.nameAr})</span></motion.p>
          <motion.h1 variants={fadeUp}>Turning ideas<br />into visual<br /><em>experiences.</em></motion.h1>
          <motion.p className="hero-intro" variants={fadeUp}>{profile.intro}</motion.p>
          <motion.div className="specialty-list" variants={fadeUp} aria-label="Professional specialties">
            <span>VIDEO EDITING</span><i /> <span>GRAPHIC DESIGN</span><i /> <span>FITNESS</span>
          </motion.div>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="button button-primary" href="#video">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Contact me <ArrowUpRight size={16} /></a>
            <a className="button button-whatsapp" href={profile.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp me <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div className="hero-note" variants={fadeUp}><Sparkles size={15} /> Three disciplines <span>·</span> One creative practice</motion.div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-visual-orbit orbit-one" />
          <div className="hero-visual-orbit orbit-two" />
          <div className="hero-image-frame">
            <img className="hero-portrait" src={portraitUrl} alt="Portrait of Ahmed Nagah" fetchPriority="high" />
            <div className="portrait-label"><span /> PROFILE / 01</div>
            <div className="portrait-bottomline"><span>AHMED NAGAH</span><span dir="rtl" lang="ar">أحمد نجاح</span></div>
          </div>
          <div className="floating-index"><span>CREATIVE PRACTICE</span><strong>01 <i>/</i> 03</strong></div>
          <div className="floating-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
          <div className="hero-side-note">VIDEO <b>·</b> DESIGN <b>·</b> FITNESS</div>
        </motion.div>
      </div>
      <div className="hero-bottom container"><span>THREE AREAS OF PRACTICE</span><span className="hero-bottom-line" /><span>SCROLL TO DISCOVER <ArrowDown size={13} /></span></div>
    </section>
  );
}

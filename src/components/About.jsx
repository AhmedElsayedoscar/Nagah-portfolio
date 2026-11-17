import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { Activity, ArrowUpRight, Layers3, Play } from 'lucide-react';
import { profile } from '../data/profile';

const iconMap = { play: Play, shapes: Layers3, activity: Activity };

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration: 1.15,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="container">
        <div className="section-heading about-heading">
          <div>
            <p className="section-kicker"><span>00</span> / A LITTLE ABOUT ME</p>
            <h2>Three practices.<br /><em>One point of view.</em></h2>
          </div>
          <p className="section-lede">I bring a considered eye to every frame, every composition, and every training space—balancing creative instinct with hands-on experience.</p>
        </div>

        <div className="about-body">
          <div className="about-story">
            <span className="story-mark">“</span>
            <p>My work sits where <strong>visual storytelling</strong>, <strong>clear design</strong>, and <strong>practical fitness</strong> meet. Each discipline has shaped how I think, make, and connect with people.</p>
            <a className="text-link" href="#contact">Let’s make something meaningful <ArrowUpRight size={16} /></a>
          </div>

          <div className="experience-grid">
            {profile.experience.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.article className="experience-card" key={item.label} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.11, duration: 0.55 }}>
                  <div className="experience-card-top"><span className="experience-icon"><Icon size={18} /></span><span className="experience-index">0{index + 1}</span></div>
                  <div className="experience-count"><CountUp value={item.value} /><span>+</span><small>years</small></div>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        <div className="about-footnote"><span className="tiny-ring" /> EXPERIENCE IS PRACTICAL, CREATIVE, AND ALWAYS IN MOTION <span className="footnote-line" /></div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, Dumbbell } from 'lucide-react';
import { fitnessProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

const focusAreas = ['Gym Experience', 'Fitness Activities', 'Training Content', 'Fitness Knowledge', 'Personal Fitness Projects'];

export default function Fitness({ onProjectOpen }) {
  return (
    <section id="fitness" className="fitness-section section-shell field-section">
      <div className="container">
        <div className="field-topline"><span>03 / FITNESS & GYM</span><span className="field-topline-right"><Activity size={15} /> 3 YEARS PRACTICAL EXPERIENCE</span></div>
        <div className="fitness-intro-grid">
          <div className="fitness-copy">
            <p className="section-kicker"><span>03</span> / STRENGTH IN PRACTICE</p>
            <h2>Built through<br /><em>consistency.</em></h2>
            <p className="section-lede">Three years of practical gym and fitness experience—grounded in movement, routine, and a respect for the work behind progress.</p>
            <div className="fitness-exp"><Dumbbell size={19} /><span><strong>3 years</strong><small>practical gym & fitness experience</small></span><span className="fitness-exp-index">03</span></div>
          </div>
          <motion.div className="fitness-photo-panel" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <img src={`${import.meta.env.BASE_URL}images/ahmed-gym.webp`} alt="Ahmed taking a mirror photo at the gym" loading="lazy" decoding="async" />
            <span className="fitness-photo-shade" aria-hidden="true" />
            <span className="fitness-photo-label"><i /> AHMED / GYM EXPERIENCE</span>
            <span className="fitness-photo-caption">IN THE GYM<br /><em>IN PRACTICE.</em></span>
            <span className="fitness-photo-index">PERSONAL PHOTO · 01</span>
          </motion.div>
        </div>

        <div className="fitness-focus-row"><span className="fitness-focus-title">AREAS TO EXPLORE</span><div className="fitness-focus-list">{focusAreas.map((area, index) => <span key={area}><i>0{index + 1}</i>{area}</span>)}</div></div>

        <div className="fitness-media-heading"><div><p className="section-kicker"><span>03A</span> / FITNESS MEDIA</p><h3>Work in progress.<br /><em>Experience in practice.</em></h3></div><p>The featured photo is personal; the gallery below still uses sample visuals.</p></div>
        <div className="project-grid fitness-grid">
          {fitnessProjects.map((project, index) => <ProjectCard key={project.id} project={project} type="image" index={index} onOpen={onProjectOpen} className={index === 0 ? 'fitness-card-tall' : ''} />)}
        </div>
        <p className="fitness-disclaimer"><span className="placeholder-note-dot" />No qualifications or certifications are claimed here. The gallery images are illustrative placeholders only.</p>
      </div>
    </section>
  );
}

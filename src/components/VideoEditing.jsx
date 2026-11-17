import { motion } from 'framer-motion';
import { ArrowUpRight, Clapperboard, Play } from 'lucide-react';
import { videoCategories, videoProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function VideoEditing({ onProjectOpen }) {
  return (
    <section id="video" className="video-section section-shell field-section">
      <div className="container">
        <div className="field-topline"><span>01 / VIDEO EDITING</span><span className="field-topline-right"><Clapperboard size={15} /> 5 YEARS EXPERIENCE</span></div>
        <div className="section-heading field-heading">
          <div><p className="section-kicker"><span>01</span> / FRAME BY FRAME</p><h2>Make it <em>move.</em></h2></div>
          <p className="section-lede">From the first cut to the final frame, I shape footage into stories with rhythm, feeling, and intent.</p>
        </div>

        <div className="video-categories" aria-label="Video editing categories">
          {videoCategories.map((category, index) => <span key={category}><i>0{index + 1}</i>{category}</span>)}
        </div>

        <div className="project-grid video-grid">
          {videoProjects.map((project, index) => <ProjectCard key={project.id} project={project} type="video" index={index} onOpen={onProjectOpen} />)}
        </div>
        <motion.div className="placeholder-note" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="placeholder-note-dot" /><p>These sample visuals are placeholders. Add Ahmed’s actual edits and video URLs in <code>src/data/projects.js</code>.</p><a href="#contact" aria-label="Contact Ahmed"><ArrowUpRight size={16} /></a>
        </motion.div>
      </div>
    </section>
  );
}

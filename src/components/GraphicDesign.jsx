import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { designCategories, designProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function GraphicDesign({ onProjectOpen }) {
  const [activeCategory, setActiveCategory] = useState('All work');
  const visibleProjects = useMemo(
    () => activeCategory === 'All work' ? designProjects : designProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="design" className="design-section section-shell field-section">
      <div className="container">
        <div className="field-topline"><span>02 / GRAPHIC DESIGN</span><span className="field-topline-right"><Layers3 size={15} /> 3 YEARS EXPERIENCE</span></div>
        <div className="section-heading field-heading design-heading">
          <div><p className="section-kicker"><span>02</span> / FORM & FEELING</p><h2>Design with<br /><em>something to say.</em></h2></div>
          <div className="design-intro"><p className="section-lede">Visual systems, expressive compositions, and clear communication—built to make an idea feel unmistakably itself.</p><span className="design-aside-mark">A—N <i>VISUAL PRACTICE</i></span></div>
        </div>

        <div className="filter-row" role="group" aria-label="Filter graphic design projects">
          <span className="filter-label">FILTER BY</span>
          <div className="filter-scroll">
            {designCategories.map((category) => (
              <button key={category} className={activeCategory === category ? 'filter-chip active' : 'filter-chip'} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>
            ))}
          </div>
        </div>

        <motion.div className="project-grid design-grid" layout>
          {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} type="image" index={index} onOpen={onProjectOpen} />)}
        </motion.div>
        {visibleProjects.length === 0 && <div className="empty-gallery">No items in this category yet.</div>}
        <div className="placeholder-note"><span className="placeholder-note-dot" /><p>Gallery tiles are sample placeholders, not claimed client work. Replace the entries in <code>src/data/projects.js</code> with real designs.</p><a href="#contact" aria-label="Contact Ahmed"><ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}

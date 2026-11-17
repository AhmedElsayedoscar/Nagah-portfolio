import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import { designCategories, designProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function GraphicDesign({ onProjectOpen }) {
  return (
    <section id="design" className="design-section section-shell field-section">
      <div className="container">
        <div className="field-topline"><span>02 / GRAPHIC DESIGN</span><span className="field-topline-right"><Layers3 size={15} /> 3 YEARS EXPERIENCE</span></div>
        <div className="section-heading field-heading design-heading">
          <div><p className="section-kicker"><span>02</span> / FORM & FEELING</p><h2>Design with<br /><em>something to say.</em></h2></div>
          <div className="design-intro"><p className="section-lede">Visual systems, expressive compositions, and clear communication—built to make an idea feel unmistakably itself.</p><span className="design-aside-mark">A—N <i>VISUAL PRACTICE</i></span></div>
        </div>

        <nav className="design-category-index" aria-label="Graphic design categories">
          <div className="design-category-index-heading"><span>EXPLORE BY CATEGORY</span><span>{String(designCategories.length).padStart(2, '0')} AREAS</span></div>
          <div className="design-category-grid">
            {designCategories.map((category, index) => {
              const firstProject = designProjects.find((project) => project.category === category);
              return (
                <a key={category} className="design-category-card" href={`#${firstProject?.id ?? 'design-projects'}`} aria-label={`Browse ${category} projects`}>
                  <span className="design-category-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="design-category-name">{category}</span>
                  <ArrowUpRight className="design-category-arrow" size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </nav>

        <motion.div id="design-projects" className="project-grid design-grid" layout>
          {designProjects.map((project, index) => <ProjectCard key={project.id} project={project} type="image" index={index} onOpen={onProjectOpen} id={project.id} />)}
        </motion.div>
        <div className="placeholder-note"><span className="placeholder-note-dot" /><p>Gallery tiles are sample placeholders, not claimed client work. Replace the entries in <code>src/data/projects.js</code> with real designs.</p><a href="#contact" aria-label="Contact Ahmed"><ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}

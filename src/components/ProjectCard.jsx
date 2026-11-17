import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

export default function ProjectCard({ project, type = 'image', index = 0, onOpen, className = '', id }) {
  const isVideo = type === 'video';
  return (
    <motion.button
      type="button"
      id={id}
      className={`project-card ${isVideo ? 'project-card-video' : ''} ${className}`}
      onClick={() => onOpen?.({ project, type })}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.56, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${isVideo ? 'Preview video' : 'View project'}: ${project.title}`}
    >
      <span className="project-image-wrap">
        <img src={project.image} alt={`${project.title}${project.placeholder === false ? '' : ' — sample placeholder visual'}`} loading="lazy" />
        {project.placeholder !== false && <span className="placeholder-tag"><span /> SAMPLE PLACEHOLDER</span>}
        <span className="project-image-tint" />
        <span className="project-action">{isVideo ? <Play size={17} fill="currentColor" /> : <ArrowUpRight size={17} />}</span>
        <span className="project-image-index">0{index + 1}</span>
      </span>
      <span className="project-card-copy">
        <span className="project-card-meta">{project.category}<ArrowUpRight size={13} /></span>
        <span className="project-card-title">{project.title}</span>
        <span className="project-card-description">{project.description}</span>
      </span>
    </motion.button>
  );
}

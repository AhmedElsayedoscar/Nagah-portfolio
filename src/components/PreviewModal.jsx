import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

export default function PreviewModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="preview-modal" role="dialog" aria-modal="true" aria-labelledby="preview-title" initial={{ opacity: 0, scale: 0.97, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 12 }} transition={{ duration: 0.24 }}>
            <div className="preview-modal-top"><span><i />{item.type === 'video' ? 'VIDEO PREVIEW' : 'IMAGE PREVIEW'} <b>·</b> SAMPLE PLACEHOLDER</span><button type="button" onClick={onClose} aria-label="Close preview"><X size={20} /></button></div>
            <div className="preview-media">
              {item.type === 'video' && item.project.videoUrl ? (
                <video src={item.project.videoUrl} poster={item.project.image} controls autoPlay playsInline aria-label={item.project.title} />
              ) : (
                <img src={item.project.image} alt={`${item.project.title} sample placeholder`} />
              )}
              {item.type === 'video' && !item.project.videoUrl && <div className="preview-empty-note"><span className="preview-play">▶</span><strong>No video added yet</strong><span>Add a real video URL in <code>src/data/projects.js</code> to activate playback.</span></div>}
            </div>
            <div className="preview-modal-info"><div><span className="modal-category">{item.project.category}</span><h2 id="preview-title">{item.project.title}</h2><p>{item.project.detail || item.project.description}</p></div>{item.project.externalLink && <a className="text-link" href={item.project.externalLink} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={15} /></a>}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

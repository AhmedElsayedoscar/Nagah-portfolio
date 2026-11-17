import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import Fitness from './components/Fitness';
import Footer from './components/Footer';
import GraphicDesign from './components/GraphicDesign';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PreviewModal from './components/PreviewModal';
import VideoEditing from './components/VideoEditing';
import WhatsAppButton from './components/WhatsAppButton';
import './styles.css';

export default function App() {
  const [preview, setPreview] = useState(null);
  const closePreview = useCallback(() => setPreview(null), []);

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    if (!canHover) return undefined;
    const move = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const openPreview = useCallback((item) => setPreview(item), []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <div className="cursor-glow" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <div className="work-stack">
            <VideoEditing onProjectOpen={openPreview} />
            <GraphicDesign onProjectOpen={openPreview} />
            <Fitness />
          </div>
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <PreviewModal item={preview} onClose={closePreview} />
      </div>
    </MotionConfig>
  );
}

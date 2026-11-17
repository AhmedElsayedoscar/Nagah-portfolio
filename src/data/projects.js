const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const videoProjects = [
  {
    id: 'video-01',
    title: 'Short-form edit',
    category: 'Reels & Short-Form Content',
    description: "Placeholder for Ahmed's actual reel or short-form video edit.",
    image: asset('video-cinema.webp'),
    placeholder: true,
    videoUrl: '',
    detail: 'A cinematic sample visual reserved for a real short-form edit. Replace this card with an actual project and add a videoUrl in src/data/projects.js to enable playback.',
  },
  {
    id: 'video-02',
    title: 'Promotional cut',
    category: 'Promotional Videos',
    description: 'Placeholder for an actual promotional or commercial video.',
    image: asset('video-motion.webp'),
    placeholder: true,
    videoUrl: '',
    detail: 'A motion-inspired sample visual reserved for Ahmed’s own promotional or commercial edit. Replace the image and description when real material is ready.',
  },
  {
    id: 'video-03',
    title: 'Motion study',
    category: 'Motion Graphics',
    description: 'Placeholder for a creative edit or motion-graphics piece.',
    image: asset('design-abstract.webp'),
    placeholder: true,
    videoUrl: '',
    detail: 'A sample placeholder for creative editing and motion graphics. Add a real thumbnail and video URL to make this card playable.',
  },
];

export const videoCategories = [
  'Social Media Videos',
  'Reels & Short-Form Content',
  'Promotional Videos',
  'Commercial Videos',
  'Creative Editing',
  'Motion Graphics',
];

export const designProjects = [
  { id: 'design-01', title: 'Social media design', category: 'Social Media Designs', image: asset('design-abstract.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual social design.' },
  { id: 'design-02', title: 'Identity direction', category: 'Branding & Visual Identity', image: asset('design-identity.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual identity project.' },
  { id: 'design-03', title: 'Advertising creative', category: 'Advertising Designs', image: asset('design-advertising.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual advertising design.' },
  { id: 'design-04', title: 'Poster & flyer', category: 'Posters & Flyers', image: asset('design-poster.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual poster or flyer.' },
  { id: 'design-05', title: 'Marketing creative', category: 'Marketing Creatives', image: asset('design-marketing.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual marketing creative.' },
  { id: 'design-06', title: 'Creative artwork', category: 'Creative Artwork', image: asset('video-motion.webp'), placeholder: true, description: 'Sample visual placeholder — replace with an actual artwork.' },
];

export const designCategories = [
  'Social Media Designs',
  'Branding & Visual Identity',
  'Advertising Designs',
  'Posters & Flyers',
  'Marketing Creatives',
  'Creative Artwork',
];

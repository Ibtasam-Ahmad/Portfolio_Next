export const DESIGN_STYLES = [
  // Clean & lightweight
  { id: 'minimalism', label: 'Minimalism' },
  { id: 'flat', label: 'Flat Design' },
  { id: 'swiss', label: 'Swiss / International' },
  // Grid-based
  { id: 'bento', label: 'Bento Grid' },
  { id: 'brutalism', label: 'Brutalism' },
  { id: 'bauhaus', label: 'Bauhaus' },
  // Texture & depth (still 2D)
  { id: 'neumorphism', label: 'Neumorphism' },
  { id: 'glassmorphism', label: 'Glassmorphism' },
  { id: 'skeuomorphism', label: 'Skeuomorphism' },
  // Colour & personality
  { id: 'maximalism', label: 'Maximalism' },
  { id: 'memphis', label: 'Memphis' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'vaporwave', label: 'Vaporwave' },
  // Organic & fluid
  { id: 'organic', label: 'Organic' },
  { id: 'claymorphism', label: 'Claymorphism' },
  // Cultural
  { id: 'anime', label: 'Anime / Manga' },
  { id: 'kawaii', label: 'Kawaii' },
] as const;

export type DesignStyleId = (typeof DESIGN_STYLES)[number]['id'];

export const DEFAULT_DESIGN_STYLE: DesignStyleId = 'minimalism';

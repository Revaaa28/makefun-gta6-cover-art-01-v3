// NEON COAST — Vice Cover Studio: canned scenes for screenshot mode.
// Open the app with ?shot=<name> and the editor applies the scene, renders at
// the scene's full export size and hides its own chrome.
export const SHOT_SCENES = {
  cover: {
    layout: 'mosaic9', grade: 'posterInk',
    title: 'NEON COAST', subtitle: 'Sunset Heist', stars: 5,
    size: { w: 1920, h: 1080 },
  },
  portrait: {
    layout: 'mosaic9', grade: 'neonNights',
    title: 'Boulevard Queen', subtitle: 'Neon Nights', stars: 5,
    size: { w: 1080, h: 1350 },
  },
  square: {
    layout: 'tiltedShots', grade: 'goldenHour',
    title: 'Pier Pressure', subtitle: 'Golden Hour', stars: 5,
    size: { w: 1080, h: 1080 },
  },
};

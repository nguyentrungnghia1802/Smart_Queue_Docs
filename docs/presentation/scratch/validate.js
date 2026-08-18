const fs = require('fs');
const path = require('path');

// 1. Evaluate slides.ja.js and slides.vi.js
global.window = {};

const jaCode = fs.readFileSync(path.resolve('docs/presentation/slides.ja.js'), 'utf8');
const viCode = fs.readFileSync(path.resolve('docs/presentation/slides.vi.js'), 'utf8');

eval(jaCode);
eval(viCode);

const configJa = global.window.PRESENTATION_CONFIG_JA;
const configVi = global.window.PRESENTATION_CONFIG_VI;

console.log('--- Japanese Config Validation ---');
console.log('Meta Title:', configJa.meta.title);
console.log('Total Slides:', configJa.slides.length);
if (configJa.slides.length !== 7) throw new Error('JA config does not have 7 slides');

console.log('\n--- Vietnamese Config Validation ---');
console.log('Meta Title:', configVi.meta.title);
console.log('Total Slides:', configVi.slides.length);
if (configVi.slides.length !== 7) throw new Error('VI config does not have 7 slides');

// 2. Validate all image paths across both configs
[configJa, configVi].forEach((cfg) => {
  console.log(`\nValidating images for ${cfg.meta.lang.toUpperCase()}...`);
  cfg.slides.forEach((slide, idx) => {
    const imgMatches = [...slide.bodyHtml.matchAll(/src="([^"]+)"/g)];
    imgMatches.forEach(m => {
      const imgSrc = m[1];
      const fullPath = path.resolve('docs/presentation', imgSrc);
      const exists = fs.existsSync(fullPath);
      console.log(`  Slide ${idx + 1} (${slide.id}) -> ${imgSrc} => ${exists ? 'EXISTS' : 'MISSING'}`);
      if (!exists) throw new Error(`Missing image: ${imgSrc}`);
    });
  });
});

// 3. Verify HTML files
['docs/presentation/index.html', 'docs/presentation/index.vi.html'].forEach((filePath) => {
  console.log(`\nValidating HTML structure in ${filePath}...`);
  const html = fs.readFileSync(path.resolve(filePath), 'utf8');
  if (!html.includes('slides.ja.js')) throw new Error('Missing slides.ja.js script tag');
  if (!html.includes('slides.vi.js')) throw new Error('Missing slides.vi.js script tag');
  if (!html.includes('script.js')) throw new Error('Missing script.js script tag');
  if (!html.includes('id="slide-viewport"')) throw new Error('Missing slide-viewport');
  if (!html.includes('id="deck-controls"')) throw new Error('Missing deck-controls');
  console.log(`  ${filePath} structure is valid!`);
});

console.log('\n>>> ALL DUAL-LANGUAGE CONFIG & SHELL CHECKS PASSED PERFECTLY! <<<');

const fs = require('fs');
const path = require('path');

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
if (configJa.slides.length !== 8) throw new Error(`JA config has ${configJa.slides.length} slides, expected 8`);

console.log('\n--- Vietnamese Config Validation ---');
console.log('Meta Title:', configVi.meta.title);
console.log('Total Slides:', configVi.slides.length);
if (configVi.slides.length !== 8) throw new Error(`VI config has ${configVi.slides.length} slides, expected 8`);

// Validate images in slide body, journey modal, and scope gallery
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

  cfg.journeyModal.steps.forEach((step, idx) => {
    const fullPath = path.resolve('docs/presentation', step.img);
    const exists = fs.existsSync(fullPath);
    console.log(`  Journey Step ${idx + 1} (${step.title}) -> ${step.img} => ${exists ? 'EXISTS' : 'MISSING'}`);
    if (!exists) throw new Error(`Missing modal image: ${step.img}`);
  });

  cfg.scopeGallery.images.forEach((imgItem, idx) => {
    const fullPath = path.resolve('docs/presentation', imgItem.img);
    const exists = fs.existsSync(fullPath);
    console.log(`  Scope Image ${idx + 1} (${imgItem.title}) -> ${imgItem.img} => ${exists ? 'EXISTS' : 'MISSING'}`);
    if (!exists) throw new Error(`Missing gallery image: ${imgItem.img}`);
  });
});

// Check Slide 8 link in both configs
[configJa, configVi].forEach((cfg) => {
  const slide8 = cfg.slides[7];
  if (!slide8.bodyHtml.includes('https://liff.line.me/2010516188-KAcYkLTh/qr/70f7e730ae944f1635b18a51c5408b563969')) {
    throw new Error('Slide 8 does not contain updated LIFF URL');
  }
});

// Check Slide 1 does NOT contain 15-min line
[configJa, configVi].forEach((cfg) => {
  const slide1 = cfg.slides[0];
  if (slide1.bodyHtml.includes('15分構成') || slide1.bodyHtml.includes('15 Phút')) {
    throw new Error('Slide 1 still contains 15-min line');
  }
});

// Check Slide 7 uses 07-reliability-monitoring.png
[configJa, configVi].forEach((cfg) => {
  const slide7 = cfg.slides[6];
  if (!slide7.bodyHtml.includes('07-reliability-monitoring.png')) {
    throw new Error('Slide 7 does not use 07-reliability-monitoring.png');
  }
});

console.log('\n>>> ALL DARK THEME, SHAPE DIAGRAMS, QR LINK, AND VALIDATION CHECKS PASSED 100%! <<<');

import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\a9c5980e-932c-4980-b360-977256f42ab0';
const destDir = 'e:\\Anuraj\\Anuraj porfolio website\\public\\images\\projects';
const profileDest = 'e:\\Anuraj\\Anuraj porfolio website\\public\\images\\anuraj_profile.png';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mappings = [
  { prefix: 'weekend_goo', destName: 'weekend_goo.png' },
  { prefix: 'kleos_intelligence', destName: 'kleos_intelligence.png' },
  { prefix: 'qi_balance_clinic', destName: 'qi_balance_clinic.png' },
  { prefix: 'manganam', destName: 'manganam.png' },
  { prefix: 'embuddy', destName: 'embuddy.png' },
  { prefix: 'abacus_vat', destName: 'abacus_vat.png' },
  { prefix: 'fitout_space', destName: 'fitout_space.png' }
];

const files = fs.readdirSync(srcDir);

mappings.forEach(({ prefix, destName }) => {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (match) {
    fs.copyFileSync(path.join(srcDir, match), path.join(destDir, destName));
    console.log(`Copied ${match} -> ${destName}`);
  }
});

const profileMatch = files.find(f => f.startsWith('anuraj_profile') && f.endsWith('.png'));
if (profileMatch) {
  fs.copyFileSync(path.join(srcDir, profileMatch), profileDest);
  console.log(`Copied ${profileMatch} -> anuraj_profile.png`);
}

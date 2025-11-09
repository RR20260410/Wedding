import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Ensure dist directory exists
const distDir = join(process.cwd(), 'dist');
if (!existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Create .nojekyll file in dist directory
const nojekyllPath = join(distDir, '.nojekyll');
writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll file in dist directory');


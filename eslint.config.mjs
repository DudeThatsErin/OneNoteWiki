// Flat config (required by ESLint 9+/10). There was no lint config at all
// before -- `next lint` used to auto-generate one on first interactive run,
// but `next lint` itself was removed in Next.js 16, so `npm run lint` now
// calls `eslint` directly (see package.json) and needs this file to exist.
import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';

const config = [
  ...nextConfig,
  prettierConfig,
  {
    ignores: ['.next/**', 'node_modules/**', 'coverage/**'],
  },
];

export default config;

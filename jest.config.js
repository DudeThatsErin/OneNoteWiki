const nextJest = require('next/jest')

// next/jest wires up SWC-based transforms (matching what `next build` itself
// uses), the @/* path alias from tsconfig, and CSS/asset mocking -- none of
// which existed before (there was no jest.config.js or babel config at all,
// so `npm test` failed immediately on the first JSX file it hit).
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)

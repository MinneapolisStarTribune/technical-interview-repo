const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript + JSX support
  testEnvironment: 'jest-environment-jsdom', // Simulate browser environment
  moduleNameMapper: {
    // Handle CSS imports (optional, adjust if you have other asset types)
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript and TSX files with ts-jest
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore these paths
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: for extra setup like jest-dom
};

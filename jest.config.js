const config = {
  preset: 'ts-jest',
  rootDir: './src',
  testMatch: ['<rootDir>/test/**/*.ts'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
  },
  testEnvironment: 'node',
  resetMocks: true,
  clearMocks: true,
}

export default config

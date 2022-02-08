const config = {
  collectCoverageFrom: ['./src/**/*.(ts|tsx)', '!./src/index.tsx', '!**/__mocks__/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  setupFilesAfterEnv: ['./__tests__/__mocks__/dateMock.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.(ts|tsx)', '!**/__mocks__/**'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpeg|jpg|png)$': '<rootDir>/__tests__/__mocks__/imagesMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@images/(.*)$': '<rootDir>/src/img/$1',
    '^@routing/(.*)$': '<rootDir>/src/routing/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
  },
};

module.exports = config;

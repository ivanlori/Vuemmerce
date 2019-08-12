module.exports = {
  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js" // No need to cover bootstrap file
  ],

  coverageReporters: ["text", "text-summary", "lcov"],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(element-ui|vue-awesome))',
    '/node_modules/'
  ],

  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  setupFiles: ["<rootDir>/tests/unit/setup"],
  snapshotSerializers: ['jest-serializer-vue'],

  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],

  testURL: 'http://localhost/',

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};

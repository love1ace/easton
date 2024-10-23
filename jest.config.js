export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["<rootDir>/tests/**/*.test.js"]
};
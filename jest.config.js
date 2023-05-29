module.exports = {
    setupFilesAfterEnv: [
        "./tests/setup.js",
    ],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
      ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
    },
    moduleNameMapper: {
      "app/(.*)":"<rootDir>/app/$1",
      "tests/(.*)": "<rootDir>/tests/$1",
      "\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
    moduleDirectories: ['node_modules', 'app']
}
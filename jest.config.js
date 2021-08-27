module.exports = {
    "verbose": true,
    "moduleFileExtensions": [
        "js",
        "vue"
    ],
    "transform": {
        "^.+\\.js$": "babel-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "<rootDir>/component/**/*.vue"
    ]
}

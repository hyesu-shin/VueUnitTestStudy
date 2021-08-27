module.exports = {
    "verbose": true,
    // 테스트 할 모듈의 확장자 지정
    "moduleFileExtensions": [
        "js",
        "vue"
    ],
    // 정규식과 일치하는 파일의 변환 모듈 지정
    "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "vue-jest"
    },
    // 경로 별칭 매핑
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    // 테스트하지 않을 모듈 경로 설정
    "modulePathIgnorePatterns": [
        "<rootDir>/node_modules",
        "<rootDir>/build",
        "<rootDir>/dist"
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
        "<rootDir>/src/components/**/*.vue"
    ]
}

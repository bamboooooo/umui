module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "parser": "babel-eslint",   //使用babel-eslint来作为eslint的解析器
    "extends": "standard",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "globals": {
        "React": false,
        "ReactDOM": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
//      "linebreak-style": [
//          "error",
//          "unix"
//      ],
        "quotes": [
            "error",
            "single"
        ],
        'semi': 0
    }
};
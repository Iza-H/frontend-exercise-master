module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": 1,
        "describe": 1,
        "expect": 1,
        "beforeEach": 1,
        "it" : 1,
        "spyOn": 1,
        "inject": 1,
        "httpBackend" :1,
        "module" : 1
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0
    }
};
module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": [
            "error",
            "always"
        ]
    }
};
module.exports = {
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        '../../.eslintrc.js',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};

module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
    ],
    rules: {
        // Disable the 'jsx-a11y/anchor-is-valid' rule for the entire project
        'jsx-a11y/anchor-is-valid': 'off',
    },
};

const tryExtensions = ['.js', '.json', '.ts', '.node'];

module.exports = {
    env: {
        browser: false,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended',
        'plugin:node/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'mocha'],
    rules: {
        'node/exports-style': ['off'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
        'node/no-unsupported-features/es-syntax': ['off'],
        'node/no-missing-import': [
            'error',
            {
                tryExtensions: tryExtensions,
                resolvePaths: [__dirname],
                allowModules: [],
            },
        ],
        'node/no-unpublished-import': [
            'error',
            {
                allowModules: ['cookie-parser'],
                tryExtensions: tryExtensions,
            },
        ],
        'node/file-extension-in-import': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        'node/no-extraneous-import': [
            'error',
            {
                allowModules: [],
                resolvePaths: [__dirname],
                tryExtensions: tryExtensions,
            },
        ],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/quotes': 0,
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',

        // The following rules can be used in some cases. See the README for more
        // information. (These are marked with `0` instead of `"off"` so that a
        // script can distinguish them.)
        'arrow-body-style': 0,
        'curly': 0,
        'lines-around-comment': 0,
        'max-len': 0,
        'no-confusing-arrow': 0,
        'no-mixed-operators': 0,
        'no-tabs': 0,
        'no-unexpected-multiline': 0,
        'prefer-arrow-callback': 0,
        'quotes': 0,
        // The rest are rules that you never need to enable when using Prettier.
        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-element-newline': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': 'off',
        'block-spacing': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'comma-style': 'off',
        'computed-property-spacing': 'off',
        'dot-location': 'off',
        'eol-last': 'off',
        'func-call-spacing': 'off',
        'function-call-argument-newline': 'off',
        'function-paren-newline': 'off',
        'generator-star': 'off',
        'generator-star-spacing': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': 'off',
        'jsx-quotes': 'off',
        'key-spacing': 'off',
        'keyword-spacing': 'off',
        'linebreak-style': 'off',
        'multiline-ternary': 'off',
        'newline-per-chained-call': 'off',
        'new-parens': 'off',
        'no-arrow-condition': 'off',
        'no-comma-dangle': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'off',
        'no-floating-decimal': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': 'off',
        'no-reserved-keys': 'off',
        'no-space-before-semi': 'off',
        'no-trailing-spaces': 'off',
        'no-whitespace-before-property': 'off',
        'no-wrap-func': 'off',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'one-var-declaration-per-line': 'off',
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'quote-props': 'off',
        'rest-spread-spacing': 'off',
        'semi': 'off',
        'semi-spacing': 'off',
        'semi-style': 'off',
        'space-after-function-name': 'off',
        'space-after-keywords': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-before-function-parentheses': 'off',
        'space-before-keywords': 'off',
        'space-in-brackets': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'off',
        'space-return-throw-case': 'off',
        'space-unary-ops': 'off',
        'space-unary-word-ops': 'off',
        'switch-colon-spacing': 'off',
        'template-curly-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'wrap-iife': 'off',
        'wrap-regex': 'off',
        'yield-star-spacing': 'off',

        "security/detect-object-injection": ["off"],
    },
    ignorePatterns: ['node_modules', 'build'],
};

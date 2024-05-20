module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "src/__generated__/**/*"],
    parser: "@typescript-eslint/parser",
    plugins: [
        "prettier",
        "unused-imports",
        "import"
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "@typescript-eslint/prefer-ts-expect-error": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-array-constructor": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "import/order": [
            1,
            {
                groups: ["external", "internal", ["parent", "sibling", "index"]],
                distinctGroup: false,
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "src/__generated__/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "src/**/*",
                        group: "parent",
                        position: "before",
                    },
                    {
                        pattern: "./**",
                        group: "sibling",
                        position: "after",
                    },
                    {
                        pattern: "**",
                        group: "external",
                    },
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
};

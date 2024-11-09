import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["src/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    { languageOptions: { globals: globals.browser } },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/jsx-indent": [2, 4],
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/jsx-props-no-spreading": "warn",
            "sort-keys": "off",
            indent: [2, 4],
            "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
            "import/no-unresolved": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error",
        },
    },
];

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "semi": 0,  // 语句可以不需要分号结尾
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'eol-last': 0, // 文末需要回车配置
    'no-unused-vars': 0, // 关闭定义变量未使用提示/报错
    "@typescript-eslint/no-unused-vars": 0,
    '@typescript-eslint/no-empty-function': 'off', // 允许空函数
    'no-empty-function': 'off',

  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};

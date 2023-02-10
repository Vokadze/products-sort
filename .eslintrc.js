module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"], // Точка с запятой в конце строки
        indent: [0, 4], // Отступ количество пробелов
        // Ошибка при наличии пробела при обозночении функции, уберём её
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],

        // Использование двойных кавычек
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ]
    }
};

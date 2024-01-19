/** @type {import('next-i18next').UserConfig} */
const { default: NextI18Next } = require("next-i18next");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr"],
    localePath: path.resolve("./public/locales"),
    localeStructure: "{{lng}}/{{ns}}",
  },
};

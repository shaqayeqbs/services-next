const { i18n } = require("./next-i18next.config.js");

module.exports = {
  i18n,
  images: {
    domains: ["api.servyca.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

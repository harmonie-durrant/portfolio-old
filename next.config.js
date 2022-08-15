/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
    reactStrictMode: true,
    i18n,
});
/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

const { i18n } = require("./next-i18next.config");

module.exports = withPWA({
    reactStrictMode: true,
    i18n,
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nextui.org", "www.hometheaterforum.com", "m.media-amazon.com"], // Add 'nextui.org' to the list of allowed image domains
  },
};

module.exports = nextConfig;

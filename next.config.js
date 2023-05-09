/** @type {import('next').NextConfig} */
const nextConfig = {
    generateStaticParams: function () {
        return {
          '/': { page: '/' },
          // add more pages here
        };
      },
      output: 'export',
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    generateStaticParams: function () {
        return {
          // TODO: Double check the format of these pages
          '/': { page: '/' },
          '/login': { page: '/login'},
          '/signup': { page: '/signup'},
          '/room/id': { page: '/room/id'},
          // add more pages here
        };
      },
      output: 'export',
}

module.exports = nextConfig

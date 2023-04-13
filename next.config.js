/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com"],
  },
  async redirects() {
    return [
      {
        source: "/courses/react-ts-sc",
        destination:
          "https://www.udemy.com/course/react-typescript-e-styled-components-da-zero-a-web-app/?referralCode=36449F31118CB6A9A61C",
        permanent: true,
      },
    ];
  },
};

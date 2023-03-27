/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env : {
    NEXTAUTH_URL : "http://127.0.0.1:3000",
    NEXTAUTH_API: "http://127.0.0.1:1337",
    NEXTAUTH_SECRET : "5ce5dcc2b8e8a2bd33bfcb398f2f290906706d5dc481f83dc5ad5e09998ac73d",
    GOOGLE_CLIENT_ID : "851508202208-eu684t55dskvrjiatuh67ranbdnvd9va.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET : "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"
  }
}

module.exports = nextConfig

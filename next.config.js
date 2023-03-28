/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    NEXTAUTH_URL: (() => {
      if (isDev) return 'http://127.0.0.1:3000'
      if (isProd) {
        return 'http://studio-social-next.vercel.app'
      }
      // if (isStaging) return 'http://localhost:11639'
      // return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    NEXTAUTH_API: (() => {
      if (isDev) return 'http://127.0.0.1:1337'
      if (isProd) return 'https://dashboard.studiosymmetries.com'
      // if (isStaging) return 'http://localhost:11639'
      // return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    // NEXTAUTH_URL: "http://studio-social-next.vercel.app",
    // NEXTAUTH_API: "https://dashboard.studiosymmetries.com",
    NEXTAUTH_SECRET: "5ce5dcc2b8e8a2bd33bfcb398f2f290906706d5dc481f83dc5ad5e09998ac73d",
    GOOGLE_CLIENT_ID: "851508202208-eu684t55dskvrjiatuh67ranbdnvd9va.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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"
  }

  // next.config.js object
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    env,
  }
}
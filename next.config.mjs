// next.config.mjs
export default {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dazzle-divas-cleaning/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/dazzle-divas-cleaning' : '',
  }
  

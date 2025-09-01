// next.config.mjs
const isGhPages = process.env.NEXT_PUBLIC_GH_PAGES === 'true';

export default {
  assetPrefix: isGhPages ? '/dazzle-divas-cleaning/' : '',
  basePath: isGhPages ? '/dazzle-divas-cleaning' : '',
};
  

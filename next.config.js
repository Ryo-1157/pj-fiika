const SUB_DIRECTORY = "/nextapp";

const isProd = process.env.NODE_ENV == "production";

module.exports = {
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};

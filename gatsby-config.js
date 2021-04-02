require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `abhi-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.IS_PREVIEW === `true`,
      },
    },
  ],
};

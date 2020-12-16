module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"ShreeyashPawar","short_name":"ShreeyashPawar","start_url":"/","display":"minimal-ui","icon":"src/images/logo3.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0e0cec6f0cfee4a2d1d2bce1ca7f94c7"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":700,"linkImagesToOriginal":true,"quality":90,"tracedSVG":{"color":"#7AA34B"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-180VVQY24J"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

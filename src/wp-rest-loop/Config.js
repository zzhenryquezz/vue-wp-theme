/*
* Get information of site from wordpress function wp_localize_script()
* WP function location: /includes/core/Enqueue.php
*/

export default {
  /*
  * Saving the Site Information
  */
  data: {
    debug: true,
    siteUrl:         wpDataSite.siteUrl, // getting site url
    siteName:        wpDataSite.siteName, // getting site name
    siteDescription: wpDataSite.siteDescription, // getting site description
    themeEndPoint:   wpDataSite.themeEndPoint, // getting site description
  },

  /**
  * @return The siteUrl + Json endPoint of site
  */

  get_EndPoint: function () {
    return this.data.siteUrl + "/wp-json/wp/v2/";
  },
  get_theme_endPoint: function () {

    let output = this.data.siteUrl;
    output += "/wp-json/";
    output += this.data.themeEndPoint;

    return output.toString();
  },

};

// Get information of site

const Config = {
  state: {
    siteUrl:         wpDataSite.siteUrl,
    siteName:        wpDataSite.siteName,
    siteDescription: wpDataSite.siteDescription,
  },
  get_EndPoint: function () {
    return this.state.siteUrl + "/wp-json/wp/v2/";
  }
};

export default Config;

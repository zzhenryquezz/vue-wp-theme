// Get information of site

const Config = {
  state: {
    siteName: DataSite.siteName
  },
  get_EndPoint: function() {
    return this.state.siteName + "/wp-json/wp/v2/";
  }
};

export default Config;

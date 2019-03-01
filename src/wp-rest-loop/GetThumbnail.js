/**
* Recive the Thumbnail
* @param  post [object][required]       - the post to get featured image
* @param  size [string][default="full"] - the size of image thumbnail, medium, full, customSize,...
* @return The link src of the featured Thumbnail
* @version 1.0.0
*/

import Config from "./Config";

const GetThumbnail = ( post = {}, size = 'full') => {
  // var Declatations
  let siteJSON = Config.get_EndPoint();
  let thubnail_src = '';
  let featured = post.featured_media;

  // Debug Messages
  if(featured == 0 || featured == undefined){
    if(Config.data.debug){
      console.warn('wp-loop: No Thumbnail or other issue');
    }
    return;
  }

  let endPoint = siteJSON + 'media/' + featured;

  /**
   * Filter the Posts with the args
   */
  var ourRequest = new XMLHttpRequest();

  ourRequest.open("GET", endPoint, false);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {

      var data = JSON.parse(ourRequest.responseText);
      thubnail_src = data.media_details.sizes[size].source_url;

    } else {
      if(Config.data.debug){
        console.log("We connected to the server, but it returned an error.");
      }
    }
  };

  ourRequest.onerror = function() {
    if(Config.data.debug){
      console.log("Connection error");
    }
  };

  ourRequest.send();

  let imgElement = document.createElement('img');
  imgElement.setAttribute("src", thubnail_src )

  return thubnail_src.toString();


  /**
   * Geting the Posts
   */
};

export default GetThumbnail;

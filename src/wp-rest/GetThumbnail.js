import Config from "./Config";

const GetThumbnail = ( post = {}, size = '') => {
  // var Declatations
  let siteJSON = Config.get_EndPoint();
  let thubnail_src = '';
  let featured = post.featured_media;

  if( featured == 0 || featured == undefined ){
    console.log('No Thumbnail or other issue');
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
      thubnail_src = data.media_details.sizes.full.source_url;

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

  let imgElement = document.createElement('img');
  imgElement.setAttribute("src", thubnail_src )
  console.log(typeof thubnail_src);
  return thubnail_src.toString();
  console.log(typeof thubnail_src);

  /**
   * Geting the Posts
   */
};

export default GetThumbnail;

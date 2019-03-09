/**
* Recive the Thumbnail
* @param  post [object][required]       - the post to get featured image
* @param  size [string][default="full"] - the size of image thumbnail, medium, full, customSize,...
* @return The link src of the featured Thumbnail
* @version 1.0.0
*/

import Config from "./Config";
import {SetRequest} from "./Request";

class getThumbnail
{

  constructor() {
    this.siteName = Config.get_EndPoint();
    this.methods = new SetRequest;
  }
  set_args(post){
    let args = {
      route: `media/${post.featured_media}`,
    };
    this.endPoint = this.siteName + 'media/' + post.featured_media;
  }
  
  get_thumbnail(size, get){

    return this.methods.request_object(this.endPoint); 
    
  }
}

const thumbnailClass = new getThumbnail;

const GetThumbnail = (post, get = true, size = 'full') => {
  thumbnailClass.set_args(post);

  return thumbnailClass.get_thumbnail()
  .then((response) => { 
    let object = JSON.parse(response);
    var output;
    if(get){
      output = object;
      return output;
    }
    output = object.media_details.sizes[size].source_url;
    return output;
  });
}

const Hasthumbnail = (post) => {
  if(post == undefined){
    console.log('WP-REST: post object is obrigatory');
    return false;
  }
  
  let featuredID = post.featured_media;

  if(featuredID == 0 || featuredID == undefined){
    if(Config.data.debug){
      console.warn('wp-loop: No Thumbnail or other issue');
    }
    return false;
  }
  return true;
}

export {GetThumbnail, Hasthumbnail};

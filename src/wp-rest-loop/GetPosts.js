/**
* Loop of Posts
* @param arg [object] - the arguments to receve the posts
* @return array of posts[]
* @version 1.0.0
*/

import Config from "./Config";

class SetPosts 
{
  
  constructor() {
    this.siteName = Config.get_EndPoint();
    this.endPoint = '';
  }

  set_endpoint(args) {

    this.set_filters(args);

  }

  set_filters(args){

    let endPoint = this.siteName;
    
    if (args.route !== undefined) {
      endPoint += args.route;
    }

    if(args.filters !== undefined){
      Object.keys(args.filters).forEach( arg => {
        if (arg !== undefined) {
          endPoint += `?${arg}=${args.filters[arg]}`;
        }
      });
    }

    this.endPoint = endPoint;

  }
  
  request_posts(url){
    let promise = new Promise(function (resolve, reject) {
      var ourRequest = new XMLHttpRequest();

      ourRequest.open("GET", url);
      ourRequest.onload = function () {
        resolve(this.responseText);
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
          var data = JSON.parse(ourRequest.responseText);
        } else {
          if(Config.data.debug){
            console.log("We connected to the server, but it returned an error.");
          }
        }

      };

      ourRequest.onerror = function () {
        if(Config.data.debug){
          console.log("Connection error");
        }
      }
      ourRequest.send();
    });

    return promise;
  }

}

const methods = new SetPosts;

const GetPosts = (args) => {
  
  methods.set_endpoint(args);

  return methods.request_posts(methods.endPoint).then((res) => {return JSON.parse(res)}); 
}

export default GetPosts;
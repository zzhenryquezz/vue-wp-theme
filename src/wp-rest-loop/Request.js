/**
* Loop of Posts
* @param arg [object] - the arguments to receve the posts
* @return array of posts[]
* @version 1.0.0
*/

import Config from "./Config";

export class SetRequest 
{
  
  constructor() {
    this.siteName = Config.get_EndPoint();
    this.endPoint = '';
  }

  set_endpoint(args, url) {

    this.set_filters(args, url);

  }

  set_filters(args){

    let endPoint = this.siteName;
    
    if (args.url !== undefined) {
      endPoint = args.url;
    }
    
    if (args.route !== undefined) {
      endPoint += args.route;
    }

    if(args.var !== undefined){
      Object.keys(args.var).forEach( arg => {
        if (arg !== undefined) {
          endPoint += `?${arg}=${args.var[arg]}`;
        }
      });
    }
    this.endPoint = endPoint;

  }
  
  request_object(url){
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

const methods = new SetRequest;

export const Request = (args = {}) => {
  
  methods.set_endpoint(args);

  return methods.request_object(methods.endPoint).then((res) => {return JSON.parse(res)}); 
}
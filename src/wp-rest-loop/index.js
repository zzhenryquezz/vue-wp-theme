/**
* Main file of aplication, just import this in your project to make all functions avaliable
* @return all function of aplication
*/
import GetPosts     from "./GetPosts";
import {GetThumbnail, Hasthumbnail} from "./GetThumbnail";
import GetMenu      from "./GetMenu";
import Config       from "./Config";
import Request     from "./Request";

export default {

  /**
  * @return The siteUrl + Json endPoint of site
  */
  methods:{
    get_endpoint:     Config.get_EndPoint,
    wp_rest_request:  Request,
    get_posts:        GetPosts,
    has_thumbnail:    Hasthumbnail,
    get_thumbnail:    GetThumbnail,
    get_menu_itens:   GetMenu,
  }
};

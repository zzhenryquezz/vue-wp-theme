/**
* Main file of aplication, just import this in your project to make all functions avaliable
* @return all function of aplication
*/
import GetPosts     from "./GetPosts";
import GetThumbnail from "./GetThumbnail";
import GetMenu      from "./GetMenu";
import Config       from "./Config";

export default {

  /**
  * @return The siteUrl + Json endPoint of site
  */
  methods:{
    get_endpoint:   Config.get_EndPoint(),
    get_posts:      GetPosts,
    get_thumbnail:  GetThumbnail,
    get_menu_itens: GetMenu,

  }
};

/**
* Send Menus and Links
* @param  menuLocation [string][default="menu"] - the menuLocation name of request
* @return [array] itens of menu with id, name adn url
* @version 1.0.0
*/

import Config from "./Config";

const GetMenu = (menuLocation = 'menu') => {

  let menuItens = [];

  // get Theme endpoint
  let themeEndPoint = Config.get_theme_endPoint();
  // Set Endpoint url of request
  let endPoint = themeEndPoint + menuLocation + '/itens';

  // the sincronis Request
  var ourRequest = new XMLHttpRequest();

  ourRequest.open("GET", endPoint, false);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {

      var data = JSON.parse(ourRequest.responseText);
      menuItens = data;

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

  return menuItens;

};

export default GetMenu;

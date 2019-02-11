import Config from "./Config";

const GetPosts = (args = { route: "posts", filters: {} }, endline = "") => {
  // var Declatations
  let siteName = Config.get_EndPoint();
  let filters = args.filters;
  let filters_slug = "";
  let posts = [];

  for (let arg in filters) {
    if (filters.hasOwnProperty(arg)) {
      if (arg == "per_page") {
        filters_slug += "?per_page=";
        filters_slug += filters[arg];
      }
      if (arg == "order") {
        if (filters[arg] === "desc" || filters[arg] === "asc") {
          filters_slug += "?order=";
          filters_slug += filters[arg];
        } else {
          console.error("Wrong args in Loop");
        }
      }

      if (arg == "orderby") {
        filters_slug += "?orderby=";
        filters_slug += filters[arg];
      }
      console.log(arg + " -> " + args[arg]);
    }
  }
  console.log(filters_slug);

  let endPoint = siteName + args.route + endline + filters_slug;

  console.log(endPoint);
  /**
   * Filter the Posts with the args
   */
  var ourRequest = new XMLHttpRequest();

  ourRequest.open("GET", endPoint, false);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var data = JSON.parse(ourRequest.responseText);
      posts = data;
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

  return posts;

  /**
   * Geting the Posts
   */
};

export default GetPosts;

# Vue Wp Theme

This is a Theme Worpress compatible with vue.js

**Important:** Still in beta.
## Featureds

1. Vue.js
2. Vuex
3. Webpack ready
4. Loop Wordpress in js
5. Vue js Global function loop worpdress

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1 - To the autload works you have to install the Browersinc Globaly in your machine.

```
npm i -g browersync
```

### Installing

1 - Clone or download the repository in your machine.

```
git clone git@github.com:zzhenryquezz/vue-wp-theme.git
```

1 - run the npm install and the composer install in root of your project.

```
npm install
```

```
componser install
```

2 - Open the webpack.config.js and change the host to your virtual host domail or directory.

```                
new BrowserSyncPlugin({
open: "external",
host: "type here your local domain",
files: ["**/*.php", "src/**/**/.vue", "assets/css/*.css"],
proxy: "local.warrior",
reloadDelay: 0
})
```

3 - Run npm start and test to see if is runing ok.
```
npm start
```


# Loop of Posts

This theme came with a plugin that works look like the worpdress loop.
Of couser still is not at the same level but with this you can get every data of the Wp Rest Api in any componet child of your project.

You can use the loop without vue.js too, just import the **index.js** file of wp-rest-loop folder in your progect. It is pure js so will work in the most of projects.

But remenber to change  the variable 'siteName' of the file because if you don't get the data with the wordpress files you can't get the loop to worck, just change to 'http://yoursitename//wp-json/wp/v2/' and should resolve this issue.


Functions of Aplication:

### Plugin vue:
* `this.$get_posts(args)`
* `this.$get_thubnail(post)`
* `this.$get_menu_itens()`

### Js Usage, remember to import the files.

* `GetPosts(args)`
* `GetThubnail(post)`

### Notes:

> The GetThubnail function must be used inside of a loop or with just one post object JSON

## End Notices

This a very early version and still have not complete and came have some bugs, but in the future i will update the repository and soon will be possible to use in true projects.


## Deployment

* version 1.0.2
    * Still nothing
* version 1.0.0
    * Still nothing

## Build With

- [Vue.js](https://vuejs.org/) - Vue Framework
- [Vuex](https://vuex.vuejs.org/) - Vuex to Mange the Store
- [Webpack](https://webpack.js.org/) - Used to Copilate files and auto-load
- [awps-sass](https://github.com/Alecaddd/awps) - Sass Folder of Alecadd theme

## Contributing

If you have some idea to make better some functionality of the theme or wanna make a fork, fell free to contribuite to the project, i will be gratiful.

## Versioning

* Version 1.0.1     - add $get_menu_itens function
  * Version 1.0.1   - add $get_thubnail function
  * Version 1.0.0   - release

## Authors

- **Henrique de Oliveira** - _Web Developer Wordpress_ - [Htron-dev](https://htron-dev.com)

## License

This project is licensed under the GPL License - see the [LICENSE.md](/LICENSE.md) file for details

## Acknowledgments

- A theme for Create Vuejs Wordpress themes Projects
- Inspiration is create a great wordpress the full reactivi,

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2019-03-9

### Added
- /src/wp-rest-loop/Request
- New Funcion $wp_rest_request(args, url) / Request(args, url) / wp_rest_request(args, url)
- New Funcion has_thumbnail(post) / has_thumbnail(post)

### Changed
- All requests functions are now asynchronous
  - See the wiki to know the new methods


## [1.0.2] - 2019-03-1

### Added
- Comments in Wp-rest-loop
- Folder struture wp-rest-loop have new files
- New Funcion $get_menu_itens()
  > Now if you want use the loop without the vue plugin just import the index.js to your project

### Changed
- Folder Rename: wp-rest/ to wp-rest-loop/
- File Rename: WpConfig.js to Wp-rest-loop.js
- Function Rename: $Get_posts() to $get_posts()
- Function Rename: $Get_thumbnail() to $get_thumbnail()


## [1.0.1] - 2019-02-11

### Added
- New Function: $Get_thumbnail
- Wp-rest Function: GetThumbnail.js
- Component: HomePage.vue
- Component: Footer.vue

### Changed
- Header.vue
- Exclude some files from sass folder to otimization

## [1.0.0] - 2019-02-10
### Release
- Release

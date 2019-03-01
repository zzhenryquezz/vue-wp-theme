<?php

namespace WP_Vue_Theme\wp_rest_api;

class NavMenu extends BaseControler
{
  public $menus = [];

  public function init(){
    add_action('rest_api_init', [ $this, 'register_routes']);
  }
  public function get_menu(){

    $output = [];
    $submenus = [];
    $i = 0;

    // get All menus Locations
    $allMenus = get_nav_menu_locations();
    // Get menu with id 'primary'
    $menuPrimary = $allMenus['primary'];
    // Get itens of $menu
    $itensMenu = wp_get_nav_menu_items($menuPrimary);

    foreach ($itensMenu as $item) {
      $this->menus[$i]['id'] = $item->ID ;
      $this->menus[$i]['object'] = $item->object;
      $this->menus[$i]['title'] = $item->title;
      $this->menus[$i]['url'] = $item->url;
      $this->menus[$i]['menu_order'] = $item->menu_order;
      $this->menus[$i]['is_dropdown_item'] = false;
      $this->menus[$i]['has_children'] = false;
      if($item->menu_item_parent !== "0"){
        $this->menus[$i]['is_dropdown_item'] = true;
        $this->menus[$i]['menu_item_parent'] = $item->menu_item_parent;
      }
      $i++;
    }
    /**
    * Get the Submenus
    */
    $i = 0;
    foreach ( $this->menus as $menu ){
      if($menu['is_dropdown_item']){
        $submenus[] = $menu;
        unset($this->menus[$i]); // remove submenu from normal list of menus
        $this->menus[$i+1]['menu_order']--; // fix and reorder the [menu_order]
      }
      $i++;
    }
    /**
    * Link Submentus to Parents Menus
    */
    $i = 0;
    foreach ($this->menus as $menu ) {
      foreach ($submenus as $submenu) {
        if( $menu['id'] == $submenu['menu_item_parent'] ){
          unset($submenu['menu_order']);
          $this->menus[$i]['has_children']      = true;
          $this->menus[$i]['dropdown_item'][]   = $submenu;
          // var_dump($menu);

        }
      }
      $i++;
    }
    // var_dump($this->menus);

    $output = $this->menus;

    // var_dump($output);

    return rest_ensure_response($output);
  }
  public function register_routes(){
    register_rest_route( $this->themeEndPoint .'menu', '/itens', array(
      'method' => 'GET',
      'callback' => [ $this, 'get_menu'],
    ));
  }
}

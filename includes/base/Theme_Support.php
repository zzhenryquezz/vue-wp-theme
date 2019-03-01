<?php

namespace WP_Vue_Theme\base;

class Theme_Support
{
  public function init(){
    add_action( 'after_setup_theme', array( $this, 'register_nav_menu') );
  }
  public function register_nav_menu(){
    register_nav_menu( 'primary', __( 'Primary Menu', 'vue-theme-wp' ) );
  }
}

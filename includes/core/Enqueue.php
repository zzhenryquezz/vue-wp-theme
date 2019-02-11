<?php

namespace WP_Vue_Theme\core;

class Enqueue
{
  public function init(){
    
    
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
  }
  public function enqueue(){
    $this->register();

    wp_enqueue_script('app-js');
  }
  
  public function register(){
    wp_register_script('app-js', get_template_directory_uri() . '/dist/main.js', array(), '1.0.0', true);
    
    wp_localize_script('app-js', 'wpDataSite', array(
      'siteUrl' => (string)get_site_url(),
      'siteName' => (string)get_bloginfo('name'),
      'siteDescription' => (string)get_bloginfo('description'),
    ));
  }
}

<?php

namespace WP_Vue_Theme\wp_rest_api;

class BaseControler
{

  public $themeName = '';
  public $themeEndPoint = '';
  public $version = 'v1';

  function __construct(){
    $my_theme = wp_get_theme();

    $this->themeName = $my_theme->get( 'TextDomain' );

    $this->themeEndPoint = $this->themeName . '/' . $this->version .'/';
  }

  public function init(){

  }
}

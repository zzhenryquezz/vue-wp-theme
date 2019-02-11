<?php

namespace WP_Vue_Theme;

final class Init
{
  /**
   * Store all clasess in an array
  */

  public static function get_services(){
    $classes =[
      core\Enqueue::class,
    ];

    return $classes;
  }
  /**
   * Loop the class and initialize thme
  */
  public static function register_services(){

    foreach ( self::get_services() as $class ) {
      $services = self::instantiate( $class );

      if( method_exists( $services, 'init' )  ){

        $services->init();

      }
    }
  }
  /**
   * initialize the classes
  */
  private static function instantiate( $class ){

    $services = new $class();
    return $services;

  }
}

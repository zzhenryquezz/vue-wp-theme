<?php

// require_once( get_template_directory() . '/includes/init.php');
if( file_exists( get_template_directory(). '/vendor/autoload.php' ) ){
    require_once get_template_directory() . '/vendor/autoload.php';
}

if( class_exists('WP_Vue_Theme\Init') ){
    WP_Vue_Theme\Init::register_services();
}


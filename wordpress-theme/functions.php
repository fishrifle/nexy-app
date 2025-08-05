<?php
function second_chance_theme_setup() {
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for custom logo
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'second_chance_theme_setup');

function second_chance_enqueue_styles() {
    wp_enqueue_style('second-chance-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'second_chance_enqueue_styles');

// Add widget functionality
function second_chance_widgets_init() {
    register_sidebar(array(
        'name'          => 'Sponsorship Widget Area',
        'id'            => 'sponsorship-widget',
        'description'   => 'Add your sponsorship widget here',
        'before_widget' => '<div class="widget-container">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'second_chance_widgets_init');

// Custom shortcode for sponsorship widget
function sponsorship_widget_shortcode($atts) {
    $atts = shortcode_atts(array(
        'amount' => '50',
        'currency' => '$',
        'frequency' => 'month'
    ), $atts);
    
    return '<div class="widget-content">
                <h4>Sponsor a Second Chance Developer</h4>
                <p>Help someone rebuild their life through code</p>
                <button>Sponsor Now - ' . $atts['currency'] . $atts['amount'] . '/' . $atts['frequency'] . '</button>
            </div>';
}
add_shortcode('sponsorship_widget', 'sponsorship_widget_shortcode');
?>
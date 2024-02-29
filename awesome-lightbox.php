<?php
/**
 * Plugin Name:       Awesome Lightbox
 * Description:       This plugin is allow to create the optimized video lightbox block.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            galaxyweblinks
 * Contributor: Rajat Sharma.
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       awesome-lightbox
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_awesome_lightbox_block_init() {
	register_block_type( __DIR__ . '/build/video-lightbox-block' );
}
add_action( 'init', 'create_block_awesome_lightbox_block_init' );

// Boilerplate - a prefix: change it as per yours

if ( ! function_exists( 'aws_register_block_category' ) ) {

	// WordPress version check and load filter for block category

	if ( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
		add_filter( 'block_categories', 'aws_register_block_category', 10, 2 );
	} else {
		add_filter( 'block_categories_all', 'aws_register_block_category', 10, 2 );
	}

	/**
	 * Register custom category for blocks.
	 *
	 * @param  [type] $categories
	 * @param  [type] $post
	 * @return void
	 */
	function aws_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'awesome-lightbox-category',
					'title' => __( 'Awesome Lightbox Blocks', 'awesome-lightbox' ),
				),
			),
			$categories,
		);
	}
}

/**
 * Enqueue Glightbox js.
 *
 * @return void
 */
function aws_enqueue_glightbox() {
	wp_enqueue_style( 'glightbox-css', 'https://cdn.jsdelivr.net/npm/glightbox@1.0.8/dist/css/glightbox.min.css' );

	// Enqueue gLightbox JS
	wp_enqueue_script( 'glightbox-js', 'https://cdn.jsdelivr.net/npm/glightbox@1.0.8/dist/js/glightbox.min.js', array(), null, true );
}

add_action( 'wp_enqueue_scripts', 'aws_enqueue_glightbox' );

/**
 * Added CSS and JS on wp head.
 *
 * @return void
 */
function awesome_glightbox_head_elements() { ?>
<style>.video-svg-btn {
	position: absolute;
	border: 7px solid #AD9966;
	border-radius: 100px;
	width: 100px;
	height: 100px;
	right: 0;
	left: 0;
	margin: 0 auto;
	top: 31%;
}

@media (max-width: 967px) {
	.video-svg-btn {
		top: 31%;
		max-width: 50px;
		max-height: 50px;
	}
}
.wp-block-awesome-lightbox-video-lightbox-block {
	position: relative;
}</style>
   <script type="module">
   const lightbox = new GLightbox({selector: "glightbox" });
   
   </script>
	<?php
}
add_action( 'wp_head', 'awesome_glightbox_head_elements' );

